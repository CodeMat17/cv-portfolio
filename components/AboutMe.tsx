import { motion, MotionProps } from "framer-motion";
import React, { HTMLAttributes } from "react";

const MotionH1: React.FC<MotionProps & HTMLAttributes<HTMLHeadingElement>> =
  motion.h1;

const MotionSection: React.FC<MotionProps & HTMLAttributes<HTMLElement>> =
  motion.section;

const MotionP: React.FC<MotionProps & HTMLAttributes<HTMLParagraphElement>> =
  motion.p;

const AboutMe = () => {
  return (
    <section id='aboutMe'>
      <MotionSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='max-w-3xl mx-auto py-12 px-6 text-gray-600 dark:text-gray-300'>
        <MotionH1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className='text-3xl font-bold text-center mb-6'>
          About Me
        </MotionH1>
        <MotionP
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className='text-lg leading-relaxed'>
          I&apos;m <span className='font-semibold'>Matthew (CodeMat)</span>, a
          highly skilled full-stack web developer with a specialization as a
          Mobile Web Specialist (MWS). With over 12 years of experience in
          software development, I am dedicated to crafting intuitive,
          responsive, and dynamic online experiences that prioritize user
          engagement and seamless functionality.
        </MotionP>
        <MotionP
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className='mt-4 text-lg leading-relaxed'>
          My passion for technology extends beyond coding. I believe in lifelong
          learning and staying at the cutting edge of web technologies to
          deliver innovative solutions. As a mentor, I have actively contributed
          to growing the next generation of developers, having facilitated
          meetups across Africa (both physically and remotely) for Google Africa
          through the Andela Learning Community (ALC) program for three seasons.
        </MotionP>
        <MotionP
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className='mt-4 text-lg leading-relaxed'>
          In addition to my technical expertise, I studied Policy, Strategy, and
          Leadership Course (PSLC 20) at the prestigious National Institute for
          Policy and Strategic Studies (NIPSS), Kuru, Jos, Nigeria. This has
          refined my ability to align technology with strategic leadership,
          enabling me to create impactful digital solutions that drive
          innovation and efficiency.
        </MotionP>
        <MotionP
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className='mt-4 text-lg leading-relaxed'>
          I am eager to collaborate with forward-thinking companies and
          individuals to bring visionary ideas to life. Let&apos;s work together
          to build something truly extraordinary!
        </MotionP>
      </MotionSection>
    </section>
  );
};

export default AboutMe;
