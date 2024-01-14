import React, {useState} from  "react";
import {FormControl, FormLabel, Input, FormErrorMessage, FormHelperText} from "@chakra-ui/react";
import {Button} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";

const Register = ({onBack})=>{

   const [email, setEmail] = useState("");
   const [userName, setUserName] = useState("");
   const [password, setPassword] = useState("");
   const [emailError, setEmailError] = useState(false);
  const [userNameError, setUserNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
   const navigate = useNavigate();
   const updateEmail = (e) => setEmail(e.target.value);
   const updateUserName = (e)=> setUserName(e.target.value);
   const updatePassword = (e) => setPassword(e.target.value);
   const handleBack = () => {
      onBack();
   };

   const goBack = ()=>{
    navigate(-1)
   }

   return (
    <div>
      <FormControl isRequired>
         <FormLabel>Email</FormLabel>
         <Input type='email' value={email} onChange={updateEmail} />
         <FormLabel>User Name</FormLabel>
         <Input type='userName' value={userName} onChange={updateUserName} />
         <FormLabel>Password</FormLabel>
         <Input type='password' value={password} onChange={updatePassword} />
         {/* This email field IS required */} 
         {!emailError ? (
        <FormHelperText>
          Enter your email.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
    {/* This userName field IS required */} 
      {!userNameError ? (
        <FormHelperText>
          Enter your username.
        </FormHelperText>
      ) : (
        <FormErrorMessage>UserName is required.</FormErrorMessage>
      )}
      {/* This userName field IS required */} 
      {!passwordError ? (
        <FormHelperText>
          Enter your password.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Password is required. Its recommended for it to be at leat 8 characters, with one special</FormErrorMessage>
      )}
      </FormControl>
      <Button onClick={goBack}>Back</Button>
      <Button>Register</Button>
    </div>
   );
};

export default Register;