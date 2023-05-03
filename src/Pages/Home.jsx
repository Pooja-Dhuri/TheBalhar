import React from 'react';
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
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

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
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  const images = [
    {
      imageUrl:"https://cdn.shopaccino.com/thebalhaar/slideshows/ezy-watermark01-11-202202-06-19pm-548220_l.png?v=457",
      title:"AJRAKH",
      subtitle:"GEOMETRIC ART"
    },
    { 
      imageUrl:"https://cdn.shopaccino.com/thebalhaar/slideshows/ezy-watermark11-02-202308-30-45pm-601796_l.jpg?v=457",
      title:"COTTON SAREES",
      subtitle:"HANDBLOCKPRINTED"
    },
    {
      imageUrl:"https://cdn.shopaccino.com/thebalhaar/slideshows/ezy-watermark01-11-202203-26-45pm-358855_l.png?v=457",
      title:"JEWELLERY",
      subtitle:"EARRINGS | NECK PIECES | RINGS"
    },
    {
      imageUrl:"https://cdn.shopaccino.com/thebalhaar/slideshows/ezy-watermark02-01-202205-02-03pm-541996_l.jpg?v=457",
      title:"SUITS",
      subtitle:"HANDCRAFTED UNSTITCHED FABRICS"
    },
    {
      imageUrl:"https://cdn.shopaccino.com/thebalhaar/slideshows/ezy-watermark24-05-202112-04-33am-2-435858_l.jpg?v=457",
      title:"DUPATTA",
      subtitle:"STOLES | ODANIS | CHUNNI"
    },
    {
      imageUrl:"https://cdn.shopaccino.com/thebalhaar/slideshows/20200418161040img1154-copy-300445_l.jpg?v=457",
      title:"KOTA SAREES",
      subtitle:"HANDCRAFTED BEAUTIES"
    }
  ];

  return (
    <>
    <Box
      position={'relative'}
      height={'600px'}
      width={'full'}
      overflow={'hidden'}
      mt={"20px"}>
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
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {images.map((card, index) => (
          <Box
            key={index}
            height={'600px'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.imageUrl})`}>
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w={'full'}
                color={"white"}
                maxW={'lg'}
                position="absolute"
                // border={"1px solid red"}
                top="80%"
                transform="translate(0, -50%)">
                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                  {card.title}
                </Heading>
                <Text fontSize={{ base: 'md', lg: 'lg' }}>
                  {card.subtitle}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>

    {/* intro div */}
    <HStack my={"20px"} px={"100px"} justifyContent={"space-around"} alignItems={"center"}>
      <Box textAlign={"left"}>
        <Text fontSize={"32px"}  fontWeight={600}>Welcome To TheBalhaar</Text>
        <Text>
        A trove of the tana and bana by Indian weavers and craftspeople. Shop <br /> the handcrafted products Sarees | Suits | Jewellery | Stoles, curated and <br/> handpicked pieces from all across the country. <br /><br />
        The aesthetic collection from- <span style={{color:"black",fontWeight:700}}>TheBalhaar</span> 
        </Text>
      </Box>
      <Box h={"600px"} p={"30px"} >
        <Image src='https://cdn.shopaccino.com/thebalhaar/images/main-pic-377602.jpg' h={"100%"} borderTopRightRadius={"50px"} borderBottomLeftRadius={"50px"}/>
      </Box>
    </HStack>

    
    </>
  );
}












