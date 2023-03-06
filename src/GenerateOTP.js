import React, {useEffect} from "react";

function GenerateOTP() {

  useEffect(() => {
    OTPGeneration();
  }, [])
  
  const OTPGeneration = () => {
    const digits = "0123456789";
    let OTP = "";
    for (let i = 0; 1 < 6; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
    console.log(OTP);
  };


  return <>OTP GENERATED CHECK CONSOLE</>;
}

export default GenerateOTP;
