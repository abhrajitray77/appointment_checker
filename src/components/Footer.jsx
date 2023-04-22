
const Footer = () => {
  return (
    <div
     className="w-[70%] flex items-center space-x-4 group">
      <span className="w-[50%] h-1 bg-cyan-600 dark:bg-cyan-300 transition-all duration-500 group-hover:blur-sm"></span>

      <h2 className=" text-center font-medium">
        Made by Neelvie Chhetri and Abhrajit Ray using React, TailwindCSS, NodeJS, Express and MongoDB
      </h2>

      <span className="w-[50%] h-1 bg-cyan-600 dark:bg-cyan-300 transition-all duration-500 group-hover:blur-sm"></span>
    </div>
  );
};

export default Footer;
