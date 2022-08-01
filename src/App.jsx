import React from 'react';
import {
  ChakraProvider,
  Box,
  extendTheme
} from '@chakra-ui/react';
import Nav from './Components/Nav/Nav';
import Main from './Components/Main/Main';
import NavMobile from './Components/Nav/NavMobile';

const theme = extendTheme({
  fonts: {
    body: `'Epilogue', sans-serif`,
  },
})

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <NavMobile/>
        <Nav/>
        <Main/>
      </Box>
    </ChakraProvider>
  );
}

export default App;
