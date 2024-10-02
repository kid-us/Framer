import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const ViewBasedAnimation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    console.log("Is in view =>", isInView);
  }, [isInView]);

  return (
    <>
      <div className="h-[150vh]"></div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-white h-[100vh]"
      ></motion.div>

      <div
        ref={ref}
        className={`${isInView ? "bg-blue-500" : "bg-red-500"}  h-[100vh]`}
        style={{
          transition: "1s background",
        }}
      ></div>
    </>
  );
};

export default ViewBasedAnimation;
