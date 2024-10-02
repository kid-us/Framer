import { useState } from "react";
import "./App.css";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  return (
    <>
      <div className="container mx-auto py-5">
        <div className="grid justify-center items-center h-[100vh] gap-7">
          <div>
            <motion.button
              onClick={() => setIsVisible(!isVisible)}
              className="bg-blue-800 rounded py-2 mb-2 w-[150px]"
              layout
            >
              Show / Hide
            </motion.button>

            <AnimatePresence mode="popLayout">
              {isVisible && (
                <motion.div
                  initial={{ rotate: "0deg", scale: 0 }}
                  animate={{ rotate: "180deg", scale: 1 }}
                  exit={{ rotate: "0deg", scale: 0 }}
                  transition={{ duration: 1, ease: "backInOut" }}
                  className="w-[150px] h-[150px] bg-white"
                ></motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
