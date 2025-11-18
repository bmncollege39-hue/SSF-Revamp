export default function MasonryCards() {
  const cards = [
    {
      title: "Education & Skills",
      desc: "We focus on improving access to quality education, digital literacy, and vocational training—helping children and youth build stronger futures through knowledge and practical skills.",
      img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200",
    },
    {
      title: "Women & Child Welfare",
      desc: "Our initiatives uplift women and children by ensuring access to nutrition, safety, healthcare, and education—empowering them to live with dignity, confidence, and independence.",
      img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200",
    },
    {
      title: "Health & Sanitation",
      desc: "We promote better health outcomes through medical camps, awareness programs, and sanitation drives, ensuring that everyone has access to basic healthcare and a cleaner environment.",
      img: "https://images.unsplash.com/photo-1584467735871-b1d4353cbf59?q=80&w=1200",
    },
    {
      title: "Animal Welfare",
      desc: "Supporting the protection, rescue, and care of animals through awareness and rehabilitation programs.",
    },
    {
      title: "Livelihood & Rural Development",
      desc: "Helping rural communities grow through sustainable development, training, and empowerment initiatives.",
    },
    {
      title: "Special Support & Rehabilitation",
      desc: "Providing essential support, relief, and rehabilitation for vulnerable groups in society.",
    },
    {
      title: "Agriculture & Environment",
      desc: "We empower farmers and promote environmental sustainability through training, awareness and modern agricultural practices.",
      img: "https://images.unsplash.com/photo-1616627452892-1f7bf78490b3?q=80&w=1200",
    },
  ];

  return (
    <div className="card-container w-full min-h-screen py-10 columns-1 md:columns-2 space-y-6 space-x-6">

      <div className="card w-full drop-shadow-lg border-2 border-zinc-100 break-inside-avoid bg-linear-to-tl from-white from-80% to-yellow-200 shadow-[6px_6px_0px_#000] flex items-center justify-between gap-2 p-4">
        <div className="w-[60%] space-y-4">
          <h4 className="text-2xl font-bold">Education & Skills</h4>
          <p className="text-zinc-600 font-medium">
            We focus on improving access to quality education, digital literacy,
            and vocational training—helping children and youth build stronger
            futures through knowledge and practical skills.
          </p>
        </div>
        <div className="img w-[40%]">
            <img src="/images/students.png" alt="students image" />
        </div>
      </div>
      

      <div className="card w-full drop-shadow-lg border-2 border-zinc-100 break-inside-avoid bg-linear-to-tr from-white from-80% to-yellow-200 shadow-[6px_6px_0px_#000] p-4 space-y-2">
        <div className="space-y-4 w-full">
          <h4 className="text-2xl font-bold">Health & Sanitation</h4>
          <p className="text-zinc-600 font-medium">
            We promote better health outcomes through medical camps, awareness programs, and sanitation drives, ensuring that everyone has access to basic healthcare and a cleaner environment.
          </p>
        </div>
        <div className="img w-full">
            <img src="/images/health.png" alt="girls image" />
        </div>
      </div>

      <div className="card w-full drop-shadow-lg border-2 border-zinc-100 break-inside-avoid bg-linear-to-tr from-white from-80% to-yellow-200 shadow-[6px_6px_0px_#000] p-4 space-y-2">
        <div className="space-y-4 w-full">
          <h4 className="text-2xl font-bold">Women & Child Welfare</h4>
          <p className="text-zinc-600 font-medium">
            Our initiatives uplift women and children by ensuring access to nutrition, safety, healthcare, and education—empowering them to live with dignity, confidence, and independence.
          </p>
        </div>
        <div className="img w-full">
            <img src="/images/girls.png" alt="girls image" />
        </div>
      </div>

      <div className="card w-full drop-shadow-lg border-2 border-zinc-100 break-inside-avoid bg-linear-to-tl from-white from-80% to-yellow-200 shadow-[6px_6px_0px_#000] flex items-center justify-between gap-2 p-4">
        <div className="w-full space-y-4">
          <h4 className="font-bold text-2xl">Animal Welfare.</h4>
          <p className="font-bold text-xl text-zinc-700">Livelihood & Rural Development.</p>
          <p className="font-bold text-xl text-zinc-700">Special Support & Rehabilitation.</p>
        </div>
        
      </div>

      <div className="card w-full drop-shadow-lg border-2 border-zinc-100 break-inside-avoid bg-linear-to-bl from-white from-80% to-yellow-200 shadow-[6px_6px_0px_#000] flex items-center justify-between gap-2 p-4">
        <div className="w-[60%] space-y-4">
          <h4 className="text-2xl font-bold">Agriculture & Environment</h4>
          <p className="text-zinc-600 font-medium">
            We focus on improving access to quality education, digital literacy, and vocational training—helping children and youth build stronger futures through knowledge and practical skills.
          </p>
        </div>
        <div className="img w-[40%]">
            <img src="/images/agriculture.png" alt="students image" />
        </div>
      </div>
      

    </div>
  );
}
