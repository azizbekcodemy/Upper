import React from "react";
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link';
import { FaPagelines, FaBicycle, FaPlane, FaFacebookF, FaGooglePlusG, FaTwitter, FaBehance, FaLinkedinIn } from "react-icons/fa"
import "./style.css"
import AnimatedPage from "../AnimatedPage";




function Home() {
  
    return (
        <>
        <AnimatedPage>
            <Typography className="home" sx={{ height: { xl: "77vh", lg: "88.5vh", md: "91vh", sm: "162vh", xs: "225vh" } }}>
                <Box sx={{ marginBottom: "30px", marginTop: { lg: "8%", md: "10%", xl: "0%",xs:"10%",sm:"-1%" } }}>
                    <Grid container sx={{justifyContent:{xl:"center",lg:"center",md:"center",sm:"end",xs:"center"}}} spacing={4}>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Grid container sx={{justifyContent:{xl:"center",lg:"center",md:"center",sm:"end",xs:"center"}}} spacing={2}>
                                <Grid item xs={11.5} sm={5.9} md={3.9} lg={3.2} xl={3.1} >
                                    <Box sx={{ backgroundColor: "rgba(255,255,255,0.8)", padding: "30px 30px"  }}>
                                        <Typography sx={{ padding: "15px 0px 10px 0px ", textAlign: "center", fontSize: "4em" }}>
                                            <FaPagelines />
                                        </Typography>
                                        <Typography sx={{ fontSize: "24px", color: "#000002", fontWeight: "400", marginBottom: "10px" }}>
                                            Hello Guest
                                        </Typography>
                                        <Typography sx={{ fontSize: "17px", lineHeight: "1.8rem", opacity: "0.6" }}>
                                            Upper HTML Template contains different background images for pages. Please check <a href="http://www.templatemo.com/tm-494-motion" target="_parent" style={{ color: "#3f97c9", textDecoration: "none" }}>Motion Template</a> if you want to see video backgrounds. Feel free to download and use web templates from templatemo.
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={11.5} sm={5.9} md={3.9} lg={3.2} xl={3} >
                                    <Box sx={{ backgroundColor: "rgba(255,255,255,0.8)", padding: "30px 30px",width:{sm:"80%"},marginLeft:{xl:"6px",lg:"6px"} }}>
                                        <Typography sx={{ padding: "15px 0px 10px 0px ", textAlign: "center", fontSize: "4em" }}>
                                            <FaBicycle />
                                        </Typography>
                                        <Typography sx={{ fontSize: "24px", color: "#000002", fontWeight: "400", marginBottom: "10px" }}>
                                            Welcome!
                                        </Typography>
                                        <Typography sx={{ fontSize: "17px", lineHeight: "1.8rem", opacity: "0.6" }}>
                                            There are 3 different gallaries in this template. You can customize them in any suitable way you prefer. You can also modify the content columns as you wish. Images are from Unsplash website. Good Luck!
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={11.5} sm={5.9} md={3.9} lg={3.2} xl={3} >
                                    <Box sx={{ backgroundColor: "rgba(255,255,255,0.8)", padding: "30px 30px",width:{sm:"80%"}  }}>
                                        <Typography sx={{ padding: "15px 0px 10px 0px ", textAlign: "center", fontSize: "4em", transform: "rotate(0.9turn)" }}>
                                            <FaPlane />
                                        </Typography>
                                        <Typography sx={{ fontSize: "24px", color: "#000002", fontWeight: "400", marginBottom: "10px"}}>
                                            Stay relaxed
                                        </Typography>
                                        <Typography sx={{ fontSize: "17px", lineHeight: "1.8rem", opacity: "0.6" }}>
                                            You can easily change icons in HTML codes by <a href="http://fontawesome.io/icons/" target="_parent" style={{ color: "#3f97c9", textDecoration: "none" }}>Font Awesome</a>. Praesent  modify the content columns tempus dapibus. Curabitur sodales, est auctor congue vulputate, nisl tellus finibus nunc, vitae consectetur enim.
                                        </Typography>
                                    </Box>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ marginTop: { lg: "10%", md: "5%", xl: "0%", sm: "8%" } }}>
                    <Typography class="tm-footer" sx={{ display: "flex", marginBottom: "30px" }}>
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
                            <Typography sx={{ backgroundColor: "rgba(0, 0, 0, 0.3)", color: "white", fontSize: { xl: "1.1rem", lg: "1.1rem", md: "1.1rem", sm: "1.1rem", xs: "1.1rem" }, fontWeight: "400", padding: "5px 12px", marginLeft: "4%", width: { xl: "30%", lg: "31%", md: "45%", sm: "62%", xs: "87%" } }}>Copyright &copy; 2016 Your Company

                                - Design: <a rel="nofollow" href="http://www.templatemo.com/page/1" style={{ color: "white", textDecoration: "none" }} target="_parent">Templatemo</a></Typography>
                        </Grid>
                    </Grid>
                </Box>  
            </Typography>
         
            </AnimatedPage>

        </>

    )
}
export default Home