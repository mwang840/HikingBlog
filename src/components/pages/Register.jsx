import React, {useState} from  "react";
import {FormControl, FormLabel, Input, FormErrorMessage, FormHelperText, Heading} from "@chakra-ui/react";
import {Button} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import HikingBlogLayout from "./HikingBlogMain";
import { registerWGoogle } from "../services/Firebase";

const Register = ({onBack})=>{

   const [email, setEmail] = useState("");
   const [userName, setUserName] = useState("");
   const [password, setPassword] = useState("");
   const [emailError, setEmailError] = useState(false);
   const [userNameError, setUserNameError] = useState(false);
   const [passwordError, setPasswordError] = useState(false);
   const navigate = useNavigate();
   const [hikingMainPage, setHikingMainPage] = useState(false);
   const [registerVisible, setRegisterVisible] = useState(true);
   const updateEmail = (e) => setEmail(e.target.value);
   const updateUserName = (e)=> setUserName(e.target.value);
   const updatePassword = (e) => setPassword(e.target.value);
  

   const goBack = ()=>{
    navigate(-1);
   }

   const showBlogPage = () =>{
    setHikingMainPage(true);
    setRegisterVisible(false);
   }


   const handleRegister = async (event) => {
    event.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
      console.log(userCredentials);
      showBlogPage();
    })
    .catch((error) => {
      console.error(error);
    });
  };
  
  const handleRegisterWithGoogle = async(event) =>{
    event.preventDefault();
    await registerWGoogle();
    showBlogPage();
  }


   return (
    <div>
      {registerVisible && (
        <div>
              <Heading as="h1" fontSize="70px">
            Sign-up
          </Heading>
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
        <FormErrorMessage>Password is required. Its recommended for it to be at least 8 characters, with one special character and one uppercase and lowercase character</FormErrorMessage>
      )}
      </FormControl>
      <Button onClick={goBack}>Back</Button>
      <Button onClick={handleRegister}>Register</Button>
      <Button onClick={handleRegisterWithGoogle} size="lg" colorScheme="red">Sign up/sign in with google</Button>
        </div>
      )}
      
      {hikingMainPage && <HikingBlogLayout />}
    </div>
   );
};

export default Register;