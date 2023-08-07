import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {server} from '../index'
import { Box, Button, Container, HStack, Heading, Image, Radio, RadioGroup, Text, VStack } from '@chakra-ui/react';
import Loader from './Loader';
import ErrorComponent from './ErrorComponent';
import { Link } from 'react-router-dom';

const Coins = () => {

  const [coins,setCoins] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(false);
  const [page,setPage] = useState(1);
  const [currency,setCurrecy] = useState('inr');

  const currencySymbol = currency==="inr"?"₹":currency==="eur"?"€":"$"

  const changePage = (page) => {
      setPage(page);
      setLoading(true);
  }

  const btns = new Array(132).fill(1);

  useEffect(() =>{
    const fetchCoins = async() => {
      try {
      const {data} = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
      setCoins(data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
      }
    }
    fetchCoins();
  },[currency,page]);

  if (error) return (<ErrorComponent message={"Error While Fetching Coins"}/>);

  return (
    <Container maxW={'container.xl'} >
      {loading ? <Loader/> : 
      <>
        <Box  marginTop={'20'}>
        <RadioGroup value={currency} onChange={setCurrecy} p={'8'}>
          <HStack spacing={'5'}>
            <Radio value='inr'>INR</Radio>
            <Radio value='eur'>EUR</Radio>
            <Radio value='usd'>USD</Radio>
          </HStack>
        </RadioGroup>
        <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
          {coins.map((i)=>(
            <CoinCard id={i.id} key={i.id} name={i.name} img={i.image} symbol={i.symbol} price={i.current_price} currencySymbol={currencySymbol}/>
          ))}
        </HStack>

        <HStack  overflowX={'auto'} marginBottom={'5'} p={'8'}>
          {
            btns.map((item,index)=>(
              <Button key={index} bgColor={'blackAlpha.900'} color={'white'} 
              onClick={() => changePage(index+1)}>{index+1}</Button>
            ))
          }
        </HStack>
        </Box>
      </>}
    </Container>
  );
};

const CoinCard = ({id,name,img,symbol,price,currencySymbol='₹'})=>{
 return (
  <Link to={`/coins/${id}`}>
    <VStack width={'52'} shadow={'xl'} p={'8'} m={'4'} borderRadius={'lg'} transition={"all 0.3s"} 
    css={{
      "&:hover":{
        transform:"scale(1.1)"
      }
    }}>
      <Image src={img} h={'14'} w={'14'} objectFit={'contain'} alt={'Exchange img'}/>
      <Heading size={'md'} noOfLines={1}>{symbol}</Heading>
      <Text noOfLines={1}>{name}</Text>
      <Text noOfLines={1}>{price? `${currencySymbol}${price}`:"NA"}</Text>
    </VStack>
  </Link>
 )};


export default Coins
