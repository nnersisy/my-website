import { Flex, Text, VStack, Link, HStack } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Flex
      id="hero"
      h="100vh"
      align="center"
      justify="center"
      direction="column"
      textAlign="center"
      px={6}
    >
      <VStack spacing={6}>
        <Text fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold">
          Nona Nersisyan
        </Text>
        <Text fontSize={{ base: "md", md: "xl" }}>
          Software Engineer | Problem Solver | Innovator
        </Text>
        <HStack spacing={4}>
          <Link
            href="https://linkedin.com/in/nona-nersisyan"
            isExternal
            color="accent"
            fontWeight="bold"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/nnersisy"
            isExternal
            color="accent"
            fontWeight="bold"
          >
            GitHub
          </Link>
          <Link
            href="mailto:nonanersisyan03@gmail.com"
            color="accent"
            fontWeight="bold"
          >
            Email
          </Link>
        </HStack>
      </VStack>
    </Flex>
  );
};

export default Hero;
