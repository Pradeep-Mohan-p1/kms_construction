import dynamic from "next/dynamic";

export const metadata = {
  title: "About Us - KMS Construction | Tile Laying Experts in Namakkal",
  description:
    "Learn about KMS Construction's 15+ years of experience in tile laying, our mission, values, and commitment to quality in Namakkal.",
};

const AboutPageContent = dynamic(() => import("./AboutPageContent"), {
  ssr: false,
});

export default function About() {
  return <AboutPageContent />;
}

