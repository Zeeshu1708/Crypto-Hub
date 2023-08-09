import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <HStack  p={'4'} shadow={'base'} bgColor={'blackAlpha.900'} top={'0'} position={'fixed'} w={'100%'} zIndex={'1'}>
    <Button variant={'unstyled'} color={'white'} px={['0','2.5']}>
      <Link to={'/'}>Home</Link>
    </Button>
    <Button variant={'unstyled'} color={'white'} px={['0','2.5']}>
      <Link to={'/coins'}>Coins</Link>
    </Button>
    <Button variant={'unstyled'} color={'white'} px={['0','2.5']}>
      <Link to={'/exchanges'}>Exchanges</Link>
    </Button>
    </HStack>
  )
}

export default Header
