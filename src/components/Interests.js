import { Box, Heading, VStack, Text } from "@chakra-ui/react";

const Interests = () => {
  return (
    <Box id="interests" py={20} px={10}>
      <Heading fontSize="3xl" mb={10} textAlign="center">
        Interests
      </Heading>
      <VStack spacing={4}>
        <Text>Baking, documentaries, non-fiction books, soccer, hiking, Armenian culture, museums, Swedish and German candy.</Text>
      </VStack>
    </Box>
  );
};

export default Interests;
