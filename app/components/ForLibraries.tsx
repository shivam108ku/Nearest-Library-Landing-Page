"use client";

import React from "react";
import { motion } from "motion/react";
import ProfileCard from "./ProfileCard";
import FoldText from "./FoldText";

const capabilities = [
  { icon: "⚡", label: "Multi-Floor Live Seat Grid" },
  { icon: "⚡", label: "QR Scan Attendance & Punch Logs" },
  { icon: "⚡", label: "WhatsApp Invoicing & Dues Alerts" },
  { icon: "⚡", label: "PIB Current Affairs & Prep Grid" },
];

export default function ForLibraries() {
  return (
    <section id="about" className="pt-6 pb-20 px-4 sm:px-6 bg-gradient-to-b from-white via-[#F8FAFC] to-white relative scroll-mt-20">
      <div id="for-libraries" className="absolute -top-20" />
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* ── Left Content: Developer Details & Info (Animated) ── */}
          <div className="lg:col-span-7 pt-2 flex flex-col items-start">
            {/* Tag Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="inline-flex items-center gap-2.5 bg-white border border-neutral-200/80 rounded-full pl-1.5 pr-4 py-1 text-sm shadow-2xs mb-5"
            >
              <span className="bg-neutral-900 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                CREATOR
              </span>
              <span className="text-xs sm:text-sm font-medium text-neutral-600">
                Software Engineer & Founder
              </span>
            </motion.div>

            {/* Heading with 3D FoldText Animation */}
            <h2 className="text-3xl sm:text-4xl md:text-[3.2rem] font-semibold tracking-tight text-[#09090b] mb-5 leading-tight text-left">
              <FoldText
                text="Developed by Shivam Kumar"
                splitBy="char"
                hinge="top"
                trigger="scroll"
                duration={0.65}
                stagger={0.03}
                getCharColor={(char, idx) => {
                  if (idx >= 13) return "#B8860B";
                  return undefined;
                }}
              />
            </h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-[#475569] leading-relaxed mb-6"
            >
              NearestLibrary is crafted and developed by Shivam Kumar — built to empower library owners across India with an end-to-end digital operating system. From eliminating manual paper registers and managing live seat grids to automated WhatsApp billing and daily PIB current affairs for students.
            </motion.p>

            {/* Core Capability Badges (Staggered Animation) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-7 w-full"
            >
              {capabilities.map((cap) => (
                <motion.div
                  key={cap.label}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2.5 bg-white border border-neutral-200/80 hover:border-neutral-300 rounded-xl p-3 shadow-2xs transition-colors"
                >
                  <span className="w-6 h-6 rounded-lg bg-neutral-900 text-white flex items-center justify-center font-bold text-xs">
                    {cap.icon}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-neutral-800">
                    {cap.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact Email Callout Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -2 }}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 bg-white border border-neutral-200/90 hover:border-neutral-300 rounded-2xl p-4 sm:p-4.5 shadow-2xs hover:shadow-xs mb-8 w-full transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-neutral-950 text-white flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-xs">
                  ✉️
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider">Contact & Inquiries</p>
                  <a
                    href="mailto:shivam108ku@gmail.com"
                    className="text-sm sm:text-base font-bold text-[#09090b] hover:text-[#B8860B] transition-colors"
                  >
                    shivam108ku@gmail.com
                  </a>
                </div>
              </div>
              <a
                href="mailto:shivam108ku@gmail.com"
                className="inline-flex items-center justify-center gap-1.5 bg-neutral-900 text-white hover:bg-neutral-800 text-xs font-semibold px-4 py-2.5 rounded-xl transition-all shadow-2xs hover:scale-105"
              >
                <span>Email Shivam</span>
                <span>→</span>
              </a>
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#download"
                className="bg-neutral-900 text-white hover:bg-neutral-800 px-7 py-3.5 rounded-2xl text-sm font-bold shadow-md hover:shadow-xl transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <span>Register Your Library — Free</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="mailto:shivam108ku@gmail.com"
                className="px-6 py-3.5 rounded-2xl text-sm font-semibold text-neutral-700 bg-white hover:bg-neutral-50 border border-neutral-200 transition-colors inline-flex items-center gap-1.5"
              >
                <span>Get in Touch</span>
                <span>✉️</span>
              </a>
            </motion.div>
          </div>

          {/* ── Right Column: Interactive 3D Profile Card (Entrance Animated) ── */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end w-full pt-6 lg:pt-16"
          >
            <div className="w-full max-w-sm">
              <ProfileCard
                name="Shivam Kumar"
                title="Software Engineer"
                handle="shivam108ku"
                status="Developed by Shivam Kumar"
                email="shivam108ku@gmail.com"
                contactUrl="https://www.linkedin.com/in/shivam-kumar108/"
                avatarUrl="/shivam.jpg"
                miniAvatarUrl="/shivam.jpg"
                contactText="Connect"
                behindGlowEnabled={false}
                enableTilt={false}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
