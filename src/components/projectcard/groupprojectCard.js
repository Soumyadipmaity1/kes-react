import React from 'react';

const ProjectCard = ({ projectName, members, about, application, aim, documentationLink, imgSrc }) => {
  return (
    <section className="bg-transparent group-blur m-2 rounded-3xl shadow-lg p-4 border-2 hover:border-[#632aa4] border-[#eadbfc00]">
      <div className="container">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-w-5/24 lg:w-5/14 px-2 md:pl-8 md:mr-2 md:ml-4">
            <div className="flex flex-col h-auto mb-3 mt-3 border-2 border-[#632aa4] rounded-2xl">
              <img alt="Project" src={imgSrc} className="w-full h-56 align-middle rounded-t-xl" />
              <div className="p-6 rounded-b-lg pb-8 bg-[#632aa4]">
                <h4 className="text-xl font-bold text-white">
                  {projectName}
                </h4>
                <ul className="text-md font-light mt-2 text-white flex-col">
                  {members.map((member, index) => (
                    <li key={index}>
                      <p className="font-semibold text-yellow-300">{member}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12 px-2">
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 px-4 pl-10 pr-20">
                <div className="flex flex-col w-full mt-2 bg-[#dabaff75] mb-4 p-1 rounded-3xl shadow-sm">
                  <div className="px-4 py-3 flex-auto">
                    <div className="text-blueGray-500 p-2 text-center inline-flex items-center justify-center w-12 h-12 mb-3 shadow-lg rounded-full bg-black text-white">
                      <i className="fas fa-sitemap"></i>
                    </div>
                    <h6 className="mb-1 text-xl font-semibold">About The Project</h6>
                    <p className="mb-4 text-blueGray-500 text-justify text-sm">
                      {about}
                    </p>
                  </div>
                </div>
                {/* Additional sections */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
