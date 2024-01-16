import React, {useState} from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Button, Heading, ButtonGroup } from "@chakra-ui/react";
import Register from "./components/pages/Register";
import { registerWGoogle } from "./components/services/Firebase";
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

  const showRegister = () => {
    setHomeVisible(false);
    setRegisterVisible(true);
  };

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <div className="App">
          {isHomeVisible && (
            <div>
            <Heading as="h1" fontSize="70px">
            Hiking Blog
          </Heading>
          <Heading as="h3" fontSize="35px">
            A Blog to Post Hiking Pictures and to Write Reviews about each trail
          </Heading>
          <ButtonGroup spacing="8">
            <Link to="/register">
              <Button size="lg" colorScheme="teal" onClick={showRegister}>
                Register
              </Button>
            </Link>
            <Button size="lg" colorScheme="purple">
              Log-In
            </Button>
            <Button onClick={registerWGoogle} size="lg" colorScheme="red">Sign up/sign in with google</Button>
          </ButtonGroup>
          </div>
          )}

        {registerVisible && <Register />}

          {/* <Routes>
            <Route path="/register" element={<Register />} />
          </Routes> */}
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;