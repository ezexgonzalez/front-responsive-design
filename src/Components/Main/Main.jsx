import { Box, Text, Image, Button } from "@chakra-ui/react";
import mainImage from "../../images/image-hero-desktop.png";
import databizLogo from "../../images/client-databiz.svg";
import audiophileLogo from "../../images/client-audiophile.svg";
import meetLogo from "../../images/client-meet.svg";
import makerLogo from "../../images/client-maker.svg";
import mainImageMobile from "../../images/image-hero-mobile.png";

const Main = () => {

  return (
    <Box w="100%"  alignItems="center" justifyContent="center" flexDirection="column" display="flex" h={{base:"",lg:"90vh"}}>
      <Box flexDirection={{base:"column", lg:"row"}} w="100%" justifyContent="center" alignItems={{base:"center", lg:"normal"}}  display="flex">
        <Image w={{base:"100%",sm:"500px",md:"550px"}} h={{sm:"400px",md:"400px",lg:"500px"}} mt={{base:"30px"}} display={{base:"flex", lg:"none"}} src={mainImageMobile} />
        <Box marginTop={{md:"30px"}} alignItems={{base:"center", lg:"start"}} marginRight={{base:"0px", md:"0px", lg:"50px" ,xl:"90px", '2xl': "200px"}} display="flex" justifyContent="center" flexDirection="column">
            <Text marginTop={{base:"20px",sm:"20px", md:"auto"}} fontWeight="700" lineHeight={{base:"55px",sm:"60px",md:"60px",xl:"90px"}} fontSize={{base:"45px",sm:"60px",md:"70px",xl:"90px"}} textAlign={{md:"center", lg:"start"}} color="black">Make <br/> remote work</Text>
            <Text textAlign={{md:"center", lg:"start"}} w={{base:"90%", sm:"470px"}} margin={{base:"20px 0px",sm:"25px 0px",md:"25px 0px",xl:"50px 0px"}} fontWeight="700" color="gray.500" fontSize="17px"> 
              Get your team in sync, no matter your location.
              Streamline processes, create team rituals, and watch productivity soar.  
            </Text>
            <Button marginBottom={{base:"20px"}} _hover={{color:"black", bg:"transparent", border:"1px solid black"}} bg="black" borderRadius="13px" w="150px" h="50px" color="white">Learn more</Button>
            <Box justifyContent="space-between" w={{base:"90%", sm:"100%"}} marginBottom={{base:"30px", md:"0"}} marginTop={{base:"30px",md:"30px",lg:"auto"}} alignItems="center" display="flex">
              <Image src={databizLogo} h={{base:"15px", sm:"20px"}} />
              <Image src={audiophileLogo} h={{base:"25px", sm:"40px"}} />
              <Image src={meetLogo} h={{base:"15px", sm:"20px"}}  />
              <Image src={makerLogo} h={{base:"15px", sm:"25px"}}/>
            </Box>
        </Box>
        <Image  w={{md:"450px",xl:"560px"}} h={{md:"600px",xl:"700px"}} display={{base:"none", lg:"flex"}} src={mainImage} />
       
      </Box>
    </Box>
  )


}


export default Main;