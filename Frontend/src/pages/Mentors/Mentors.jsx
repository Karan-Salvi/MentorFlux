import React from "react";

const MentorCard = ({ name, role, image, alt }) => {
  return (
    <div className="w-full p-4">
      <div className="bg-gray-100 rounded-lg shadow-md p-4">
        <img
          src="./images/profile.jpeg"
          alt={alt}
          className="w-full h-auto object-cover rounded-lg mb-4"
        />
        <h4 className="font-bold text-lg mb-2">{name}</h4>
        <p className="text-gray-600">{role}</p>
      </div>
    </div>
  );
};

const Mentors = () => {
  const mentors = [
    {
      name: "Kristin Watson",
      role: "Founder & Mentor",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      alt: "Kristin Watson",
    },
    {
      name: "Kristin Watson",
      role: "Founder & Mentor",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      alt: "Kristin Watson",
    },
    {
      name: "Kristin Watson",
      role: "Founder & Mentor",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      alt: "Kristin Watson",
    },
    {
      name: "Kristin Watson",
      role: "Founder & Mentor",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      alt: "Kristin Watson",
    },
    {
      name: "Kristin Watson",
      role: "Founder & Mentor",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      alt: "Kristin Watson",
    },
    {
      name: "Kristin Watson",
      role: "Founder & Mentor",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      alt: "Kristin Watson",
    },
    {
      name: "Kristin Watson",
      role: "Founder & Mentor",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      alt: "Kristin Watson",
    },
    {
      name: "Kristin Watson",
      role: "Founder & Mentor",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      alt: "Kristin Watson",
    },
    {
      name: "Kristin Watson",
      role: "Founder & Mentor",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      alt: "Kristin Watson",
    },
    {
      name: "Kristin Watson",
      role: "Founder & Mentor",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      alt: "Kristin Watson",
    },
    {
      name: "Kristin Watson",
      role: "Founder & Mentor",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      alt: "Kristin Watson",
    },
    {
      name: "Kristin Watson",
      role: "Founder & Mentor",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      alt: "Kristin Watson",
    },
  ];

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-2 ml-2">Our Mentors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mentors.map((mentor) => (
          <MentorCard key={mentor.name} {...mentor} />
        ))}
      </div>
    </div>
  );
};

export default Mentors;
