import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { curve, heroBackground, backImg, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";

const Hero = () => {
  const parallaxRef = useRef(null);

  // Framer Motion Variants
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Section className="pt-[12rem] -mt-[5.25rem]" customPaddings id="hero">
      <div className="container relative" ref={parallaxRef}>
        <div
          className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]"
          ref={ref}
        >
          {/* Animated Heading */}
          <motion.h1
            className="h1 mb-6 font-medium"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={textVariants}
          >
            JobSyncPros
          </motion.h1>

          {/* Animated Paragraph */}
          <motion.p
            className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={textVariants}
          >
            JobSyncPros is a specialized platform that uses advanced AI
            agents to empower individuals and businesses in the job market,
            from freelancers and job-seekers to small businesses and
            entrepreneurs. JobSyncPros integrates multiple technologies and
            frameworks to deliver a Software-as-a-Service (SaaS) solution
            with unique features targeting various stages of professional
            growth and operational efficiency.
          </motion.p>

          <Button href="/pricing" white>
            Get started
          </Button>
        </div>

        {/* Other Elements */}
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={robot}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />
                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />
                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>
                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Resume generation"
                  />
                </ScrollParallax>
              </div>
            </div>
            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]"></div>
        </div>

        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>
    </Section>
  );
};

export default Hero;
