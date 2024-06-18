// // LogIn.js
// import React from "react";
// import { default as ModalProvider } from "react-modal";
// import { Link, useNavigate } from "react-router-dom";
// import { Button, Img, Input, Text } from "../../components";
// import { CheckBox } from "../../components/CheckBox";
// import SignUpInputfield from "../../components/SignUpInputfield";

// export default function LogIn({ isOpen, ...props }) {
//   const [sliderState, setSliderState] = React.useState(0);
//   const sliderRef = React.useRef(null);
//   const navigate=useNavigate();
//   const navigation=()=>{
//     navigate("/");
//   }
//   return (
//     <ModalProvider
//       {...props}
//       appElement={document.getElementById("root")}
//       isOpen={true}
//       className="min-w-[1052px]"
//     >
//       <div className="flex flex-row justify-center w-full px-10 ">
//         <div className="flex flex-row justify-center w-full">
//           <div className="flex flex-row justify-center w-[95%]">
//             <div className="flex flex-row justify-center w-full p-2">
//               <div className="flex flex-row justify-center w-full">
//                 <div className="flex flex-row md:flex-col justify-between items-center w-full md:gap-10">
//                   <div className="flex flex-col items-center justify-start w-[55%] md:w-full gap-[2px]">
//                     <Img
//                       src="images/login4.webp"
//                       alt="lock,pad lock,safe,security,protected,lock alt, / 24 / Outline"
//                       className="w-50vw rounded-[15px]"
//                       style={{ height: "75vh", maxWidth: "calc(100% - 40px)" }}
//                     />
//                     <div className="flex justify-center w-[36px] h-[10px] sm:w-full" />
//                   </div>
//                   <div className="h-[641px] w-px md:w-full md:h-px bg-gradient" />
//                   <div className="flex flex-col items-center justify-start w-[40%] md:w-full">
//                     <Button
//                       leftIcon={
//                         <Img
//                           src="images/img_googleplus_1_1.svg"
//                           alt="google-plus (1) 1"
//                         />
//                       }
//                       className="w-full gap-[23px] sm:px-5 bg-blue-350 text-white border-gray-300 border border-solid rounded-[10px]"
//                     >
//                       Sign in with google
//                     </Button>
//                     <div className="flex flex-row justify-center items-center w-full mt-5 gap-[11px] p-[3px]">
//                       <div className="h-px w-[6%] ml-[55px] md:ml-5 bg-gray-700_01" />
//                       <Link to="#">
//                         <Text as="p" className="!text-gray-700_01 text-center">
//                           Or sign in with your email
//                         </Text>
//                       </Link>
//                       <div className="h-px w-[6%] mr-[55px] md:mr-5 bg-gray-700_01" />
//                     </div>
//                     <div className="flex flex-col items-center justify-start w-full mt-5 gap-5">
//                       <SignUpInputfield className="w-full" />
//                       <div className="flex flex-col items-start justify-start w-full pt-[5px] gap-[9px]">
//                         <Text as="p" className="!text-gray-900 !font-medium">
//                           Password
//                         </Text>
//                         <Input
//                           color="white_A700"
//                           size="xs"
//                           type="password"
//                           name="password"
//                           placeholder="*************"
//                           prefix={
//                             <Img
//                               src="images/img_lockpad_locksafesecurityprotectedlock_alt_24_outline.svg"
//                               alt="lock,pad lock,safe,security,protected,lock alt, / 24 / Outline"
//                             />
//                           }
//                           suffix={
//                             <Img src="images/img_eye_1_1.svg" alt="eye (1) 1" />
//                           }
//                           className="w-full sm:w-full gap-[15px] rounded-tr-[10px] rounded-br-[10px] border-gray-300 border border-solid"
//                         />
//                       </div>
//                     </div>
//                     <Button className="w-full mt-[30px] sm:px-5 bg-blue-350 text-white font-medium rounded-[10px]" onClick={navigation}>
//                       Sign In
//                     </Button>
//                     <div className="flex flex-row justify-between items-center w-full mt-6 py-[3px]">
//                       <CheckBox
//                         shape="square"
//                         name="keepmesignedin"
//                         label="Keep me signed in"
//                         id="keepmesignedin"
//                         className="gap-2.5 text-gray-700_01 text-left"
//                       />
//                       <Link to="#">
//                         <Text as="p" className="!text-gray-700_01">
//                           Forgot Password?
//                         </Text>
//                       </Link>
//                     </div>
//                     <div className="flex flex-row justify-start w-[66%] md:w-full mt-6 gap-1 py-[3px]">
//                       <Link to="#">
//                         <Text as="p" className="!text-gray-700_01 !font-medium">
//                           Don’t have an account?
//                         </Text>
//                       </Link>
//                       <Link to="/signup">
//                         <Text as="p" className="text-red-400 !font-medium">
//                           Sign Up
//                         </Text>

//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </ModalProvider>
//   );
// }
import { useState } from "react";
import { default as ModalProvider } from "react-modal";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { Button, Img, Input, Text } from "../../components";
import { CheckBox } from "../../components/CheckBox";
import SignUpInputfield from "../../components/SignUpInputfield";


export default function LogIn({ isOpen, ...props }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e);
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:9090/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include',
      });

      if (response.ok) {
        toast.success("Login Successfull")
        navigate('/');
      } else {
        setErrorMessage('Invalid credentials');
        toast.error("Invalid credentials")
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again.');
      toast.error("An error occurred. Please try again.")
    }
  };

  return (
    <ModalProvider
      {...props}
      appElement={document.getElementById("root")}
      isOpen={true}
      className="min-w-[1052px]"
    >
      <div className="flex flex-row justify-center w-full px-10">
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-row justify-center w-[95%]">
            <div className="flex flex-row justify-center w-full p-2">
              <div className="flex flex-row justify-center w-full">
                <div className="flex flex-row md:flex-col justify-between items-center w-full md:gap-10">
                  <div className="flex flex-col items-center justify-start w-[55%] md:w-full gap-[2px]">
                    <Img
                      src="images/login4.webp"
                      alt="lock,pad lock,safe,security,protected,lock alt, / 24 / Outline"
                      className="w-50vw rounded-[15px]"
                      style={{ height: "75vh", maxWidth: "calc(100% - 40px)" }}
                    />
                    <div className="flex justify-center w-[36px] h-[10px] sm:w-full" />
                  </div>
                  <div className="h-[641px] w-px md:w-full md:h-px bg-gradient" />
                  <div className="flex flex-col items-center justify-start w-[40%] md:w-full">
                    <Button
                      leftIcon={
                        <Img
                          src="images/img_googleplus_1_1.svg"
                          alt="google-plus (1) 1"
                        />
                      }
                      className="w-full gap-[23px] sm:px-5 bg-blue-350 text-white border-gray-300 border border-solid rounded-[10px]"
                    >
                      Sign in with google
                    </Button>
                    <div className="flex flex-row justify-center items-center w-full mt-5 gap-[11px] p-[3px]">
                      <div className="h-px w-[6%] ml-[55px] md:ml-5 bg-gray-700_01" />
                      <Link to="#">
                        <Text as="p" className="!text-gray-700_01 text-center">
                          Or sign in with your email
                        </Text>
                      </Link>
                      <div className="h-px w-[6%] mr-[55px] md:mr-5 bg-gray-700_01" />
                    </div>
                    <div className="flex flex-col items-center justify-start w-full mt-5 gap-5">
                      <SignUpInputfield
                        className="w-full"
                        value={email}
                        onChange={handleEmailChange}
                      />
                      <div className="flex flex-col items-start justify-start w-full pt-[5px] gap-[9px]">
                        <Text as="p" className="!text-gray-900 !font-medium">
                          Password
                        </Text>
                        <Input
                          color="white_A700"
                          size="xs"
                          type="password"
                          name="password"
                          placeholder="*************"
                          prefix={
                            <Img
                              src="images/img_lockpad_locksafesecurityprotectedlock_alt_24_outline.svg"
                              alt="lock,pad lock,safe,security,protected,lock alt, / 24 / Outline"
                            />
                          }
                          suffix={
                            <Img src="images/img_eye_1_1.svg" alt="eye (1) 1" />
                          }
                          className="w-full sm:w-full gap-[15px] rounded-tr-[10px] rounded-br-[10px] border-gray-300 border border-solid"
                          value={password}
                          onChange={(e) => handlePasswordChange(e)}
                        />
                      </div>
                    </div>
                    {errorMessage && (
                      <Text as="p" className="!text-red-600 mt-2">
                        {errorMessage}
                      </Text>
                    )}
                    <Button className="w-full mt-[30px] sm:px-5 bg-blue-350 text-white font-medium rounded-[10px]" onClick={handleLogin}>
                      Sign In
                    </Button>
                    <div className="flex flex-row justify-between items-center w-full mt-6 py-[3px]">
                      <CheckBox
                        shape="square"
                        name="keepmesignedin"
                        label="Keep me signed in"
                        id="keepmesignedin"
                        className="gap-2.5 text-gray-700_01 text-left"
                      />
                      <Link to="#">
                        <Text as="p" className="!text-gray-700_01">
                          Forgot Password?
                        </Text>
                      </Link>
                    </div>
                    <div className="flex flex-row justify-start w-[66%] md:w-full mt-6 gap-1 py-[3px]">
                      <Link to="#">
                        <Text as="p" className="!text-gray-700_01 !font-medium">
                          Don’t have an account?
                        </Text>
                      </Link>
                      <Link to="/signup">
                        <Text as="p" className="text-red-400 !font-medium">
                          Sign Up
                        </Text>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
}




