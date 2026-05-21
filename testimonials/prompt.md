You are given a task to integrate an existing React component in the codebase

The codebase should support:
- shadcn project structure  
- Tailwind CSS
- Typescript

If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.

Determine the default path for components and styles. 
If default path for components is not /components/ui, provide instructions on why it's important to create this folder
Copy-paste this component to /components/ui folder:
```tsx
testimonial.tsx
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface TestimonialProps extends React.HTMLAttributes<HTMLDivElement> {
  companyLogo?: string;
  quote: string;
  authorName: string;
  authorPosition: string;
  authorImage?: string;
  highlightedText?: string;
}

export const Testimonial = React.forwardRef<HTMLDivElement, TestimonialProps>(
  ({ 
    className, 
    companyLogo,
    quote,
    authorName,
    authorPosition,
    authorImage,
    highlightedText,
    ...props 
  }, ref) => {
    const formattedQuote = highlightedText
      ? quote.replace(
          highlightedText,
          `<strong class="font-semibold">${highlightedText}</strong>`
        )
      : quote;

    return (
      <div
        ref={ref}
        className={cn("py-16", className)}
        {...props}
      >
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col items-center">
            {companyLogo && (
              <div className="mb-7 relative h-8 w-32">
                <Image
                  src={companyLogo}
                  alt="Company logo"
                  fill
                  className="object-contain"
                />
              </div>
            )}
            <p 
              className="max-w-xl text-balance text-center text-xl sm:text-2xl text-foreground"
              dangerouslySetInnerHTML={{ __html: `"${formattedQuote}"` }}
            />
            <h5 className="mt-5 font-medium text-muted-foreground">
              {authorName}
            </h5>
            <h5 className="mt-1.5 font-medium text-foreground/40">
              {authorPosition}
            </h5>
            {authorImage && (
              <div className="mt-5 relative size-12 rounded-full overflow-hidden bg-muted">
                <Image
                  src={authorImage}
                  alt={authorName}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);

Testimonial.displayName = "Testimonial";

demo.tsx
"use client";

import { Testimonial } from "@/components/ui/testimonial";

export function TestimonialDemo() {
  return (
    <Testimonial
      companyLogo="https://assets.rapidui.dev/testimonials/companies/vercel.svg"
      quote="Webtics delivers powerful insights that turn complex data into actionable decisions"
      highlightedText="Webtics"
      authorName="Guillermo Rauch"
      authorPosition="CEO, Vercel"
      authorImage="https://assets.rapidui.dev/testimonials/people/guillermo-rauch.webp"
    />
  );
}
```

Implementation Guidelines
 1. Analyze the component structure and identify all required dependencies
 2. Review the component's argumens and state
 3. Identify any required context providers or hooks and install them
 4. Questions to Ask
 - What data/props will be passed to this component?
 - Are there any specific state management requirements?
 - Are there any required assets (images, icons, etc.)?
 - What is the expected responsive behavior?
 - What is the best place to use this component in the app?

Steps to integrate
 0. Copy paste all the code above in the correct directories
 1. Install external dependencies
 2. Fill image assets with Unsplash stock images you know exist
 3. Use lucide-react icons for svgs or logos if component requires them