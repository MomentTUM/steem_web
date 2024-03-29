import React, { useRef, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import profileImage from "../assets/blank.png";
import { useDispatch } from "react-redux";
import { editUserProfile } from "../redux/user-slice";
import useUser from "../hooks/useUser";
import { Link, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function AvatarProfileLayout() {
  // const [file, setImage] = useState(null);
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  const inputEl = useRef();
  const user = useUser();
  const userAuth = useAuth()

  const handleSave = () => {
    dispatch(editUserProfile({ image }));
  };

  // console.log(user);
  return (
    <>
      <Header />

      {/* <div className=" bg-black bg-opacity-20 backdrop-blur-sm  border-2 border-solid border-red h-screen w-screen"> */}
      <div className="px-96 justify-center mb-36 ">
        <div className="bg-slate-700 h-24 ">
          <div className="flex col px-6 py-4 ">
            <img
              src={
                image ? URL.createObjectURL(image) : user?.image || profileImage
              }
              alt="profileImage"
              className=" h-16  "
            />
            <p className="pt-4 pl-6 text-xl">{user?.name ? user?.name : userAuth?.userName}</p>
          </div>
        </div>
        <div className=" flex justify-end py-4">
          <Link to="/profiles" className="underline">
            Back to your profile
          </Link>
        </div>
        <div className="flex col py-10 w-full  ">
          <ul className="menu bg-base-0  w-56">
            <li>
              <Link to="/generalprofile">General</Link>
            </li>
            <li>
              <Link
                to="/avatarprofile"
                className="active  active:bg-black opacity-60 "
              >
                Avatar
              </Link>
            </li>
            <li>
              <Link to="/backgroundprofile">Profile Background</Link>
            </li>
          </ul>

          <div className="pl-2 space-y-4  w-full">
            <div className=" flex col">
              <img
                src={image ? URL.createObjectURL(image) : user?.image || profileImage}
                alt="profileImage"
                className=" h-40  "
              />
              <div className=" flex justify-end w-full">
                <input
                  type="file"
                  className="hidden"
                  ref={inputEl}
                  onChange={(e) => {
                    if (e.target.files[0]) {
                      setImage(e.target.files[0]);
                    }
                  }}
                />

                <button
                  className="btn-sm  bg-gray-500  rounded w-48 normal-case "
                  // onClick={() => dispatch(fetchUserProfile(userSlice))}
                  onClick={() => inputEl.current.click()}
                >
                  Upload your avatar
                </button>
              </div>
            </div>

            <div className=" space-x-2  py-16 w-full flex justify-end ">
              {/* {file && ( */}
              <>
                <button
                  className="btn-sm  bg-gray-500  rounded w-48 normal-case "
                  onClick={() => {
                    setImage(null);
                    inputEl.current.value = null;
                  }}
                >
                  Cancel
                </button>

                <button
                  className="btn-sm  bg-sky-500 border-slate-900 rounded w-48 normal-case "
                  onClick={handleSave}
                >
                  Save
                </button>
              </>
              {/* )} */}
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}

      <Footer />
    </>
  );
}
