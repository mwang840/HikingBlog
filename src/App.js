import React, {useState} from "react";
import { ChakraProvider, extendTheme, Center, Stack } from "@chakra-ui/react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Button, Heading, ButtonGroup } from "@chakra-ui/react";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";

const theme = extendTheme({
  colors: {
    teal: {
      50: "#E6FFFA",
      // Add other teal color shades as needed
    },
  },
  sizes: {
    lg: "20px",
  },
});

function App() {

  const [isHomeVisible, setHomeVisible] = useState(true);
  const [registerVisible, setRegisterVisible] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);
  const showRegister = () => {
    setHomeVisible(false);
    setRegisterVisible(true);
  };

  const showLogin = () =>{
    setHomeVisible(false);
    setLoginVisible(true);
  }

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <div className="App">
          {isHomeVisible && (
            <div>
            <Center><Heading as="h1" fontSize="70px">
            Hiking Blog
          </Heading></Center>
          <Center><Heading as="h3" fontSize="35px">
            A Blog to Post Hiking Pictures and to Write Reviews about each trail
          </Heading></Center>
          <ButtonGroup spacing="8">
            <Stack align='center' direction='row'>
            <Link to="/register">
              <Button size="lg" colorScheme="teal" onClick={showRegister}>
                Register
              </Button>
            </Link>
            <Link to="/login">
            <Button size="lg" colorScheme="purple" onClick={showLogin}>
              Log-In
            </Button>
            </Link>
            </Stack>
          </ButtonGroup>
          </div>
          )}

        {registerVisible && <Register />}
        {loginVisible && <Login/>}
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;