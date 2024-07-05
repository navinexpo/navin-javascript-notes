import { Box, Heading, Text, VStack } from "@chakra-ui/react"

 
const PaymentSuccess = () => {
  return (
    <Box>
      <VStack h="100vh" justifyContent={'center'}>
        <Heading textTransform={"uppercase"}>Order Successfull</Heading>
        <Text>
            Ref No. 2343454567
        </Text>
      </VStack>
    </Box>
  )
}

export default PaymentSuccess
