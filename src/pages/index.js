import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import HireMe from "@/components/HireMe";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home's page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout>
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image src={profilePic} alt="huyhung" className="w-full h-auto" />
            </div>

            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-6xl !text-left"
              />

              <p className="my-4 text-base font-medium">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>

              <div className="flex items-center mt-2 self-start gap-4">
                <Link
                  className="flex items-center bg-dark text-light hover:bg-white hover:text-dark border border-solid p-2.5 px-6 rounded-lg border-transparent hover:border-dark text-lg font-semibold"
                  href="/dummy.pdf"
                  target="_blank"
                  download={true}>
                  Resume
                </Link>
                <Link
                  className="text-lg font-medium capitalize text-dark underline"
                  href="mailto:huyhung.tdm@gmail.com">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />

        <div className="absolute right-8 bottom-8 w-24 inline-block">
          <Image src={lightBulb} alt="lightBulb" className="w-full h-auto" />
        </div>
      </main>
    </>
  );
}
