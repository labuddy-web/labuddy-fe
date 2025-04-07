import { DetailContentBox } from "@/components/MainContentBox";
import { ReactNode } from "react";
import struggling1 from "@/public/main/struggling1.svg";
import struggling2 from "@/public/main/struggling2.svg";
import struggling3 from "@/public/main/struggling3.svg";
import labuddy1 from "@/public/main/labuddy1.svg";
import labuddy2 from "@/public/main/labuddy2.svg";
import labuddy3 from "@/public/main/labuddy3.svg";
interface ContentItem {
  title: ReactNode;
  content: ReactNode;
}

export const contentList: ContentItem[] = [
  {
    title: <p>Did you know?</p>,
    content: (
      <p>
        Researchers spend more time reading papers than actually doing research.
        <br />
        Every year, scientists spend{" "}
        <span className="font-bold">hundreds of hours</span> searching and
        reading papers just{" "}
        <span className="font-bold">to find the reagents and equipment</span>{" "}
        they need.
        <br />
        Wouldn&apos;t it be better to save that time and{" "}
        <span className="font-bold">focus on what really matters</span>—your
        research?
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

export const ourMission: ContentItem = {
  title: <p className="font-semibold">Our Mission</p>,
  content: (
    <p className="font-semibold">
      We empower researchers to focus on what matters — their research.
      <br />
      By minimizing unnecessary tasks, we aim to accelerate scientific progress.
    </p>
  ),
};

export const footer: ReactNode = (
  <p>
    Get Started Now
    <br />
    Research smarter. Find reagents and equipment faster.
  </p>
);
