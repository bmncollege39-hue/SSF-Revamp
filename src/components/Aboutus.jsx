import image1 from "../assets/image1.png";

function Aboutus() {
  return (
    <div  className="relative min-h-screen w-full bg-[url(./assets/grid.svg)] bg-contain mt-10 px-4">

      <div id="about" className="relative pt-20 pb-20 w-full bg-gradient-to-t from-white/0 via-white to-white flex flex-col items-center">

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl  font-semibold italic mt-5 text-center">
          About Us - Swastik Srijan Foundation
        </h1>

        {/* Subheading */}
        <p className="mt-3 text-zinc-500 font-semibold text-center text-sm md:text-base max-w-lg">
          Dedicated to uplifting communities through focused initiatives in
          education, healthcare, and sustainable development.
        </p>

        {/* Image */}
        <img
          src={image1}
          className="w-full max-w-6xl mt-8   object-contain"
          alt="About us visual"
        />

        {/* Content Paragraph */}
        <p className="max-w-6xl text-center text-zinc-600 mt-7 text-xl lg:text-xl leading-relaxed ">

          <b className="text-black">Swastik Srijan Foundation</b> is a catalyst for positive change in India.
          Established in <b className="text-black">2013</b>, we have remained a beacon of hope, fostering a brighter
          future through impactful initiatives nationwide. As a registered
          <b className="text-black"> non-profit organization</b> under the Madhya Pradesh Registration Act of 1973
          (Reg. No. 11448/13), we are dedicated to uplifting society
          <b className="text-black"> throughout India.</b>

          <br /><br />

          Our mission is to empower communities and transform lives through sustainable programs in
          education, healthcare, rural development, women's empowerment, and environmental awareness.
          We aim to create long-lasting impact by working directly with communities and building
          partnerships with <b className="text-black">volunteers</b>, <b className="text-black">corporates</b>, and other <b className="text-black">NGOs.</b>
        </p>
      </div>
    </div>
  );
}

export default Aboutus;
