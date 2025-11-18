import MasonryCards from "../components/MasonryCard";

export default function KeyFocus() {
    return (
        <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="w-full max-w-6xl min-h-96 mx-auto">
                <div className="text-center mt-10">
                    <h1 className="italic font-black text-4xl">Our Key Focus Area</h1>
                </div>
                {/* <MasonryCards /> */}
                <MasonryCards />
            </div>
        </div>
    );
}