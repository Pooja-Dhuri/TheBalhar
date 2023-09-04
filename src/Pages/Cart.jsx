import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Cart = () => {

  const [cartData, setCartData] = useState([]);

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
      <Heading fontWeight={"medium"} py={7}>Your Cart</Heading>
      <Box border={"1px solid black"} h={"600px"} w={"80%"} m={"auto"}>
           {
            cartData && cartData.map((e)=>(
                  <HStack border={"1px solid green"} h={"150px"}>
                    <Box border={"1px solid red"} h={"100px"} w={"100px"}></Box>
                    <Box border={"1px solid red"} h={"100px"} w={"100px"}></Box>
                    <Box border={"1px solid red"} h={"100px"} w={"100px"}></Box>
                    <Box border={"1px solid red"} h={"100px"} w={"100px"}></Box>
                  </HStack>
            ))
           }
      </Box>
    </Box>
  )
}

export default Cart