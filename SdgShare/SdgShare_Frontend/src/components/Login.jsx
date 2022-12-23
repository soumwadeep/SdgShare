import React from 'react'
import GoogleLogin from 'react-google-login';
import {useNavigate} from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc';
import sharevideo from '../assets/backgroundvideo.mp4';
import logo from '../assets/logocropped.png';
const Login = () => {
  const responseGoogle = (response) => 
  {
    console.log(response);
  }
  return (
    <>
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
          <div className="absolute 
          flex 
          flex-col 
          justify-center 
          items-center 
          top-0 
          right-0 
          left-0 
          bottom-0 
          bg-blackOverlay">
            <div className="p-5">
              <img src={logo} alt="logo"
              width="150px"
              />
              <div className="shadow-2xl">
                <GoogleLogin
                clientId=''
                render={(renderProps)=>(
                  <button type="button"
                  className="bg-mainColor 
                  flex 
                  justify-center 
                  items-center 
                  p-2 
                  mt-5
                  rounded-lg 
                  cursor-pointer 
                  outline-none"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  >
                    <FcGoogle className="mr-4"/>
                    Sign In with Google
                    </button>
                    )}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy="single_host_origin"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login