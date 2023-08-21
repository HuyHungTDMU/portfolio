import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import imgAbout1 from "../../public/images/projects/about-1.jpg";
import imgAbout2 from "../../public/images/projects/about-2.jpg";
import imgAbout3 from "../../public/images/projects/about-3.png";
import AnimatedText from "@/components/AnimatedText";
import imgPhong1 from "../../public/images/home/phong1.jpeg";
import imgPhong2 from "../../public/images/home/phong2.jpeg";
import imgPhong3 from "../../public/images/home/phong3.jpeg";
import imgPhong4 from "../../public/images/home/phong4.jpeg";
import imgPhong5 from "../../public/images/home/phong5.jpeg";
import imgPhong6 from "../../public/images/home/phong6.jpeg";
import imgPhong7 from "../../public/images/home/phong7.jpeg";
import imgPhong8 from "../../public/images/home/phong8.jpeg";
import imgPhong9 from "../../public/images/home/phong9.jpg";
import {motion} from "framer-motion";

const MotionImage = motion(Image);

export default function About() {
    return (
        <>
            <Head>
                <title>about</title>
                <meta name="about" content="About's page"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className="w-full">
                <Layout className="space-y-12">
                    <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
                        <div className="flex flex-col items-center gap-7 pt-8">
                            <div className='flex flex-col gap-1 items-center justify-center'>
                                <h3 className="pt-4 text-2xl font-bold leading-8 !text-[#2c7873] tracking-tight">
                                    ANRY
                                </h3>
                                <p className="!text-gray-800 !font-serif !italic">
                                    Chăn ga gối nệm
                                </p>
                            </div>

                            <div className='flex gap-4 flex-wrap items-center justify-center'>
                                <MotionImage src={imgPhong1} alt="imgMuongThanh" whileHover={{scale: 1.05}}
                                             className="h-24 rounded-2xl w-auto"/>
                                <MotionImage src={imgPhong2} alt="imgMuongThanh" whileHover={{scale: 1.05}}
                                             className="h-24 rounded-2xl w-auto"/>
                                <MotionImage src={imgPhong3} alt="imgMuongThanh" whileHover={{scale: 1.05}}
                                             className="h-24 rounded-2xl w-auto"/>
                                <MotionImage src={imgPhong9} alt="imgMuongThanh" whileHover={{scale: 1.05}}
                                             className="h-24 rounded-2xl w-auto"/>
                                <MotionImage src={imgPhong5} alt="imgMuongThanh" whileHover={{scale: 1.05}}
                                             className="h-24 rounded-2xl w-auto"/>
                                <MotionImage src={imgPhong6} alt="imgMuongThanh" whileHover={{scale: 1.05}}
                                             className="h-24 rounded-2xl w-auto"/>
                                <MotionImage src={imgPhong7} alt="imgMuongThanh" whileHover={{scale: 1.05}}
                                             className="h-24 rounded-2xl w-auto"/>
                                <MotionImage src={imgPhong8} alt="imgMuongThanh" whileHover={{scale: 1.05}}
                                             className="h-24 rounded-2xl w-auto"/>
                                <MotionImage src={imgPhong4} alt="imgMuongThanh" whileHover={{scale: 1.05}}
                                             className="h-24 rounded-2xl w-auto"/>
                            </div>
                        </div>

                        <div class="prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2 flex flex-col">
                            <AnimatedText
                                text="Nơi truyền thống được truyền cảm hứng."
                                className="mb-5 !font-serif !italic !text-[#2c7873]"
                            />

                            <h2 className="mb-7 text-xl !font-serif !italic !text-[#2c7873]">
                                Nơi tâm huyết được đặt trọn vào từng sản phẩm.
                            </h2>

                            <div className="space-y-7">
                                <div className="flex gap-4">
                                    <p>
                                        ANRY đã không ngừng cải tiến thiết bị và quy trình để tạo ra
                                        các sản phẩm tinh xảo. Phân phối rộng hơn nữa các sản phẩm
                                        có lợi cho người tiêu dùng và mong muốn mang đến cho quý
                                        khách hàng một giấc ngủ thật ngon và thức dậy trong sự êm ái
                                        đầy hứng khởi của sự êm ái với chất lượng tuyệt đỉnh từ
                                        những chiếc gối, màu sắc hợp thời, đường nét tỉ mỉ của những
                                        bộ ga giường
                                    </p>
                                    <Image
                                        src={imgAbout1}
                                        alt="about"
                                        className="w-full h-auto rounded-xl"
                                    />
                                </div>

                                <div className="flex gap-4">
                                    <Image
                                        src={imgAbout2}
                                        alt="about"
                                        className="w-60 h-auto rounded-xl"
                                    />
                                    <p className="w-full">
                                        ANRY còn cung cấp giải pháp cho các doanh nghiệp trong lĩnh
                                        vực khách sạn, nhà hàng, spa, trường học, bệnh viện để cùng
                                        quý khách hàng tô điểm cho mọi căn phòng với sự sang trọng,
                                        tinh tế và tiện nghi nhất. Sản phẩm chính: Chăn ga gối nệm,
                                        khăn bông, khăn thêu / dệt logo, các vật dụng phòng khách
                                        sạn, resort, các sản phẩm vải dành cho nhà hàng, màn rèm
                                        cửa,.. với nhiều kích thước, chất liệu đa dạng để quý khách
                                        hàng dễ dàng lựa chọn.
                                    </p>
                                </div>
                                <p>
                                    Đến với ANRY, sản phẩm sẽ đến trực tiếp tay khách hàng, nên có
                                    thể hoàn toàn an tâm về chất lượng và giá cả vì tiêu chí duy
                                    nhất được định giá là sự sang trọng và hài lòng của quý khách
                                    hàng.
                                </p>

                                <Image
                                    src={imgAbout3}
                                    alt="about"
                                    className="w-auto h-auto rounded-xl"
                                />
                            </div>
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    );
};

