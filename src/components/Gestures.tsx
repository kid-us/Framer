import { motion, MotionConfig } from "framer-motion";

const Gestures = () => {
  return (
    <div>
      <MotionConfig transition={{ duration: 0.5, ease: "easeInOut" }}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9, rotate: 2.9 }}
          className="bg-blue-800 w-[150px] rounded py-2 shadow shadow-white block"
        >
          Click Me!
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.7, rotate: -3 }}
          className="bg-red-800 w-[150px] rounded py-2 shadow shadow-white block mt-5"
        >
          Click Me!
        </motion.button>
      </MotionConfig>
    </div>
  );
};

export default Gestures;
