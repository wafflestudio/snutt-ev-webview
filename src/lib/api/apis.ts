import { DeleteEvaluationResult } from '@/lib/dto/deleteEvaluation';
import { GetEmailVerificationResult } from '@/lib/dto/getEmailVerification';
import {
  GetEvaluationsQuery,
  GetEvaluationsResult,
  GetMyEvaluationsResult,
} from '@/lib/dto/getEvaluations';
import { GetEvaluationSummaryResponse } from '@/lib/dto/getEvaluationSummary';
import { GetLatestLecturesResult } from '@/lib/dto/getLatestLectures';
import { GetLecturesQuery, GetLecturesResult } from '@/lib/dto/getLectures';
import {
  GetMainTagEvaluationsResult,
  GetMainTagEvalutionsQuery,
} from '@/lib/dto/getMainTagEvaluations';
import { GetMainTagInfosResult } from '@/lib/dto/getMainTagInfos';
import { GetSemesterLecturesResult } from '@/lib/dto/getSemesterLectures';
import {
  PostEmailVerificationCodeParams,
  PostEmailVerificationCodeResult,
} from '@/lib/dto/PostEmailVerification';
import {
  PostEmailVerificationParams,
  PostEmailVerificationResult,
} from '@/lib/dto/PostEmailVerification';
import {
  PostEvaluationQuery,
  PostEvaluationResult,
} from '@/lib/dto/postEvaluation';
import {
  PostReportEvaluationParams,
  PostReportEvaluationResult,
} from '@/lib/dto/postReportEvaluation';

import { GetTagInfosProcessedResult } from '../dto/getTagInfos';
import { coreClient, evClient } from './request';

// 지난 학기 들은 강의 목록 불러오는 api
export async function fetchLatestLectures() {
  const endpoint = `v1/users/me/lectures/latest`;
  const response = await evClient.get<GetLatestLecturesResult>(endpoint);
  return response.data;
}

// 검색 시 필요한 태그 목록 불러오는 api
export async function fetchTagInfos() {
  const endpoint = `/v1/tags/search`;
  const response = await evClient.get<GetTagInfosProcessedResult>(endpoint);
  return response.data;
}

// 강의평 생성 시 해당 강의 정보 및 해당 강의의 과거 개설 학기들 불러오는 api
export async function fetchSemesterLectures(id: number) {
  const endpoint = `/v1/lectures/${id}/semester-lectures`;
  const response = await evClient.get<GetSemesterLecturesResult>(endpoint);
  return response.data;
}

// 강의평 생성 api
export async function postLectureEvaluation(
  id: number,
  body: PostEvaluationQuery,
) {
  const endpoint = `/v1/semester-lectures/${id}/evaluations`;
  const response = await evClient.post<PostEvaluationResult>(endpoint, body);
  return response.data;
}

// 강좌의 강의평 목록 api
export async function fetchLectureEvaluations(
  id: number,
  params: GetEvaluationsQuery,
) {
  const endpoint = `v1/lectures/${id}/evaluations`;
  const response = await evClient.get<GetEvaluationsResult>(endpoint, {
    params,
  });
  return response.data;
}

export async function fetchMyLectureEvaluations(id: number) {
  const endpoint = `/v1/lectures/${id}/evaluations/users/me`;
  const response = await evClient.get<GetMyEvaluationsResult>(endpoint);
  return response.data;
}

export async function fetchEvaluationSummary(id: number) {
  const endpoint = `/v1/lectures/${id}/evaluation-summary`;
  const response = await evClient.get<GetEvaluationSummaryResponse>(endpoint);
  return response.data;
}

export async function getLectures(query: GetLecturesQuery) {
  const endpoint = `/v1/lectures`;
  const params = { ...query, tags: query.tags.join(',') };
  const response = await evClient.get<GetLecturesResult>(endpoint, { params });
  return response.data;
}

export async function getMainTagInfos() {
  const endpoint = `/v1/tags/main`;
  const response = await evClient.get<GetMainTagInfosResult>(endpoint);
  return response.data;
}

export async function getMainTagEvaluations(
  id: number,
  params: GetMainTagEvalutionsQuery,
) {
  const endpoint = `/v1/tags/main/${id}/evaluations`;
  const response = await evClient.get<GetMainTagEvaluationsResult>(endpoint, {
    params,
  });
  return response.data;
}

export async function deleteEvaluation(id: number) {
  const endpoint = `/v1/evaluations/${id}`;
  const response = await evClient.delete<DeleteEvaluationResult>(endpoint);
  return response.data;
}

export async function postReportEvaluation(
  id: number,
  body: PostReportEvaluationParams,
) {
  const endpoint = `/v1/evaluations/${id}/report`;
  const response = await evClient.post<PostReportEvaluationResult>(
    endpoint,
    body,
  );
  return response.data;
}

export async function getEmailVerification(): Promise<GetEmailVerificationResult> {
  const endpoint = `/v1/user/email/verification`;
  const response = await coreClient.get<GetEmailVerificationResult>(endpoint);
  return response.data;
}

export async function postEmailVerification(body: PostEmailVerificationParams) {
  const endpoint = `/v1/user/email/verification`;
  const response = await coreClient.post<PostEmailVerificationResult>(
    endpoint,
    body,
  );
  return response.data;
}

export async function postEmailVerificationCode(
  body: PostEmailVerificationCodeParams,
) {
  const endpoint = `/v1/user/email/verification/code`;
  const response = await coreClient.post<PostEmailVerificationCodeResult>(
    endpoint,
    body,
  );
  return response.data;
}
