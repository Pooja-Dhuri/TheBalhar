import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlinePortrait } from "react-icons/md";

const Footer = () => {
  return (
    <Box borderTop={"1px solid black"} height={"auto"} mt={"20px"} p={["0px","0px","10px","40px"]}>
      <HStack
        height={"300px"}
        w={"90%"}
        m={"auto"}
        alignItems={"center"}
        justifyContent={"space-around"}
      >
        <Box>
          <HStack gap={"20px"}>
            <Box>
              <AiFillGithub style={{ height: "50px", width: "50px" }} />
            </Box>
            <Box>
              <FaLinkedin style={{ height: "50px", width: "50px" }} />
            </Box>
            <Box>
              <MdOutlinePortrait style={{ height: "50px", width: "50px" }} />
            </Box>
          </HStack>
        </Box>
        <Box textAlign={"left"} display={["none","none","none","block"]}>
          <Text fontWeight={600} fontSize={"20px"} lineHeight={10}>
            Information
          </Text>
          <Text fontSize={"20px"}>International Shipping</Text>
        </Box>
        <Box textAlign={"left"} display={["none","none","none","block"]}>
          <Text fontWeight={600} fontSize={"20px"} lineHeight={10}>
            Our Company
          </Text>
          <Text fontSize={"20px"}>Testimonials</Text>
        </Box>
        <Box textAlign={"left"} display={["none","none","none","block"]}>
          <Text fontWeight={600} fontSize={"20px"} lineHeight={10}>
            Customer Service
          </Text>
          <Text lineHeight={10} fontSize={"20px"}>
            Contact
          </Text>
          <Text lineHeight={10} fontSize={"20px"}>
            FAQ
          </Text>
          <Text lineHeight={10} fontSize={"20px"}>
            Shipping and Delivery policy
          </Text>
          <Text lineHeight={10} fontSize={"20px"}>
            Refund Policy
          </Text>
          <Text lineHeight={10} fontSize={"20px"}>
            Track Order
          </Text>
        </Box>
      </HStack>
    </Box>
  );
};

export default Footer;
