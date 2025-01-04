import { Box, Heading, VStack, Text } from "@chakra-ui/react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer Intern - Workiva",
      duration: "May 2024 – Dec 2024",
      location: "New York, NY",
      details: [
        "Enhanced UI with Dart and React, increasing user efficiency by 35%.",
        "Implemented event logging in Kotlin, improving traceability by 40%.",
      ],
    },
    {
      title: "Software Engineer Intern - Refer Me",
      duration: "Jun 2023 – Aug 2023",
      location: "Los Angeles, CA",
      details: [
        "Designed an advanced filter system for job boards using Chakra UI and React.",
        "Created an 'Actively Referring' system, engaging 100K+ users.",
      ],
    },
    {
      title: "Cloud/Edge Computing Intern - Information Sciences Institute",
      duration: "Jun 2022 – Jul 2022",
      location: "Los Angeles, CA",
      details: [
        "Developed a workflow using Chameleon Cloud and Pegasus for classifying 26 types of zooplankton.",
        "Integrated experimental machine learning, achieving 70% faster and more accurate insights.",
        "Presented research at the 18th IEEE International e-Science Conference.",
      ],
    },
  ];

  return (
    <Box id="experience" py={20} px={10}>
      <Heading fontSize="3xl" mb={10} textAlign="center">
        Professional Experience
      </Heading>
      <VStack spacing={8} align="center" maxW="800px" mx="auto">
        {experiences.map((experience, index) => (
          <Box key={index}>
            <Heading fontSize="xl" mb={2} textAlign="center">
              {experience.title}
            </Heading>
            <Text fontSize="sm" mb={2} textAlign="center">
              {experience.duration} | {experience.location}
            </Text>
            <VStack spacing={2} align="center">
              {experience.details.map((detail, i) => (
                <Text key={i} fontSize="md" textAlign="center">
                  - {detail}
                </Text>
              ))}
            </VStack>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Experience;
