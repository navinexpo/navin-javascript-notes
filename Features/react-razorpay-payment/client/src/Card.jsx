import { Button, Image, Text, VStack } from "@chakra-ui/react"

const Card = ({amount, img}) => {
  return (
    <VStack>
        <Image src={img} />
        <Text>{amount}</Text>
        <Button >Buy Now</Button>
    </VStack>
  )
}

export default Card
