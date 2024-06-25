
import {Box, Stack } from '@chakra-ui/react'
import Card from './Card'

const Home = () => {
  return (
    <Box>
      <Stack direction={"row"}>
        <Card amount={5000} img/>
      </Stack>
    </Box>
  )
}

export default Home
