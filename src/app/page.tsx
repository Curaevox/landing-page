import { HomeLayout } from "@/components/SiteLayout";
import { Hero } from "@/components/Hero";
import { Investors } from "@/components/Investors";
import { ClinicalSupport } from "@/components/ClinicalSupport";
import { Stats } from "@/components/Stats";
import { ProblemSolution } from "@/components/ProblemSolution";
import { WhyEase } from "@/components/WhyEase";
import { ProductSections } from "@/components/ProductSections";
import { CaseStudy } from "@/components/CaseStudy";
import { Compliance } from "@/components/Compliance";
import { About } from "@/components/About";
import { CtaBanner } from "@/components/CtaBanner";

export default function Home() {
  return (
    <HomeLayout>
      <Hero />
      <Investors />
      <ProblemSolution />
      <WhyEase />
      <ProductSections />
      <ClinicalSupport />
      <Stats />
      <CaseStudy />
      <Compliance />
      <About />
      <CtaBanner />
    </HomeLayout>
  );
}
