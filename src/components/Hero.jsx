import { HERO_CONTENT } from "../constants";
import profile from "../assets/TanyaJainProfile.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: {duration: 0.5, delay: delay},
},
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                <motion.h1
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className="pb-16 text-6xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent lg:mt-16 lg:text-8xl">Tanya Jain
                </motion.h1>
                
                <motion.p 
                  variants={container(0.5)}
                  initial="hidden"
                  animate="visible"
                  className="my-2 max-w-xl py-6 font-light text-neutral-200 text-justify">{HERO_CONTENT}
                </motion.p>
            </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
                <motion.img className="w-80 h-80 object-cover rounded-full" 
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{duration: 1, delay: 0.5}}
                  src={profile} alt="Profile Picture"></motion.img>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
