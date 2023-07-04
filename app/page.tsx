import { env } from "@/env.mjs"
import { Testimonials } from "@/components/testimonials-section"
import { FeaturesSection } from "@/components/features-section"
import { CustomerSection } from "@/components/customer-section"
import { OssSection } from "@/components/oss-section"
import { CtaSection } from "@/components/cta-section"
import { HeroFSection } from "@/components/HeroSection"

async function getGitHubStars(): Promise<string | null> {
    try {
        const response = await fetch(
            "https://api.github.com/repos/shadcn/taxonomy",
            {
                headers: {
                    Accept: "application/vnd.github+json",
                    // Authorization: `Bearer ${env.GITHUB_ACCESS_TOKEN}`,
                },
                next: {
                    revalidate: 60,
                },
            }
        )

        if (!response?.ok) {
            return null
        }

        const json = await response.json()

        return parseInt(json["stargazers_count"]).toLocaleString()
    } catch (error) {
        return null
    }
}

export default async function IndexPage() {
    const stars = 0; //await getGitHubStars()

    return (
        <>
            <HeroFSection />
            <CustomerSection />
            <FeaturesSection />
            <OssSection />
            <Testimonials />
            <CtaSection />
        </>
    )
}