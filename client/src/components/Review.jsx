import React from "react";
import { REVIEW } from "../constants";
import xaviour from "../assets/xaviour.jpeg";
import customer1 from "../assets/customer1.jpeg";
import customer2 from "../assets/customer2.jpeg";
import customer3 from "../assets/customer3.jpeg";
import customer4 from "../assets/customer4.jpeg";
import { motion } from "framer-motion";

const Review = () => {
  return (
    <section className="container mx-auto mb-8 mt-12 " id="review">
      <div className="flex flex-col px-6">
        <motion.p className="mb-10 text-2xl font-light leading-none tracking-tighter lg:mx-40 lg:mt-40 lg:text[3.5rem]"
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.8}}
        >
          {REVIEW.content}
        </motion.p>
        <motion.div className="flex items-center justify-center gap-6"
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.5, damping: 100}}
          viewport={{once: true}}
        >
          <img
            src={xaviour}
            alt={REVIEW.name}
            className="rounded-full border "
            width={80}
            height={80}
          />
          <div className="tracking-tighter">
            <h6>{REVIEW.name}</h6>
            <p className="text-sm text-neutral-500">{REVIEW.profession}</p>
          </div>
        </motion.div>
      </div>
      <div className="mt-20 flex flex-col items-center justify-center gap-2 lg:flex-row">
        {[customer1, customer2, customer3, customer4].map((customer, index) => (
          <motion.img src={customer} key={index} alt="customer" className="h-[300px] w-[200px] rounded-br-3xl rounded-tl-3xl object-cover"
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 1}}
          />
        ))}
      </div>
    </section>
  );
};

export default Review;
