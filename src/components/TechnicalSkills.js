import { Box, Heading, VStack, Text } from "@chakra-ui/react";

const TechnicalSkills = () => {
  return (
    <Box id="technical-skills" py={20} px={10}>
      <Heading fontSize="3xl" mb={10} textAlign="center">
        Technical Skills
      </Heading>
      <VStack spacing={4}>
        <Text>
          <strong>Languages:</strong> C, C++, Java, Dart, Kotlin, Swift, Assembly, Python, JavaScript, TypeScript, SQL, PHP
        </Text>
        <Text>
          <strong>Tools:</strong> Git, AWS, Docker, CI/CD, SpringBoot, Jira, OpenAPI, React, NodeJS, Flask, Agile, Scrum
        </Text>
      </VStack>
    </Box>
  );
};

export default TechnicalSkills;
