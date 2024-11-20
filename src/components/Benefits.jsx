import React from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import Heading from "./Heading";
import { benefits } from "../constants";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

const Benefits = () => {
  // Combined Animation Variants
  const combinedVariants = {
    hidden: { opacity: 0, y: 50, scale: 1 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1.05, // This is the hover effect for the card
      transition: { duration: 0.6, type: "spring", stiffness: 100 },
    },
  };

  const headerAnimation = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, type: "spring", stiffness: 100 } },
  };

  return (
    <Section id="features">
      <div className="container relative z-2">
        {/* Animated Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={headerAnimation}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Heading className="md:max-w-md lg:max-w-2xl ml-7" title="Our Key Features" />
        </motion.div>

        {/* Benefits Cards Section */}
        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <motion.div
              key={item.id}
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              initial="hidden"
              whileInView="visible"
              variants={combinedVariants} // Use the combined variants here
              viewport={{ once: true }}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <motion.h5
                  className="h5 mb-5"
                  initial="hidden"
                  whileInView="visible"
                  variants={combinedVariants} // Use the combined variants for header too
                >
                  {item.title}
                </motion.h5>
                <motion.p
                  className="body-2 mb-6 text-n-3"
                  initial="hidden"
                  whileInView="visible"
                  variants={combinedVariants} // Use the combined variants for text too
                >
                  {item.text}
                </motion.p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore More
                  </p>
                  <Arrow />
                </div>
              </div>
              {item.light && <GradientLight />}
              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
              <ClipPath />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
