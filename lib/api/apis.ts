import { RecentLectureDTO } from "@lib/dto/recentLecture"
import { ReviewDetailDTO, ReviewDTO } from "@lib/dto/review"
import { LectureDTO } from "@lib/dto/core/lecture"
import { LectureSemesterDTO } from "@lib/dto/semeters"
import { GetTagInfosResult } from "../dto/getTagInfos"
import { GetLecturesQuery, GetLecturesResult } from "@lib/dto/getLectures"

export function fetchRecentReviews(): Promise<ReviewDTO[]> {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve([
          { id: "an", name: "최근 리뷰다 a", point: 1 },
          { id: "bn", name: "최근 리뷰다 b", point: 2 },
          { id: "cn", name: "최근 리뷰다 c", point: 3 },
        ]),
      3000,
    )
  })
}

export function fetchMyReviews(): Promise<ReviewDTO[]> {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve([
          { id: "am", name: "내 리뷰다 a", point: 1 },
          { id: "bm", name: "내 리뷰다 b", point: 2 },
          { id: "cm", name: "내 리뷰다 c", point: 3 },
        ]),
      3000,
    )
  })
}

export function fetchMainReviews(): Promise<ReviewDetailDTO[]> {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve([
          {
            id: "1",
            name: "편집디자인",
            point: 3,
            semester: "2021-1",
            contents: "짧은 리뷰",
          },
          {
            id: "2",
            name: "편집디자인",
            point: 3.25,
            semester: "2021-1",
            contents:
              "긴 리뷰. 강의평 내용을 입력하세요. 강의평 내용을 입력하세요. 강의평 내용을 입력하세요. 강의평 내용을 입력하세요. 강의평 내용을 입력하세요. 강의평 내용을 입력하세요. 강의평 내용을 입력하세요. 강의평 내용을 입력하세요.강의평 내용을 입력하세요. 강의평 내용을 입력하세요. 강의평 내용을 입력하세요. 강의평 내용을 입력하세요. 강의평 내용을 입력하세요. 강의평 내용을 입력하세요. 평 내용을 입력하세요. 강의평 내용을 입력하세요. 강의평 내용을 입력하세요. 강의평 내용을 입력하세요. 강의평 내용을 입력하세요. 강의평 내용을 입력하세요. 강의평 내용을 입력하세요. 강의평 내용을 입력하세요.강의평 내용을 입력하세요. 강의평 내용을 입력하세요. 강의평 내용을 입력하세요. 강의평 내용을 입력하세요. 강의평 내용을 입력하세요. 강의평 내용을 입력하세요. ",
          },
          {
            id: "3",
            name: "편집디자인",
            point: 4.75,
            semester: "2021-1",
            contents:
              "중간 리뷰. 강의평 내용을 입력하세요. 강의평 내용을 입력하세요. 강의평 내용을 입력하세요 ",
          },
          {
            id: "4",
            name: "편집디자인",
            point: 1.3,
            semester: "2021-1",
            contents: "짧은 리뷰",
          },
          {
            id: "5",
            name: "편집디자인",
            point: 1.2,
            semester: "2021-1",
            contents: "짧은 리뷰",
          },
        ]),
      1000,
    )
  })
}

export function fetchRecentLectures(): Promise<RecentLectureDTO[]> {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve([
          {
            id: "1",
            name: "소프트웨어 개발의 원리와 실습",
            department: "컴퓨터공학부",
            semester: "2021-2",
            grade: "3학년",
            lecturer: "최한결",
            location: "301-314",
          },
          {
            id: "2",
            name: "편집디자인",
            department: "디자인학부(디자인전공)",
            semester: "2021-2",
            grade: "3학년",
            lecturer: "서정민",
            location: "ㅇㅓ디지",
          },
          {
            id: "3",
            name: "데이터사이언티스트를 위한 금융공학",
            semester: "2021-2",
            department: "데이터사이언스대학원",
            grade: "석사",
            lecturer: "서정록",
            location: "123-4",
          },
        ]),
      1000,
    )
  })
}

export function fetchTagInfos(): Promise<GetTagInfosResult> {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          results: [
            {
              tags: [
                { name: "태그A1", id: 101 },
                { name: "태그A2", id: 102 },
              ],
              tagGroup: { name: "태그그룹A", id: 1 },
            },
            {
              tags: [
                { name: "태그B1", id: 201 },
                { name: "태그B2", id: 202 },
              ],
              tagGroup: { name: "태그그룹B", id: 2 },
            },
            {
              tags: [
                { name: "태그C1", id: 301 },
                { name: "태그C2", id: 302 },
              ],
              tagGroup: { name: "태그그룹C", id: 3 },
            },
          ],
        }),
      1000,
    )
  })
}

export function fetchLectureSemesters(): Promise<LectureSemesterDTO[]> {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve([
          {
            id: "1",
            name: "소프트웨어 개발의 원리와 실습",
            semester: "2022-1",
            lecturer: "최한결",
          },
          {
            id: "2",
            name: "소프트웨어 개발의 원리와 실습",
            semester: "2021-겨울",
            lecturer: "최한결",
          },
          {
            id: "3",
            name: "소프트웨어 개발의 원리와 실습",
            semester: "2021-2",
            lecturer: "최한결",
          },
          {
            id: "4",
            name: "소프트웨어 개발의 원리와 실습",
            semester: "2020-2",
            lecturer: "최한결",
          },
          {
            id: "5",
            name: "소프트웨어 개발의 원리와 실습",
            semester: "2019-2",
            lecturer: "최한결",
          },
          {
            id: "6",
            name: "소프트웨어 개발의 원리와 실습",
            semester: "2018-2",
            lecturer: "최한결",
          },
          {
            id: "7",
            name: "소프트웨어 개발의 원리와 실습",
            semester: "2017-2",
            lecturer: "최한결",
          },
          {
            id: "8",
            name: "소프트웨어 개발의 원리와 실습",
            semester: "2016-2",
            lecturer: "최한결",
          },
        ]),
      1000,
    )
  })
}

export function fetchLectureReviews(): Promise<ReviewDetailDTO[]> {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve([
          {
            id: "1",
            name: "편집디자인",
            point: 3,
            semester: "2021-1",
            contents: "짧은 리뷰",
          },
          {
            id: "2",
            name: "편집디자인",
            point: 4,
            semester: "2021-1",
            contents:
              "긴 리뷰. 강의평 내용을 입력하세요. 강의평 내용을 입력하세요. 강의평 내용을 입력하세요. 강의평 내용을 입력하세요. 강의평 내용을 입력하세요. 강의평 내용을 입력하세요. 강의평 내용을 입력하세요. 강의평 내용을 입력하세요.강의평 내용을 입력하세요. 강의평 내용을 입력하세요. 강의평 내용을 입력하세요. 강의평 내용을 입력하세요. 강의평 내용을 입력하세요. 강의평 내용을 입력하세요. 평 내용을 입력하세요. 강의평 내용을 입력하세요. 강의평 내용을 입력하세요. 강의평 내용을 입력하세요. 강의평 내용을 입력하세요. 강의평 내용을 입력하세요. 강의평 내용을 입력하세요. 강의평 내용을 입력하세요.강의평 내용을 입력하세요. 강의평 내용을 입력하세요. 강의평 내용을 입력하세요. 강의평 내용을 입력하세요. 강의평 내용을 입력하세요. 강의평 내용을 입력하세요. ",
          },
          {
            id: "3",
            name: "편집디자인",
            point: 5,
            semester: "2021-1",
            contents:
              "중간 리뷰. 강의평 내용을 입력하세요. 강의평 내용을 입력하세요. 강의평 내용을 입력하세요 ",
          },
          {
            id: "4",
            name: "편집디자인",
            point: 1,
            semester: "2021-1",
            contents: "짧은 리뷰",
          },
          {
            id: "5",
            name: "편집디자인",
            point: 2,
            semester: "2021-1",
            contents: "짧은 리뷰",
          },
        ]),
      500,
    )
  })
}

export function getLectures(
  query: GetLecturesQuery,
): Promise<GetLecturesResult> {
  return new Promise((resolve) =>
    setTimeout(() => {
      const next = query.page + 1
      resolve({
        content: [
          {
            classification: "string",
            department: "string",
            academic_year: "string",
            course_number: "string",
            title: `string query of ${query.tags}`,
            credit: 3,
            instructor: "asdf",
            category: "asdf",
            rating: 4,
          },
        ],
        next_page: next > 30 ? undefined : next,
      })
    }, 500),
  )
}
