import React from 'react'
import { motion } from 'framer-motion' 

const DishCard = ({ project }) => {
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity:1}}
    transition={{duration: 0.9, delay: 0.2}}
    viewport={{once: true}}
     className='hover:scale-100'>
        <img src={ project.image } alt={ project.title } className='rounded-3xl p-2'/>
        <div className='p-4'>
            <h3 className='mb-2 text-2xl font-bold tracking-tighter'>
                {project.title}
            </h3>
            <p className='text-sm'>
                {project.description}
            </p>
        </div>
    </motion.div>
  )
}

export default DishCard