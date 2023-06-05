import { Box, Button, Checkbox, HStack, Input, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router";

const SignUp = () => {
  let navigate=useNavigate()

  const handleSigUp=()=>{
       navigate("/signin")
  }

  return (
    <Box mt={"150px"}>
      <HStack w={"80%"} m={"auto"} gap={"50px"}>
        <Box textAlign={"left"}>
          <Text ml={"20px"} fontSize={"35px"} fontWeight={"500"}>Create an account</Text>
          <HStack gap={"30px"} p={"20px"}>
            <Input placeholder="Email" w={"300px"} height={"45px"} borderRadius={"0px"}/>
            <Input placeholder="Password" w={"300px"} height={"45px"} borderRadius={"0px"}  />
          </HStack>
          <HStack gap={"30px"} p={"20px"}>
            <Input placeholder="First Name" w={"300px"} height={"45px"} borderRadius={"0px"} />
            <Input placeholder="Last Name" w={"300px"} height={"45px"} borderRadius={"0px"} />
          </HStack>
          <HStack gap={"30px"} p={"20px"}>
            <Input placeholder="Mobile" w={"300px"} height={"45px"} borderRadius={"0px"} />
            <select name="" id="" style={{width:"300px",height:"45px"}}>
              <option value="India">India</option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </HStack>
          <HStack p={"20px"}>
          <Checkbox>I have read and agree to the Terms & Conditions.</Checkbox>
          </HStack>
          <Button m={"20px"} borderRadius={"0px"} backgroundColor={"#323232"} color={"white"}>SUBMIT</Button>
        </Box>
        <Box textAlign={"left"}>
            <Text fontSize={"25px"} fontWeight={500} lineHeight={"50px"}>Already have an account?</Text>
            <Text>Sign in to your account to track your orders,<br/> manage your addresses and check gift card <br/> amounts.</Text>
            <Button mt={"20px"} borderRadius={"0px"} border={"1px solid black"} backgroundColor={"transparent"} onClick={handleSigUp} >SIGN IN</Button>
        </Box>
      </HStack>
    </Box>
  );
};

export default SignUp;
