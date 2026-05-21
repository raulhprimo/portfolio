"use client";

import { AboutMoments } from "@/components/about-moments";
import { FeaturedWorks } from "@/components/featured-works";
import { TestimonialsSection } from "@/components/testimonials-section";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Markdown from "react-markdown";
import { useLanguage } from "@/components/language-provider";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const { t } = useLanguage();
  const workItems = DATA.work.map((work, index) => ({
    ...work,
    ...t.work[index],
  }));
  const educationItems = DATA.education.map((education, index) => ({
    ...education,
    ...t.education[index],
  }));
  const projectItems = DATA.projects.map((project, index) => {
    const translatedProject = t.projects_items[index];

    return {
      ...project,
      ...translatedProject,
      links: project.links?.map((link, linkIndex) => ({
        ...link,
        type: translatedProject?.links?.[linkIndex]?.type ?? link.type,
      })),
    };
  });
  const appWorkItems = DATA.appWorks.map((app, index) => ({
    ...app,
    ...t.app_works[index],
  }));
  const landingWorkItems = DATA.landingWorks.map((landing, index) => ({
    ...landing,
    ...t.landing_works[index],
  }));
  const hackathonItems = DATA.hackathons.map((hackathon, index) => ({
    ...hackathon,
    ...t.hackathons[index],
  }));

  return (
    <main className="flex min-h-[100dvh] flex-col gap-y-10">
      <section id="hero" className="pt-16">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={t.hero_greeting}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={t.description || DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">{t.about_title}</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {t.summary || DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">{t.work_title}</h2>
          </BlurFade>
          {workItems.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? t.present_label}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">{t.education_title}</h2>
          </BlurFade>
          {educationItems.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="projects">
        <div className="w-full pb-0 pt-8">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <FeaturedWorks
              webWorks={projectItems}
              appWorks={appWorkItems}
              landingWorks={landingWorkItems}
              labels={{
                eyebrow: t.projects_title,
                webTitle: t.projects_web_title,
                appTitle: t.projects_app_title,
                appEyebrow: t.projects_app_eyebrow,
                landingTitle: t.projects_landing_title,
                landingEyebrow: t.projects_landing_eyebrow,
                webWorkLabel: t.projects_web_work_label,
                landingPlaceholder: t.projects_landing_placeholder,
                description: t.projects_description,
              }}
            />
          </BlurFade>
        </div>
      </section>
      <section id="hackathons" className="pt-20">
        <div className="w-full pb-12 pt-0">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <AboutMoments
              title={t.hackathons_title}
              subtitle={t.hackathons_subtitle}
              description={t.hackathons_description}
              moments={hackathonItems}
            />
          </BlurFade>
        </div>
      </section>
      <section id="testimonials" className="pt-16 hidden">
        <BlurFade delay={BLUR_FADE_DELAY * 14}>
          <TestimonialsSection
            eyebrow={t.testimonials_eyebrow}
            title={t.testimonials_title}
            description={t.testimonials_description}
            testimonials={[]}
            cta={{
              title: t.testimonials_cta_title,
              subtitle: t.testimonials_cta_subtitle,
              namePlaceholder: t.testimonials_name_placeholder,
              companyPlaceholder: t.testimonials_company_placeholder,
              messagePlaceholder: t.testimonials_message_placeholder,
              submitLabel: t.testimonials_submit_label,
              successTitle: t.testimonials_success_title,
              successMessage: t.testimonials_success_message,
              ratingLabel: t.testimonials_rating_label,
            }}
          />
        </BlurFade>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                {t.contact_title}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {t.contact_subtitle}
              </h2>
              <Markdown className="prose mx-auto max-w-[600px] text-muted-foreground prose-a:text-foreground prose-a:underline prose-a:underline-offset-4 dark:prose-invert md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t.contact_description?.replace(
                  "{linkedin_url}",
                  DATA.contact.social.LinkedIn.url
                ) ||
                  "Want to chat? Just shoot me a dm on LinkedIn and I'll respond whenever I can."}
              </Markdown>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
