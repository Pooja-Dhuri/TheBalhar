import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Image,
  HStack,
  Grid,
  GridItem,
  Button,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Home() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(0);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  const images = [
    {
      imageUrl:
        "https://cdn.shopaccino.com/thebalhaar/slideshows/ezy-watermark01-11-202202-06-19pm-548220_l.png?v=457",
      title: "AJRAKH",
      subtitle: "GEOMETRIC ART",
    },
    {
      imageUrl:
        "https://cdn.shopaccino.com/thebalhaar/slideshows/ezy-watermark11-02-202308-30-45pm-601796_l.jpg?v=457",
      title: "COTTON SAREES",
      subtitle: "HANDBLOCKPRINTED",
    },
    {
      imageUrl:
        "https://cdn.shopaccino.com/thebalhaar/slideshows/ezy-watermark01-11-202203-26-45pm-358855_l.png?v=457",
      title: "JEWELLERY",
      subtitle: "EARRINGS | NECK PIECES | RINGS",
    },
    {
      imageUrl:
        "https://cdn.shopaccino.com/thebalhaar/slideshows/ezy-watermark02-01-202205-02-03pm-541996_l.jpg?v=457",
      title: "SUITS",
      subtitle: "HANDCRAFTED UNSTITCHED FABRICS",
    },
    {
      imageUrl:
        "https://cdn.shopaccino.com/thebalhaar/slideshows/ezy-watermark24-05-202112-04-33am-2-435858_l.jpg?v=457",
      title: "DUPATTA",
      subtitle: "STOLES | ODANIS | CHUNNI",
    },
    {
      imageUrl:
        "https://cdn.shopaccino.com/thebalhaar/slideshows/20200418161040img1154-copy-300445_l.jpg?v=457",
      title: "KOTA SAREES",
      subtitle: "HANDCRAFTED BEAUTIES",
    },
  ];

  const products = [
    {
      image:
        "https://cdn.shopaccino.com/thebalhaar/categories/img7838-2-177910_s.jpg?v=457?1427392910",
      title: "SAREES",
    },
    {
      image:
        "https://cdn.shopaccino.com/thebalhaar/categories/img7841-3-748645_s.jpg?v=457?1427392910",
      title: "SUITS",
    },
    {
      image:
        "https://cdn.shopaccino.com/thebalhaar/categories/ezy-watermark03-03-202107-46-15pm-100984_s.jpg?v=457?1427392910",
      title: "DUPATTA|STOLE",
    },
    {
      image:
        "https://cdn.shopaccino.com/thebalhaar/categories/img7839-2-833055_s.jpg?v=457?1427392910",
      title: "JEWELRY",
    },
    {
      image:
        "https://cdn.shopaccino.com/thebalhaar/categories/ezy-watermark19-07-202107-04-34pm-2-168103_s.jpg?v=457?1427392910",
      title: "KAFTAN",
    },
    {
      image:
        "https://cdn.shopaccino.com/thebalhaar/categories/ezy-watermark16-01-202312-34-29pm-399232_s.jpg?v=457?1427392910",
      title: "FABRIC",
    },
    {
      image:
        "https://cdn.shopaccino.com/thebalhaar/categories/ezy-watermark01-04-202305-50-34pm-2-1-268094_s.jpg?v=457?1427392910",
      title: "BAGS",
    },
  ];

  const sale = [
    {
      image:
        "https://cdn.shopaccino.com/thebalhaar/products/ezy-watermark22-11-202109-20-48pm-538196_m.jpg?v=457",
      title: "|RED|",
      price: "4,100",
    },
    {
      image:
        "https://cdn.shopaccino.com/thebalhaar/products/ezy-watermark30-04-202108-24-21pm-888262_m.jpg?v=457",
      title: "FIROZI LEHERIYA",
      price: "2,800",
    },
    {
      image:
        "https://cdn.shopaccino.com/thebalhaar/products/ezy-watermark30-04-202108-22-23pm-976269_m.jpg?v=457",
      title: "YELLOW LEHERIYA",
      price: "2,800",
    },
  ];

  return (
    <>
      <Box
        position={"relative"}
        height={"600px"}
        width={"full"}
        overflow={"hidden"}
        mt={"120px"}
        zIndex={2}
      >
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Left Icon */}
        <IconButton
          aria-label="left-arrow"
          variant="ghost"
          position="absolute"
          left={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
        >
          <BiLeftArrowAlt size="40px" />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          right={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickNext()}
        >
          <BiRightArrowAlt size="40px" />
        </IconButton>
        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {images.map((card, index) => (
            <Box
              key={index}
              height={"600px"}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              zIndex={2}
              backgroundImage={`url(${card.imageUrl})`}
            >
              {/* This is the block you need to change, to customize the caption */}
              <Container size="container.lg" height="600px" position="relative">
                <Stack
                  spacing={6}
                  w={"full"}
                  color={"white"}
                  maxW={"lg"}
                  position="absolute"
                  // border={"1px solid red"}
                  top="80%"
                  transform="translate(0, -50%)"
                >
                  <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                    {card.title}
                  </Heading>
                  <Text fontSize={{ base: "md", lg: "lg" }}>
                    {card.subtitle}
                  </Text>
                </Stack>
              </Container>
            </Box>
          ))}
        </Slider>
      </Box>

      {/* intro div */}
      <HStack
        my={"20px"}
        px={"100px"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Box textAlign={"left"}>
          <Text fontSize={"32px"} fontWeight={600}>
            Welcome To TheBalhaar
          </Text>
          <Text>
            A trove of the tana and bana by Indian weavers and craftspeople.
            Shop <br /> the handcrafted products Sarees | Suits | Jewellery |
            Stoles, curated and <br /> handpicked pieces from all across the
            country. <br />
            <br />
            The aesthetic collection from-{" "}
            <span style={{ color: "black", fontWeight: 700 }}>TheBalhaar</span>
          </Text>
        </Box>
        <Box h={"600px"} p={"30px"}>
          <Image
            src="https://cdn.shopaccino.com/thebalhaar/images/main-pic-377602.jpg"
            h={"100%"}
            borderTopRightRadius={"50px"}
            borderBottomLeftRadius={"50px"}
          />
        </Box>
      </HStack>

      {/* All products div */}
      <Grid templateColumns="repeat(3, 1fr)" gap={6} w={"90%"} m={"auto"}>
        {products.map((pro, index) => (
          <GridItem height={"500px"} w={"400px"}>
            <Box
              key={index}
              className="my-image-class"
              _hover={{backgroundSize:"120%"}}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              h={"full"}
              cursor={"pointer"}
              overflow={"hidden"}
              backgroundImage={`url(${pro.image})`}
              transition="background-size 0.5s ease"
            >
              <Container size="container.lg" height="600px" position="relative">
                <Stack
                  spacing={6}
                  w={"full"}
                  color={"white"}
                  maxW={"lg"}
                  position="absolute"
                  // border={"1px solid red"}
                  top="45%"
                  transform="translate(0, -50%)"
                >
                  <Heading fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}>
                    {pro.title}
                  </Heading>
                </Stack>
              </Container>
            </Box>
          </GridItem>
        ))}
      </Grid>

      {/* sales */}
      <Text fontWeight={500} fontSize={"40px"} mt={"40px"} mb={"40px"}>
        SALE
      </Text>
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={6}
        w={"80%"}
        m={"auto"}
        // border={"1px solid red"}
      >
        {sale.map((pro, index) => (
          <GridItem height={"500px"}>
            <Box
              key={index}
              _hover={{backgroundSize:"120%"}}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              overflow={"hidden"}
              height={"450px"}
              cursor={"pointer"}
              backgroundImage={`url(${pro.image})`}
              transition="background-size 0.5s ease"
            >
              <HStack pt="115%" justifyContent="center">
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
              </HStack>
            </Box>
            <Box>
              <Text>{pro.title}</Text>
              <Text color={"red"}>₹{pro.price}</Text>
            </Box>
          </GridItem>
        ))}
      </Grid>
      <Box mt={"20px"}>
        <Button
          backgroundImage="linear-gradient(to left,#343a40, rgba(128, 128, 128, 0.5))"
          backgroundSize="200% 100%"
          transition="background-position 0.5s"
          borderRadius={"0px"}
          backgroundColor={"#343a40"}
          color={"white"}
          _hover={{
            color:"black",
            backgroundPosition: "-100% 0",
            border: "1px solid #323232",
          }}
        >
          VIEW ALL PRODUCTS
        </Button>
      </Box>
    </>
  );
}
