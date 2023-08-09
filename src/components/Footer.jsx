import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'}
    color={'white'}
    minH={'48'}
    px={['6','16']}
    py={['16','8']}>

    <Stack direction={['column','row']}
    h={'full'}
    alignItems={'center'}>
    <VStack w={['full','60%']} alignItems={['center','flex-start']}>
        <Text fontWeight={'bold'}>About Us</Text>
        <Text fontSize={'sm'} letterSpacing={'widest'} textAlign={['center', 'left']}>At CryptoHub, we're dedicated to providing you with the most accurate and up-to-date information on cryptocurrency prices and trends. As India's premier crypto data platform, we strive to empower you with the knowledge you need to navigate the exciting world of digital assets.</Text>
    </VStack>
    <VStack w={['full','40%']} alignItems={['center','right']}>
        <Avatar boxSize={'28'} mt={['4','0']} />
        <Text>Our Founder</Text>
    </VStack>
    </Stack>
    </Box>
  )
}

export default Footer
