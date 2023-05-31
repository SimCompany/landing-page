import { Input, InputProps } from '@chakra-ui/react'

interface ChakraInputProps extends InputProps {

}

export default function ChakraInput({...rest}:ChakraInputProps) {

  return (
    <Input p='4px' borderRadius='4' bgColor='white' borderColor='white' isRequired {...rest}/>
  )
}
