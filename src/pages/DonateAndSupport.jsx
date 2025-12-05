import GroupedImg from "../components/GroupedImg";

const DonateAndSupport = () => {
  return (
    <div className="min-h-screen w-full">
      <div
        className="wrapper max-w-6xl mx-auto mt-28 mb-4
       p-4 lg:p-0 flex flex-col gap-10 items-center justify-center"
      >
        <h1 className="font-black text-4xl text-center">
          Why <span className="text-blue-500">Donate</span> Us ?
        </h1>

        {/* hero Image with content */}
        <div className="main_content w-full grid lg:grid-cols-2 text-center lg:text-start">
          <div className="flex items-center justify-center lg:justify-start">
            <GroupedImg />
          </div>
          <div className="text py-4 space-y-4">
            <h4 className="font-bold text-2xl">
              Here’s why your support matters:
            </h4>
            <p className="">
              “We are a certified and trustworthy NGO, registered under 12A and
              80G to ensure full transparency, ethical operations, and
              tax-deductible donations. Every rupee is used responsibly, and we
              keep you informed with regular updates and impact reports. Your
              support creates a strong social impact by helping us drive
              education, healthcare, rural development, and empowerment for
              those who need it most. We work to build self-reliant communities
              by addressing key issues such as health, education, the
              environment, and women empowerment. You can choose to donate in a
              way that suits you—whether it’s one-time, monthly, or toward a
              specific project. Your contribution also helps us advance the
              United Nations Sustainable Development Goals, creating a better
              future for all”
            </p>
          </div>
        </div>

        {/* Two cards Container */}
        <div className="card_container w-full grid lg:grid-cols-2 gap-20">
          <div className="w-full bg-zinc-100 border rounded-xs border-zinc-500 hover:scale-105 p-4 space-y-4 shadow-[5px_5px_0px_#333] hover:shadow-[0px_0px_0px_#fff] duration-200 transition-all ease-in-out">
            <h3 className="text-3xl font-bold tracking-wide">WHAT IS <span className="text-blue-500">12A ?</span> </h3>
            <p>12A Registration Recognizes us as a verified non-profit and ensures your contributions go directly toward genuine charitable work.</p>
          </div>

          <div className="w-full bg-zinc-100 border rounded-xs border-zinc-500 hover:scale-105 p-4 space-y-4 shadow-[5px_5px_0px_#333] hover:shadow-[0px_0px_0px_#fff] duration-300 transition-all ease-in-out">
            <h3 className="text-3xl font-bold tracking-wide">WHAT IS <span className="text-blue-500">80G ?</span> </h3>
            <p>80G Certification Makes your donation eligible for tax benefits, helping you support good causes while reducing taxable income.</p>
          </div>
        </div>

        {/* Donate Button with dotted line */}
        <div className="relative w-full min-h-20 my-6 flex items-center justify-center">
          <img src="./images/dotted_line.png" alt="" />
          <button className="absolute text-white bg-[#005EFF] px-30 py-4 cursor-pointer active:scale-95 shadow-[5px_5px_0px_#333] hover:shadow-[0px_0px_0px_#fff] duration-300 transition-all ease-in-out text-xl tracking-wide font-bold">Donate</button>
        </div>

      </div>
    </div>
  );
};

export default DonateAndSupport;
