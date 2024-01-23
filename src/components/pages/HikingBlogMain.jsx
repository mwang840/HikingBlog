import React from "react";
import { Axios } from "axios";
import { NPSAPI_Key } from "../parks_key";
import {Heading, Center, Avatar, InputRightElement, InputGroup, Input} from "@chakra-ui/react"



const apiUrl = 'https://developer.nps.gov/api/v1/parks';

// Axios.get(apiUrl, NPSAPI_Key).then(function(res){
//     console.log("Got the hiking data", res)
// })


const HikingBlogLayout = () =>{
    return <div>
        <Center><Heading>Hiking Blog</Heading></Center>
        <InputGroup size="sm">
        <Input placeholder="Search"></Input>
        <InputRightElement>
        <Avatar src="../images/blank-pfp.png"/>
        </InputRightElement>
        </InputGroup>
        
    </div>
}

export default HikingBlogLayout;
