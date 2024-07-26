import React from "react";
import missionImg from "../assets/mission.jpeg";
import mission from "../assets/mission.mp4";
import { MISSION } from "../constants";
import { motion } from "framer-motion";

const Mission = () => {
  return (
    <section id="mission">
      <div className="container mx-auto text-center">
        <h2 className="mb-8 text-3xl lg:text-4xl">Our Mission</h2>
        <div className="relative flex items-center justify-center">
          <motion.video
            className="w-full rounded-3xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            autoPlay
            muted
            loop
            playsInline
            poster={missionImg}
            src={mission}
          ></motion.video>
          <div className="absolute h-full w-full rounded-3xl bg-black/40"></div>
          <motion.p
            className="absolute max-w-lg tracking-tighter lg:text-3xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, type: "just" }}
          >
            {MISSION}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
