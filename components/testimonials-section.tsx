import clsx from "clsx";
import Image from "next/image";
import { FC } from "react";

const testimonials: any[] = [
    {
        header: "All in one solution for my team",
        say: ["Not only is Firecamp more accessible for developers of smaller projects or startups, but it boasts all the features that we've come to love from incumbent solutions and much, much more. My bet is on Firecamp as the next must-have developer productivity tool.", "🚀 In addition to that, I don't have to download and manage several different tools, hold different subscriptions, and file issues on different projects when something doesn't work. Everything is all in one place"],
        user: { name: "Mansib Rahman", title: "CEO at Radish", image: '/images/testimonials/mansib.jpeg' }
    },
    {
        header: "Great team collaboration experience",
        say: ["Firecamp's team syncing feature has made our life's much easier. It's like google docs collaboration for your API.We were looking for an all-in-one REST, WebSockets, GraphQL Client, with real-time team syncing. That's exactly why we picked Firecamp over Postman or Insomnia Client"],
        user: { name: "Milan", title: "CEO at Parker", image: '/images/testimonials/milan.jpeg' }
    },
    {
        header: "It made my GraphQL workflow easy",
        say: ["Currently, I'm enjoying the ability to get graphQL endpoint schemas just by clicking a button. Aside from that, the team has done a great job with the graphQL query builder. Hands down there is no better client for testing graphQL APIs."],
        user: { name: "Duncan Nevin", title: "Software Developer", image: '/images/testimonials/duncan.jpeg' }
    },
    {
        header: "The only Complete API Devtool",
        say: ["Being a developer, testing tools are a must to me and after working with several projects (API-based as well as socket-based) I had to use several different apps to test my services.", "After being introduced to Firecamp, I was relieved from those several apps. I can do almost all kinds of testing with Firecamp and the most amazing fact is I get to share my endpoint details and socket event directly to my team without any kind of special documentation ( quite similar to postman but much simpler ). To conclude, I'm addicted to its efficiency as it helps in the enhancement of my productivity"],
        user: { name: "Rajat", title: "Software developer", image: '/images/testimonials/rajat.jpeg' }
    },
];

export function Testimonials() {

    const getClassName = (i: number) => {
        let className = "";
        const modulo = i % 2;
        if (modulo == 0) className = "lg:border-r";
        if (i >= 2) className += " lg:border-t";
        return className;
    }

    return (
        <section className="container py-8 md:py-12 lg:py-12 bg-white dark:bg-gray-900" id="testimonials">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center">
                <div className="mx-auto max-w-screen-sm flex flex-col items-center space-y-4 text-center">
                    <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Loved by developers
                    </h2>
                    <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">They have reason to trust Firecamp, listen them on their own words</p>
                </div>
                <div className="grid my-8 lg:my-12 lg:grid-cols-2">
                    {testimonials.map((t, i) => <FigureCard {...t} key={i} className={getClassName(i)} />)}
                </div>
            </div>
        </section>
    )
}

const FigureCard: FC<{ className: string, header: string, say: string[], user: { name: string, title: string, image: string, } }> = ({ className, header, say, user: { name, title, image } }) => {

    return (
        <figure className={clsx(className, "flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700 justify-between")}>
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{header}</h3>
                {
                    say.map((s, i) => <p className="my-4" key={i}>{s}</p>)
                }
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
                <Image className="w-9 h-9 rounded-full" src={image} width={30} height={30} alt="profile-picture" />
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                    <div>{name}</div>
                    <div className="text-sm font-light text-gray-500 dark:text-gray-400">{title}</div>
                </div>
            </figcaption>
        </figure>
    )
}