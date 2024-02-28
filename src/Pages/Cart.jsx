import {
  Box,
  Button,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
  Image
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState, useReducer } from "react";
import { Reducer, dec, inc } from "../Reducer/Reducer";

const Cart = () => {
  const [cartData, setCartData] = useState([]);
  const [state, dispatch] = useReducer(Reducer, { count: 1 });

  const getCartData = async () => {
    try {
      const res = await axios.get("http://localhost:8080/CartData");
      console.log(res.data);
      setCartData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCartData();
  }, []);

  return (
    <Box>
      <Heading fontWeight={"medium"} py={7}>
        Your Cart
      </Heading>
      <Box w={"80%"} m={"auto"}>
        {cartData &&
          cartData.map((e) => (
            <HStack h={"150px"} justifyContent="space-around">
              <HStack h={"100px"}>
                <Box>
                  <Image src={e.image} alt="" height={"100px"} w={"80px"}/>
                </Box>
                <Box>
                  <Text>{e.name}</Text>
                  <Button>Remove</Button>
                </Box>
              </HStack>
              <Box h={"100px"} >
                <HStack
                  border={"1px solid black"}
                  justifyContent={"space-between"}
                  width={"150px"}
                >
                  <Button
                    backgroundColor={"white"}
                    _hover={{
                      backgroundColor: "white",
                    }}
                    isDisabled={state.count <= 1}
                    onClick={() => dispatch(dec)}
                  >
                    -
                  </Button>
                  <span>{state.count}</span>
                  <Button
                    backgroundColor={"white"}
                    _hover={{
                      backgroundColor: "white",
                    }}
                    onClick={() => dispatch(inc)}
                    flexDirection={"end"}
                  >
                    +
                  </Button>
                </HStack>
                <Button>update</Button>
              </Box>
              <Box h={"100px"}>
                <Text>Price</Text>
                <Text>₹{e.price}</Text>
              </Box>
              <Box h={"100px"}>
                <Text>Amount</Text>
                <Text></Text>
              </Box>
            </HStack>
          ))}
      </Box>
      <hr />
      <HStack m={"auto"} w={"80%"} justifyContent="space-between">
        <Text> continue shopping</Text>
        <Box>
        <HStack>
          <Text>Total:{}</Text>
        </HStack>
        <Button>CHECKOUT</Button>
        </Box>
        </HStack>
        
    </Box>
  );
};

export default Cart;
