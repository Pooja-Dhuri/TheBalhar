import { Box, Button, Checkbox, HStack, Heading, Input, Text } from "@chakra-ui/react";
import React from "react";

const SignUp = () => {
  return (
    <Box mt={"150px"}>
      <HStack w={"80%"} m={"auto"}
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      >
        <Box border={"1px solid red"}>
          <Text>Create an account</Text>
          <HStack>
            <Input />
            <Input />
          </HStack>
          <HStack>
            <Input />
            <Input />
          </HStack>
          <HStack>
            <Input />
            <Input />
          </HStack>
          <HStack>
          <Checkbox>I have read and agree to the Terms & Conditions.</Checkbox>
          </HStack>
          <Button>SUBMIT</Button>
        </Box>
        <Box border={"1px solid red"}>
            <Heading>Already have an account?</Heading>
            <Text>Sign in to your account to track your orders, manage your addresses and check gift card amounts.</Text>
            <Button>SIGN IN</Button>
        </Box>
      </HStack>
    </Box>
  );
};

export default SignUp;
