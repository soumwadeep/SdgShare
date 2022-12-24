import React from "react";
import { useNavigate } from "react-router-dom";
import sharevideo from "../assets/backgroundvideo.mp4";
import logo from "../assets/logocropped.png";
import {
  GoogleOAuthProvider,
  GoogleLogin,
  googleLogout,
} from "@react-oauth/google";
import { client } from "../client";

const Login = () => {
  const navigate = useNavigate();

  const responseGoogle = (response) => {
    localStorage.setItem("user", JSON.stringify(response));

    const { clientId, name, imageUrl } = response;

    const doc = {
      _id: clientId,
      _type: "user",
      userName: name,
      image: imageUrl,
    };

    client.createIfNotExists(doc)
    .then(() => 
    {
      navigate("/", { replace: true });
    });
  };

  return (
    <>
      <GoogleOAuthProvider
        clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}
      >
        <div className="flex justify-start items-center flex-col h-screen">
          <div className="relative w-full h-full">
            <video
              src={sharevideo}
              type="video/mp4"
              autoPlay
              loop
              controls={false}
              muted
              className="w-full h-full object-cover"
            />
            <div
              className="absolute 
          flex 
          flex-col 
          justify-center 
          items-center 
          top-0 
          right-0 
          left-0 
          bottom-0 
          bg-blackOverlay"
            >
              <div className="p-5">
                <img src={logo} alt="logo" width="150px" />

                <div className="shadow-2xl">
                  <GoogleLogin
                    onSuccess={responseGoogle}
                    onError={responseGoogle}
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
      </GoogleOAuthProvider>
    </>
  );
};

export default Login;
