import Image from "next/image";

export function CustomerSection() {
    return (
        <section className="bg-white py-8 sm:py-12 dark:bg-inherit">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-lg font-semibold leading-8 text-gray-400 dark:text-gray-800">
                    Trusted by developers from the world’s most innovative teams
                </h2>
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    <Image
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 dark:invert"
                        src="/images/users/alphasense.svg"
                        alt="AlphaSense"
                        width={158}
                        height={48}
                    />
                    <Image
                        className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1 dark:invert"
                        src="/images/users/udaan.svg"
                        alt="Udaan"
                        width={158}
                        height={48}
                    />
                    <Image
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 dark:invert"
                        src="/images/users/accenture.svg"
                        alt="Accenture"
                        width={158}
                        height={48}
                    />
                    <Image
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 dark:invert"
                        src="/images/users/automattic.svg"
                        alt="Automatic"
                        width={158}
                        height={48}
                    />
                    <Image
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 dark:invert"
                        src="/images/users/adobe.svg"
                        alt="Adobe"
                        width={158}
                        height={48}
                    />
                </div>
            </div>
        </section>
    )
}
