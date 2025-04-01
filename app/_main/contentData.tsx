import { ReactNode } from "react";

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
      <p>
        1. <span className="font-bold">Takes too long</span> to find reagents
        and equipment in papers
        <br />
        2. <span className="font-bold">Info is unclear</span> — more searching
        needed
        <br />
        3. <span className="font-bold">No brand-specific details</span> — it
        gets confusing
      </p>
    ),
  },
  {
    title: <p>Want to solve all these problems at once?</p>,
    content: (
      <p>
        Let <span className="font-bold">LabBuddy</span> handle the reagent and
        equipment search — so you can focus on your research.
      </p>
    ),
  },
  {
    title: <p>Why LabBuddy?</p>,
    content: (
      <p>
        1. Instantly extract reagent and equipment info from papers
        <br />
        2. Get details organized by brand
        <br />
        3. Go from reading to purchasing — all in one place
      </p>
    ),
  },
];

export const ourMission: ContentItem = {
  title: <p className="text-xl font-semibold">Our Mission</p>,
  content: (
    <p className="text-lg font-semibold">
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
