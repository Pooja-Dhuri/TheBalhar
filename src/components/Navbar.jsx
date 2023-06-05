import React, { useState } from "react";
import {
  Box,
  HStack,
  Image,
  Input,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { FiShoppingBag } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [search, setSearch] = useState("none");
  const [cancel, setCancel] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const handleSearch = () => {
    setSearch("block");
    setCancel(!cancel);
  };
  return (
    <>
    <Box w={"100%"} position={"fixed"} top={0} zIndex={9999} bg={"white"}>
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
              <Box position={"absolute"}>
                <FiShoppingBag
                  ref={btnRef}
                  style={{ height: "25px", width: "25px" }}
                  onClick={onOpen}
                />
              </Box>
            </HStack>
          </HStack>
        </Box>
      </HStack>
      <Box display={cancel ? search : "none"}>
        <HStack borderBottom={"1px solid grey"} h={"60px"} w={"40%"} m={"auto"}>
          <Input
            placeholder="Search Keywords...."
            border={"0px solid white"}
            focusBorderColor="white"
          />
          <BiSearch style={{ height: "25px", width: "25px" }} />
        </HStack>
      </Box>
      <Drawer
    isOpen={isOpen}
    placement="right"
    onClose={onClose}
    finalFocusRef={btnRef}
  >
    <DrawerOverlay />
    <DrawerContent>
      <DrawerCloseButton />
      <DrawerHeader>Create your account</DrawerHeader>

      <DrawerBody>
        <Input placeholder="Type here..." />
      </DrawerBody>

      <DrawerFooter>
        <Button variant="outline" mr={3} onClick={onClose}>
          Cancel
        </Button>
        <Button colorScheme="blue">Save</Button>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
    </Box>
    
  </>
  );
};

export default Navbar;
