import React from "react";
import Navbar from "../../components/Navbar";
import SkillBar from "./SkillBar";
import Mentors from "./Mentors";

const MentorsPage = () => {
  return (
    <>
      
      <div className="flex justify-center items-center">
        <div className="flex w-10/12">
          <SkillBar />
          <Mentors />
        </div>
      </div>
    </>
  );
};

export default MentorsPage;
