
import React, { useState, useEffect, useRef } from 'react';

const ProgressTimeline = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState(new Set());

  const timelineData = [
    {
      year: 2014,
      title: "Nurturing Community Well-being",
      description: "Promoting mental health with community support, strengthening community support systems.",
      side: "left"
    },
    {
      year: 2015,
      title: "Nurturing Community Well-being",
      description: "Expanded early initiatives, strengthened nutrition and preventive support services for vulnerable populations.",
      side: "right"
    },
    {
      year: 2016,
      title: "A Year of Rural Empowerment",
      description: "Introduced technology-driven solutions, hosting workshops, and community-led rural development initiatives.",
      side: "left"
    },
    {
      year: 2017,
      title: "Empowering Through Education",
      description: "Started education-focused interventions, fostering learning access to quality resources for underprivileged children.",
      side: "right"
    },
    {
      year: 2018,
      title: "Promoting Health and Hygiene",
      description: "Conducted large-scale health camps, hygiene awareness drives, and sanitation programs.",
      side: "left"
    },
    {
      year: 2019,
      title: "Women's Empowerment in Focus",
      description: "Rolled out women-centered initiatives, including skill training, self-help groups and livelihood programs.",
      side: "right"
    },
    {
      year: 2020,
      title: "Navigating Challenges with Resilience",
      description: "Provided support amid global crisis, distributed essentials, offering support during pandemic-driven hardships.",
      side: "left"
    },
    {
      year: 2021,
      title: "Sustaining Momentum and Adapting to New Realities",
      description: "Strengthened digital learning, digital platforms and changing conditions.",
      side: "right"
    },
    {
      year: 2022,
      title: "Strengthening Communities in the Face of Adversity",
      description: "Reinforced efforts with disaster relief, implemented long-term resilience-building initiatives recovering from challenges.",
      side: "left"
    },
    {
      year: 2023,
      title: "SEP Learning Hub - Transforming Lives Through Education",
      description: "Established the SEP Learning Hub, offering structured learning, mentorship, and career guidance.",
      side: "right"
    },
    {
      year: 2024,
      title: "Integrating Learning, Environment & Nutrition for Sustainable Living",
      description: "Launched holistic programs combining environmental education, sustainability practices, and nutrition awareness.",
      side: "left"
    },
    {
      year: 2025,
      title: "Expanding Grassroots Impact Through Technology",
      description: "Scaling community projects across regions with innovative tech solutions, empowering local leaders.",
      side: "right"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timeline = timelineRef.current;
      const rect = timeline.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const timelineTop = rect.top;
      const timelineHeight = rect.height;
      const scrolled = windowHeight - timelineTop;
      const progress = Math.max(0, Math.min(1, scrolled / (timelineHeight + windowHeight / 2)));
      
      setScrollProgress(progress);

      const items = timeline.querySelectorAll('[data-timeline-item]');
      const newVisible = new Set();
      
      items.forEach((item, index) => {
        const itemRect = item.getBoundingClientRect();
        if (itemRect.top < windowHeight * 0.85) {
          newVisible.add(index);
        }
      });
      
      setVisibleItems(newVisible);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full min-h-screen bg-zinc-950 text-white py-16 px-4">
      <div className="w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold mb-2 italic">Our Progress</h1>
          <p className="text-zinc-400 tracking-wide font-bold">A Decade of Pan India Initiative</p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative pb-20">
          {/* Vertical Line - Desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 top-0 bottom-0">
            <div className="absolute inset-0 bg-gray-700"></div>
            <div 
              className="absolute top-0 w-full bg-yellow-400 transition-all duration-300 ease-out"
              style={{ height: `${scrollProgress * 100}%` }}
            />
          </div>

          {/* Vertical Line - Mobile */}
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-0.5">
            <div className="absolute inset-0 bg-gray-700"></div>
            <div 
              className="absolute top-0 w-full bg-yellow-400 transition-all duration-300 ease-out"
              style={{ height: `${scrollProgress * 100}%` }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-0">
            {timelineData.map((item, index) => (
              <div
                key={index}
                data-timeline-item
                className="relative min-h-[140px] md:min-h-[120px] flex items-center"
              >
                {/* Desktop Layout */}
                <div className="hidden md:flex w-full items-center">
                  {item.side === 'left' ? (
                    <>
                      {/* Left Card */}
                      <div className="w-5/12 flex justify-end">
                        <div 
                          className={`bg-white text-black flex items-center justify-between gap-5 relative p-5 rounded shadow-[-6px_6px_0px_orange] max-w-md transform transition-all duration-700 ${
                            visibleItems.has(index)
                              ? 'opacity-100 translate-x-0'
                              : 'opacity-0 -translate-x-12'
                          }`}
                        >
                            <div className="">
                                <h3 className="font-bold text-sm mb-2 leading-tight">{item.title}</h3>
                                <p className="text-gray-700 text-xs leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                          <img src="./images/polygon-icon.png" alt="" className='absolute top-10 -right-5' />

                          {/* Right Year */}
                        <div className="w-5/12 h-full border-l-2 border-zinc-400 flex items-center justify-end">
                            <div 
                            className={`text-3xl font-extrabold text-zinc-900 transform transition-all duration-700 delay-100 ${
                                visibleItems.has(index)
                                ? 'opacity-100 translate-x-0'
                                : 'opacity-0 translate-x-12'
                            }`}
                            >
                            {item.year}
                            </div>
                        </div>

                        </div>
                      </div>

                      {/* Center Dot */}
                      <div className="w-2/12 flex justify-center relative z-10">
                        <div 
                          className={`w-3 h-3 rounded-full transition-all duration-500 ${
                            visibleItems.has(index)
                              ? 'bg-yellow-400 scale-110 shadow-lg shadow-yellow-400/50'
                              : 'bg-gray-600 scale-100'
                          }`}
                        />
                      </div>

                      
                    </>
                  ) : (
                    <>
                      <div className="w-5/12"></div>

                      {/* Center Dot */}
                      <div className="w-2/12 flex justify-center relative z-10">
                        <div 
                          className={`w-3 h-3 rounded-full transition-all duration-500 ${
                            visibleItems.has(index)
                              ? 'bg-yellow-400 scale-110 shadow-lg shadow-yellow-400/50'
                              : 'bg-gray-600 scale-100'
                          }`}
                        />
                      </div>

                      {/* Right Card */}
                      <div className="w-5/12">
                        <div 
                          className={`bg-white text-black flex items-center justify-between gap-5 p-5 rounded shadow-[6px_6px_0px_orange] max-w-md transform transition-all duration-700 ${
                            visibleItems.has(index)
                              ? 'opacity-100 translate-x-0'
                              : 'opacity-0 translate-x-12'
                          }`}
                        >
                            <div className="">
                                <h3 className="font-bold text-sm mb-2 leading-tight">{item.title}</h3>
                                <p className="text-gray-700 text-xs leading-relaxed">
                                    {item.description}
                                </p>

                            </div>
                          <img src="./images/polygon-icon.png" alt="" className='absolute top-12 -left-5 rotate-180' />

                          {/* Left Year */}
                        <div className="w-1/3 h-[81px] border-l-2 border-zinc-400 flex items-center justify-end">
                            <div 
                            className={`text-3xl font-bold text-zinc-900 transform transition-all duration-700 delay-100 ${
                                visibleItems.has(index)
                                ? 'opacity-100 translate-x-0'
                                : 'opacity-0 -translate-x-12'
                            }`}
                            >
                            {item.year}
                            </div>
                        </div>

                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden flex w-full items-start">
                  {/* Dot */}
                  <div className="absolute left-8 transform -translate-x-1/2 mt-1">
                    <div 
                      className={`w-3 h-3 rounded-full transition-all duration-500 ${
                        visibleItems.has(index)
                          ? 'bg-yellow-400 scale-110 shadow-lg shadow-yellow-400/50'
                          : 'bg-gray-600 scale-100'
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <div className="pl-16 pr-4 pb-6 w-full">
                    <div 
                      className={`mb-3 transform transition-all duration-700 ${
                        visibleItems.has(index)
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-4'
                      }`}
                    >
                      <div className="text-2xl font-bold text-yellow-400 mb-3">
                        {item.year}
                      </div>
                      <div className="relative bg-white text-black p-4 rounded shadow-[5px_5px_0px_orange]">
                        <h3 className="font-bold text-sm mb-2 leading-tight">{item.title}</h3>
                        <p className="text-gray-700 text-xs leading-relaxed">
                          {item.description}
                        </p>

                        <img src="./images/polygon-icon.png" alt="" className='absolute top-9 -left-5 rotate-180' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressTimeline;