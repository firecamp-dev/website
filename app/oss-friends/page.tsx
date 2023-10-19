import Link from "next/link";
import { Button } from "@/components/ui/button";

type TOSSFriend = {
    href: string;
    name: string;
    description: string;
};

export default async function OSSFriendsPage() {
    const OSSFriends = (await getOssFriends())?.data || [];
    return (
        <section>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-700 dark:text-zinc-300 text-center mt-10 sm:mt-16 md:mt-24">
                Our Open-source Friends
            </h1>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 px-4 sm:px-8 md:px-16 my-10 sm:my-12 md:my-28">
                {OSSFriends.map((data: TOSSFriend) => (
                    <div
                        key={data.href}
                        className="border-2 border-zinc-600 p-6 rounded-xl"
                    >
                        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">{data.name}</h1>
                        <p className="my-2 sm:my-5">{data.description}</p>
                        <Link href={data.href} target="_blank">
                            <Button>Learn More</Button>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}

export async function getOssFriends() {
    const res = await fetch("https://formbricks.com/api/oss-friends");
    return await res.json();
}