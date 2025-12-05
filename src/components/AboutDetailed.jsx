import ABFrame from "../assets/ABFrame1.png";
import ABFrame1 from "../assets/ABFrame2.png";
import ABFrame2 from "../assets/ABFrame3.png";
import ABFrame3 from "../assets/ABFrame4.png";
import ABFrame4 from "../assets/ABFrame5.png";
import ABFrame5 from "../assets/ABFrame6.png";

import { IoIosCheckmarkCircle } from "react-icons/io";
function AbtDetailed() {
    return (
        <div className="w-full  flex flex-col gap-10 md:gap-2 items-center justify-center py-14 px-4 mt-10">
            <div className="max-w-6xl py-10 w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                    <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
                        Education
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold mt-4 leading-snug">
                        Ensuring every child has access to quality education
                        and the tools they need to succeed.
                    </h2>
                    <ul className="mt-6 space-y-4 text-[18px] text-gray-800">
                        <li className="flex items-start gap-2">
                            <IoIosCheckmarkCircle className="text-green-600 text-2xl" />
                            Scholarships for underprivileged students
                        </li>

                        <li className="flex items-start gap-2">
                            <IoIosCheckmarkCircle className="text-green-600 text-2xl" />
                            Distribution of books, uniforms, and learning materials
                        </li>

                        <li className="flex items-start gap-2">
                            <IoIosCheckmarkCircle className="text-green-600 text-2xl" />
                            Mentorship and academic support programs
                        </li>

                        <li className="flex items-start gap-2">
                            <IoIosCheckmarkCircle className="text-green-600 text-2xl" />
                            Initiatives to reduce school dropout rates
                        </li>
                    </ul>
                </div>
                <div className="flex justify-center">
                    <img
                        src={ABFrame}
                        alt="Children studying"
                        className=" shadow-xl w-full object-contain"
                    />
                </div>
            </div>

            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-10">
                <div className="hidden md:flex justify-center">
                    <img
                        src={ABFrame1}
                        alt="Children studying"
                        className=" shadow-xl w-full object-contain"
                    />
                </div>
                <div>
                    <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
                        Nutrition & Health
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold mt-4 leading-snug">
                        Bringing healthcare within reach of every community member,
                        regardless of circumstance.
                    </h2>
                    <ul className="mt-6 space-y-4 text-[18px] text-gray-800">
                        <li className="flex items-start gap-2">
                            <IoIosCheckmarkCircle className="text-green-600 text-2xl" />
                            Free medical checkups and health camps
                        </li>

                        <li className="flex items-start gap-2">
                            <IoIosCheckmarkCircle className="text-green-600 text-2xl" />
                            Access to essential medicines and treatments
                        </li>

                        <li className="flex items-start gap-2">
                            <IoIosCheckmarkCircle className="text-green-600 text-2xl" />
                            Awareness programs on hygiene and disease prevention
                        </li>

                        <li className="flex items-start gap-2">
                            <IoIosCheckmarkCircle className="text-green-600 text-2xl" />
                            Support for maternal and child healthcare
                        </li>
                    </ul>
                </div>
                <div className="flex justify-center md:hidden">
                    <img
                        src={ABFrame1}
                        alt="Children studying"
                        className=" shadow-xl w-full object-contain"
                    />
                </div>
            </div>

            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-10">
                <div>
                    <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
                        Development
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold mt-4 leading-snug">
                        Building stronger, self-sufficient rural communities through sustainable development.
                    </h2>
                    <ul className="mt-6 space-y-4 text-[18px] text-gray-800">
                        <li className="flex items-start gap-2">
                            <IoIosCheckmarkCircle className="text-green-600 text-2xl" />
                            Infrastructure improvements for villages
                        </li>

                        <li className="flex items-start gap-2">
                            <IoIosCheckmarkCircle className="text-green-600 text-2xl" />
                            Skill-development & livelihood training
                        </li>

                        <li className="flex items-start gap-2">
                            <IoIosCheckmarkCircle className="text-green-600 text-2xl" />
                            Women-led self-help group support
                        </li>

                        <li className="flex items-start gap-2">
                            <IoIosCheckmarkCircle className="text-green-600 text-2xl" />
                            Programs promoting agriculture & local entrepreneurship
                        </li>
                    </ul>
                </div>
                <div className="flex justify-center">
                    <img
                        src={ABFrame2}
                        alt="Children studying"
                        className=" shadow-xl w-full object-cover"
                    />
                </div>
            </div>

            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-10">
                <div className="hidden md:flex justify-center">
                    <img
                        src={ABFrame3}
                        alt="Children studying"
                        className=" shadow-xl w-full object-cover"
                    />
                </div>
                <div>
                    <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
                        Youth Empowerment
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold mt-4 leading-snug">
                        Empowering young individuals with practical skills to build
                        confident and independent futures.
                    </h2>
                    <ul className="mt-6 space-y-4 text-[18px] text-gray-800">
                        <li className="flex items-start gap-2">
                            <IoIosCheckmarkCircle className="text-green-600 text-2xl" />
                            Vocational and technical skill training
                        </li>

                        <li className="flex items-start gap-2">
                            <IoIosCheckmarkCircle className="text-green-600 text-2xl" />
                            Career guidance and personality development
                        </li>

                        <li className="flex items-start gap-2">
                            <IoIosCheckmarkCircle className="text-green-600 text-2xl" />
                            Workshops on communication & leadership
                        </li>

                        <li className="flex items-start gap-2">
                            <IoIosCheckmarkCircle className="text-green-600 text-2xl" />
                            Employment readiness and job support
                        </li>
                    </ul>
                </div>
                <div className="flex justify-center md:hidden">
                    <img
                        src={ABFrame3}
                        alt="Children studying"
                        className=" shadow-xl w-full object-cover"
                    />
                </div>
            </div>

            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-10">

                <div>
                    <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
                        Health Awareness
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold mt-4 leading-snug">
                        Promoting healthier communities through education,
                        prevention, and accessible health knowledge.
                    </h2>
                    <ul className="mt-6 space-y-4 text-[18px] text-gray-800">
                        <li className="flex items-start gap-2">
                            <IoIosCheckmarkCircle className="text-green-600 text-2xl" />
                            Awareness sessions on hygiene and nutrition
                        </li>

                        <li className="flex items-start gap-2">
                            <IoIosCheckmarkCircle className="text-green-600 text-2xl" />
                            Disease prevention and first-aid workshops
                        </li>

                        <li className="flex items-start gap-2">
                            <IoIosCheckmarkCircle className="text-green-600 text-2xl" />
                            Mental health and wellness guidance
                        </li>

                        <li className="flex items-start gap-2">
                            <IoIosCheckmarkCircle className="text-green-600 text-2xl" />
                            Family and community health counseling
                        </li>
                    </ul>
                </div>
                <div className="flex justify-center">
                    <img
                        src={ABFrame4}
                        alt="Children studying"
                        className=" shadow-xl w-full object-cover"
                    />
                </div>
            </div>

            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-10">
                <div className="hidden md:flex justify-center">
                    <img
                        src={ABFrame5}
                        alt="Children studying"
                        className=" shadow-xl w-full object-cover"
                    />
                </div>
                <div>
                    <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
                        Homeless Support
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold mt-4 leading-snug">
                       Providing care and essential support to individuals
                       facing homelessness and hardship.
                    </h2>
                    <ul className="mt-6 space-y-4 text-[18px] text-gray-800">
                        <li className="flex items-start gap-2">
                            <IoIosCheckmarkCircle className="text-green-600 text-2xl" />
                            Food, clothing, and essential relief distribution
                        </li>

                        <li className="flex items-start gap-2">
                            <IoIosCheckmarkCircle className="text-green-600 text-2xl" />
                            Temporary assistance for vulnerable families
                        </li>

                        <li className="flex items-start gap-2">
                            <IoIosCheckmarkCircle className="text-green-600 text-2xl" />
                            Community outreach and support drives
                        </li>

                        <li className="flex items-start gap-2">
                            <IoIosCheckmarkCircle className="text-green-600 text-2xl" />
                            Programs fostering safety, care, and dignity
                        </li>
                    </ul>
                </div>
                <div className="flex justify-center md:hidden">
                    <img
                        src={ABFrame5}
                        alt="Children studying"
                        className=" shadow-xl w-full object-cover"
                    />
                </div>
            </div>
        </div>
    )
}
export default AbtDetailed;