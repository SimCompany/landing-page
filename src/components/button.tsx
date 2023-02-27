import { Button, ButtonProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface ButtonPropsChakra extends ButtonProps {
  children: ReactNode,
  w?: string
}

export default function ButtonChakra({ children, w = '100%', ...rest }: ButtonPropsChakra) {

  return (
    <Button w='100%' cursor='pointer' bgColor='#ffda2a' _hover={{ bgColor: '#ffda6a', transition: '0.5s' }} transition='0.5s' py='12px' borderRadius='6px' mt='20px' fontWeight='700' fontSize={{ base: '20px', sm: '24px' }} color='#1d253a' {...rest}>{children}</Button>
  )
}