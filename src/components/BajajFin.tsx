"use client";

import { BadgePercent, CreditCard } from "lucide-react";
import { motion } from "framer-motion";
import LogoCard from "./LogoCard";
import BajajLogo from "./BajajLogo";

export default function BajajFin() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-4 md:px-8 lg:px-12">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="text-center mb-16" variants={containerVariants}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Easy EMI Financing with Bajaj Finserv
            <span className="block text-blue-600 mt-2">
              0% Interest, No Down Payment
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At More Copy Systems, enjoy Bajaj Finserv EMI options with 0%
            interest and no down payment on our entire range of office equipment
            and supplies. Get high-quality printers, photocopiers, and more
            today—pay over time with ease and flexibility.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center justify-items-center mb-12">
          <LogoCard
            icon={BadgePercent}
            label="0% Interest"
            badgeColor="bg-blue-600 text-white"
          >
            <BajajLogo />
          </LogoCard>

          <LogoCard
            icon={CreditCard}
            label="No Down Payment"
            badgeColor="bg-green-600 text-white"
          >
            <BajajLogo />
          </LogoCard>
        </div>

        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-gray-500 bg-gray-50 p-4 rounded-lg"
          variants={containerVariants}
        >
          <p className="font-medium">*Terms & Conditions apply</p>
          <span className="hidden md:inline">•</span>
          <p>Processing fee will be extra</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
