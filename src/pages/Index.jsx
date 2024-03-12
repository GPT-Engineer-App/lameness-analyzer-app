import React from "react";
import { Box, Button, Container, Heading, Text, VStack, Image, Flex, Spacer } from "@chakra-ui/react";
import { FaHorseHead, FaChartLine, FaMobileAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box bg="gray.100" p={10} textAlign="center">
        <Heading as="h1" size="xl" mb={6}>
          Horse Lameness Analyzer
        </Heading>
        <Text fontSize="xl" mb={6}>
          Advanced machine learning to keep your equine athletes at peak performance.
        </Text>
        <Button leftIcon={<FaChartLine />} colorScheme="teal" size="lg">
          Analyze Now
        </Button>
      </Box>

      <Flex wrap="wrap" spacing={10} p={10}>
        <Box flex="1" textAlign="center" p={5}>
          <FaHorseHead size="5em" color="#4A5568" />
          <Heading as="h3" size="lg" mt={5}>
            Detect Lameness
          </Heading>
          <Text mt={3}>Early detection of lameness to prevent injuries and ensure your horse's well-being.</Text>
        </Box>

        <Spacer />

        <Box flex="1" textAlign="center" p={5}>
          <FaChartLine size="5em" color="#4A5568" />
          <Heading as="h3" size="lg" mt={5}>
            Analyze Performance
          </Heading>
          <Text mt={3}>Track and analyze your horse's performance over time with detailed reports.</Text>
        </Box>

        <Spacer />

        <Box flex="1" textAlign="center" p={5}>
          <FaMobileAlt size="5em" color="#4A5568" />
          <Heading as="h3" size="lg" mt={5}>
            Mobile App
          </Heading>
          <Text mt={3}>Easy-to-use mobile app to monitor your horse's health on the go.</Text>
        </Box>
      </Flex>

      <VStack spacing={8} py={10} alignItems="center" bg="teal.500" color="white">
        <Heading as="h2" size="lg">
          Get Started Now
        </Heading>
        <Text fontSize="xl">Sign up for free and take the first step towards optimal horse care.</Text>
        <Button colorScheme="teal" variant="outline" size="lg">
          Sign Up
        </Button>
      </VStack>

      <Box textAlign="center" p={10}>
        <Heading as="h2" size="lg" mb={5}>
          Trusted by Professionals
        </Heading>
        <Image src="https://images.unsplash.com/photo-1478877144596-fb7ee516e462?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxob3JzZSUyMHByb2Zlc3Npb25hbHN8ZW58MHx8fHwxNzEwMjQxMjkxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Trusted by Professionals" boxSize="200px" objectFit="cover" borderRadius="full" mx="auto" />
      </Box>
    </Container>
  );
};

export default Index;
