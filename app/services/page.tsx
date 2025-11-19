import dynamic from "next/dynamic";

export const metadata = {
  title: "Services - KMS Construction | Floor & Wall Tile Laying in Namakkal",
  description:
    "Comprehensive tile services: floor & wall tile laying, outdoor tiles, wholesale & retail, renovation, and waterproofing in Namakkal.",
};

const ServicesPageContent = dynamic(() => import("./ServicesPageContent"), {
  ssr: false,
});

export default function Services() {
  return <ServicesPageContent />;
}



