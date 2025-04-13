import { DetailContentBox } from "@/components/MainContentBox";
import { ReactNode } from "react";
import doYouKnowImg from "@/public/main/doYouKnow.svg";
import struggling1 from "@/public/main/struggling1.svg";
import struggling2 from "@/public/main/struggling2.svg";
import struggling3 from "@/public/main/struggling3.svg";
import solveProblemImg from "@/public/main/solveProblem.svg";
import labuddy1 from "@/public/main/labuddy1.svg";
import labuddy2 from "@/public/main/labuddy2.svg";
import labuddy3 from "@/public/main/labuddy3.svg";
import mission from "@/public/main/mission.svg";
import line from "@/public/line.svg";
import Image, { StaticImageData } from "next/image";
export interface ContentItem {
  title: ReactNode;
  content: ReactNode;
  image: StaticImageData | null;
}

export const doYouKnowData: ContentItem = {
  title: <p>그거 아세요?</p>,
  content: (
    <p>
      연구보다 논문 읽는데 더 많은 시간을 쓰고 있다는 사실.
      <br />
      <br />
      연구자들은 필요한{" "}
      <span className="font-bold text-blue">시약/기구 정보</span>를 찾기 위해
      <br />
      매년 <span className="font-bold text-blue">수백 시간</span>을 논문 검색 및
      읽기에 소비하고 있습니다.
      <br />
      <br />이 시간을 절약하여 더 중요한 연구에 집중해야 하지 않을까요?
    </p>
  ),
  image: doYouKnowImg,
};

export const strugglingData: ContentItem = {
  title: <p>이런 점, 힘들지 않으셨나요?</p>,
  content: (
    <div className="flex flex-col w-full h-auto items-center gap-[40px] sm:gap-[80px] lg:gap-[100px]">
      <DetailContentBox
        className="flex-col md:flex-row "
        content={
          <p>
            논문에서 필요한 시약/기구 정보를 찾는데{" "}
            <span className="font-bold text-blue">
              시간이 너무 오래 걸린다.
            </span>
          </p>
        }
        img={struggling1}
      />
      <DetailContentBox
        className="flex-col md:flex-row-reverse"
        content={
          <p>
            논문에서 시약/기구{" "}
            <span className="font-bold text-blue">정보가 명확하지 않아</span>{" "}
            추가 검색이 필요하다.
          </p>
        }
        img={struggling2}
      />
      <DetailContentBox
        className="flex-col md:flex-row "
        content={
          <p>
            논문 속 시약/기구 정보가{" "}
            <span className="font-bold text-blue">
              브랜드 별로 정리되지 않아
            </span>{" "}
            혼란스럽다.
          </p>
        }
        img={struggling3}
      />
    </div>
  ),
  image: null,
};

export const solveProblemsData: ContentItem = {
  title: (
    <div>
      <div className="hidden sm:block">
        <p>이 모든 문제, 한 번에 해결하고 싶지 않으세요?</p>
      </div>
      <div className="block sm:hidden">
        <p className="text-base font-medium">이 모든 문제, </p>
        <p>한 번에 해결하고 싶지 않으세요?</p>
      </div>
    </div>
  ),
  content: (
    <div>
      <div className="block lg:hidden">
        <p>시약/기구 검색은 랩버디에 맡기고 </p>
        <p className="font-bold">연구에만 집중하세요!</p>
      </div>
      <p className="hidden lg:block">
        시약/기구 검색은 랩버디에 맡기고
        <span className="font-bold"> 연구에만 집중하세요!</span>
      </p>
    </div>
  ),
  image: solveProblemImg,
};

export const whyLabuddyData: ContentItem = {
  title: <p>랩버디를 사용하면 이런 점이 좋습니다</p>,
  content: (
    <div className="flex flex-col w-full h-auto items-center gap-[40px] sm:gap-[80px] lg:gap-[100px]">
      <DetailContentBox
        className="flex-col md:flex-row-reverse"
        content={
          <p>
            논문에서 <span className="font-bold text-blue">시약/기구 정보</span>
            를
            <br />
            빠르고 정확하게 추출합니다.
          </p>
        }
        img={labuddy1}
      />
      <Image
        alt=""
        src={line}
        className="h-[100px] md:h-[160px] md:-mt-20 md:-mb-20"
      />
      <DetailContentBox
        className="flex-col md:flex-row"
        content={
          <p>
            <span className="font-bold text-blue">브랜드 별로 정리</span>된
            <br />
            시약/기구 정보를 제공합니다.
          </p>
        }
        img={labuddy2}
      />
      <Image
        alt=""
        src={line}
        className="h-[100px] md:h-[160px] md:-mt-20 md:-mb-20"
      />
      <DetailContentBox
        className="flex-col md:flex-row-reverse"
        content={
          <p>
            시약/기구 <span className="font-bold text-blue">구매까지</span>
            <br />한 번에 연결해 드립니다.
          </p>
        }
        img={labuddy3}
      />
    </div>
  ),
  image: null,
};
/*
export const contentList: ContentItem[] = [
  {
    title: <p>그거 아세요?</p>,
    content: (
      <p>
        연구보다 논문 읽는데 더 많은 시간을 쓰고 있다는 사실.
        <br />
        연구자들은 필요한{" "}
        <span className="font-bold text-blue">시약/기구 정보</span>를 찾기 위해
        매년 <span className="font-bold text-blue">수백 시간</span>을 논문 검색
        및 읽기에 소비하고 있습니다.
        <br />이 시간을 절약하여 더 중요한 연구에 집중해야 하지 않을까요?
      </p>
    ),
  },
  {
    title: <p>Struggling with any of these?</p>,
    content: (
      <div className="flex sm:flex-row flex-col w-auto h-auto justify-center items-center gap-[40px] sm:gap-[80px] lg:gap-[100px]">
        <DetailContentBox
          title={<p>1. Takes too long</p>}
          content={<p>to find reagents and equipment in papers</p>}
          img={struggling1}
        />
        <DetailContentBox
          title={<p>2. Info is unclear</p>}
          content={<p>more searching needed</p>}
          img={struggling2}
        />
        <DetailContentBox
          title={<p>3. No brand-specific details</p>}
          content={<p>it gets confusing</p>}
          img={struggling3}
        />
      </div>
    ),
  },
  {
    title: <p>Want to solve all these problems at once?</p>,
    content: (
      <p>
        Let <span className="font-bold">LabBuddy</span> handle the reagent and
        equipment search,
        <br />
        <span className="font-bold">so you can focus on your research.</span>
      </p>
    ),
  },
  {
    title: <p>Why LabBuddy?</p>,
    content: (
      <div className="flex sm:flex-row flex-col w-auto h-auto justify-center items-center gap-[40px] sm:gap-[80px] lg:gap-[100px]">
        <DetailContentBox
          title={null}
          content={
            <p>
              Instantly extract from paper
              <br />
              <span className="font-bold">reagent and equipment info</span>
            </p>
          }
          img={labuddy1}
        />
        <DetailContentBox
          title={null}
          content={
            <p>
              Get details <span className="font-bold">organized by brand</span>
            </p>
          }
          img={labuddy2}
        />
        <DetailContentBox
          title={null}
          content={
            <p>
              Go from <span className="font-bold">reading to purchasing</span>
              <br />
              all in one place
            </p>
          }
          img={labuddy3}
        />
      </div>
    ),
  },
];
*/

export const ourMission: ContentItem = {
  title: <p>랩버디의 미션</p>,
  content: (
    <p>
      “우리는 연구자들이 연구에만 집중할 수 있도록 지원합니다.”
      <br />
      <br />
      불필요한 업무를 최소화하여
      <br />
      과학의 발전을 가속화하는 것이 우리의 목표입니다.
    </p>
  ),
  image: mission,
};

export const footer: ReactNode = (
  <div className="flex flex-col gap-[16px]">
    <p className="text-2xl md:text-4xl lg:text-5xl font-black">
      지금 바로 시작하세요!
    </p>
    <p>연구는 더 효율적으로, 시약/기구 찾기는 더 빠르게!</p>
  </div>
);
