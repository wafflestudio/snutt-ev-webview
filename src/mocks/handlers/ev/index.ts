import { rest } from 'msw';

import {
  GetLatestLecturesResult,
  GetMainTagEvaluationsResult,
  GetMainTagInfosResult,
  GetSemesterLecturesResult,
  ListMyEvaluationsResponse,
} from '@/lib/apis/ev/types';

import {
  mockLatestLectures,
  mockMainEvaluations,
  mockMainTags,
  mockMyEvaluations,
  mockSemesterLectures,
} from './fixtures';

const getPaginatedResult = <T extends { id: number }>(
  baseContents: T[],
  cursor?: string,
  options?: { maxPage?: number },
) => {
  const _cursor = Number(cursor ?? 0);
  const size = baseContents.length;
  const MAX_PAGE = options?.maxPage ?? 4;
  const total_count = MAX_PAGE * size;
  const isLastPage = _cursor >= (MAX_PAGE - 1) * size;
  const content = baseContents.map((ev) => ({
    ...ev,
    id: ev.id + _cursor,
  }));

  return { content, cursor: isLastPage ? null : `${_cursor + size}`, size, last: isLastPage, total_count };
};

export const evHandlers = [
  rest.get<never, never, GetLatestLecturesResult>('*/v1/users/me/lectures/latest', (req, res, ctx) => {
    const { TEST_RECENT_LECTURES_EXIST = 'true' } = req.cookies;

    switch (TEST_RECENT_LECTURES_EXIST) {
      case 'true':
        return res(ctx.json(mockLatestLectures));
      case 'false':
        return res(ctx.json({ content: [], total_count: 0 }));
    }
  }),

  rest.get<never, never, GetMainTagInfosResult>(`*/v1/tags/main`, (req, res, ctx) => {
    return res(ctx.json(mockMainTags));
  }),

  rest.get<never, { tagId: string }, GetMainTagEvaluationsResult>(
    `*/v1/tags/main/:tagId/evaluations`,
    (req, res, ctx) => {
      const { TEST_MAIN_EVALUATION_EXIST = 'true' } = req.cookies;
      if (TEST_MAIN_EVALUATION_EXIST === 'false') return res(ctx.json({ content: [], cursor: null }));

      const paginatedResult = getPaginatedResult(mockMainEvaluations, req.url.searchParams.get('cursor') ?? undefined);

      return res(ctx.json(paginatedResult));
    },
  ),

  rest.get<never, { lectureId: string }, GetSemesterLecturesResult>(
    `*/v1/lectures/:lectureId/semester-lectures`,
    (req, res, ctx) => {
      return res(ctx.json(mockSemesterLectures));
    },
  ),

  rest.get<never, never, ListMyEvaluationsResponse>(`*/v1/evaluations/users/me`, (req, res, ctx) => {
    const { TEST_MY_EVALUATION_EXIST = 'true' } = req.cookies;
    if (TEST_MY_EVALUATION_EXIST === 'false')
      return res(ctx.json({ content: [], cursor: null, size: 20, last: true, total_count: 0 }));

    const paginatedResult = getPaginatedResult(mockMyEvaluations, req.url.searchParams.get('cursor') ?? undefined);

    return res(ctx.json(paginatedResult));
  }),
];
