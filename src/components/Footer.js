import React from "react";
import { SocialIcon } from 'react-social-icons';
import "../NavFooter.css";
import {BiMailSend} from "react-icons/bi";
import {BiPhone} from "react-icons/bi";

function Footer() {
    return (
    // <!--Contact me section-->
         <div className="footer">
              <div className="iconDiv">
              <a className="icon" href="tel:3603494582"><BiPhone /></a> 
              <a className="icon" href="mailto:samtaylor.byers@gmail.com" target="_blank"><BiMailSend /></a> 
             <SocialIcon className="icons" url="https://github.com/samibyers" target="_blank"/>
             <SocialIcon className="icons" url="https://www.linkedin.com/in/sami-byers-4693b5134" target="_blank"/>
            </div>
        </div>
    
    );
}

export default Footer;