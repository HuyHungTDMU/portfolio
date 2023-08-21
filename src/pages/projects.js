import React, {useEffect} from "react";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import imgPhong1 from "../../public/images/home/phong1.jpeg";
import imgPhong2 from "../../public/images/home/phong2.jpeg";
import imgPhong3 from "../../public/images/home/phong3.jpeg";

//
// // Đường dẫn đến file
// const filePath = path.join(process.cwd(), 'data', './data.txt');

// // Đọc nội dung từ file
// export async function readFileContent() {
//     try {
//         const content = await fs.readFile(filePath, 'utf-8');
//         return content;
//     } catch (error) {
//         console.error('Error reading file:', error);
//         return null;
//     }
// }

const MotionImage = motion(Image);

const FeatureProject = ({link, img, title, type, summary}) => {
    return (
        <article
            className="border bg-[#2c7873] z-0 border-[#2c7873] pt-2 pb-6 pl-2 pr-6 rounded-3xl relative flex gap-4">
            <div className="w-56 flex flex-col gap-3 justify-around items-center">
                <Link href={link}>
                    <MotionImage
                        src={img}
                        alt={"Feature Project"}
                        className="w-52 h-auto rounded-3xl cursor-pointer"
                        whileHover={{scale: 1.02}}
                    />
                </Link>
                <Link
                    href={link}
                    className="text-center w-40 bg-[#2c7873] text-light hover:bg-white hover:text-[#2c7873] border border-solid p-2.5 px-6 rounded-lg border-transparent hover:border-[#2c7873] text-lg font-semibold">
                    Visit Project
                </Link>
            </div>

            <div className="w-full flex flex-col items-left gap-2">
                <span className="text-xl text-[#2c7873] italic">{type}</span>
                <Link href={link}>
                    <h2 className="text-3xl text-[#2c7873] font-semibold">{title}</h2>
                </Link>

                <p className="text-base text-dark line-clamp-4">{summary}</p>
            </div>

            <div
                className="w-[100%] h-[100%] bg-white -z-10 -top-3 -left-3 absolute border rounded-3xl border-[#2c7873]"/>
        </article>
    );
};

const SimpleProject = ({link, img, title, type}) => {
    return (
        <article
            className="border bg-[#2c7873] z-0 border-[#2c7873] pt-4 pb-6 pl-2 pr-6 flex-col rounded-3xl relative flex gap-4">
            <div className='flex flex-col gap-3'>
                <MotionImage
                    src={img}
                    alt={"Feature Project"}
                    className="w-full h-auto rounded-3xl cursor-pointer"
                    whileHover={{scale: 1.02}}
                />
                <Link
                    href={link}
                    className="text-dark border-transparent border-b hover:border-dark w-28 text-lg font-semibold">
                    Visit Project
                </Link>
            </div>

            <div className="space-y-3">
                <span className="text-xl text-purple-900">{type}</span>

                <Link href={link}>
                    <h2 className="text-3xl text-dark font-semibold">{title}</h2>
                </Link>
            </div>

            <div
                className="w-[100%] h-[100%] bg-white -z-10 -top-3 -left-3 absolute border rounded-3xl border-[#2c7873]"/>
        </article>
    );
};

export default function Projects() {
    // const data= await readFileContent()
    //  console.log({data})
    useEffect(() => {
        // Simulate reading data from a file (replace this with actual API call)
        const fetchDataFromFile = async () => {
            try {
                const response = await fetch('./api/projects.txt');
                const data = await response.text();
                console.log(data);
            } catch (error) {
                console.error('Error reading data:', error);
            }
        };

        fetchDataFromFile().then();
    }, []);

    return (
        <>
            <Head>
                <title>Projects</title>
                <meta name="description" content="Projects's page"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className="w-full">
                <Layout>
                    <div className="flex flex-col gap-4 mt-12">
                        <AnimatedText text="DỰ ÁN" className='!font-bold !text-[#2c7873]'/>

                        <div className='mt-4 flex flex-col items-center justify-center '>
                            <div className="grid grid-cols-1 xl:grid-cols-2 justify-between gap-12">
                                {drawDataProject.map((item, index) => <FeatureProject
                                    key={index}
                                    type={item.subTitle}
                                    title={item.title}
                                    img={item.image}
                                    link={item.link}
                                    summary={item.summary}
                                />)}
                            </div>
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    );
};

const drawDataProject = [
    {
        type: 1,
        subTitle: 'Khách Sạn',
        title: 'Dự án khách sạn Mường Thanh',
        summary: 'A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.',
        link: '/',
        image: imgPhong1
    },
    {
        type: 2,
        subTitle: 'Homestay',
        title: 'Dự án homestay Đà Lạt',
        summary: 'A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.',
        link: '/',
        image: imgPhong2
    },
    {
        type: 2,
        subTitle: 'Chung cư',
        title: 'Dự án Căn hộ cao cấp',
        summary: 'A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.',
        link: '/',
        image: imgPhong3
    }
]
