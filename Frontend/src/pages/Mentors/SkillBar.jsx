import React from "react";

const SkillBar = () => {
  let skillsList = [
    {
      name: "LeaderShip",
    },
    {
      name: "Product Management",
    },
    {
      name: "Startup Product",
    },
    {
      name: "Strategy Career",
    },
    {
      name: "Career Growth",
    },
    {
      name: "Software Development",
    },
    {
      name: "Engineering",
    },
  ];

  let companyList = [
    {
      name: "Microsoft",
    },
    {
      name: "Amazon",
    },
    {
      name: "Google",
    },
    {
      name: "Meta",
    },
    {
      name: "Freelance",
    },
    {
      name: "Apple",
    },
    {
      name: "Agile Expat",
    },
  ];

  return (
    <div className="container mx-auto w-96 m-16 border-r-2 p-3 h-auto">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search for any skill, title or company"
          className="w-full px-3 py-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
        />
      </div>
      <div className="text-lg font-bold mb-2">1,000+ mentors found</div>
      <div className="mb-4">
        <div className="text-lg font-bold mb-2">Skills</div>
        <input
          type="text"
          placeholder="Search for skill"
          className="w-full px-3 py-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
        />
        <ul className="list-disc ml-2 mt-2 ">
          {skillsList &&
            skillsList.map((skill) => (
              <>
                <div class="flex items-center mb-4 gap-2 w-full">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="default-checkbox"
                    class="ms-2 text-sm text-gray-900 dark:text-gray-300"
                  >
                    {skill.name}
                  </label>
                </div>
              </>
            ))}
        </ul>
      </div>
      <div className="mb-4">
        <div className="text-lg font-bold mb-2">Companies</div>
        <input
          type="text"
          placeholder="Search for company"
          className="w-full px-3 py-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
        />
        <ul className="list-disc ml-4 mt-2">
          {companyList &&
            companyList.map((company) => (
              <>
                <div class="flex items-center mb-4 gap-2 w-full">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="default-checkbox"
                    class="ms-2 text-sm text-gray-900 dark:text-gray-300"
                  >
                    {company.name}
                  </label>
                </div>
              </>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillBar;
