import { Box, Flex, Grid, Heading, Image, Text, VStack, Button, Link } from "@chakra-ui/react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import HeroSection from '../../components/HeroSection';
import Footer from '../../components/Common/Footer';

export const Route = createFileRoute("/_layout/")({
  component: LandingPage,
});

function LandingPage() {
  const navigate = useNavigate();

  return (
    <Box>
      {/* Hero Section */}
      <HeroSection
        title="Grow Your Startup with Data-Driven Solutions"
        subtitle="Bypass bot defenses, generate leads, and acquire users affordably with our web scraping and proxy tools."
        ctas={[
          { text: "Start Free Trial", link: "https://cloud.thedataproxy.com" },
          { text: "Request Demo", link: "/demo-request" },
        ]}
        bgImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
      />

      {/* Pain Points Section */}
      <Box py={16} bg="white" maxW="1200px" mx="auto" px={4}>
        <Heading as="h2" size="xl" textAlign="center" mb={10} color="gray.800" fontWeight="medium">
          Solve Your Growth Challenges
        </Heading>
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium">
              Beat Bot Defenses
            </Heading>
            <Text color="gray.600">
              Overcome Cloudflare and anti-bot measures with our 10M+ IP pool and intelligent routing.
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium">
              Grow Without Ads
            </Heading>
            <Text color="gray.600">
              Use our lead generation and organic growth tools to acquire users on a tight budget.
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium">
              Maximize Conversions
            </Heading>
            <Text color="gray.600">
              Optimize landing pages and nurture leads to turn clicks into loyal users.
            </Text>
          </VStack>
        </Grid>
      </Box>

      {/* Proxy Network Coverage */}
      <Box py={16} bg="orange.50" color="gray.800">
        <Heading as="h2" size="xl" textAlign="center" mb={10} fontWeight="medium">
          Global Proxy Network for Seamless Scraping
        </Heading>
        <Flex justify="space-around" flexWrap="wrap" maxW="1200px" mx="auto" px={4}>
          <VStack textAlign="center" p={4} minW="150px" spacing={2}>
            <Text fontSize="4xl" fontWeight="bold" color="orange.400">190+</Text>
            <Text fontSize="lg">Countries</Text>
          </VStack>
          <VStack textAlign="center" p={4} minW="150px" spacing={2}>
            <Text fontSize="4xl" fontWeight="bold" color="orange.400">99.9%</Text>
            <Text fontSize="lg">Uptime</Text>
          </VStack>
          <VStack textAlign="center" p={4} minW="150px" spacing={2}>
            <Text fontSize="4xl" fontWeight="bold" color="orange.400">24/7</Text>
            <Text fontSize="lg">Support</Text>
          </VStack>
          <VStack textAlign="center" p={4} minW="150px" spacing={2}>
            <Text fontSize="4xl" fontWeight="bold" color="orange.400">10M+</Text>
            <Text fontSize="lg">IP Pool</Text>
          </VStack>
        </Flex>
      </Box>

      {/* Business Solutions */}
      <Box py={16} bg="white" maxW="1200px" mx="auto" px={4}>
        <Heading as="h2" size="xl" textAlign="center" mb={10} color="gray.800" fontWeight="medium">
          Solutions for Startups and Developers
        </Heading>
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium">
              Lead Generation
            </Heading>
            <Text color="gray.600">
              Extract contact data from directories and networks to fuel your sales pipeline.
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium">
              Market Research
            </Heading>
            <Text color="gray.600">
              Gather competitor and market data to stay ahead with real-time insights.
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium">
              AI Training Data
            </Heading>
            <Text color="gray.600">
              Collect diverse datasets for machine learning with ethical scraping practices.
            </Text>
          </VStack>
        </Grid>
      </Box>

      {/* Cloud Provider Links */}
      <Box py={10} bg="orange.50">
        <Flex justify="center" gap={8} flexWrap="wrap">
          <Link href="https://aws.amazon.com" isExternal>
            <Image
              src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png"
              alt="AWS Logo"
              boxSize="50px"
            />
          </Link>
          <Link href="https://cloud.google.com" isExternal>
            <Image
              src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/gcp.png"
              alt="GCP Logo"
              boxSize="50px"
            />
          </Link>
          <Link href="https://azure.microsoft.com" isExternal>
            <Image
              src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/microsoft_azure.png"
              alt="Microsoft Azure Logo"
              boxSize="50px"
            />
          </Link>
        </Flex>
      </Box>

      {/* Call to Action */}
      <Box py={16} bg="orange.400" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium">
            Start Growing Today with a Free Trial
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto">
            Unlock powerful web scraping and lead generation tools to scale your startup without the hefty ad spend.
          </Text>
          <Flex justify="center" gap={6} flexWrap="wrap">
            <Button
              size="lg"
              bg="white"
              color="orange.400"
              _hover={{ bg: "gray.200" }}
              as="a"
              href="https://cloud.thedataproxy.com"
            >
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              borderColor="white"
              color="white"
              _hover={{ bg: "white", color: "orange.400" }}
              as="a"
              href="/contact-sales"
            >
              Contact Sales
            </Button>
          </Flex>
        </Box>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
}

export default LandingPage;