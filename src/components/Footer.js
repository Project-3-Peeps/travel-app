import React from "react";
import { SocialIcon } from 'react-social-icons';
import "../NavFooter.css";


function Footer() {
    return (
        <div className="footer">
                <small className="mobilesizing">To learn more about our company, visit our GitHub</small> 
                <small><SocialIcon className="icon"url="https://github.com/Triptinerary" rel="noreferrer"/></small>
        </div>
        
    
    );
}

export default Footer;