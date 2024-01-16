import React from "react";
import { Axios } from "axios";
import NPSAPI_Key from "../parks_key";

const apiUrl = 'https://developer.nps.gov/api/v1/parks';

Axios.get(apiUrl, NPSAPI_Key).then(function(res){
    console.log("Got the hiking data", res)
})


const HikingBlogLayout = () =>{
    return <div></div>
}

export default HikingBlogLayout;
