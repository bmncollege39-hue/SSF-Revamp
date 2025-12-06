export default function MediaGallery() {
  const ImgData = [
    {
      id: 1,
      src: "./Gallery_Images/image1.jpg",
      alt: "SSF helps images",
    },
    {
      id: 2,
      src: "./Gallery_Images/image2.jpg",
      alt: "SSF helps images",
    },
    {
      id: 3,
      src: "./Gallery_Images/image3.jpg",
      alt: "SSF helps images",
    },
    {
      id: 4,
      src: "./Gallery_Images/image4.jpg",
      alt: "SSF helps images",
    },
    {
      id: 5,
      src: "./Gallery_Images/image5.jpg",
      alt: "SSF helps images",
    },
    {
      id: 6,
      src: "./Gallery_Images/image6.jpg",
      alt: "SSF helps images",
    },
    {
      id: 7,
      src: "./Gallery_Images/image7.jpg",
      alt: "SSF helps images",
    },
    {
      id: 8,
      src: "./Gallery_Images/image8.jpg",
      alt: "SSF helps images",
    },
    {
      id: 9,
      src: "./Gallery_Images/image9.jpg",
      alt: "SSF helps images",
    },
    {
      id: 9,
      src: "./Gallery_Images/image9.jpg",
      alt: "SSF helps images",
    },
    {
      id: 10,
      src: "./Gallery_Images/image10.jpg",
      alt: "SSF helps images",
    },
    {
      id: 11,
      src: "./Gallery_Images/image11.jpg",
      alt: "SSF helps images",
    },
    {
      id: 12,
      src: "./Gallery_Images/image12.jpg",
      alt: "SSF helps images",
    },
    {
      id: 13,
      src: "./Gallery_Images/image13.jpg",
      alt: "SSF helps images",
    },
    {
      id: 14,
      src: "./Gallery_Images/image14.jpg",
      alt: "SSF helps images",
    },
    {
      id: 15,
      src: "./Gallery_Images/image15.jpg",
      alt: "SSF helps images",
    },
    {
      id: 16,
      src: "./Gallery_Images/image16.jpg",
      alt: "SSF helps images",
    },
    {
      id: 17,
      src: "./Gallery_Images/image17.jpg",
      alt: "SSF helps images",
    },
    {
      id: 18,
      src: "./Gallery_Images/image18.jpg",
      alt: "SSF helps images",
    },
    {
      id: 19,
      src: "./Gallery_Images/image19.jpg",
      alt: "SSF helps images",
    },
    {
      id: 20,
      src: "./Gallery_Images/image20.jpg",
      alt: "SSF helps images",
    },
    {
      id: 21,
      src: "./Gallery_Images/image21.jpg",
      alt: "SSF helps images",
    },
    {
      id: 22,
      src: "./Gallery_Images/image22.jpg",
      alt: "SSF helps images",
    },
    {
      id: 23,
      src: "./Gallery_Images/image23.jpg",
      alt: "SSF helps images",
    },
    {
      id: 24,
      src: "./Gallery_Images/image24.jpg",
      alt: "SSF helps images",
    },
    {
      id: 25,
      src: "./Gallery_Images/image25.jpg",
      alt: "SSF helps images",
    },
    {
      id: 26,
      src: "./Gallery_Images/image26.jpg",
      alt: "SSF helps images",
    },
    {
      id: 27,
      src: "./Gallery_Images/image27.jpg",
      alt: "SSF helps images",
    },
    {
      id: 28,
      src: "./Gallery_Images/image28.jpg",
      alt: "SSF helps images",
    },
    {
      id: 29,
      src: "./Gallery_Images/image29.jpg",
      alt: "SSF helps images",
    },
    {
      id: 30,
      src: "./Gallery_Images/image30.jpg",
      alt: "SSF helps images",
    },
    {
      id: 31,
      src: "./Gallery_Images/image31.jpg",
      alt: "SSF helps images",
    },
    {
      id: 32,
      src: "./Gallery_Images/image32.jpg",
      alt: "SSF helps images",
    },
    {
      id: 33,
      src: "./Gallery_Images/image33.jpg",
      alt: "SSF helps images",
    },
    {
      id: 34,
      src: "./Gallery_Images/image34.jpg",
      alt: "SSF helps images",
    },
    {
      id: 35,
      src: "./Gallery_Images/image35.jpg",
      alt: "SSF helps images",
    },
    {
      id: 36,
      src: "./Gallery_Images/image36.jpg",
      alt: "SSF helps images",
    },
    {
      id: 37,
      src: "./Gallery_Images/image37.jpg",
      alt: "SSF helps images",
    },
    {
      id: 38,
      src: "./Gallery_Images/image38.jpg",
      alt: "SSF helps images",
    },
    {
      id: 39,
      src: "./Gallery_Images/image39.jpg",
      alt: "SSF helps images",
    },
    {
      id: 40,
      src: "./Gallery_Images/image40.jpg",
      alt: "SSF helps images",
    },
    {
      id: 41,
      src: "./Gallery_Images/image41.jpg",
      alt: "SSF helps images",
    },
    {
      id: 42,
      src: "./Gallery_Images/image42.jpg",
      alt: "SSF helps images",
    },
    {
      id: 43,
      src: "./Gallery_Images/image43.jpg",
      alt: "SSF helps images",
    },
    {
      id: 44,
      src: "./Gallery_Images/image44.jpg",
      alt: "SSF helps images",
    },
    {
      id: 45,
      src: "./Gallery_Images/image45.jpg",
      alt: "SSF helps images",
    },
    {
      id: 46,
      src: "./Gallery_Images/image46.jpg",
      alt: "SSF helps images",
    },
    {
      id: 47,
      src: "./Gallery_Images/image47.jpg",
      alt: "SSF helps images",
    },
    {
      id: 48,
      src: "./Gallery_Images/image48.jpg",
      alt: "SSF helps images",
    },
    {
      id: 49,
      src: "./Gallery_Images/image49.jpg",
      alt: "SSF helps images",
    },
    {
      id: 50,
      src: "./Gallery_Images/image50.jpg",
      alt: "SSF helps images",
    },
    {
      id: 51,
      src: "./Gallery_Images/image51.jpg",
      alt: "SSF helps images",
    },
  ];
  return (
    <div className="w-full min-h-screen">
      <div className="wrapper max-w-6xl mx-auto my-24 p-4 xl:p-2">
        {/* Masonry Grid Container */}
        <div className="masonry_grid columns-1 md:columns-2 gap-10 space-y-10">
          {ImgData.map((data) => {
            return (
              <div
                key={data.id}
                className="break-inside-avoid overflow-hidden rounded-4xl drop-shadow-2xl border-zinc-400 border-2 hover:scale-[1.03] transition-all ease-in-out duration-300"
              >
                <img
                  src={data.src}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
