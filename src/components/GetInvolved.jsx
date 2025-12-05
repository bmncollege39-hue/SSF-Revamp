import { FaArrowRightLong } from "react-icons/fa6";

function Getinvolved() {
  return (
    <div id="join-us" className="min-h-screen w-full flex flex-col items-center py-6 px-4">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-semibold italic mt-10 text-center">
        Get Involved - Swastik Srijan Foundation
      </h1>

      <p className="mt-3 text-zinc-500 font-semibold text-center text-sm md:text-base">
        Join us to create impact in education, health, woman empowerment,
        <br className="hidden md:block" />
        environment and more
      </p>

      {/* GRID RESPONSIVE */}
      <div className="mt-10 w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">

        {[
          {
            title: "Volunteer",
            color: "bg-blue-200",
            tags: ["Community work", "Teaching", "Awareness Drives"],
          },
          {
            title: "Member",
            color: "bg-purple-200",
            tags: ["Membership Benefit", "Network", "Impact Reports"],
          },
          {
            title: "Donor/Supporter",
            color: "bg-red-200",
            tags: ["One-Time", "Monthly Supports", "Awareness Drives"],
          },
          {
            title: "Partnership",
            color: "bg-green-200",
            tags: ["Brand Collaboration", "Join Events", "Awareness Drives"],
          },
          {
            title: "Collaboration",
            color: "bg-orange-200",
            tags: ["Join Campaigns", "Co-Initiatives", "Awareness Program"],
          },
          {
            title: "Career/Internship",
            color: "bg-pink-200",
            tags: ["Internships", "Career Growth", "Skill Building"],
          },
        ].map((item, i) => (
          <div
            key={i}
            className={`${item.color} w-full max-w-[290px] shadow-[6px_6px_0px_#000] rounded-sm`}
          >
            {/* Inner Card */}
            <div className="bg-white m-2 p-3 rounded-sm">
              <h1 className="font-bold text-2xl md:text-3xl pb-3">
                {item.title}
              </h1>

              <p className="font-semibold text-zinc-400">
                {item.title === "Volunteer" &&
                  "Contribute your time and passion to make a difference"}
                {item.title === "Member" &&
                  "Join our growing family and be part of lasting change"}
                {item.title === "Donor/Supporter" &&
                  "Fuel our mission with your generous contribution"}
                {item.title === "Partnership" &&
                  "Collaborate with us to create a social impact through CSR program"}
                {item.title === "Collaboration" &&
                  "Let's work together to expand and amplify change"}
                {item.title === "Career/Internship" &&
                  "Learn, grow, and create impact with purpose-driven work"}
              </p>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag, t) => (
                  <span
                    key={t}
                    className={`${item.color} text-[14px] p-1 px-2 inline-block rounded-sm`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Button */}
            <button className="font-semibold flex  items-center gap-2 ml-5 my-3 transition-transform duration-500 hover:scale-110">
              <a className="text-lg" href="#">Explore</a>
              <FaArrowRightLong/>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Getinvolved;
