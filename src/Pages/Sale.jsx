import { Box, Grid, GridItem, HStack, Heading, Select, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Sale = () => {
  const [products, setProducts] = useState([]);
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  // const [currentProducts, setCurrentProducts] = useState([]);

  const getAllData = async () => {
    try {
      const res = await axios.get("http://localhost:8080/thebalhar");
      // console.log(res.data);
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // sorting the data
  function sortProducts(e) {
    let sortBy = e.target.value;
  
    let sortedData = [...products];

    if (sortBy === "lowToHigh") {
      sortedData.sort((a, b) => {
        return a.price - b.price;
      });
    }

    if (sortBy === "highToLow") {
      sortedData.sort((a, b) => {
        return b.price - a.price;
      });
    }

    if(sortBy === "AToZ"){
      sortedData.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }

    if(sortBy === "ZToA"){
      sortedData.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }
    setProducts(sortedData)
  }

  // pagination

  const updateCurrentProducts = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const slicedProducts = products.slice(startIndex, endIndex);
    setProducts(slicedProducts);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };


  useEffect(() => {
    getAllData();
  }, []);

  useEffect(() => {
    updateCurrentProducts();
  }, [products, currentPage, itemsPerPage]);


  return (
    <Box py={"20px"}>
      <Heading py={"20px"}>ALL PRODUCTS</Heading>
        <HStack justifyContent="end" mx={"60px"} my={"20px"}><Select id="sortOrder" onChange={sortProducts} placeholder="Sort By" w={"200px"} flexDirection={"row-reverse"}>
          <option value="highToLow">High To Low</option>
          <option value="lowToHigh">Low To High</option>
          <option value="AToZ">A to Z</option>
          <option value="ZToA">Z to A</option>
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
            <Link to={`/singlesale/${e.id}`}><Box
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
            </Box></Link>
            <Box>
              <Text>{e.name}</Text>
              <Text>₹{e.price}</Text>
            </Box>
          </GridItem>
        ))}
      </Grid>
      <div>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous Page
        </button>
        <span> Page {currentPage} </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={products.length < itemsPerPage}
        >
          Next Page
        </button>
      </div>
    </Box>
  );
};

export default Sale;
