import { Box, Text, Image, UnorderedList, Button, ListItem, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import logo from "../../images/logo.svg";
import iconDown from "../../images/icon-arrow-down.svg";
import iconUp from "../../images/icon-arrow-up.svg";
import iconToDo from "../../images/icon-todo.svg";
import iconCalendar from "../../images/icon-calendar.svg";
import iconReminders from "../../images/icon-reminders.svg";
import iconPlanning from "../../images/icon-planning.svg";

const Nav = () => {
  return (
    <Box w="100%" h="90px" display={{base:"none",md:"none", lg:"flex"}} alignItems="center" >
      <Image m="0px 0px 0px 40px" src={logo} />
      <UnorderedList fontSize="15px" alignItems="center" listStyleType="none" display="flex">
        <ListItem><Menu>
          {({ isOpen }) => (
            <>
              <MenuButton as={Button} _active={{ bg: "white" }} _hover={{ bg: "white", color: "black" }} color={isOpen ? "black" : "gray.500"} bg="white" rightIcon={isOpen ? <Image src={iconUp} /> : <Image src={iconDown} />}>
                Features
              </MenuButton>
              <MenuList minWidth="160px" p="20px 0" border="none"  shadow="10px 10px 66px 7px rgba(0,0,0,0.09)">
                <MenuItem display="flex" paddingLeft="30px" alignItems="center">
                  <Image  m="0px 10px 5px 0px"  src={iconToDo}/><Text>Todo List</Text>
                </MenuItem>
                <MenuItem display="flex" paddingLeft="30px" alignItems="center"><Image m="0px 10px 5px 0px" src={iconCalendar}/> Calendar</MenuItem>
                <MenuItem display="flex" paddingLeft="30px" alignItems="center"><Image m="0px 10px 5px 0px" src={iconReminders} /> Reminders</MenuItem>
                <MenuItem display="flex" paddingLeft="30px" alignItems="center"><Image m="0px 10px 5px 0px" src={iconPlanning}/> Planning</MenuItem>
              </MenuList>
            </>
          )}
        </Menu></ListItem>
        <ListItem><Menu>
          {({ isOpen }) => (
            <>
              <MenuButton as={Button} _active={{ bg: "white" }} _hover={{ bg: "white", color: "black" }} color={isOpen ? "black" : "gray.500"} bg="white" rightIcon={isOpen ? <Image src={iconUp} /> : <Image src={iconDown} />}>
                Company
              </MenuButton>
              <MenuList minWidth="130px" p="20px 0" border="none"  shadow="10px 10px 66px 7px rgba(0,0,0,0.09)">
                <MenuItem display="flex" paddingLeft="30px" alignItems="center">History</MenuItem>
                <MenuItem display="flex" paddingLeft="30px" alignItems="center">Our Team</MenuItem>
                <MenuItem display="flex" paddingLeft="30px" alignItems="center">Blog</MenuItem>
              </MenuList>
            </>
          )}
        </Menu></ListItem>
        <ListItem fontWeight="700" color="gray.500" cursor="pointer" transition="250ms" _hover={{ color: "black" }} margin="0px 30px 0px 20px">Careers</ListItem>
        <ListItem fontWeight="700" color="gray.500" cursor="pointer" transition="250ms" _hover={{ color: "black" }}>About</ListItem>
      </UnorderedList>
      <Box marginLeft="auto" marginRight="30px" display="flex">
            <Button color="gray.500" _hover={{bg:"transparent", color:"black"}} bg="transparent" marginRight="40px">Login</Button>
            <Button color="gray.500" bg="transparent" _hover={{color:"black", border:"2px solid black"}} borderRadius="10px" border="2px solid #718096">Register</Button>
      </Box>
    </Box>
  )
}



export default Nav;