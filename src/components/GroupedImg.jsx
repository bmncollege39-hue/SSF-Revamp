
export default function GroupedImg() {
    return (
        <div className="relative">
            <img src="./images/mask_group.png" alt="plant image" className="relative max-w-[400px] select-none" />
            <img src="./images/logo.svg" alt="" className="w-18 relative bottom-20 left-53 select-none" />
            <h4 className="text-5xl absolute top-31 left-1 flex gap-6 font-semibold select-none font-sans">For The <span className="text-white">Change</span></h4>
        </div>
    );
}