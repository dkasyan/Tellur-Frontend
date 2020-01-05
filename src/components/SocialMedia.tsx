import React from "react"
import FacebookIcon from '@material-ui/icons/Facebook';
import { Link, IconButton, Grid, Box } from "@material-ui/core";
import SocialMediaButton from "./SocialMediaButton"

const SocialMedia = () => {
    const facebookURL = "https://facebook.com"
    const twitterURL = "https://twiter.com"
    const instagramURL = "https://instagram.com"
    return(
        <Box>
            <SocialMediaButton url={facebookURL} icon={<FacebookIcon/>}/>

            <SocialMediaButton url={twitterURL} icon={<FacebookIcon/>}/>

            <SocialMediaButton url={facebookURL} icon={<FacebookIcon/>}/>
        </Box>



    )

}

export default SocialMedia