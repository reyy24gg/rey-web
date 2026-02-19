import { ArrowRightIcon, ZapIcon, CheckIcon } from "lucide-react";
import { PrimaryButton, GhostButton } from "./Buttons";
import { motion } from "framer-motion";

export default function Hero() {
  const trustedUserImages = [
    "https://files.catbox.moe/ja1wre.jpg",
    "https://files.catbox.moe/e6bxnf.jpg",
    "https://files.catbox.moe/zuhi48.jpg",
  ];

  const mainVideoUrl = "https://files.catbox.moe/140a0r.mp4";

  const galleryStripImages = [
    "https://files.catbox.moe/n59gpp.webp",
    "https://files.catbox.moe/pvveq6.jpg",
    "https://files.catbox.moe/oejjre.jpg",
  ];

  const trustedLogosText = [
    "Wuthering Waves",
    "Honkai Star Rails",
    "Etheria Restart",
    "Mobile Legends",
    "Arknights Enfield",
  ];

  return (
    <>
      <section id="home" className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 min-h-screen max-md:w-screen max-md:overflow-hidden pt-32 md:pt-26 flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="text-left">
              <motion.a
                href="#!"
                className="inline-flex items-center gap-3 pl-3 pr-4 py-1.5 rounded-full bg-white/10 mb-6 justify-start"
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 70,
                  mass: 1,
                }}
              >
                <div className="flex -space-x-2">
                  {trustedUserImages.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`Client ${i + 1}`}
                      className="size-6 rounded-full border border-black/50"
                      width={40}
                      height={40}
                    />
                  ))}
                </div>
                <span className="text-xs text-gray-200/90">
                  100+ buyers trust rayzen store
                </span>
              </motion.a>

              <motion.h1
                className="text-4xl md:text-5xl font-bold leading-tight mb-6 max-w-xl"
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 70,
                  mass: 1,
                  delay: 0.1,
                }}
              >
                Rayzen Store <br />
                <span className="text-3xl bg-clip-text text-transparent bg-linear-to-r from-indigo-300 to-indigo-400">
                  Secure & Premium Accounts
                </span>
              </motion.h1>

              <motion.p
                className="text-gray-300 max-w-lg mb-8"
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 70,
                  mass: 1,
                  delay: 0.2,
                }}
              >
                Rayzen Store Premium Game Accounts. Skip the grind and start
                your journey with elite ranks, rare skins, and unlocked legends.
                Secure, verified, and ready for battle. Get your account now
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row items-center gap-4 mb-8"
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 70,
                  mass: 1,
                  delay: 0.3,
                }}
              >
                <a href="#" className="w-full sm:w-auto">
                  <PrimaryButton className="max-sm:w-full py-3 px-7">
                    View Price
                    <ArrowRightIcon className="size-4" />
                  </PrimaryButton>
                </a>

                <GhostButton className="max-sm:w-full max-sm:justify-center py-3 px-5">
                  Why Choose Rayzen Store
                </GhostButton>
              </motion.div>

              <motion.div
                className="flex sm:inline-flex overflow-hidden items-center max-sm:justify-center text-sm text-gray-200 bg-white/10 rounded"
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 70,
                  mass: 1,
                  delay: 0.1,
                }}
              >
                <div className="flex items-center gap-2 p-2 px-3 sm:px-6.5 hover:bg-white/3 transition-colors">
                  <ZapIcon className="size-4 text-sky-500" />
                  <div>
                    <div>Full Service Guide</div>
                    <div className="text-xs text-gray-400">
                      Step-by-step guide
                    </div>
                  </div>
                </div>

                <div className="hidden sm:block h-6 w-px bg-white/6" />

                <div className="flex items-center gap-2 p-2 px-3 sm:px-6.5 hover:bg-white/3 transition-colors">
                  <CheckIcon className="size-4 text-cyan-500" />
                  <div>
                    <div>Trusted</div>
                    <div className="text-xs text-gray-400">
                      100% positive reviews
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: modern mockup card */}
            <motion.div
              className="mx-auto w-full max-w-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 70,
                mass: 1,
                delay: 0.5,
              }}
            >
              <motion.div className="rounded-3xl overflow-hidden border border-white/6 shadow-2xl bg-linear-to-b from-black/50 to-transparent">
                <div className="relative aspect-16/10 bg-gray-900">
                  <video
                    src={mainVideoUrl}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover object-center"
                  >
                    Browser does not support the video tag.
                  </video>

                  <div className="absolute left-4 top-4 px-3 py-1 rounded-full bg-black/15 backdrop-blur-sm text-xs">
                    Rayzen Store
                  </div>

                  <div className="absolute right-4 bottom-4">
                    <button className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-white/6 backdrop-blur-sm hover:bg-white/10 transition focus:outline-none">
                      <span className="text-xs">Your better experience</span>
                    </button>
                  </div>
                </div>
              </motion.div>

              <div className="mt-4 flex gap-3 items-center justify-start">
                {galleryStripImages.map((src, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 250,
                      damping: 70,
                      mass: 1,
                      delay: 0.1 + i * 0.1,
                    }}
                    className="w-14 h-10 rounded-lg overflow-hidden border border-white/6"
                  >
                    <img
                      src={src}
                      alt="project-thumbnail"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
                <motion.div
                  className="text-sm text-gray-400 ml-2 flex items-center gap-2"
                  initial={{ y: 60, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 70,
                    mass: 1,
                    delay: 0.2,
                  }}
                >
                  <div className="relative flex h-3.5 w-3.5 items-center justify-center">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping duration-300" />

                    <span className="relative inline-flex size-2 rounded-full bg-green-600" />
                  </div>
                  100+ sold accounts
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LOGO MARQUEE */}
      <motion.section
        className="border-y border-white/6 bg-white/1 max-md:mt-10"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="w-full overflow-hidden py-6">
            <div className="flex gap-14 items-center justify-center animate-marquee whitespace-nowrap">
              {trustedLogosText.concat(trustedLogosText).map((logo, i) => (
                <span
                  key={i}
                  className="mx-6 text-sm md:text-base font-semibold text-gray-400 hover:text-gray-300 tracking-wide transition-colors"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
