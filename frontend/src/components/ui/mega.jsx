import React from "react";
import { HiArrowUpRight, HiArrowRight } from "react-icons/hi2";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import cert1 from "../../assets/certificates/certi1.jpeg";
import cert2 from "../../assets/certificates/certi2.jpeg";
import cert3 from "../../assets/certificates/certi3.jpeg";
import cert4 from "../../assets/certificates/certi4.jpeg";
import cert5 from "../../assets/certificates/certi5.jpeg";
import cert6 from "../../assets/certificates/certi6.jpeg";

function BlogAndCertificates() {
    const blogs = [
        {
            id: 1,
            title: "How to Push Your Code to GitHub",
            description:
                "A practical step-by-step guide to initializing a repository, connecting a remote, and pushing local code to GitHub using Git.",
            date: "Recently uploaded",
            readTime: "4 min read",
            link: "https://medium.com/@yk0574292/how-to-push-your-code-to-github-33dd2d49132e",
        },
    ];

    const certificates = [cert1, cert2, cert3, cert4, cert5, cert6];

    return (
        <section
            id="writing"
            className="relative overflow-hidden bg-[var(--bg-main)] px-4 py-12 text-[var(--text-main)] sm:px-6 sm:py-14 md:px-8 lg:px-10 lg:py-16"
        >
            {/* Background decoration */}
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -left-32 -top-20 h-72 w-72 rounded-full bg-emerald-500/[0.035] blur-3xl" />

                <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-sky-500/[0.025] blur-3xl" />
            </div>

            <div className="mx-auto max-w-6xl">

                {/* =========================================================
                    MAIN HEADER
                ========================================================= */}
                <div className="mb-8 border-b border-[var(--border-color)] pb-6 sm:mb-10 sm:pb-7">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <div className="mb-3 flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

                                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-600 sm:text-[11px]">
                                    Knowledge & Achievements
                                </span>
                            </div>

                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-[42px]">
                                What I’ve been learning
                            </h2>

                            <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--text-secondary)] sm:text-base">
                                Technical writing, courses, and certifications
                                from my journey of building software.
                            </p>
                        </div>

                        <span className="hidden shrink-0 pb-1 text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--text-secondary)] sm:block">
                            Learn • Build • Share
                        </span>
                    </div>
                </div>

                {/* =========================================================
                    TWO COLUMN LAYOUT
                    Desktop: side by side
                    Mobile: stacked
                ========================================================= */}
                <div className="grid gap-7 lg:grid-cols-2 lg:gap-8">

                    {/* =====================================================
                        WRITING
                    ===================================================== */}
                    <div className="flex min-w-0 flex-col">

                        {/* Section title */}
                        <div className="mb-4 flex items-center justify-between">
                            <div>
                                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-600 sm:text-[11px]">
                                    Writing
                                </p>

                                <h3 className="mt-1 text-lg font-bold tracking-tight sm:text-xl">
                                    Latest article
                                </h3>
                            </div>

                            <span className="rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-wider text-[var(--text-secondary)] sm:px-3 sm:text-[10px]">
                                {blogs.length} article
                                {blogs.length !== 1 ? "s" : ""}
                            </span>
                        </div>

                        {/* Article */}
                        {blogs.map((blog, index) => (
                            <a
                                key={blog.id}
                                href={blog.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative flex min-h-[330px] flex-1 flex-col overflow-hidden rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-emerald-400/50 hover:shadow-xl sm:min-h-[350px] sm:p-7"
                            >
                                {/* Glow */}
                                <div className="pointer-events-none absolute -right-28 -top-28 h-60 w-60 rounded-full bg-emerald-500/[0.05] blur-3xl transition-all duration-700 group-hover:bg-emerald-500/[0.09]" />

                                {/* Grid */}
                                <div className="pointer-events-none absolute inset-0 opacity-[0.02] [background-image:linear-gradient(var(--text-main)_1px,transparent_1px),linear-gradient(90deg,var(--text-main)_1px,transparent_1px)] [background-size:30px_30px]" />

                                <div className="relative flex h-full flex-col">

                                    {/* Top row */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2.5">
                                            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border-color)] bg-[var(--bg-main)] text-[9px] font-bold text-[var(--text-secondary)] sm:h-9 sm:w-9">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>

                                            <span className="rounded-full border border-emerald-400/30 bg-emerald-500/[0.08] px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.13em] text-emerald-700 dark:text-emerald-400 sm:px-3 sm:py-1.5 sm:text-[9px]">
                                                Featured
                                            </span>
                                        </div>

                                        <HiArrowUpRight className="text-lg text-[var(--text-secondary)] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-emerald-600" />
                                    </div>

                                    {/* Article content */}
                                    <div className="mt-auto pt-10 sm:pt-12">

                                        {/* Metadata */}
                                        <div className="mb-3 flex flex-wrap items-center gap-2 text-[10px] text-[var(--text-secondary)] sm:mb-4 sm:text-[11px]">
                                            <span>{blog.date}</span>

                                            <span className="opacity-40">
                                                •
                                            </span>

                                            <span>{blog.readTime}</span>

                                            <span className="opacity-40">
                                                •
                                            </span>

                                            <span>Git</span>
                                        </div>

                                        {/* Title */}
                                        <h4 className="max-w-xl text-xl font-bold leading-tight tracking-tight transition-colors duration-300 group-hover:text-emerald-600 sm:text-2xl lg:text-[27px]">
                                            {blog.title}
                                        </h4>

                                        {/* Description */}
                                        <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--text-secondary)] sm:mt-4 sm:text-[15px] sm:leading-7">
                                            {blog.description}
                                        </p>

                                        {/* CTA */}
                                        <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-emerald-600 sm:mt-7 sm:text-sm">
                                            <span>Read article on Medium</span>

                                            <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* =====================================================
                        CERTIFICATES
                    ===================================================== */}
                    <div className="flex min-w-0 flex-col">

                        {/* Section title */}
                        <div className="mb-4 flex items-center justify-between">
                            <div>
                                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-sky-600 sm:text-[11px]">
                                    Credentials
                                </p>

                                <h3 className="mt-1 text-lg font-bold tracking-tight sm:text-xl">
                                    Certificates
                                </h3>
                            </div>

                            <span className="rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-wider text-[var(--text-secondary)] sm:px-3 sm:text-[10px]">
                                {certificates.length} total
                            </span>
                        </div>

                        {/* =================================================
                            SMALLER CERTIFICATE BOX
                        ================================================= */}
                        <div className="relative overflow-hidden rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] p-3 shadow-sm sm:p-4">

                            {/* Glow */}
                            <div className="pointer-events-none absolute -bottom-28 -right-28 h-60 w-60 rounded-full bg-sky-500/[0.04] blur-3xl" />

                            {/* Certificate slider */}
                            <Swiper
                                modules={[Autoplay]}
                                spaceBetween={16}
                                slidesPerView={1}
                                loop
                                speed={700}
                                autoplay={{
                                    delay: 3500,
                                    disableOnInteraction: false,
                                }}
                                className="certificate-swiper !h-[250px] w-full sm:!h-[270px] lg:!h-[255px]"
                            >
                                {certificates.map((img, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="flex h-full w-full items-center justify-center">

                                            {/* Smaller image container */}
                                            <div className="flex max-h-[225px] max-w-[360px] items-center justify-center overflow-hidden rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] p-1.5 shadow-sm sm:max-h-[240px] sm:max-w-[390px] sm:p-2 lg:max-h-[225px] lg:max-w-[370px]">

                                                <img
                                                    src={img}
                                                    alt={`Certificate ${index + 1}`}
                                                    className="block h-auto max-h-[215px] w-auto max-w-full object-contain sm:max-h-[230px] lg:max-h-[215px]"
                                                />

                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            {/* Certificate footer */}
                            <div className="mt-3 flex items-center justify-between border-t border-[var(--border-color)] pt-3 sm:mt-4 sm:pt-4">
                                <div className="min-w-0">
                                    <p className="truncate text-xs font-semibold sm:text-sm">
                                        Continuous learning
                                    </p>

                                    <p className="mt-0.5 truncate text-[9px] text-[var(--text-secondary)] sm:text-[11px]">
                                        Web development & software engineering
                                    </p>
                                </div>

                                <div className="ml-3 flex shrink-0 items-center gap-1.5 rounded-full bg-emerald-500/[0.08] px-2.5 py-1.5 text-[9px] font-semibold text-emerald-700 dark:text-emerald-400 sm:px-3 sm:text-[10px]">
                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                    Verified
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom note */}
                <div className="mt-6 flex flex-col gap-2 border-t border-[var(--border-color)] pt-5 text-[10px] text-[var(--text-secondary)] sm:flex-row sm:items-center sm:justify-between sm:text-xs">
                    <span>
                        More technical writing and certifications coming soon.
                    </span>

                    <span className="hidden font-medium sm:block">
                        Build → Learn → Document
                    </span>
                </div>
            </div>
        </section>
    );
}

export default BlogAndCertificates;