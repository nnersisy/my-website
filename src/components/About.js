import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const About = () => {
  return (
    <Box id="about" py={20} px={10} textAlign="center">
      <Heading fontSize="3xl" mb={4}>
        About Me
      </Heading>
      <VStack spacing={4}>
        <Text>
          I’m Nona Nersisyan, a passionate software engineer currently pursuing a Bachelor of Science in Computer Science at the University of Southern California (USC).
        </Text>
        <Text>
          I specialize in building impactful solutions through innovative software engineering practices. I enjoy baking, documentaries, and exploring different cultures, including Swedish and German candy!
        </Text>
      </VStack>
    </Box>
  );
};

export default About;
