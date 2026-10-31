import { motion } from "framer-motion";
import TypeIt from "typeit-react";

export default function TypeWriter() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      Hi, I am&nbsp;
      <TypeIt
        options={{
          strings: ['Anurag', 'Web Developer', 'Software Developer'],
          speed: 100,
          breakLines: false,
          nextStringDelay: 1500,
          loop: true,
        }}
      />
    </motion.div>
  );
}
