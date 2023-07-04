import { Box, Grid, GridItem, HStack, Heading, Select, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
const Sale = () => {
  const [products, setProducts] = useState([]);

  const getAllData = async () => {
    try {
      const res = await axios.get("http://localhost:8080/thebalhar");
      console.log(res.data);
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <Box py={"20px"}>
      <Heading py={"20px"}>ALL PRODUCTS</Heading>
        <HStack justifyContent="end" mx={"60px"} my={"20px"}><Select placeholder="Select option" w={"200px"} flexDirection={"row-reverse"}>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select></HStack>
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
        ]}
        gap={6}
        w={"80%"}
        m={"auto"}
        // border={"1px solid red"}
      >
        {products.map((e) => (
          <GridItem height={"500px"}>
            <Box
              key={e.id}
              _hover={{ backgroundSize: "120%" }}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              overflow={"hidden"}
              height={"450px"}
              cursor={"pointer"}
              backgroundImage={`url(${e.image})`}
              transition="background-size 0.5s ease"
            >
              {/* <HStack pt="105%" justifyContent="center">
                <Button
                  backgroundImage="linear-gradient(to left,#343a40, rgba(128, 128, 128, 0.5))"
                  backgroundSize="200% 100%"
                  transition="background-position 0.5s"
                  h={"30px"}
                  width={"200px"}
                  borderRadius={"0px"}
                  _hover={{
                    border: "1px solid #323232",
                    backgroundPosition: "-100% 0",
                    color: "black",
                  }}
                  color={"white"}
                  backgroundColor={"transparent"}
                >
                  {" "}
                  + Quick View
                </Button>
                <Button
                  backgroundImage="linear-gradient(to left,#343a40, rgba(128, 128, 128, 0.5))"
                  backgroundSize="200% 100%"
                  transition="background-position 0.5s"
                  h={"30px"}
                  width={"70px"}
                  borderRadius={"0px"}
                  color={"white"}
                  backgroundColor={"transparent"}
                  _hover={{
                    color: "#323232",
                    backgroundPosition: "-100% 0",
                    border: "1px solid #323232",
                  }}
                >
                  like
                </Button>
              </HStack> */}
            </Box>
            <Box>
              <Text>{e.name}</Text>
              <Text>₹{e.price}</Text>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Sale;
