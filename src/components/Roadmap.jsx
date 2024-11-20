import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";

const Roadmap = () => {
  // Animation Variants for Fade and Slide-in
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const headerAnimation = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: "spring", stiffness: 100 } },
  };

  return (
    <Section className="overflow-hidden" id="roadmap">
      <div className="container md:pb-10">
        {/* Animated Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={headerAnimation}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <motion.h2 className="text-4xl font-bold mb-4">
            Ready to get started
          </motion.h2>
          <motion.h3 className="text-xl font-light text-n-3">
            Here’s how it works:
          </motion.h3>
        </motion.div>

        {/* Animated Description */}
        <motion.p
          className="body-2 mb-[5rem] text-n-3"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          The Course Recommendation feature in JobSyncPros is highly innovative,
          leveraging AI to provide personalized learning paths based on users' skills,
          career goals, and current market demands.
        </motion.p>

        {/* Animated Roadmap Grid */}
        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {roadmap.map((item) => (
            <motion.div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
              key={item.id}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }}
            >
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="absolute top-0 left-0 max-w-full">
                  <img
                    className="w-full"
                    src={grid}
                    width={550}
                    height={550}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-1">
                  <div className="mb-10 -my-10 -mx-15">
                    <img
                      className="w-full"
                      src={item.imageUrl}
                      width={628}
                      height={426}
                      alt={item.title}
                    />
                  </div>
                  <motion.h4
                    className="h4 mb-4"
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeInUp}
                  >
                    {item.title}
                  </motion.h4>
                  <motion.p
                    className="body-2 text-n-4"
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeInUp}
                  >
                    {item.text}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated Button */}
        <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
          >
            <Button href="/roadmap">Our roadmap</Button>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default Roadmap;
