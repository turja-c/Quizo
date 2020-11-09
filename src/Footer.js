import React from 'react';
import './Footer.css'
const Footer = () => {
    return(
        <div className="main-footer">
            <div className="footercontainer">
                {/* <div className="row"> */}
                    {/* Column 1 */}
                    {/* <div className="col">
                        <h4> First </h4>
                        <ul className="list-unstyled">
                            <li>(800)234-23423</li>
                            <li>Toronto, Canada</li>
                        </ul>
                    </div> */}
                    {/* Column 2 */}
                    {/* <div className="col">
                        <h4> Second </h4>
                        <ul className="list-unstyled">
                            <li>More info</li>
                            <li>More info</li>
                        </ul>
                    </div> */}
                    {/* Column 3 */}
                    {/* <div className="col">
                        <h4> Third </h4>
                        <ul className="list-unstyled">
                            <li>(800)234-23423</li>
                            <li>Toronto, Canada</li>
                        </ul>
                    </div> */}
                {/* </div> */}
                {/* < hr /> */}
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} TC INC | All Rights Reserved | Terms of Service | Privacy
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Footer;