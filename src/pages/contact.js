import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import imgContact from "../../public/images/projects/contact.png";
import AnimatedText from "@/components/AnimatedText";

const contact = () => {
  return (
    <>
      <Head>
        <title>contact</title>
        <meta name="about" content="Contact's page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full">
        <Layout className="space-y-12">
          <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-4 xl:space-y-0">
            <div class="prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2 flex flex-col">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.212984627588!2d106.71924121029154!3d10.79499318931053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527c2f8f30911%3A0x36ac5073f8c91acd!2sT%C3%B2a%20nh%C3%A0%20The%20Landmark%2081!5e0!3m2!1svi!2s!4v1691480340935!5m2!1svi!2s"
                allowfullscreen=""
                loading="lazy"
                className="w-full h-[450px] border border-cyan-700 rounded-xl"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className="gap-7 pt-8 flex flex-col items-center justify-center">
              <Image src={imgContact} alt="contact" className="w-full h-auto" />

              <h2 className="mt-4 text-xl text-sky-600 font-bold">
                Công ty TNHH ANRY
              </h2>
              <p>Chuyên phân phối chăn ga gối nệm</p>
              <p>SDT: 0987654321</p>
              <p>Địa chỉ: Tp Hồ Chí Minh</p>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default contact;
