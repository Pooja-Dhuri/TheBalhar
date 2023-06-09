import React from "react";
import {
  Drawer,
  DrawerBody,
  Box,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure
} from "@chakra-ui/react";
import { FiShoppingBag } from "react-icons/fi";

const Draver = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <div>
      <FiShoppingBag
        ref={btnRef}
        style={{ height: "25px", width: "25px" }}
        onClick={onOpen}
        position={"relative"}
        zIndex={9999}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        w={"25%"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader textAlign={"center"}>Your Shopping Bag</DrawerHeader>

          <DrawerBody>
            <Box border={"1px dashed black"} m={"auto"} w={"90%"} h={"100px"} textAlign={"center"}>
              Your Shopping Cart Is Empty
            </Box>
            <Box pt={"20px"}>
            <Button w={"100%"} m={"5px"} backgroundColor={"#343a40"} color={'white'} border={"1px solid #343a40"} borderRadius={"0px"}>
              CHECKOUT
            </Button>
            <Button w={"100%"} m={"5px"} backgroundColor={"white"} border={"1px solid #343a40"} borderRadius={"0px"}>VIEW BAG</Button>
            </Box>
            
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Draver;
