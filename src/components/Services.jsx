import React from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import Heading from "./Heading";
import { check, service1, resumegenerator, career } from "../assets";
import { brainwaveServices } from "../constants";

const Services = () => {
  // Animation Variants for Fade and Slide-in
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const headerAnimation = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, type: "spring", stiffness: 100 } },
  };

  return (
    <Section id="how-to-use">
      <div className="container">
        {/* Header Section with Animations */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          variants={headerAnimation}
          viewport={{ once: true }}
        >
          <motion.h2 viewport={{ once: true, amount: 0.5 }} className="text-4xl font-bold mb-4">
            The Learn, Do, Lead Approach in JobSyncPros
          </motion.h2>
          <motion.p className="text-lg text-gray-500">
            The Learn, Do, Lead philosophy is integral to JobSyncPros, guiding users through a cycle of continuous growth and professional development.
          </motion.p>
        </motion.div>

        {/* Rest of the Content */}
        <div className="relative">
          {/* Smartest AI Section */}
          <motion.div
            className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <div
              className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto"
              style={{ backgroundImage: `url(${service1})` }}
            >
              <img
                src={service1}
                alt="Smartest AI"
                className="w-full h-full object-cover md:object-right"
                width={800}
                height={730}
              />
            </div>
            <motion.div
              className="relative z-1 max-w-[22rem] ml-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
            >
              <h4 className="h4 mb-4">Smartest AI</h4>
              <motion.p
                className="body-2 mb-[3rem] text-n-3"
                variants={fadeIn}
              >
                This flexibility makes JobSyncPros a powerful SaaS solution,
                bridging job-seeking, freelancing, and entrepreneurship
                under one unified platform with adaptive AI support.
              </motion.p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} alt="" />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Grid Section */}
          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            {/* Freelancers */}
            <motion.div
              className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  src={resumegenerator}
                  alt="Freelancers"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Freelancers</h4>
                <motion.p
                  className="body-2 mb-[3rem] text-n-3"
                  variants={fadeIn}
                >
                  Automated client management, proposal and invoice
                  generation, job matching, and skill development pathways.
                </motion.p>
              </div>
            </motion.div>

            {/* Job Seekers */}
            <motion.div
              className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Job Seekers</h4>
                <motion.p
                  className="body-2 mb-[2rem] text-n-3"
                  variants={fadeIn}
                >
                  Job alerts, AI-assisted resume tailoring, skill gap
                  analysis, and portfolio building.
                </motion.p>
              </div>
              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={career}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Job Seekers"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
