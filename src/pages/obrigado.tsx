import { Box, Text } from "@chakra-ui/react";
import ButtonChakra from "../components/button";
import bgGrenn from './../img/cap-bg-02.jpg'
import Link from "next/link";



export default function Obrigado() {

  return (

    <Box
      h='100vh' width='100%'
      style={{ backgroundImage: `url('${bgGrenn.src}')` }}
      display='flex'
      justifyContent='center'
      alignItems='center'
      flexDirection='column'

    >
      <Text as='h1' fontSize='45px'>OBRIGADO, RETORNAREMOS O CONTATO ASSIM QUE POSSÍVEL</Text>
      <Link style={{width: '300px'}} href="/">
      <ButtonChakra maxW='400px'>INÍCIO</ButtonChakra>
      </Link>
    </Box>
  )
}