import { ArrowRightIcon } from "lucide-react";
import { GhostButton } from "./Buttons";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center px-6 bg-linear-to-b from-black/50 to-transparent relative overflow-hidden"
    >
      {/* LEFT CONTENT */}
      <div className="relative z-10 max-w-xl">
        <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 p-12 md:p-16">
          <motion.h2
            className="text-3xl sm:text-4xl font-semibold mb-6 text-white"
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 250, damping: 70 }}
          >
            Contact
          </motion.h2>

          <motion.p
            className="text-gray-300 mb-10"
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 70,
              delay: 0.2,
            }}
          >
            Contact us today to discuss your project and discover how we can
            help you achieve your goals with stunning design and seamless user
            experiences.
          </motion.p>

          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 70,
              delay: 0.3,
            }}
          >
            <GhostButton className="px-8 py-3 gap-2 bg-white/20 text-white hover:bg-white/30 backdrop-blur-md">
              Contact <ArrowRightIcon size={20} />
            </GhostButton>
          </motion.div>
        </div>
      </div>

      {/* GLOW EFFECT */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* LIGHT STREAK */}
      <motion.div
        initial={{ opacity: 0, x: 300 }}
        whileInView={{ opacity: 0.6, x: 0 }}
        transition={{ duration: 1.5 }}
        className="absolute top-1/3 right-0 w-[400px] h-[2px] bg-gradient-to-l from-white/70 to-transparent blur-sm"
      />

      {/* CHARACTER */}
      <motion.img
        src="https://files.catbox.moe/17g31l.svg"
        alt="character"
        className="absolute bottom-0 right-0 h-[100vh] w-auto object-contain pointer-events-none"
        initial={{ x: 200, opacity: 0, filter: "blur(20px)" }}
        animate={{
          x: 0,
          opacity: 1,
          filter: "blur(0px)",
          y: [0, -10, 0],
        }}
        transition={{
          x: { type: "spring", stiffness: 120, damping: 20 },
          opacity: { duration: 1 },
          filter: { duration: 1.2 },
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />
    </section>
  );
}
