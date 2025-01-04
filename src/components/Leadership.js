import { Box, Heading, VStack, Text } from "@chakra-ui/react";

const Leadership = () => {
  return (
    <Box id="leadership" py={20} px={10} textAlign="center">
      <Heading fontSize="3xl" mb={10}>
        Leadership Experience
      </Heading>
      <VStack spacing={4} align="start" maxW="800px" mx="auto">
        <Box>
          <Heading fontSize="xl" mb={2}>
            Director of IT - All Armenian Students Association
          </Heading>
          <Text>
            - Led a team to establish the first global mentorship program for Armenian students.
          </Text>
          <Text>
            - Organized a professional retreat featuring Forbes-featured startup founders.
          </Text>
          <Text>
            - Managed a newsletter growing to 3000+ active subscribers with 64% open rate.
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default Leadership;
