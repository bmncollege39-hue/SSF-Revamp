import childrenImg from "../assets/childrens.svg";
import peopleImgIcon from "../assets/People.png";
import trustImgIcon from "../assets/Trust.png";
import approvedImgIcon from "../assets/approved-icon.png";

export default function Home() {
  return (
    <div className="relative w-full h-screen bg-[url(./assets/grid.svg)]">
      <div className="relative top-[20%] mx-auto my-0 w-full h-[80vh] bg-gradient-to-b to-orange-50 from-white/60">
        <div className="content w-6xl mx-auto my-0 space-y-12">
          <div className="f-content flex items-center justify-between w-full">
            <div className="text-content w-[60%] space-y-6">
              <h1 className="uppercase flex flex-col font-bold lg:text-4xl space-y-4 tracking-wide">
                <span>
                  Emppower{" "}
                  <span className="capitalize bg-blue-500 text-white px-4 py-1">
                    Change
                  </span>
                </span>
                <span>Donate For Better</span>
                <div className="relative w-fit inline-block">
                  <h1 className=" font-black tracking-tight text-black relative z-10">
                    TOMORROW
                  </h1>
                  <svg
                    className="absolute -bottom-1 left-0 w-full -translate-y-1/2"
                    viewBox="0 0 600 20"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,10 Q150,0 300,10 T600,10"
                      stroke="yellow"
                      strokeWidth="14"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </h1>
              <p className="text-sm font-medium text-zinc-500 tracking-wide">
                Swastik Srijan Foundation, since 2013, has been creating lasting
                change in underprivileged communities. Through education,
                health, women empowerment, and livelihood programs, we have
                positively impacted tens of thousands of lives across India.
              </p>
              <div className="btns space-x-5">
                <button className="px-4 py-2 bg-[#005EFF] text-neutral-50 hover:bg-black hover:text-neutral-50 font-semibold text-lg relative group transition-all duration-200 ease-in cursor-pointer">
                  <a href="#">
                    Donate Now{" "}
                    <span class="absolute group-hover:translate-x-0 group-hover:translate-y-0 inset-0 bg-black translate-x-1.5 translate-y-1.5 -z-1 transition-all duration-200 ease-in"></span>
                  </a>
                </button>
                <button className="px-4 py-2 bg-[#ffff00] text-zinc-900 hover:bg-black hover:text-neutral-50 font-semibold text-lg relative group transition-all duration-200 ease-in cursor-pointer">
                  <a href="#">
                    Join As Volunteer{" "}
                    <span class="absolute group-hover:translate-x-0 group-hover:translate-y-0 inset-0 bg-black translate-x-1.5 translate-y-1.5 -z-1 transition-all duration-200 ease-in"></span>
                  </a>
                </button>
              </div>
            </div>
            <div className="image min-h-20 w-[30%] relative overflow-hidden">
              <img
                src={childrenImg}
                className="w-full h-full object-cover"
                alt=""
              />
              <span class="absolute group-hover:translate-x-0 group-hover:translate-y-0 inset-0 bg-black translate-x-1.5 translate-y-1.5 -z-1 transition-all duration-200 ease-in"></span>
            </div>
          </div>
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-2">
              <img src={peopleImgIcon} className="w-10" alt="" />
              <div className="">
                <p className="text-2xl font-bold text-blue-500">50,000</p>
                <p className="font-medium">Lives Impacted</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img src={trustImgIcon} className="w-10" alt="" />
              <div className="">
                <p className="text-2xl font-bold text-blue-500">15,000</p>
                <p className="font-medium">Beneficiaries</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img src={approvedImgIcon} className="w-10" alt="" />
              <div className="">
                <p className="text-2xl font-bold text-blue-500">100+</p>
                <p className="font-medium">Programs Conducted</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
