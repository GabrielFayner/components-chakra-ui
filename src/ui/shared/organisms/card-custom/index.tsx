import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import TagName from "../../molecules/TagName";
import AvatarGroup from "../../molecules/AvatarGroup";

const CardCustom = () => {
  return (
    <Card width={233}>
    <CardHeader  pb={3} display='flex' justifyContent='space-between' alignItems="center">
      <Heading fontSize={20} color={'gray.900'} fontWeight="semibold">Samarco</Heading>
      <Link href="#">
        <ExternalLinkIcon width='5' height='5' />
      </Link>
    </CardHeader>
    <CardBody py={0}>
    <Text 
        color='gray.600'
        lineHeight='shorter' 
        fontSize='sm'
        letterSpacing='wide'
      >
      Descritivo da iniciativa utilizando no máx. 3 linhas
      </Text>
      <Box mt={3}>
        <TagName
        size="md"
        borderRadius="md"
        bgColor="purple.100"
        color="purple.800"
        >
          Portfólio
        </TagName>
        <TagName
            size="md"
            ml={2}
            borderRadius="md"
            bgColor="green.100"
            color="green.800"
          >
            Concluído
          </TagName>
        </Box>
    </CardBody>
    <CardFooter display='flex' gap='2'>
      <AvatarGroup />
      <Text 
        color='gray.900' 
        fontSize='xs'
        lineHeight='shorter'
      >
        x colaboradores <br/>nessa iniciativa
      </Text>
    </CardFooter>
  </Card>
  );
};
export default CardCustom;
