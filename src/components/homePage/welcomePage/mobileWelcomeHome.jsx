import HomeLogo from "./HomeLogo";
import { FaGoogle } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import Policy from "../../../assets/policy.pdf";
import { useState } from "react";

const MobileWelcomeHome = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleHomeClick = () => {
    setIsClicked((pre) => !pre);
    console.log("hello");
  };
  if (!isClicked) {
    return (
      <div className="h-full w-full">
        <div className="min-h-[70%] w-full p-6 flex flex-col justify-center items-center">
          <HomeLogo />
          <span
            onClick={handleHomeClick}
            className="text-4xl font-black border-2 p-2 rounded-xl shadow-2xl customColorLogo"
          >
            Task Manager
          </span>
        </div>
        <div className="flex gap-2 flex-col items-center">
          <div className="h-10 w-60 bg-zinc-200 p-2 rounded-md flex justify-around">
            <FaGoogle className="text-black h-full text-2xl" />
            <span className="text-black font-bold">Sign in with Google</span>
          </div>
          <div className="h-10 w-60 bg-zinc-200 p-2 rounded-md flex justify-around">
            <BsDiscord className="text-black h-full text-2xl" />
            <span className="text-black font-bold">Sign in with Discord</span>
          </div>
          <div className="h-10 w-60 bg-zinc-200 p-2 rounded-md flex justify-around">
            <MdEmail className="text-black h-full text-2xl" />
            <span className="text-black font-bold">Sign in with Email</span>
          </div>
        </div>
        <div className="text-sm mt-5 w-[60%] text-center flex justify-self-center">
          <span>
            By Signing in you agree to our{" "}
            <a href={Policy} className="text-blue-300">
              privacy policy
            </a>{" "}
            and terms of use.
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="h-full w-full bg-black/20">
        <div className="flex flex-row w-full">
          <div className="w-[50%]">
            <div>
              <h1 className="text-lg ">
                <span className="text-3xl">Welcome </span>
                <span className="text-3xl">User,</span>
                <br />
                <span className="text-2xl">To the</span>
              </h1>
            </div>
            <div className="mt-1">
              <div className="text-2xl">Project...</div>
              <div className="text-2xl mt-2">Management</div>
              <div className="text-2xl mt-2">System.</div>
            </div>
          </div>
          <div className="w-[50%]">
          <HomeLogo />
          </div>
        </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border p-4 rounded-lg shadow-lg bg-blue-300">
              <h2 className="text-2xl font-bold mb-2">Feature One</h2>
              <p className="text-lg">
                Discover the amazing benefits of our first feature.
              </p>
            </div>
            <div className="border p-4 rounded-lg shadow-lg bg-blue-300">
              <h2 className="text-2xl font-bold mb-2">Feature Two</h2>
              <p className="text-lg">
                Learn how our second feature can help you achieve more.
              </p>
            </div>
            <div className="border p-4 rounded-lg shadow-lg bg-blue-300">
              <h2 className="text-2xl font-bold mb-2">Feature Three</h2>
              <p className="text-lg">
                Explore the advantages of our third feature.
              </p>
            </div>
          </div>
          <button onClick={handleHomeClick} className="text-blue-800 font-black text-2xl flex justify-self-center mt-20 bg-blue-300 p-3 h-15 rounded-md w-20 justify-center">
            Close
          </button>
        </div>
    );
  }
};

export default MobileWelcomeHome;
