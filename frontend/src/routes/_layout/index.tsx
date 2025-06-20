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
        title="Scrape the Web with a Simple HTTPS API"
        subtitle="Bypass Cloudflare, scrape JavaScript-heavy sites, and extract data reliably with our powerful proxy API."
        ctas={[
          { text: "Start Free Trial", link: "https://cloud.thedataproxy.com" },
          { text: "Request Demo", link: "/demo-request" },
        ]}
        bgImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
      />

      {/* Scraping Challenges Section */}
      <Box py={16} bg="white" maxW="1200px" mx="auto" px={4}>
        <Heading as="h2" size="xl" textAlign="center" mb={10} color="gray.800" fontWeight="medium">
          Tackle Your Web Scraping Pain Points
        </Heading>
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium">
              Bypass Bot Defenses
            </Heading>
            <Text color="gray.600">
              Overcome Cloudflare and anti-bot measures with our 10M+ IP pool, perfect for scraping sites like HLTV or Codeur.com.
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium">
              Scrape JavaScript Sites
            </Heading>
            <Text color="gray.600">
              Easily handle dynamic content on sites like Lowes with our API, no complex browser automation needed.
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium">
              Stay Compliant
            </Heading>
            <Text color="gray.600">
              Scrape ethically with GDPR, ISO 27001, and SOC 2 compliance built into our platform.
            </Text>
          </VStack>
        </Grid>
      </Box>

      {/* Proxy Network Coverage */}
      <Box py={16} bg="orange.50" color="gray.800">
        <Heading as="h2" size="xl" textAlign="center" mb={10} fontWeight="medium">
          Global Proxy Network for Reliable Scraping
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

      {/* API Features */}
      <Box py={16} bg="white" maxW="1200px" mx="auto" px={4}>
        <Heading as="h2" size="xl" textAlign="center" mb={10} color="gray.800" fontWeight="medium">
          Why Our HTTPS Scraping API Stands Out
        </Heading>
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium">
              Simple Integration
            </Heading>
            <Text color="gray.600">
              Make HTTPS requests with our API to scrape data effortlessly, no complex setup required.
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium">
              Anti-Ban Protection
            </Heading>
            <Text color="gray.600">
              Intelligent routing and IP rotation minimize blocks, ensuring uninterrupted scraping.
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium">
              Scalable Performance
            </Heading>
            <Text color="gray.600">
              Handle millions of requests with unlimited capacity and fast response times.
            </Text>
          </VStack>
        </Grid>
      </Box>

      {/* Business Solutions */}
      <Box py={16} bg="orange.50" maxW="1200px" mx="auto" px={4}>
        <Heading as="h2" size="xl" textAlign="center" mb={10} color="gray.800" fontWeight="medium">
          Power Your Business with Scraped Data
        </Heading>
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium">
              Market Research
            </Heading>
            <Text color="gray.600">
              Scrape trends and sentiment data from global sources to stay ahead of competitors.
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium">
              AI Training Data
            </Heading>
            <Text color="gray.600">
              Gather diverse datasets for machine learning with ethical, compliant scraping.
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium">
              Lead Generation
            </Heading>
            <Text color="gray.600">
              Extract contact data from directories and networks to fuel your sales pipeline.
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
            Start Scraping with Our HTTPS API Today
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto">
            Unlock reliable web scraping with a simple API call. Bypass blocks, scrape any site, and get the data you need.
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