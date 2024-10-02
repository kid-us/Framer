import { motion, useAnimationControls } from "framer-motion";

const AnimationControls = () => {
  const controls = useAnimationControls();

  const handleFlip = () => {
    controls.start("flip");
  };

  return (
    <div>
      <button
        onClick={handleFlip}
        className="bg-blue-800 w-[150px] rounded p-2 mb-3 block"
      >
        Flip It!
      </button>

      <motion.div
        variants={{
          initial: { rotate: "0deg" },
          flip: { rotate: "360deg" },
        }}
        transition={{ duration: 0.5 }}
        initial={"initial"}
        animate={controls}
        className="w-[150px] h-[150px] bg-white"
      ></motion.div>
    </div>
  );
};

export default AnimationControls;
