import React from "react";
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { FaPagelines, FaBicycle, FaPlane, FaFacebookF, FaGooglePlusG, FaTwitter, FaBehance, FaLinkedinIn } from "react-icons/fa"
import "./style.css"
import {motion} from "framer-motion"
import AnimatedPage from "../AnimatedPage";

function Contact() {
    return (
        <>
        <AnimatedPage>
            <Typography className="contact con"
             sx={{ height: { xl: "107vh", lg: "88.5vh", md: "100vh", sm: "135vh", xs: "238vh" }}}>
                <Box sx={{ marginBottom: "30px", marginTop: { lg: "3%", md: "3%", xl: "0%",xs:"3%" } }}>
                    <Grid container justifyContent="center" spacing={4}>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Grid container justifyContent="center" spacing={2}>
                                <Grid item xs={11.5} sm={5.8} md={5.8} lg={4.8} xl={4.7} >
                                    <Box sx={{ backgroundColor: "rgba(255,255,255,0.8)", padding: "30px 30px" }}>
                                        <Typography sx={{ fontSize: "24px", color: "#000002", fontWeight: "400", marginBottom: "10px", opacity: "0.5" }}>
                                            Contact Us
                                        </Typography>
                                        <Typography sx={{ fontSize: "17px", lineHeight: "1.8rem", opacity: "0.6",marginBottom:"20px" }}>
                                            Praesent tempus dapibus odio nec elementum. Sed elementum est quis tortor faucibus, et molestie nibh finibus. Mauris condimentum ex vestibulum fringilla consectetur.
                                        </Typography>
                                        <Typography sx={{marginBottom:"1.5rem",width:{xl:"95%",lg:"95%",md:"95%",sm:"88%",xs:"92%"}}}>
                                            <input type="text" id="contact_name" name="contact_name"  placeholder="Name" required style={{
                                                backgroundColor:"rgba(255,255,255,0.7)",
                                                borderRadius:"0px",
                                                fontSize:"1.1rem",
                                                display:"block",
                                                width:"100%",
                                                lineHeight:"1.5",
                                                color:"#55595c",
                                                border:"1px solid #ccc",
                                                padding:" 10px 15px "
                                            }}/>
                                        </Typography>

                                        <Typography sx={{marginBottom:"1.5rem", width:{xl:"95%",lg:"95%",md:"95%",sm:"88%",xs:"92%"}}}>
                                            <input type="email" id="contact_email" name="contact_email"  placeholder="Email" required style={{
                                                backgroundColor:"rgba(255,255,255,0.7)",
                                                borderRadius:"0px",
                                                fontSize:"1.1rem",
                                                display:"block",
                                                width:"100%",
                                                lineHeight:"1.5",
                                                color:"#55595c",
                                                border:"1px solid #ccc",
                                                padding:" 10px 15px "
                                            }} />
                                        </Typography>

                                        <Typography sx={{marginBottom:"1.5rem",width:{xl:"95%",lg:"95%",md:"95%",sm:"88%",xs:"92%"}}}>
                                            <textarea id="contact_message" name="contact_message"  rows="5" placeholder="Your message" required style={{
                                                backgroundColor:"rgba(255,255,255,0.7)",
                                                borderRadius:"0px",
                                                fontSize:"1.1rem",
                                                display:"block",
                                                width:"100%",
                                                lineHeight:"1.5",
                                                color:"#55595c",
                                                border:"1px solid #ccc",
                                                padding:" 10px 15px "
                                            }}></textarea>
                                        </Typography>
                                        <Typography sx={{ marginLeft:{xl:"67%",lg:"66%",md:"60%",sm:"39%",xs:"50%"}}}>
                                        <button type="submit" style={{
                                            backgroundColor:"#0066CC",
                                            border:"none",
                                            color:"#fff",
                                            padding:"10px 50px",
                                            marginTop:"10px",
                                            fontWeight:"400",
                                            fontSize:"2rem",
                                           
                                         
                                        }}>Send</button>
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={11.5} sm={5.8} md={5.8} lg={4.8} xl={4.7} >
                                    <Box sx={{ backgroundColor: "rgba(255,255,255,0.8)", padding: "30px 30px" }}>
                                        <Typography sx={{ fontSize: "24px", color: "#000002", fontWeight: "400", marginBottom: "10px",opacity:"0.5" }}>
                                        123 New Street 11000, San Francisco, CA
                                        </Typography>
                                        <Typography sx={{ fontSize: "17px", lineHeight: "1.8rem", opacity: "1",marginBottom:"35px" }}>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d47955.529859584916!2d69.26172159999999!3d41.304064000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1665154251123!5m2!1sru!2s"
                                            width="100%" height="470" style={{ border: 0 }} allowfullscreen=""
                                            loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ marginTop: { lg: "3%", md: "0%", xl: "0%", sm: "8%" } }}>
                    <Typography  sx={{ display: "flex", marginBottom: "30px" }}>
                        <Grid container justifyContent="center" spacing={0} sx={{ gap: { sm: "2px" } }}>
                            <Typography sx={{ backgroundColor: "rgba(255,255,255,0.40)", width: "35px", height: "30px", marginRight: "10px", color: "black", textAlign: "center", paddingTop: "10px" }}>
                                <Link href="#" sx={{ font: "normal normal normal 14px/1 FontAwesome", color: "black", paddingTop: "10px" }}><FaFacebookF /></Link>
                            </Typography>
                            <Typography sx={{ backgroundColor: "rgba(255,255,255,0.40)", width: "35px", height: "30px", marginRight: "10px", color: "black", textAlign: "center", paddingTop: "10px" }}>
                                <Link href="#" sx={{ font: "normal normal normal 14px/1 FontAwesome", color: "black", paddingTop: "10px" }}><FaGooglePlusG /></Link>
                            </Typography>
                            <Typography sx={{ backgroundColor: "rgba(255,255,255,0.40)", width: "35px", height: "30px", marginRight: "10px", color: "black", textAlign: "center", paddingTop: "10px" }}>
                                <Link href="#" sx={{ font: "normal normal normal 14px/1 FontAwesome", color: "black", paddingTop: "10px" }}><FaTwitter /></Link>
                            </Typography>
                            <Typography sx={{ backgroundColor: "rgba(255,255,255,0.40)", width: "35px", height: "30px", marginRight: "10px", color: "black", textAlign: "center", paddingTop: "10px" }}>
                                <Link href="#" sx={{ font: "normal normal normal 14px/1 FontAwesome", color: "black", paddingTop: "10px" }}><FaBehance /></Link>
                            </Typography>
                            <Typography sx={{ backgroundColor: "rgba(255,255,255,0.40)", width: "35px", height: "30px", marginRight: "10px", color: "black", textAlign: "center", paddingTop: "10px" }}>
                                <Link href="#" sx={{ font: "normal normal normal 14px/1 FontAwesome", color: "black", paddingTop: "10px" }}><FaLinkedinIn /></Link>
                            </Typography>
                        </Grid>
                    </Typography>
                    <Grid spacing={0} sx={{ gap: { sm: "2px" }, marginTop: { lg: "-0%", xl: "0%" } }}>
                        <Grid item xs={11.5} sm={5.8} md={3.9} lg={3.2} xl={3} >
                            <Typography sx={{ backgroundColor: "rgba(0, 0, 0, 0.3)", color: "white", fontSize: { xl: "1.1rem", lg: "1.1rem", md: "1.1rem", sm: "1.1rem", xs: "1.1rem" }, fontWeight: "400", padding: "5px 12px", marginLeft: "3%", width: { xl: "30%", lg: "31%", md: "45%", sm: "62%", xs: "87%" } }}>Copyright &copy; 2016 Your Company

                                - Design: <a rel="nofollow" href="http://www.templatemo.com/page/1" style={{ color: "white", textDecoration: "none" }} target="_parent">Templatemo</a></Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Typography>
            </AnimatedPage>

        </>

    )
}
export default Contact