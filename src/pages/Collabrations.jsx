import InfiniteLogoScroll from "../components/InfiniteScrollLogo";

export default function Collabrations() {
  return (
    <div className="relative w-full h-auto bg-[url(./assets/grid.svg)]  bg-contain bg-center bg-zinc-900 text-white flex items-start">
      <div className="relative pt-10 pb-20 w-full bg-linear-to-b h-full from-black/50 via-black to-zinc-950">

        <div className="text-center space-y-2 my-10">
          <h1 className="italic font-extrabold text-4xl">Our Collabrations</h1>
          <p className="font-bold text-zinc-400">
            we aim to empower communities through collaboration  and extend our reach
          </p>
        </div>

        <InfiniteLogoScroll />

      </div>
    </div>
  );
}
