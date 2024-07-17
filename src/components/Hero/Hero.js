import heroVideo from "../../assets/Hero.mp4"
import "./HeroStyles.css";
import { motion } from "framer-motion";
function Hero(){
    const text = "Success & efficiency are our mottoes for a thriving partnership.".split(" ");
    return <div className="hero">
        <video autoPlay loop muted  className="hero-video"><source src={heroVideo}></source></video>
        <motion.div className="hero-text">
            <motion.h1           
            initial={{ opacity: 0 }}
           animate={{ opacity: 1 }} 
           transition={{
            duration: 1.5
          }}
           >GO <br/>Partners</motion.h1>
            <p>{text.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: i / 10
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
        ))}</p>
        <motion.button initial={{scale:0}} animate={{scale:1}} transition={{duration:0.4,delay:2}}>Learn More</motion.button>
        </motion.div>
            
        
    </div>
}
export default Hero;