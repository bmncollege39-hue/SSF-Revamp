import childrenImg from "../assets/childrens.svg";
import peopleImgIcon from "../assets/People.png";
import trustImgIcon from "../assets/Trust.png";
import approvedImgIcon from "../assets/approved-icon.png";
import { easeIn, easeInOut, easeOut, motion, transform } from "motion/react";
export default function Home() {
  const parent = {
    show: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const child = {
    hidden: { filter: "blur(50px)" },
    show: {
      filter: "blur(0px",
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const statParent = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const statChild = {
    hidden: {
      opacity: 0,
      y: 40,
      filter: "blur(20px)",
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  const reveal = {
  hidden: { opacity: 0, clipPath: "inset(0 0 100% 0)" },
  show: {
    opacity: 1,
    clipPath: "inset(0 0 0% 0)",
    transition: {
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1], // cubic-bezier
    },
  },
};

  return (
    <div className="relative w-full min-h-screen bg-[url(./assets/grid.svg)] bg-contain bg-center">
      <div className="relative pt-32 pb-20 w-full bg-linear-to-b from-white/0 via-white to-white">
        <div className="content w-full max-w-6xl mx-auto space-y-14">
          <div className="f-content flex flex-col lg:flex-row items-center justify-between gap-10 w-full">
            <div className="text-content w-full lg:w-[60%] space-y-6 text-center lg:text-left">
              <motion.h1
                variants={parent}
                initial={"hidden"}
                animate={"show"}
                className="uppercase flex flex-col font-bold text-4xl sm:text-5xl lg:text-6xl space-y-4 tracking-tight leading-[100%]"
              >
                <motion.span variants={child}>
                  Emppower{" "}
                  <motion.span
                    variants={child}
                    className="capitalize bg-blue-500 text-white px-4 py-1"
                  >
                    Change
                  </motion.span>
                </motion.span>

                <motion.span variants={child}>Donate For Better</motion.span>

                <div className="relative w-fit mx-auto lg:mx-0 inline-block">
                  <motion.h1
                    variants={child}
                    className="font-black tracking-tight text-black text-5xl sm:text-6xl lg:text-7xl relative z-10"
                  >
                    TOMORROW
                  </motion.h1>
                  <motion.img
                    variants={child}
                    src="/underline.svg"
                    alt="line"
                    className="absolute -bottom-2 left-0 w-full -translate-y-1/2"
                  />
                </div>
              </motion.h1>

              <motion.p

                className="text-md sm:text-lg max-w-xl mx-auto lg:mx-0 font-medium text-zinc-500 tracking-wide"
              >
                Swastik Srijan Foundation, since 2013, has been creating lasting
                change in underprivileged communities. Through education,
                health, women empowerment, and livelihood programs, we have
                positively impacted tens of thousands of lives across India.
              </motion.p>

              <div className="btns space-x-5 flex justify-center lg:justify-start z-10 relative">
                <button className="px-4 py-2 bg-[#005EFF] text-white hover:bg-black font-semibold text-lg relative group transition-all duration-200 ease-in cursor-pointer">
                  <a href="#">
                    Donate Now
                    <span className="absolute group-hover:translate-x-0 group-hover:translate-y-0 inset-0 bg-black translate-x-1.5 translate-y-1.5 -z-1 transition-all duration-200 ease-in"></span>
                  </a>
                </button>

                <button className="px-4 py-2 bg-yellow-300 text-zinc-900 hover:bg-black hover:text-white font-semibold text-lg relative group transition-all duration-200 ease-in cursor-pointer">
                  <a href="#">
                    Join As Volunteer
                    <span className="absolute group-hover:translate-x-0 group-hover:translate-y-0 inset-0 bg-black translate-x-1.5 translate-y-1.5 -z-1 transition-all duration-200 ease-in"></span>
                  </a>
                </button>
              </div>
            </div>

            <motion.div
              initial={{
                x: 100,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.8,
                  ease: easeOut,
                },
              }}
              className="image w-full max-w-lg lg:w-[40%] relative overflow-hidden"
            >
              <img
                src={childrenImg}
                className="w-full h-auto object-cover"
                alt="children"
              />
            </motion.div>
          </div>

          <motion.div
            variants={statParent}
            initial="hidden"
            animate="show"
            className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap items-center justify-between gap-10 text-center sm:text-left"
          >
            <motion.div
              variants={statChild}
              className="flex items-center gap-3 mx-auto sm:mx-0"
            >
              <img src={peopleImgIcon} className="w-10" alt="" />
              <div>
                <p className="text-3xl font-black text-blue-700">50,000</p>
                <p className="font-medium text-lg">Lives Impacted</p>
              </div>
            </motion.div>

            <motion.div
              variants={statChild}
              className="flex items-center gap-3 mx-auto sm:mx-0"
            >
              <img src={trustImgIcon} className="w-10" alt="" />
              <div>
                <p className="text-3xl font-black text-blue-700">15,000</p>
                <p className="font-medium text-lg">Beneficiaries</p>
              </div>
            </motion.div>

            <motion.div
              variants={statChild}
              className="flex items-center gap-3 mx-auto sm:mx-0"
            >
              <img src={approvedImgIcon} className="w-10" alt="" />
              <div>
                <p className="text-3xl font-black text-blue-700">100+</p>
                <p className="font-medium text-lg">Programs Conducted</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
