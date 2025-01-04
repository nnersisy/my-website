import {
    ChakraProvider,
    Box,
    VStack,
    Grid,
  } from "@chakra-ui/react";
  import { ColorModeSwitcher } from "./ColorModeSwitcher";
  import theme from "./theme";
  import Navbar from "./components/Navbar";
  import Hero from "./components/Hero";
  import About from "./components/About";
  import Education from "./components/Education";
  import TechnicalSkills from "./components/TechnicalSkills";
  import Experience from "./components/Experience";
  import Leadership from "./components/Leadership";
  import Projects from "./components/Projects";
  import Interests from "./components/Interests";
  import Footer from "./components/Footer";
  import HorizontalDivider from "./HorizontalDivider";
  
  function App() {
    return (
      <ChakraProvider theme={theme}>
        <Navbar />
        <Box textAlign="center" fontSize="xl">
          <Hero />
          <HorizontalDivider />
          <About />
          <HorizontalDivider />
          <Education />
          <HorizontalDivider />
          <TechnicalSkills />
          <HorizontalDivider />
          <Experience />
          <HorizontalDivider />
          <Leadership />
          <HorizontalDivider />
          <Projects />
          <HorizontalDivider />
          <Interests />
          <HorizontalDivider />
          <Footer />
        </Box>
      </ChakraProvider>
    );
  }
  
  export default App;
  