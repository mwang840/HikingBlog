import React, {useState} from "react";
import axios from 'axios';
import { NPSAPI_Key } from "../parks_key";
import {Heading, Center, Avatar, InputRightElement, InputGroup, Input} from "@chakra-ui/react"
import {Button} from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons";


const apiUrl = 'https://developer.nps.gov/api/v1/parks';



const HikingBlogLayout = () =>{
    const [searchQuery, setSearchQuery] = useState("");
    const [parkData, setParkData] = useState([]);

    const getParks = async () => {
        try {
          const response = await axios.get(apiUrl, {
            params: {
              q: searchQuery,
              api_key: NPSAPI_Key, // assuming NPSAPI_Key is your API key
            },
          });
          setParkData(response.data.data);
          console.log(response.data.data.fullName);
        } catch (error) {
          console.error(error);
        }
      };

    const handleSearch = () => {
        getParks();
      };

    return <div>
        <Center><Heading>Hiking Blog</Heading></Center>
        <Center><Heading as='h2' size='md' noOfLines={1}>
        Welcome to the Hiking Blog Where on this webpage, you can search for any parks and then write reviews for each trail.
        </Heading></Center>
        <InputGroup size="lg">
        <Center><Input placeholder="Search" width="auto" htmlSize={100} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}></Input></Center>
        <Button colorScheme='teal' size='sm' rightIcon={<SearchIcon/>} onClick={handleSearch}>
        Search
        </Button>
        <InputRightElement>
        <Avatar src="../images/blank-pfp.png"/>
        </InputRightElement>
        </InputGroup>
        <Center><Heading as ="p" size="sm">Browse for a Park by Category</Heading></Center>
        
       {parkData.length > 0 && (
        <div>
          {parkData.map((park, index) => (
            <div key={index}>
              <Heading>{park.fullName}</Heading>
              {/* Display other relevant park data */}
            </div>
          ))}
        </div>
      )}
    </div>
}

export default HikingBlogLayout;
