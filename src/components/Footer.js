import { Box, Flex, Text, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box py={5} bg="gray.800" color="white" textAlign="center">
      <Flex justify="center" gap={4}>
        <Link href="https://github.com/nnersisy" isExternal>
          GitHub
        </Link>
        <Link href="https://linkedin.com/in/nona-nersisyan" isExternal>
          LinkedIn
        </Link>
        <Link href="mailto:nonanersisyan03@gmail.com">Email</Link>
      </Flex>
      <Text mt={2} fontSize="sm">
        © {new Date().getFullYear()} Nona Nersisyan. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
