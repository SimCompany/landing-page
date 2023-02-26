import { Th, Tr, TableRowProps } from "@chakra-ui/react";

interface TableLineProps extends TableRowProps {
  first_option: string
  second_option: string
  description: string
}

export default function TableLine({first_option, second_option, description, ...rest}:TableLineProps) {

  return (
    <Tr display='grid' gridTemplateColumns='75px 75px 50px 1fr' w='100%' {...rest}>
      <Th color='white'>{first_option}</Th>
      <Th color='white'>{second_option}</Th>
      <Th></Th>
      <Th color='white' borderWidth='1px' borderStyle='solid' borderColor='white' w='100%' fontWeight='400'>{description}</Th>
    </Tr>
  )
}