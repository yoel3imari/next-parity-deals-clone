import { Button } from "@/components/ui/button";
import { SignUpButton } from "@clerk/nextjs";
import { ArrowRightIcon, CheckIcon } from "lucide-react";
import Link from "next/link";
import { NeonLogo } from "./_icons/NeonLogo";
import { ClerkLogo } from "./_icons/ClerkLogo";
import { subscriptionTiersInOrder } from "@/data/subscriptionTiers";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatCompactNumber } from "@/lib/formatters";
import { ReactNode } from "react";
import { cn } from "../../lib/utils";
import BrandLogo from "@/components/BrandLogo";

export default function HomePage() {
  return (
    <>
      {/* bg-[radial-gradient(hsl(0,72%,65%,40%),hsl(var(--background))_60%)] */}
      <section className="min-h-screen  flex items-center justify-center text-center text-balance flex-col gap-8 px-4 bg-[radial-gradient(hsl(0,72%,64%,40%),hsl(var(--background))_60%)]">
        <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight m-4">
          Price Smarter, Sell Bigger!
        </h1>
        <p className="text-lg lg:text-3xl max-w-screen-xl ">
          Optimize your product pricing across countries to maximize sales.
          Capture 85% of the untapped market with location-based dynamic
          pricing.
        </p>
        <SignUpButton>
          <Button className="text-lg p-6 rounded-xl flex gap-2 ">
            Get Sarted for Free <ArrowRightIcon className="size-5" />{" "}
          </Button>
        </SignUpButton>
      </section>

      <section className="bg-primary text-primary-foreground ">
        <div className="container py-16 flex flex-col gap-16 px-8 md:px-16">
          <h2 className="text-3xl text-center text-balance">
            Trusted by the top modern compnaies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-16">
            <Link href="https://neon.tech">
              <NeonLogo />
            </Link>
            <Link href="https://clerk.com">
              <ClerkLogo />
            </Link>
            <Link href="https://neon.tech">
              <NeonLogo />
            </Link>
            <Link href="https://clerk.com">
              <ClerkLogo />
            </Link>
            <Link href="https://neon.tech">
              <NeonLogo />
            </Link>
            <Link href="https://clerk.com">
              <ClerkLogo />
            </Link>
            <Link href="https://neon.tech">
              <NeonLogo />
            </Link>
            <Link href="https://clerk.com">
              <ClerkLogo />
            </Link>
            <Link href="https://neon.tech">
              <NeonLogo />
            </Link>
            <Link href="https://clerk.com">
              <ClerkLogo />
            </Link>
          </div>
        </div>
      </section>

      <section id="pricing" className="">
        <div className="container py-16 flex flex-col gap-16 px-8 md:px-16">
          <h2 className="text-3xl text-center text-balance">
            Pricing software which pays for itsefl 20x over
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-screen-xl mx-auto">
            {subscriptionTiersInOrder.map((tier) => (
              <PricingCard key={tier.name} {...tier} />
            ))}
          </div>
        </div>
      </section>

      <footer className="container pt-16 pb-8 flex flex-col sm:flex-row gap-8 sm:gap-4 justify-between items-start">
        <div className="flex flex-col sm:flex-row sm:justify-evenly gap-8 w-full">
          <Link href="/">
            <BrandLogo />
          </Link>
          <div className="flex flex-row sm:flex-col gap-8">
            <FooterLinkGroup
              title="Help"
              links={[
                { label: "PPP Discounts", href: "#" },
                { label: "Discount API", href: "#" },
              ]}
            />
            <FooterLinkGroup
              title="Solutions"
              links={[
                { label: "Newsletter", href: "#" },
                { label: "SaaS Business", href: "#" },
                { label: "Online Courses", href: "#" },
              ]}
            />
          </div>
          <div className="flex flex-row sm:flex-col gap-8">
            <FooterLinkGroup
              title="Features"
              links={[{ label: "PPP Discounts", href: "#" }]}
            />
            <FooterLinkGroup
              title="Tools"
              links={[
                { label: "Salary Converter", href: "#" },
                { label: "Coupon Generator", href: "#" },
                { label: "Stripe App", href: "#" },
              ]}
            />
            <FooterLinkGroup
              title="Company"
              links={[
                { label: "Affiliate", href: "#" },
                { label: "Twitter", href: "#" },
                { label: "Terms of Service", href: "#" },
              ]}
            />
          </div>
          <div className="flex flex-row sm:flex-col gap-8">
            <FooterLinkGroup
              title="Integrations"
              links={[
                { label: "Lemon Squeezy", href: "#" },
                { label: "Gumroad", href: "#" },
                { label: "Stripe", href: "#" },
                { label: "Chargebee", href: "#" },
                { label: "Paddle", href: "#" },
              ]}
            />
            <FooterLinkGroup
              title="Tutorials"
              links={[
                { label: "Any Website", href: "#" },
                { label: "Lemon Squeezy", href: "#" },
                { label: "Gumroad", href: "#" },
                { label: "Stripe", href: "#" },
                { label: "Chargebee", href: "#" },
                { label: "Paddle", href: "#" },
              ]}
            />
          </div>
        </div>
      </footer>
    </>
  );
}

function PricingCard({
  name,
  priceInCents,
  maxNumberOfProducts,
  maxNumberOfVisits,
  canAccessAnalytics,
  canCustomizeBanner,
  canRemoveBranding,
}: (typeof subscriptionTiersInOrder)[number]) {
  const isMostPopular = name === "Standard";

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <div className="text-accent font-semibold mb-8">{name} </div>
        <CardTitle className="text-xl font-bold">
          ${priceInCents / 100} /mo{" "}
        </CardTitle>
        <CardDescription>
          {formatCompactNumber(maxNumberOfVisits)} pricing page visits/mo
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <Feature className="font-bold">
          {maxNumberOfProducts}{" "}
          {maxNumberOfProducts === 1 ? "product" : "products"}{" "}
        </Feature>
        <Feature>PPP Discount</Feature>
        {canAccessAnalytics && <Feature>Advanced analytics</Feature>}
        {canCustomizeBanner && <Feature>Banner customization</Feature>}
        {canRemoveBranding && <Feature>Remove Easy PPP branding</Feature>}
      </CardContent>
      <CardFooter className="flex flex-col gap-4 items-start">
        <SignUpButton>
          <Button
            variant={isMostPopular ? "accent" : "default"}
            className="text-lg w-full rounded-lg"
          >
            Get Started
          </Button>
        </SignUpButton>
      </CardFooter>
    </Card>
  );
}

function Feature({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <CheckIcon className="size-4 stroke-accent bg-accent/25 rounded-full p-0.5" />
      <span> {children} </span>
    </div>
  );
}

function FooterLinkGroup({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-semibold">{title}</h3>
      <ul className="flex flex-col gap-2 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
