import React, { useState } from "react";
import {
  Box,
  HStack,
  Image,
  Input,
  Text,
 
} from "@chakra-ui/react";
import { AiOutlineUser } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";
import Draver from "./Drawer";

const Navbar = () => {
  const [search, setSearch] = useState("none");
  const [cancel, setCancel] = useState(false);
  

  const handleSearch = () => {
    setSearch("block");
    setCancel(!cancel);
  };
  return (
    <>
      <Box w={"100%"} position={"fixed"} top={0} zIndex={1} bg={"white"}>
        <HStack
          // border={"1px solid red"}
          height={"100px"}
          justifyContent={"space-around"}
          borderBottom={"1px solid black"}
          w={"100%"}
        >
          {/* left side logo */}
          <Box
            w={"250px"}
            // border={"1px solid green"}
            cursor={"pointer"}
          >
            <Image
              src="https://cdn.shopaccino.com/thebalhaar/images/logo-362822_header_logo.jpg?v=457?v=1"
              alt="logo"
            />
          </Box>

          {/* middle  components */}
          <Box
            //  border={"1px solid green"}
            fontWeight={600}
            cursor={"pointer"}
          >
            <HStack justifyContent={"space-around"} gap={"40px"}>
              <Link to="/">
                <Text>HOME</Text>
              </Link>
              <Link to="/sale">
                <Text>SALE</Text>
              </Link>
              <Text>SHOP</Text>
              <Link to="/contactus">
                <Text>CONTACT US</Text>
              </Link>
            </HStack>
          </Box>

          {/* right login cart buttons */}
          <Box
            //  border={"1px solid green"}
            fontWeight={600}
            cursor={"pointer"}
          >
            <HStack justifyContent={"space-around"} gap={"20px"}>
              <Box>
                <Link to="/signin">
                  <AiOutlineUser style={{ height: "25px", width: "25px" }} />
                </Link>
              </Box>
              <Box onClick={handleSearch}>
                {cancel ? (
                  <MdCancel style={{ height: "25px", width: "25px" }} />
                ) : (
                  <BiSearch style={{ height: "25px", width: "25px" }} />
                )}
              </Box>
              <HStack>
                <Box
                  position={"relative"}
                  border={"1px solid black"}
                  marginLeft={"25px"}
                  marginTop={"-25px"}
                  w={"20px"}
                  h={"25px"}
                  color={"white"}
                  backgroundColor={"black"}
                  borderRadius={"50%"}
                >
                  0
                </Box>
                <Box position={"absolute"} >
                  <Draver/>
                </Box>
              </HStack>
            </HStack>
          </Box>
        </HStack>
        <Box display={cancel ? search : "none"}>
          <HStack
            borderBottom={"1px solid grey"}
            h={"60px"}
            w={"40%"}
            m={"auto"}
          >
            <Input
              placeholder="Search Keywords...."
              border={"0px solid white"}
              focusBorderColor="white"
            />
            <BiSearch style={{ height: "25px", width: "25px" }} />
          </HStack>
        </Box>
        
      </Box>
    </>
  );
};

export default Navbar;
