'use client'

import { Mail, Phone, Terminal } from "lucide-react";
import {motion, MotionProps} from 'framer-motion'
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";

const MotionDiv = motion.div as React.ComponentType<
  MotionProps & React.HTMLAttributes<HTMLDivElement>
>;

export function ContactModal() {
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    setAnimate(true); // Start animation when component mounts
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* <Button variant='outline'>Share</Button> */}

        <Button
          variant='outline'
          className='group px-8 py-6 rounded-full border border-gray-300/50 dark:border-gray-700/50 font-medium hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 hover:-translate-y-0.5'>
          <span className='flex items-center gap-2'>
            Let&apos;s Talk
            <Terminal className='h-4 w-4 group-hover:rotate-12 transition-transform' />
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle>Get In Touch</DialogTitle>
          <DialogDescription>
            Feel free to reach out for business or collaboration.
          </DialogDescription>
        </DialogHeader>
        <div className='flex flex-col sm:flex-row gap-2 items-start sm:items-center sm:justify-center py-8'>
          <Button
            variant='outline'
            asChild
            className='relative group rounded-full'>
            <a href='tel:+2348063856120' className='flex items-center gap-2'>
              <p className='text-gray-600 dark:text-gray-300'>
                +234 806 385 6120
              </p>

              <MotionDiv
                className='relative'
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}>
                <Phone
                  className={`h-6 w-6 text-blue-600 dark:text-blue-400 transition-transform duration-500 group-hover:rotate-45`}
                />
              </MotionDiv>
            </a>
          </Button>

          <Button
            variant='outline'
            asChild
            className='relative group rounded-full'>
            <a
              href='mailto:ask@soft-lutions.com.ng'
              className='flex items-center gap-2'>
              <p className='text-gray-600 dark:text-gray-300'>
                ask@soft-lutions.com.ng
              </p>

              {/* <MotionDiv
                className='relative'
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}>
                <Mail
                  className={`h-6 w-6 text-blue-600 dark:text-blue-400 transition-transform duration-500 group-hover:rotate-45 ${
                    animate ? "envelope" : ""
                  }`}
                />
              </MotionDiv> */}

              <Mail
                className={`h-6 w-6 text-blue-600 dark:text-blue-400 transition-transform duration-500 group-hover:rotate-45 ${
                  animate ? "envelope" : ""
                }`}
              />
            </a>
          </Button>
        </div>
        <DialogFooter className='sm:justify-start'>
          <DialogClose asChild>
            <Button type='button' variant='secondary'>
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
