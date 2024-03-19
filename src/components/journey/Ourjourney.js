

import React from 'react';

function OurJourney() {
  return (
    <div className="w-full  justify-evenly p-16 bg-white shadow-md flex border-4 border-orange-500">
      <div className="flex-1 text-gray-800">
        <h1 className="text-4xl font-bold mb-4">Our Journey</h1>
        <div className="w-[155px] h-2 border-b-4 border-orange-500 rounded-full"></div>

        <p className="text-base mt-8 mb-4 justify-evenly">
          The KIIT Electrical Society, an embodiment of boundless innovation and intellectual curiosity, originated from the fertile minds of KIIT alumni and the visionary founders of KES. Established under the aegis of the electrical department, our society officially took root in 2018, gaining recognition and registration under KSAC. Spearheaded by the dynamic duo of Abhishek Kushary and Akash Ray Choudhary, our society operates under the unwavering motto: "BUILD SMALL THINK BIG."
        </p>
        <p className="text-base mb-4just ">
          Our multifaceted endeavors transcend the boundaries of KIIT UNIVERSITY, as we actively participate in a myriad of external events. Within our institutional domain, we curate and execute impactful initiatives such as the Robo War, KONNECT Series, KREATE and KONQUER, showcasing our commitment to fostering innovation and technological prowess.
        </p>
        <p className="text-base mb-4">
          Our society's prowess extends across various technical domains, including web development, AI-ML, robotics, circuit designing, cybersecurity, and embedded systems. We not only delve into the intricacies of technology but also recognize the importance of non-tech domains, encompassing content writing, graphic design, photography, video design, and research and development.
        </p>
        <p className="text-base mb-4">
          Embracing the digital era, we've harnessed the power of social media, establishing a robust presence on platforms such as Facebook, Instagram, LinkedIn, and our own YouTube channel. In the virtual realm, we've curated engaging online series like KARISHMA and orchestrated intellectually stimulating quiz contests including KUIZZATHON series.
        </p>
        <div className="mt-8">
          <a href="aboutus.html" className="bg-orange-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-black transition duration-300">
            Explore More <i className="fa-solid fa-arrow-right fa-fade"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default OurJourney;
