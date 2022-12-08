import React from "react";
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link';
import { FaPagelines, FaBicycle, FaPlane, FaFacebookF, FaGooglePlusG, FaTwitter, FaBehance, FaLinkedinIn } from "react-icons/fa"
import "./style.css"
import AnimatedPage from "../AnimatedPage";

function About() {
    return (
        <>
        <AnimatedPage>
            <Typography  className="about" sx={{height:{xl:"95vh",lg:"88.5vh",md:"91vh",sm:"122vh",xs:"180vh"},paddingTop:{xl:"11%",lg:"11%",md:"11%",sm:"11%",xs:"17%"}}}>
                <Box sx={{ marginBottom: "30px" ,marginTop:{lg:"5%",md:"5%",xl:"0%"}}}>
                    <Grid container justifyContent="center" spacing={4}>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Grid container justifyContent="center" spacing={4}>
                                <Grid item xs={11.5} sm={11.8} md={11.8} lg={10} xl={9.5} >
                                    <Box sx={{ backgroundColor: "rgba(255,255,255,0.8)", padding: "30px 40px" }}>
                                        <Typography sx={{ fontSize: "30px", color: "#000002", fontWeight: "400", marginBottom: {xl:"50px",lg:"50px",md:"20px"} }}>
                                        Lorem ipsum dolor
                                        </Typography>
                                        <Typography sx={{ fontSize: "17px", lineHeight: "1.8rem", opacity: "0.6" }}>
                                        Nulla efficitur, ligula et imperdiet volutpat, lacus tortor tempus massa, eget tempus quam nibh vel nulla. Vivamus non molestie leo, non tincidunt diam. Mauris sagittis elit in velit ultricies aliquet sed in magna. Pellentesque semper, est nec consequat viverra, sem augue tincidunt nisi, a posuere nisi sapien sed sapien. Nulla facilisi.
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={11.5} sm={5.9} md={5.9} lg={5} xl={4.7} >
                                    <Box sx={{ backgroundColor: "rgba(255,255,255,0.8)", padding: "30px 40px" }}>
                                        <Typography sx={{ fontSize: "30px", color: "#000002", fontWeight: "400", marginBottom:  {xl:"30px",lg:"30px",md:"10px",sm:"20px"}  }}>
                                        Nulla facilisi
                                        </Typography>
                                        <Typography sx={{ fontSize: "17px", lineHeight: "1.8rem", opacity: "0.6" ,marginBottom:{md:"27px",sm:"28px",xl:"0px",lg:"0px"}}}>
                                        Donec vitae bibendum est, et ultrices urna. Curabitur ac bibendum augue, a convallis mi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ultrices placerat arcu.
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={11.5} sm={5.9} md={5.9} lg={5} xl={4.7} >
                                    <Box sx={{ backgroundColor: "rgba(255,255,255,0.8)", padding: "30px 40px" }}>
                                        <Typography sx={{ fontSize: "30px", color: "#000002", fontWeight: "400", marginBottom:{xl:"30px",lg:"30px",md:"10px",sm:"20px"} }}>
                                        Aliquam sem sem
                                        </Typography>
                                        <Typography sx={{ fontSize: "17px", lineHeight: "1.8rem", opacity: "0.6" }}>
                                        Proin sagittis mauris dolor, vel efficitur lectus dictum nec. Sed ultrices placerat arcu, id malesuada metus cursus suscipit. Donex quis consectetur ligula. Proin accumsan eros id nisi porttitor, a facilisis quam cursus.
                                        </Typography>
                                    </Box>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{marginTop:{lg:"8%",md:"5%",xl:"0%",sm:"8%"}}}>
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
                <Grid spacing={0} sx={{ gap: { sm: "2px" },marginTop:{lg:"-0%",xl:"0%"}  }}>
                    <Grid item xs={11.5} sm={5.8} md={3.9} lg={3.2} xl={3} >
                        <Typography sx={{ backgroundColor: "rgba(0, 0, 0, 0.3)", color: "white", fontSize: {xl:"1.1rem",lg:"1.1rem",md:"1.1rem",sm:"1.1rem",xs:"1.1rem"}, fontWeight: "400", padding: "5px 12px", marginLeft: "4%",width:{xl:"30%",lg:"31%",md:"45%",sm:"62%",xs:"87%"} }}>Copyright &copy; 2016 Your Company

                            - Design: <a rel="nofollow" href="http://www.templatemo.com/page/1" style={{ color: "white", textDecoration: "none" }} target="_parent">Templatemo</a></Typography>
                    </Grid>
                </Grid>
                </Box>
            </Typography>
            </AnimatedPage>


        </>

    )
}
export default About