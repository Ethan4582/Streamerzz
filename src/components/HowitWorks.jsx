import React from 'react'
import { HOW_IT_WORKS_CONTENT } from '../constants'

import { motion } from 'framer-motion'
function HowitWorks() {
   const  stepsVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease:"easeInOut",
      },
    }),
   }

  return (
    <section id='work'>
      <div
      className='max-w-7xl mx-auto px-4'>
        <motion.div 
          initial={{ opacity: 0 , y:-20}}
          animate={{ opacity: 1 , y:0}}
          transition={{duration: 0.5, ease: "easeInOut"}}
        className='text-center mb-12 border-t border-neutral-800'>
          <h2 className='text-3xl lg:text-5xl mb-20 tracking-tighter bg-gradient-to-t from-neutral-50 via-neutral-300 to-neutral-600 bg-clip-text text-transparent mt-6'>
            {HOW_IT_WORKS_CONTENT.sectionTitle}
          </h2>
          <p className='mt-4 text-neutral-400 max-w-xl mx-auto'>
            {HOW_IT_WORKS_CONTENT.sectionDescription}
          </p>
        </motion.div>
        <motion.div 
          initial='hidden'
          whileInView='visible'
          variants={{
            visible:{
               transition:{
                  staggerChildren: 0.2,
               }
            }
          }}
          
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {HOW_IT_WORKS_CONTENT.steps.map((steps, index) => (
            <motion.div
            custom={index}
            variants={stepsVariants}
            key={index} className='bg-neutral-900 p-6 rounded-xl shadow-lg flex flex-col justify-between'>
              <div>
                <h3 className='text-xl font-semibold mb-4'>{steps.title}</h3>
                <p className='text-neutral-400 mb-4'>{steps.description}</p>
              </div>
              <div className='flex justify-center'>
                  <img
                     src={steps.imageSrc}
                     alt={steps.imageAlt}
                     className=' rounded-lg mt-3'
                  />
              </div>


              {steps.users && (
               <div className='flex justify-between items-center mt-4 '>
                 <div className='flex -space-x-2'>
                  {steps.users.map((user, userIndex) => (
                    <img
                      key={userIndex}
                      src={user}
                      alt={`Person ${userIndex + 1}`}
                      className="h-8 w-8 rounded-full border-2 border-black object-cover"
                    />
                  ))}
                 </div>
                 
                 <button className='bg-blue-700 hover:bg-blue-500 text-white py-2 px-4 rounded-lg'> Connect</button>
               </div>
              )}
              
            </motion.div>
          ))}
        </motion.div>
       
      </div>
    </section>
  )
}

export default HowitWorks
