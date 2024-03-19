import React, { useState } from "react";
import Groupproject from "../projectcard/groupproject";
import IndProjects from "../../components/projectcard/indprojects";

function TabSwitchingComponent() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="   ">
      <nav className="flex justify-center pb-10 container ">
        <div className="mr-4 font-bold">
          <button
            className={`btn btn-danger p-1 px-5 team-switch-border  text-xl font-bold border-2 border-white rounded-3xl ${
              activeTab === 1
                ? "text-black bg-white font-bold"
                : "text-white"
            } `}
            onClick={() => handleTabClick(1)}
          >
            Individual Projects
          </button>
        </div>{" "}
        <div className="mx-4">
          <button
            className={`btn btn-danger p-1 px-5 team-switch-border text-xl font-bold  border-2 border-white rounded-3xl ${
              activeTab === 2
                ? "text-black bg-white font-bold"
                : "text-white"
            } `}
            onClick={() => handleTabClick(2)}
          >
            Group Projects
          </button>
        </div>{" "}
      </nav>
      <div
        className="tabcontent bg-light"
        style={{ display: activeTab === 1 ? "block" : "none" }}
      >
        <IndProjects />
      </div>
      <div
        className="tabcontent bg-light"
        style={{ display: activeTab === 2 ? "block" : "none" }}
      >
        <Groupproject />
      </div>
    </div>
  );
}

export default TabSwitchingComponent;
