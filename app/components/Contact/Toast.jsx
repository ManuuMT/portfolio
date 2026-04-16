import { motion, AnimatePresence } from "framer-motion";

const Toast = ({ message, isToastOpen }) => {
  return (
    <AnimatePresence>
      {isToastOpen ? (
        <motion.div
          className="fixed bottom-4 left-6"
          animate={{ y: "0%" }}
          initial={{ y: "150%" }}
          exit={{ y: "150%" }}
          transition={{
            ease: "backOut",
            duration: 0.8,
            type: "spring",
          }}
        >
          <div className=" bg-white px-4 py-2 rounded-xl">
            <h1 className=" text-black text-2xl">{message}</h1>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default Toast;
