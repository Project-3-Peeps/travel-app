import React from "react";
import { SocialIcon } from 'react-social-icons';
import "../NavFooter.css";


function Footer() {
    return (
    // <!--Contact me section-->
         <div>
              <div className="footer">
                  <small>To learn more about our company, visit our GitHub </small>
             <SocialIcon className="icon"url="https://github.com/Triptinerary" rel="noreferrer"/>
            </div>
        </div>
    
    );
}

export default Footer;