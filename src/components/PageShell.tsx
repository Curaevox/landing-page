import { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PillBadge } from "@/components/ui/PillBadge";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { CtaBanner } from "@/components/CtaBanner";

type PageShellProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  showCta?: boolean;
};

function PageHero({ eyebrow, title, description, children }: Omit<PageShellProps, "showCta">) {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-[70px] lg:px-8 lg:py-[99px]">
      {eyebrow && (
        <div className="mb-[14px]">
          <PillBadge>{eyebrow}</PillBadge>
        </div>
      )}
      <h1 className="max-w-3xl font-display text-[40px] font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-[56px]">
        {title}
      </h1>
      {description && (
        <p className="mt-[21px] max-w-2xl text-[18px] leading-[1.5] text-muted">
          {description}
        </p>
      )}
      {children}
    </section>
  );
}

export function PageShell({
  eyebrow,
  title,
  description,
  children,
  showCta = true,
}: PageShellProps) {
  return (
    <>
      <Header />
      <main>
        <PageHero eyebrow={eyebrow} title={title} description={description}>
          {children}
        </PageHero>
        {showCta && <CtaBanner />}
      </main>
      <Footer />
    </>
  );
}

export function ProductPageShell({
  product,
  title,
  description,
  sections,
}: {
  product: string;
  title: string;
  description: string;
  sections: { id: string; title: string; body: string }[];
}) {
  return (
    <>
      <Header />
      <main>
        <PageHero eyebrow={product} title={title} description={description} />
        <section className="mx-auto max-w-[1200px] px-6 pb-[80px] lg:px-8">
          <div className="grid gap-[21px] lg:grid-cols-[220px_1fr]">
            <nav className="hidden lg:block">
              <p className="mb-3 text-[12px] tracking-[-0.36px] text-graphite">On this page</p>
              <ul className="space-y-2">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="text-[14px] text-charcoal hover:text-forest-ink">
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="space-y-[49px]">
              {sections.map((section) => (
                <article key={section.id} id={section.id} className="scroll-mt-28 rounded-[16px] bg-halo p-[35px]">
                  <h2 className="font-display text-[26px] font-semibold tracking-[-0.02em] text-ink">
                    {section.title}
                  </h2>
                  <p className="mt-[14px] text-[18px] leading-[1.5] text-muted">
                    {section.body}
                  </p>
                </article>
              ))}
              <PrimaryButton href="/" showArrow>
                Back to home
              </PrimaryButton>
            </div>
          </div>
        </section>
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
