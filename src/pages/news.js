import React from "react";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import imgBanner from "../../public/images/banner.jpg";
import {motion} from "framer-motion";

const MotionImage = motion(Image);

const FeatureProject = ({link, img, title, type, summary}) => {
    return (
        <article className="border bg-[#2c7873] z-0 border-[#2c7873] p-12 rounded-3xl relative flex gap-5">
            <Link href={link} className="w-1/2">
                <MotionImage
                    src={img}
                    alt={"Feature Project"}
                    className="w-full h-auto rounded-3xl cursor-pointer"
                    whileHover={{scale: 1.02}}
                />
            </Link>

            <div className="w-1/2 flex flex-col items-left gap-5">
                <span className="text-xl text-purple-900">{type}</span>
                <Link href={link}>
                    <h2 className="text-3xl text-dark font-semibold">{title}</h2>
                </Link>

                <p className="text-base text-dark">{summary}</p>

                <Link
                    href={link}
                    className="text-center w-40 bg-dark text-light hover:bg-white hover:text-dark border border-solid p-2.5 px-6 rounded-lg border-transparent hover:border-dark text-lg font-semibold">
                    Visit Project
                </Link>
            </div>

            <div
                className="w-[100%] h-[100%] bg-white -z-10 -top-3 -left-3 absolute border rounded-3xl border-[#2c7873]"/>
        </article>
    );
};

const SimpleProject = ({link, img, title, type}) => {
    return (
        <article className="border bg-[#2c7873] z-0 border-[#2c7873] p-12 flex-col rounded-3xl relative flex gap-5">
            <MotionImage
                src={img}
                alt={"Feature Project"}
                className="w-full h-auto rounded-3xl cursor-pointer"
                whileHover={{scale: 1.02}}
            />

            <div className="space-y-3">
                <span className="text-xl text-purple-900">{type}</span>

                <Link href={link}>
                    <h2 className="text-3xl text-dark font-semibold">{title}</h2>
                </Link>
            </div>

            <Link
                href={link}
                className="text-dark border-transparent border-b hover:border-dark w-28 text-lg font-semibold">
                Visit Project
            </Link>

            <div
                className="w-[100%] h-[100%] bg-white -z-10 -top-3 -left-3 absolute border rounded-3xl border-[#2c7873]"/>
        </article>
    );
};

export default function News() {
    return (
        <>
            <Head>
                <title>News</title>
                <meta name="description" content="Projects's page"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className="w-full">
                <Layout>
                    <div className="flex flex-col gap-4">
                        <div className='h-[500px]'>
                            <Image
                                fill={true}
                                src={imgBanner}
                                alt='banner'
                                className='max-h-[500px]'
                            />
                        </div>

                        <AnimatedText text="TIN TỨC & SỰ KIỆN" className='!-mt-12 !font-bold !text-[#2c7873]'/>

                    </div>
                </Layout>
            </main>
        </>
    );
};
