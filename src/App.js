import './App.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Button, Heading, ButtonGroup} from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    teal: {
      50: '#E6FFFA',
      // Add other teal color shades as needed
    },
  },
  sizes: {
    lg : "20px"
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
    <div className="App">
      <Heading as="h1" fontSize="70px">
        Hiking Blog
      </Heading>
      <Heading as="h3" fontSize="35px">
        A Blog to Post Hiking Pictures and to Write Reviews about each trail
      </Heading>
      <ButtonGroup spacing="8">
        <Button size="lg" colorScheme="teal">
          Register
        </Button>
        <Button size="lg" colorScheme="purple">
          Log-In
        </Button>
      </ButtonGroup>
    </div>
  </ChakraProvider>
  );
}

export default App;
