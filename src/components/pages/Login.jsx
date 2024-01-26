import React, {useState} from "react";
import {FormControl, FormLabel, Input, FormErrorMessage, FormHelperText, Heading} from "@chakra-ui/react";
import {Button} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import HikingBlogLayout from "./HikingBlogMain";

const Login = ({onBack})=>{
  const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [emailError, setEmailError] = useState(false);
   const [passwordError, setPasswordError] = useState(false);
   const navigate = useNavigate();
   const [hikingMainPage, setHikingMainPage] = useState(false);
   const [loginVisible, setLoginVisible] = useState(true);

   const updateEmail = (e) => setEmail(e.target.value);
   const updatePassword = (e) => setPassword(e.target.value);
   const goBack = ()=>{
    navigate(-1);
   }

   const showBlogPage = () =>{
    setHikingMainPage(true);
    setLoginVisible(false);
   }



   const handleLogin = async (event) => {
    event.preventDefault();
    const auth = getAuth();
    setEmailError(email === "");
    setPasswordError(password === '');
    if (!emailError && !passwordError) {
        await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential);
          showBlogPage();
        })
        .catch((error) => {
          console.error(error);
        });
      }
  };
  

   return (<div>
    {loginVisible && (<div>
        <Heading as="h1" fontSize="70px">
            Sign-in
    </Heading>
    <FormControl isRequired>
    <FormLabel>User Name</FormLabel>
         <Input type='userName' value={email} onChange={updateEmail} />
         {!emailError ? (
        <FormHelperText>
          Enter your email.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
         <FormLabel>Password</FormLabel>
         <Input type='password' value={password} onChange={updatePassword} />
         {!passwordError ? (
        <FormHelperText>
          Enter your password.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Password is required. Its recommended for it to be at least 8 characters, with one special character and one uppercase and lowercase character</FormErrorMessage>
      )}
    </FormControl>
    <Button onClick={goBack} size="lg" colorScheme="blue">Back</Button>
      <Button onClick={handleLogin} size="lg" colorScheme="green">Login</Button>
    </div>)}
    {hikingMainPage && <HikingBlogLayout />}
   </div>)
}

export default Login;