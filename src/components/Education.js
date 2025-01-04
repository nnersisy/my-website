import { Box, Heading, VStack, Text } from "@chakra-ui/react";

const Education = () => {
  return (
    <Box id="education" py={20} px={10}>
      <Heading fontSize="3xl" mb={10} textAlign="center">
        Education
      </Heading>
      <VStack spacing={4} align="center" maxW="800px" mx="auto">
        <Text fontWeight="bold" textAlign="center">
          University of Southern California (USC)
        </Text>
        <Text textAlign="center">
          Viterbi School of Engineering, Los Angeles, CA
        </Text>
        <Text textAlign="center">
          Bachelor of Science in Computer Science, Expected May 2025
        </Text>
        <Text textAlign="center">
          Awards: AGBU Global Leadership Program Fellow, Undergraduate Published Academic Author, USC Provost Research Fellow
        </Text>
        <Text textAlign="center">
          Relevant Coursework: Operating Systems, AI, Full-Stack Web Development, Data Structures, Embedded Systems.
        </Text>
      </VStack>
    </Box>
  );
};

export default Education;
