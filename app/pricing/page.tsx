import { FC } from "react";
import Link from "next/link";

import { Seo } from "@/config/seo";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export const metadata = {
  title: Seo.pricing.title,
  description: Seo.pricing.description,
};

export default function PricingPage() {
  return (
    <section className="container flex flex-col gap-8 py-8 md:max-w-[64rem] md:py-12 lg:py-24">
      <div className="grid gap-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Plans that suit your team&apos;s needs
        </h2>
        <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Firecamp helps thousands of developers and teams to ship their APIs 3x
          faster. With our flexible plans, get your setup ready in minutes
        </p>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <PricingBox
          title="Free"
          seat={5}
          price={{ amount: 0, yearly: "per month", monthly: "" }}
          features={[
            "API Playgrounds",
            "API Collaboration",
            "Unlimited Workspaces",
            "Unlimited API Collections",
            "Community Support",
          ]}
        />
        <PricingBox
          title="Team"
          seat={15}
          price={{
            amount: 49,
            yearly: "per month billed yearly",
            monthly: "or $59 monthly",
          }}
          features={[
            "All Free features plus",
            "15 team members",
            "24*7 Support on a priority",
            "Team Management Resources",
          ]}
        />

        <div className="col-span-12 flex flex-col items-center gap-4 rounded-lg border p-10">
          <h3 className="text-xl font-medium sm:text-2xl">Enterprise</h3>

          <p className="text-muted-foreground text-center">
            Need more? Contact us for a custom plan for your company.
          </p>

          <Link
            href="https://tally.so/r/mRxW14"
            target="_blank"
            className={cn(buttonVariants({ size: "sm" }), "px-8")}
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}

const PricingBox: FC<{
  price: { amount: number; yearly: string; monthly: string };
  title: string;
  seat: number;
  features: string[];
}> = ({ price, title, seat, features }) => {
  return (
    <div className="md:col-span-6 col-span-12 grid w-full items-start gap-10 rounded-lg border p-10">
      <div className="flex flex-col items-center gap-2">
        <h3 className="text-xl font-medium md:text-2xl">{title}</h3>
        <p className="text-sm text-muted-foreground">upto {seat} seats</p>
        <div className="flex flex-col items-center gap-2 text-center">
          <h4 className="text-7xl font-semibold">${price.amount}</h4>
          <div className="flex flex-col items-center text-center">
            <p className="text-sm text-muted-foreground">{price.yearly}</p>
            <p className="text-sm text-muted-foreground">{price.monthly}</p>
          </div>
        </div>
      </div>

      <ul className="grid gap-3 text-sm text-muted-foreground">
        {features.map((f, i) => {
          return (
            <li className="flex items-center" key={i}>
              <Icons.check className="mr-2 h-4 w-4 text-green-500" /> {f}
            </li>
          );
        })}
      </ul>

      <Link
        href="https://firecamp.dev"
        className={cn(buttonVariants({ size: "default" }))}
      >
        Get Started
      </Link>
    </div>
  );
};
