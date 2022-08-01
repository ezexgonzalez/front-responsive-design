import { Box, Image, Slide, useDisclosure, Button, Collapse, Text } from "@chakra-ui/react";
import logo from "../../images/logo.svg";
import logoMenu from "../../images/icon-menu.svg";
import logoClose from "../../images/icon-close-menu.svg";
import iconDown from "../../images/icon-arrow-down.svg";
import iconUp from "../../images/icon-arrow-up.svg";
import iconToDo from "../../images/icon-todo.svg";
import iconCalendar from "../../images/icon-calendar.svg";
import iconReminders from "../../images/icon-reminders.svg";
import iconPlanning from "../../images/icon-planning.svg";
import { useState } from "react";
import { useEffect } from "react";

const NavMobile = () => {

  const { isOpen, onToggle } = useDisclosure();
  const [open, setOpen] = useState({
    one: false,
    two: false
  });

  const toggle = (e) => setOpen((data) =>{return{...data, [e.target.name]: !open[e.target.name]}});
  const openSlide = () =>{
    onToggle();
  }

  useEffect(() =>{
    if(isOpen){
      document.body.style.overflow = "hidden";
    }else{
      document.body.style.overflow = "unset";
    }
  },[isOpen])

  return (
    <Box display={{ base: "flex", md: "flex", lg: "none" }} position="relative" justifyContent="space-between" >
      {isOpen ? <Box bg="blackAlpha.500" zIndex="10" position="absolute" h="100vh" w="100%"></Box> : ""}
      <Image m="30px 0px 0px 40px" w="70px" h="25px" src={logo} />
      {/* <Image onClick={openSlide} m="30px 40px 0px 0px" w="30px" src={logoMenu} /> */}
      <Button bg="transparent"  m="20px 20px 0px 0px" onClick={openSlide}><Image w="35px" src={logoMenu} /></Button>
      <Slide direction="right" in={isOpen} style={{ zIndex: 100, display: "flex", justifyContent: "flex-end" }}>
        <Box
          w="300px"
          color='black'
          bg='white'
          shadow='md'
          display="flex"
          flexDirection="column"

        >
          <Button bg="transparent" alignSelf="end"  m="20px 20px 0px 0px" onClick={onToggle}><Image w="30px" src={logoClose} /></Button>
          <Button display="flex" m="0px 10px 10px 10px" _focus={{bg:"transparent"}} _hover={{bg:"transparent"}} bg="white" fontSize="19px" name="one" color={open.one ? "black" : "gray.500"} justifyContent="start" onClick={(e)=> toggle(e)}>Features  <Image ml="10px" w="13px" src={open.one?iconUp : iconDown} /></Button>
          <Collapse in={open.one} animateOpacity>
            <Box
              color="black"
              bg='transparent'
              rounded='md'
              shadow='md'
              display="flex"
              flexDirection="column"
              gap="20px"

            >
              <Text display="flex" ml="50px" alignItems="center" justifyContent="start" ><Image  m="0px 20px 5px 0px" w="20px"  src={iconToDo}/>Todo List</Text>
              <Text display="flex" ml="50px" alignItems="center" justifyContent="start" ><Image  m="0px 20px 5px 0px" w="20px"  src={iconCalendar}/>Calendar</Text>
              <Text display="flex" ml="50px" alignItems="center" justifyContent="start" ><Image  m="0px 20px 5px 0px" w="20px"  src={iconReminders}/>Reminders</Text>
              <Text display="flex" ml="50px" mb="10px" alignItems="center" justifyContent="start" ><Image  m="0px 20px 5px 0px" w="20px"  src={iconPlanning}/>Planning</Text>
            </Box>
          </Collapse>

          <Button display="flex" fontSize="19px" _focus={{bg:"transparent"}} _hover={{bg:"transparent"}} m="0px 10px 10px 10px" bg="white" color={open.two ? "black" : "gray.500"} name="two" justifyContent="start" onClick={toggle}>Company  <Image ml="10px" w="13px" src={open.two ? iconUp : iconDown} /></Button>
          <Collapse in={open.two} animateOpacity>
            <Box
              color="black"
              bg='transparent'
              rounded='md'
              shadow='md'
              display="flex"
              flexDirection="column"
              gap="20px"

            >
              <Text display="flex" ml="50px" alignItems="center" justifyContent="start">History</Text>
              <Text display="flex" ml="50px" alignItems="center" justifyContent="start" >Our Team</Text>
              <Text display="flex" ml="50px" mb="10px" alignItems="center" justifyContent="start" >Blog</Text>
            </Box>
          </Collapse>
          <Text textAlign="start" m="0px 0px 15px 25px" fontWeight="600" fontSize="19px" color="gray.500">Careers</Text>
          <Text textAlign="start" m="0px 0px 15px 25px" fontWeight="600" fontSize="19px" color="gray.500">About</Text>
          <Button color="gray.500" m="10px 0px 15px 0px" _hover={{bg:"transparent", color:"black"}} bg="transparent" w="100%">Login</Button>
          <Button color="gray.500" w="80%" m="0px auto" h="50px" bg="transparent" _hover={{color:"black", border:"2px solid black"}} borderRadius="15px" border="2px solid #718096">Register</Button>
        </Box>
      </Slide>
    </Box>
  )

}

export default NavMobile;