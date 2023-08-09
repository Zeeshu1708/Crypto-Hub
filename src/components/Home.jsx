import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import btcSrc from "../assets/btc.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box bgColor={'blackAlpha.400'} w={'full'} h={'90vh'} marginTop={'72px'} pb={'5'}>
    <motion.div style={{
      height:"80vh",
    }}
    animate={{
      translateY:'20px',
    }}
    transition={{
      duration:1,
      repeat:Infinity,
      repeatType:'reverse',
    }}
    >
    <Image w={'full'} h={'full'} objectFit={'contain'} src={btcSrc}/>
    </motion.div>
    <Text fontSize={'6xl'} textAlign={'center'} fontWeight={'thin'} mt={'-20'}>CryptoHub</Text>
    </Box>
  )
}

export default Home
