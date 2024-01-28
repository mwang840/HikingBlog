import React, {useState} from  "react";
import {FormControl, FormLabel, Input, FormErrorMessage, FormHelperText, Heading, InputRightElement, InputGroup} from "@chakra-ui/react";
import {Button} from "@chakra-ui/react";
import {redirect} from "react-router-dom";
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
   const [show, setShow] = useState(false);
   const [hikingMainPage, setHikingMainPage] = useState(false);
   const [registerVisible, setRegisterVisible] = useState(true);
   const updateEmail = (e) => setEmail(e.target.value);
   const updateUserName = (e)=> setUserName(e.target.value);
   const updatePassword = (e) => setPassword(e.target.value);
   const handleClick = () => setShow(!show)


   const showBlogPage = () =>{
    setHikingMainPage(true);
    setRegisterVisible(false);
   }


   const handleRegister = async (event) => {
    event.preventDefault();
    const auth = getAuth();

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    setEmailError(!emailRegex.test(email));
    setUserNameError(userName === '');
    setPasswordError(password === ''); 
    if(!emailError && !userNameError && !passwordError){
    await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
      console.log(userCredentials);
      showBlogPage();
    })
    .catch((error) => {
      console.error(error);
    });
    }
    
  };
  /**Note the google popup needs work, need to figure out why everytime its clicked it takes you to the main page with the popup */
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
          {/* This email field IS required */} 
          {!emailError ? (
        <FormHelperText>
          Enter your email.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
         <FormLabel>User Name</FormLabel>
         <Input type='userName' value={userName} onChange={updateUserName} />
         {/* This userName field IS required */} 
      {!userNameError ? (
        <FormHelperText>
          Enter your username.
        </FormHelperText>
      ) : (
        <FormErrorMessage>UserName is required.</FormErrorMessage>
      )}
         <FormLabel>Password</FormLabel>
         <InputGroup size='md'>
         <Input type={show ? 'text' : 'password'} value={password} onChange={updatePassword} />
         <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
      </InputGroup>
         {!passwordError ? (
        <FormHelperText>
          Enter your password.
        </FormHelperText>

      ) : (
        <FormErrorMessage>Password is required. Its recommended for it to be at least 8 characters, with one special character and one uppercase and lowercase character</FormErrorMessage>
      )}
      </FormControl>
      <Button onClick={()=>redirect("/")} size="lg" colorScheme="blue">Back</Button>
      <Button onClick={handleRegister} size="lg" colorScheme="green">Register</Button>
      <Button onClick={handleRegisterWithGoogle} size="lg" colorScheme="red">Sign up/sign in with google</Button>
        </div>
      )}
      
      {hikingMainPage && <HikingBlogLayout />}
    </div>
   );
};

export default Register;