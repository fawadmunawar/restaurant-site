import React from 'react'
import video from '../assets/hero.mp4'
import logo from '../assets/logo.png'
import hero from "../assets/hero.jpeg"
import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <section className='relative flex h-screen items-center justify-center z-50'>
        <div className='absolute inset-0 -z-20 h-full w-full overflow-hidden'>
            <video src={ video } className='h-full w-full object-cover' muted autoPlay loop playsInline poster={ hero }></video>
        </div>
        <div className='absolute insent-0 -z-10 bg-gradient-to-b from-transparent from-70% to-black'></div> {/*for gradient*/}
        <div className='relative z-20 flex h-screen flex-col justify-end pb-20'>
            <motion.img
              initial={{ scale: 2 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: "400",
                damping: "30"
              }}
             src={ logo } alt="Restaura" className='w-full p-4'/>
            <p className='p-4 text-lg tracking-tighter text-white'>Paris</p>
        </div>
    </section>
  )
}

export default HeroSection