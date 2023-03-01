import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import profileImage from "../assets/blank.png";

export default function AvatarProfileLayout() {
  return (
    <>
      <Header />
      {/* <div className=" bg-black bg-opacity-20 backdrop-blur-sm  border-2 border-solid border-red h-screen w-screen"> */}
      <div className="px-48 justify-center">
        <div className="bg-slate-700 h-32 ">
          <div className="flex col px-6 py-8 ">
            <img src={profileImage} alt="profileImage" className=" h-16  " />
            <p className="pt-4 pl-6 text-xl"> UserName</p>
          </div>
        </div>

        <div className="flex col py-12 justify-center ">
          <ul class="menu bg-base-0  w-56">
            <li>
              <a>General</a>
            </li>
            <li>
              <a className="active  active:bg-black opacity-60">Avatar</a>
            </li>
            <li>
              <a>Profile Background</a>
            </li>
          </ul>
          <div className="pl-2 space-y-4">
            <div className=" flex col">
              <img src={profileImage} alt="profileImage" className=" h-40  " />
              <div className=" flex justify-end w-full">
                <button className="btn-sm  bg-gray-500  rounded w-48 normal-case ">
                  {" "}
                  Upload your avatar{" "}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <div className="py-6 px-4 space-y-4 bg-black">
                <div>
                  <p className="text-2xl text-gray-400">Your Avatars</p>
                  <div className="flex col space-x-6">
                    <img
                      src={profileImage}
                      alt="profileImage"
                      className=" h-40  "
                    />
                    <img
                      src={profileImage}
                      alt="profileImage"
                      className=" h-40 "
                    />
                    <img
                      src={profileImage}
                      alt="profileImage"
                      className=" h-40  "
                    />
                    <img
                      src={profileImage}
                      alt="profileImage"
                      className=" h-40  "
                    />
                  </div>
                  <div> </div>
                </div>
              </div>

              <div className=" space-x-2 pl-96 ">
                <button className="btn-sm  bg-gray-500  rounded w-48 normal-case ">
                  Cancel
                </button>
                <button className="btn-sm  bg-sky-500 border-slate-900 rounded w-48 normal-case ">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* </div> */}

      <Footer />
    </>
  );
}