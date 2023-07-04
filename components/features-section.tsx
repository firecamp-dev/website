import { cn } from "@/lib/utils"
import { AppWindow, Braces, FileText, Folder, Play, Share2, Shield, Terminal, Tv2 } from "lucide-react"
import { FC } from "react"

interface FeaturesSectionProps {

}

export function FeaturesSection({
    ...props
}: FeaturesSectionProps) {

    const features: { icon: any, name: string, description: string }[] = [
        { icon: <Folder className="h-12 w-12 fill-current" />, name: "API Collection", description: "Manage Collection of APIs to collaborate within team" },
        { icon: <Tv2 className="h-12 w-12" />, name: "API Playgrounds", description: "Get instant playgrounds for your APIs. Rest, GraphQL and more." },
        { icon: <Share2 className="h-12 w-12" />, name: "API Collaboration", description: "Collaborate with your team at centralize shared workspace." },
        { icon: <FileText className="h-12 w-12" />, name: "API Documentation", description: "Publish a beautiful API documentation for your team and community" },
        { icon: <Play className="h-12 w-12 fill-current" />, name: "API Test Runner", description: "Run the API Collection visually within the platform" },
        { icon: <Terminal className="h-12 w-12" />, name: "CLI & CI/CD", description: "Run API Collection Tests in terminal or set in CI/CD pipeline" },
        { icon: <Braces className="h-12 w-12" />, name: "Variables", description: "Set values in variables to reuse in whole platform dynamically" },
        { icon: <AppWindow className="h-12 w-12" />, name: "Web & Desktop App", description: "Get Web and Desktop apps whichever is suitable for your API workflow" },
        { icon: <Shield className="h-12 w-12 fill-current" />, name: "Authentication", description: "Test and Debug your auth endpoints with range of supported auths" }
    ]

    return (
        <section
            id="features"
            className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
        >

            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                    Features
                </h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    This project is an experiment to see how a modern app, with features
                    like auth, subscriptions, API routes, and static pages would work in
                    Next.js 13 app dir.
                </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
                {features.map((f, i) => <Feature icon={f.icon} name={f.name} description={f.description} key={i} />)}
            </div>
            <div className="mx-auto text-center md:max-w-[58rem]">
                <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                   Firecamp is a truly Multi-protocol Platform, which offers end-to-end solution for protocols with dedicated Playground.
                </p>
            </div>
        </section>
    )
}

const Feature: FC<{ icon: any, name: string, description: string }> = ({ icon, name, description }) => {

    return (
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                {icon}
                <div className="space-y-2">
                    <h3 className="font-bold">{name}</h3>
                    <p className="text-sm text-muted-foreground">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}