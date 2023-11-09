import React from "react";

const Homepage = () => {
  return (
    <div>
      <div className="flex flex-col bg-primary rounded-b-3xl ">
        <div className="flex flex-row gap-10 py-10 px-20 gap-61 justify-end">
          <a className="bg-secondary justify-center justify-items-center py-1 px-10 rounded-xl no-underline text-white text-xl font-jua ">
            LOGIN
          </a>
          <a className="bg-secondary justify-center justify-items-center py-1 px-10 rounded-xl no-underline text-white text-xl font-jua ">
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
