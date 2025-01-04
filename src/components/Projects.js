import { Box, Heading, VStack, Text, Link, SimpleGrid } from "@chakra-ui/react";

const Projects = () => {
  const projects = [
    {
      title: "Dough to Bread",
      description: "Mobile platform empowering entrepreneurs with AI-based financial tools.",
      link: "#",
    },
    {
      title: "IMDb for Music",
      description: "Web app using Spotify API to share and rate music with friends.",
      link: "#",
    },
    {
      title: "Budget Tracking App",
      description: "Flutter and Dart-based app offering interactive financial management.",
      link: "#",
    },
  ];

  return (
    <Box id="projects" py={20} px={10}>
      <Heading fontSize="3xl" mb={10} textAlign="center">
        Projects
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={10} maxW="1200px" mx="auto">
        {projects.map((project, index) => (
          <VStack
            key={index}
            p={5}
            borderWidth={1}
            borderRadius="lg"
            boxShadow="md"
            _hover={{
              transform: "scale(1.05)",
              transition: "all 0.3s ease-in-out",
              boxShadow: "lg",
            }}
          >
            <Heading fontSize="xl">{project.title}</Heading>
            <Text textAlign="center">{project.description}</Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
