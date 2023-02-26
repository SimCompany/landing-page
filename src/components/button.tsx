import { Button, ButtonProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface ButtonPropsChakra extends ButtonProps {
  children: ReactNode
}

export default function ButtonChakra({ children, ...rest }: ButtonPropsChakra) {

  return (
    <Button w='80%' bgColor='#ffda2a' py='12px' borderRadius='6px' mt='20px' fontWeight='700' fontSize={{ base: '20px', sm: '24px' }} color='#1d253a' {...rest}>{children}</Button>
  )
}