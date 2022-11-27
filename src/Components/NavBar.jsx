import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  Input,
  ListItem,
  Spacer,
  Text,
  UnorderedList,
  useColorMode,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
// import { HashLink, NavHashLink } from "react-router-hash-link";
// import { NavLink } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import styles from "./Navbar.module.css";
// import Social from "./Social";
import { Link } from "react-scroll";
import { useRef } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Robin_George_Resume from '../Resume/Robin_George_Resume.pdf'

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  const isDark = colorMode === "dark";

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <HStack
        display={["none", "none", "none", "flex"]}
        zIndex={10}
        position="sticky"
        top="0"
        bgColor={isDark ? "black" : "white"}
        // borderBottom="1px"
        // borderColor="gray.100"
        h="60px"
      >
        {/* <Social /> */}
        <Text fontSize="2xl" ml={20}>Robin George</Text>
        <Spacer />

        <Flex px="20px" align="center">
          <HStack
            w="50vw"
            display="flex"
            justifyContent="space-evenly"
            fontWeight="semibold"
            letterSpacing="3px"
          >
            <Link
              to="home"
              smooth={true}
              duration={1000}
              spy={true}
              offset={-100}
              activeClass={styles.active}
            >
              HOME
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={1000}
              spy={true}
              offset={-40}
              activeClass={styles.active}
            >
              ABOUT
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={1000}
              spy={true}
              offset={-40}
              activeClass={styles.active}
            >
              SKILLS
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={1000}
              spy={true}
              offset={-40}
              activeClass={styles.active}
            >
              PROJECTS
            </Link>
            {/* onClick={()=>{window.open(Robin_George_Resume)}} */}
            {/* //<a href={resume} download><Button onClick={()=>{window.open(resume)}} id="resume">RESUME</Button></a> */}


            {/* <Link href="Robin_George_Resume.pdf" download="Robin_George_Resume.pdf">
              <Button textColor="white">
                RESUME</Button>
            </Link> */}

            <Link
              to="contact"
              smooth={true}
              duration={1000}
              spy={true}
              offset={-40}
              activeClass={styles.active}
            >
              CONTACT
            </Link>
            <a href={Robin_George_Resume} download>
              <Button textColor="white" onClick={() => { window.open(Robin_George_Resume) }} bgColor="black">
                RESUME</Button>
            </a>

          </HStack>
          <IconButton
            ml="10px"
            isRound
            icon={isDark ? <FaSun /> : <FaMoon />}
            onClick={toggleColorMode}
          />
        </Flex>
      </HStack>

      <HStack
        px="10px"
        // borderBottom="1px"
        // borderColor="gray.100"
        bgColor={isDark ? "black" : "white"}
        display={["flex", "flex", "flex", "none"]}
      >
        <IconButton
          aria-label="Open Menu"
          mr={2}
          size="md"
          onClick={onOpen}
          isRound={true}
          icon={<HamburgerIcon />}
        />

        <Spacer />
        {/* <Social /> */}
        <IconButton
          ml="10px"
          isRound
          icon={isDark ? <FaSun /> : <FaMoon />}
          onClick={toggleColorMode}
        />
      </HStack>

      <Drawer
        size={["xs", "xs"]}
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerHeader></DrawerHeader>

          <DrawerBody>
            <VStack align="left" spacing={5}>
              <Link
                to="home"
                smooth={true}
                duration={1000}
                spy={true}
                activeClass={styles.active}
              >
                HOME
              </Link>
              <Link
                to="about"
                smooth={true}
                duration={1000}
                spy={true}
                // offset={50}
                activeClass={styles.active}
              >
                ABOUT
              </Link>
              <Link
                to="skills"
                smooth={true}
                duration={1000}
                spy={true}
                // offset={50}
                activeClass={styles.active}
              >
                SKILLS
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={1000}
                spy={true}
                // offset={50}
                activeClass={styles.active}
              >
                PROJECT
              </Link>

              {/* <Link href="Robin_George_Resume.pdf" download="Robin_George_Resume.pdf">
                <Button textColor="white">
                  RESUME</Button>

              </Link> */}

              <Link
                to="contact"
                smooth={true}
                duration={1000}
                spy={true}
                // offset={50}
                activeClass={styles.active}
              >
                CONTACT
              </Link>

              <a href={Robin_George_Resume} download>
                <Button textColor="white" onClick={() => { window.open(Robin_George_Resume) }} bgColor="black">
                  RESUME</Button>
              </a>

            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Navbar;