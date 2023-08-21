import Link from "next/link";
import React, {useEffect, useState} from "react";
import {SvgInstagram, SvgPinterest, SvgTwitter} from "./Icons";
import {motion} from "framer-motion";
import {useRouter} from "next/router";

const CustomLink = ({href, title, className = "", classHover = ""}) => {
    const router = useRouter();

    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span
                className={`inline-block bg-white h-[1px] left-0 absolute -bottom-0.5 ease duration-300 group-hover:w-full w-0 ${classHover} ${
                    router.pathname === href && "w-full"
                }`}>
        &nbsp;
      </span>
        </Link>
    );
};

const NavBar = () => {
    const [scrollActive, setScrollActive] = useState(null);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScrollActive(window.scrollY > 20);
        });
    }, []);

    return (
        <header
            className={`fixed top-0 z-30 transition-all w-full px-32 py-5 font-medium flex items-center bg-[#65A69A] justify-between ${
                scrollActive && "bg-light shadow-2xl"
            }`}>
            <nav
                className={`space-x-7 text-ellipsis ${
                    scrollActive ? "text-purple-950" : "text-white"
                }`}>
                <CustomLink
                    href="/"
                    title="Home"
                    classHover={`${scrollActive && "bg-purple-950"}`}
                />
                <CustomLink
                    href="/about"
                    title="About"
                    classHover={`${scrollActive && "bg-purple-950"}`}
                />
                <CustomLink
                    href="/projects"
                    title="Projects"
                    classHover={`${scrollActive && "bg-purple-950"}`}
                />
                <CustomLink href="/news" title="News"/>
                <CustomLink
                    href="/contact"
                    title="Contact"
                    classHover={`${scrollActive && "bg-purple-950"}`}
                />
            </nav>

            <nav className="gap-5 flex items-center">
                <motion.a
                    className={`bg-white rounded-full items-center justify-center flex w-7 h-7 shadow-md ${
                        scrollActive && "shadow-2xl"
                    }`}
                    href="https://twitter.com/"
                    target="_blank"
                    whileTap={{scale: 0.9}}
                    whileHover={{y: -2}}>
                    <SvgTwitter/>
                </motion.a>

                <motion.a
                    className={`bg-white rounded-full items-center justify-center flex w-7 h-7 shadow-md ${
                        scrollActive && "shadow-2xl"
                    }`}
                    href="https://www.pinterest.com/"
                    target="_blank"
                    whileTap={{scale: 0.9}}
                    whileHover={{y: -2}}>
                    <SvgPinterest/>
                </motion.a>

                <motion.a
                    className={`bg-white rounded-full items-center justify-center flex w-7 h-7 shadow-md ${
                        scrollActive && "shadow-2xl"
                    }`}
                    href="https://www.instagram.com/"
                    target="_blank"
                    whileTap={{scale: 0.9}}
                    whileHover={{y: -2}}>
                    <SvgInstagram/>
                </motion.a>
            </nav>
        </header>
    );
};

export default NavBar;
