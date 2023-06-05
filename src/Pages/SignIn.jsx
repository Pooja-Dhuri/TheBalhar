import {
  Box,
  FormControl,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  HStack,
  Text,
  InputGroup,
  InputRightElement,
  ListItem,
  ListIcon,
  List,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { MdCheckCircle } from "react-icons/md";
import { useNavigate } from "react-router";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  let navigate=useNavigate()

  const handleSigin=()=>{
    navigate("/signup")
  }
  return (
    <Box mt={"150px"}>
      <HStack w={"80%"} m={"auto"} gap={"50px"}>
        <Stack spacing={8} mx={"auto"} px={6} textAlign={"left"}>
          <Heading fontSize={"4xl"}>Login</Heading>
          <Box>
            <Stack spacing={4}>
              <FormControl id="email">
                <Input type="email" placeholder="Email" borderRadius={"0px"} w={"400px"}/>
              </FormControl>
              <FormControl id="password">
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    borderRadius={"0px"}
                    w={"400px"}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10}>
                <Button
                  bg={"#323232"}
                  color={"white"}
                  w={"400px"}
                  borderRadius={"0px"}
                  _hover={{
                    bg: "#323232",
                  }}
                >
                  SIGN IN
                </Button>
                <Link color={"black.400"}>Forgot password?</Link>
              </Stack>
            </Stack>
          </Box>
        </Stack>

        <Box textAlign={"left"}>
          <Text fontSize={"25px"} fontWeight={500}>
            Create an account with us and you will <br /> be able to:
          </Text>
          <List mt={"20px"} mb={
            "20px" 
          }>
            <ListItem><ListIcon as={MdCheckCircle}  />Check out faster</ListItem>
            <ListItem><ListIcon as={MdCheckCircle}  />Access your order history</ListItem>
            <ListItem><ListIcon as={MdCheckCircle}  />Track new orders</ListItem>
            <ListItem><ListIcon as={MdCheckCircle}  />Save items to your wish list</ListItem>
          </List>
          <Text>Don't have an account?</Text>
          <Button
            mt={"20px"}
            borderRadius={"0px"}
            border={"1px solid black"}
            backgroundColor={"transparent"}
            onClick={handleSigin}
          >
            SIGN UP
          </Button>
        </Box>
      </HStack>
    </Box>
  );
}
