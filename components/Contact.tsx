"use client";

import { motion, MotionProps } from "framer-motion";
import { Mail, Phone } from "lucide-react";

const MotionDiv: React.FC<MotionProps & React.HTMLAttributes<HTMLDivElement>> =
  motion.div;

const MotionForm: React.FC<
  MotionProps & React.HTMLAttributes<HTMLFormElement>
> = motion.form;

const MotionButton: React.FC<
  MotionProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = motion.button;

export default function Contact() {



  return (
    <section id='contact' className='py-20 px-4 w-full max-w-2xl mx-auto'>
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className='text-center mb-12'>
        <h2 className='text-3xl font-bold mb-4'>Get In Touch</h2>
        <p className='text-gray-600 dark:text-gray-300'>
          Feel free to reach out for collaborations or just a friendly hello
        </p>
      </MotionDiv>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <MotionDiv
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='space-y-6'>
          <div className='flex items-start gap-4'>
            <Mail className='h-6 w-6 text-blue-600 dark:text-blue-400 mt-1' />
            <div>
              <h3 className='font-semibold mb-1'>Email</h3>
              <p className='text-gray-600 dark:text-gray-300'>
                ask@soft-lutions.com.ng
              </p>
            </div>
          </div>
          <div className='flex items-start gap-4'>
            <Phone className='h-6 w-6 text-blue-600 dark:text-blue-400 mt-1' />
            <div>
              <h3 className='font-semibold mb-1'>Phone</h3>
              <p className='text-gray-600 dark:text-gray-300'>
                +234 806 385 6120
              </p>
            </div>
          </div>
        </MotionDiv>

        {/* Contact Form */}
        <MotionForm
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='space-y-4'>
          <div>
            <input
              type='text'
              name='user_name'
              placeholder='Your Name'
              required
              className='w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700'
            />
          </div>
          <div>
            <input
              type='email'
              name='user_email'
              placeholder='Your Email'
              required
              className='w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700'
            />
          </div>
          <div>
            <textarea
              name='message'
              placeholder='Your Message'
              rows={4}
              required
              className='w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700'
            />
          </div>

          {/* Submit Button */}
          <MotionButton
            type='submit'
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className='w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg disabled:opacity-50'>
           Send
          </MotionButton>
        </MotionForm>
      </div>
    </section>
  );
}
