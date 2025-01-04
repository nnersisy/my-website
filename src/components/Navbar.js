import { Flex, Link, useColorModeValue } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
import { ColorModeSwitcher } from "../ColorModeSwitcher";

const Navbar = () => {
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.800", "gray.200");

  return (
    <Flex
      as="nav"
      p={4}
      position="fixed"
      top={0}
      width="100%"
      bg={bgColor}
      color={textColor}
      boxShadow="sm"
      zIndex={10}
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex gap={6} ml={10}>
        <Link as={ScrollLink} to="about" smooth={true} duration={500} cursor="pointer">
          About
        </Link>
        <Link as={ScrollLink} to="education" smooth={true} duration={500} cursor="pointer">
          Education
        </Link>
        <Link as={ScrollLink} to="experience" smooth={true} duration={500} cursor="pointer">
          Experience
        </Link>
        <Link as={ScrollLink} to="projects" smooth={true} duration={500} cursor="pointer">
          Projects
        </Link>
      </Flex>
      <Flex mr={10}>
        <ColorModeSwitcher />
      </Flex>
    </Flex>
  );
};

export default Navbar;
