import { Metadata } from "next";
import thumbnail from "@/public/meta.png";

const ogImageUrl = thumbnail.src;
const title = "Labbudy";
const description = "Extract Reagent & Equipment Info from Research Papers";

const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: ogImageUrl,
  },
  twitter: {
    title,
    description,
    images: ogImageUrl,
  },
};

export default metadata;
