import React from "react";
import { Axios } from "axios";
import { NPSAPI_Key } from "../parks_key";
import {Heading, Center, Avatar, InputRightElement, InputGroup, Input} from "@chakra-ui/react"
import {Button} from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons";


const apiUrl = 'https://developer.nps.gov/api/v1/parks';



const HikingBlogLayout = () =>{
    return <div>
        <Center><Heading>Hiking Blog</Heading></Center>
        <Center><Heading as='h2' size='md' noOfLines={1}>
        Welcome to the Hiking Blog Where on this webpage, you can search for any parks and then write reviews for each trail.
        </Heading></Center>
        <InputGroup size="lg">
        <Center><Input placeholder="Search" width="auto" htmlSize={100}></Input></Center>
        <Button colorScheme='teal' size='sm' rightIcon={<SearchIcon/>}>
        Search
        </Button>
        <InputRightElement>
        <Avatar src="../images/blank-pfp.png"/>
        </InputRightElement>
        </InputGroup>
        <Center><Heading as ="p" size="sm">Browse for a Park by Category</Heading></Center>
    </div>
}

export default HikingBlogLayout;
