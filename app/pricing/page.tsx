import { FC } from "react"
import Link from "next/link"

import { Seo } from "@/config/seo"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export const metadata = {
    title: Seo.pricing.title,
    description: Seo.pricing.description
}

export default function PricingPage() {
    return (
        <section className="container flex flex-col  gap-6 py-8 md:max-w-[64rem] md:py-12 lg:py-24">
            <div className="mx-auto flex w-full flex-col gap-4 md:max-w-[58rem]">
                <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                    Plans that suit your team&apos;s needs
                </h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    Firecamp helps thousands of developers and teams to ship their APIs 3x faster. With our flexible plans, get your setup ready in minutes
                </p>
            </div>
            <PricingBox
                title="Free" seat={5}
                price={{ amount: 0, yearly: "per month", monthly: "" }}
                features={["API Playgrounds", "API Collaboration", "Unlimited Workspaces", "Unlimited API Collections", "Community Support"]} />
            <PricingBox title="Team" seat={15} price={{ amount: 49, yearly: "per month billed yearly", monthly: "or $59 monthly" }}
                features={["All Free features plus", "15 team members", "24*7 Support on a priority", "Team Management Resources"]} />

            <div className="mx-auto flex w-full max-w-[58rem] flex-col gap-4">
                <span><a href="https://tally.so/r/mRxW14" target="_blank" className="max-w-[85%] leading-normal font-bold underline text-muted-foreground sm:leading-7" >Contact us </a> for more than 15 users</span>
            </div>
        </section>
    )
}

const PricingBox: FC<{
    price: { amount: number, yearly: string, monthly: string },
    title: string,
    seat: number,
    features: string[]
}> = ({ price, title, seat, features }) => {

    return (
        <div className="grid w-full items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_200px]">
            <div className="grid gap-6">
                <h3 className="text-xl font-bold sm:text-2xl">
                    {title}
                </h3>
                upto {seat} seats
                <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
                    {
                        features.map((f, i) => {
                            return (
                                <li className="flex items-center" key={i}>
                                    <Icons.check className="mr-2 h-4 w-4" /> {f}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="flex flex-col gap-4 text-center">
                <div>
                    <h4 className="text-7xl font-bold">${price.amount}</h4>
                    <p className="text-sm font-medium text-muted-foreground">
                        {price.yearly}
                    </p>
                    <p className="text-sm font-medium text-muted-foreground">
                        {price.monthly}
                    </p>
                </div>
                <Link href="https://firecamp.dev" className={cn(buttonVariants({ size: "lg" }))}>
                    Get Started
                </Link>
            </div>
        </div>
    )
}