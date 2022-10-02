import styled from '@emotion/styled';
import { ToggleButton, ToggleButtonGroup } from '@mui/material/';
import Link from 'next/link';
import { Fragment } from 'react';

import SvgChevron from '@/lib/components/Icons/SvgChevronRight';
import { EmptyReviewPlaceholder } from '@/lib/components/Miscellaneous/EmptyReviewPlaceholder';
import { SearchResultLoading } from '@/lib/components/Miscellaneous/Loading';
import { Subheading02, Title01 } from '@/lib/components/Text';
import useScrollLoader from '@/lib/hooks/useScrollLoader';
import { APP_ENV } from '@/lib/util/env';

import { EvaluationCard, MainAppBar, RecentCarousel } from './__components__';
import { useSelectTag } from './__containers__';
import { useEvaluations, useLatestLectures, useMainTags } from './__queries__';

export const MainImpl = () => {
  const { data: mainTags } = useMainTags();
  const { data: latestLectures } = useLatestLectures();

  const recommendationTags = mainTags?.tags ?? [];

  const { selectedTagId, onClickTag } = useSelectTag(recommendationTags);

  const { data: searchResult, fetchNextPage, isFetchingNextPage, hasNextPage } = useEvaluations(selectedTagId);

  const { loaderRef } = useScrollLoader(fetchNextPage);

  const recentLectureData = latestLectures?.content;
  const selectedTag = recommendationTags.find((tag) => tag.id === selectedTagId);

  return (
    <Wrapper>
      <MainAppBar />

      {recentLectureData && recentLectureData.length > 0 && <RecentCarousel lectureList={recentLectureData} />}

      <CategoryPicker data-testid="main-category-picker">
        <CategoryPickerTitleWrapper>
          <CategoryPickerTitle>강의평 둘러보기</CategoryPickerTitle>
          {
            // TODO: feature flag
            APP_ENV !== 'prod' && (
              <Link passHref href={'/me/evaluations'}>
                <CategoryPickerLink as="a" data-testid="main-my-evaluations-link">
                  내가 남긴 강의평 <SvgChevron />
                </CategoryPickerLink>
              </Link>
            )
          }
        </CategoryPickerTitleWrapper>
        <StyledToggleButtonGroup
          value={selectedTagId}
          exclusive
          onChange={(e, tagId) => {
            if (tagId === null) return;
            onClickTag(tagId);
          }}
        >
          {recommendationTags.map(({ id, name }) => (
            <ToggleButton
              value={id}
              key={id}
              style={{ whiteSpace: 'nowrap', marginTop: '6px' }}
              data-testid="main-category-toggle-chip"
              aria-selected={id === selectedTagId}
            >
              {name}
            </ToggleButton>
          ))}
        </StyledToggleButtonGroup>
        <CategoryDetail data-testid="main-category-detail">{selectedTag?.description}</CategoryDetail>
      </CategoryPicker>

      {searchResult?.pages ? (
        searchResult?.pages[0].content.length === 0 ? (
          <EmptyReviewPlaceholder data-testid="main-empty-review" />
        ) : (
          <>
            {searchResult?.pages?.map((content, i) => (
              <Fragment key={i}>
                {content.content.map((it) => (
                  <EvaluationCard evaluation={it} key={it.id} />
                ))}
              </Fragment>
            ))}
            {hasNextPage && !isFetchingNextPage && <div ref={loaderRef} />}
            {isFetchingNextPage && <SearchResultLoading />}
          </>
        )
      ) : (
        <SearchResultLoading />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const CategoryPicker = styled.div`
  padding: 20px 20px 0 20px;
  position: sticky;
  top: 45px;
  background-color: white;
  z-index: 50;
`;

const CategoryDetail = styled(Subheading02)`
  margin-top: 10px;
  padding-bottom: 10px;
  color: rgb(119, 119, 119);
`;

const StyledToggleButtonGroup = styled(ToggleButtonGroup)`
  flex-wrap: wrap;

  & .MuiToggleButtonGroup-grouped {
    margin-right: 10px;
    border: 0;
    &.Mui-disabled {
      border: 1px solid #777777;
      height: 30px;
    }
    &.Mui-selected {
      border: 1px solid #777777;
      background-color: rgb(119, 119, 119, 1);
      color: #ffffff;
    }
    &:not(:first-of-type) {
      border: 1px solid #777777;
      border-radius: 15px;
      height: 30px;
    }
    &:first-of-type {
      border: 1px solid #777777;
      border-radius: 15px;
      height: 30px;
    }
    &.Mui-selected:hover {
      border: 1px solid #777777;
      background-color: #777777;
      color: #ffffff;
    }
  }
`;

const CategoryPickerTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
`;

const CategoryPickerTitle = styled(Title01)`
  margin: 0;
`;

const CategoryPickerLink = styled(Subheading02)`
  color: #777777;
  text-decoration: none;
`;
