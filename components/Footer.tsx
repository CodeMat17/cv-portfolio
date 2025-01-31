"use client";

import { motion, MotionProps } from "framer-motion";
import { HTMLAttributes } from "react";

const MotionDiv: React.FC<MotionProps & HTMLAttributes<HTMLDivElement>> = motion.div

const MotionP: React.FC<MotionProps & HTMLAttributes<HTMLParagraphElement>> = motion.p

export default function Footer() {
  return (
    <footer className='w-full bg-white dark:bg-gray-900 py-4'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex flex-col items-center'>
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='flex gap-6 mb-2'>
            {/* <Link
              href='https://github.com/yourusername'
              target='_blank'
              className='text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'>
              <Github className='h-6 w-6' />
            </Link> */}
            {/* <Link
              href='https://linkedin.com/in/yourusername'
              target='_blank'
              className='text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'>
              <Linkedin className='h-6 w-6' />
            </Link> */}
            {/* <Link
              href='https://twitter.com/yourusername'
              target='_blank'
              className='text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'>
              <Twitter className='h-6 w-6' />
            </Link> */}
          </MotionDiv>
          <MotionP
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='text-gray-600 dark:text-gray-400 text-center'>
            © {new Date().getFullYear()} CodeMat. All rights reserved.
          </MotionP>
        </div>
      </div>
    </footer>
  );
}
