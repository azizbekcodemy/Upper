import React from "react";
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link';
import se5 from "../img/tm-img-05-tn.jpg"
import se6 from "../img/tm-img-06-tn.jpg"
import se7 from "../img/tm-img-07-tn.jpg"
import se8 from "../img/tm-img-08-tn.jpg"
import se9 from "../img/tm-img-09-tn.jpg"
import se10 from "../img/tm-img-10-tn.jpg"
import { FaPagelines, FaBicycle, FaPlane, FaFacebookF, FaGooglePlusG, FaTwitter, FaBehance, FaLinkedinIn } from "react-icons/fa"
import "./style.css"
import transitions from "@material-ui/core/styles/transitions";
import AnimatedPage from "../AnimatedPage";

function Second() {
    return (
        <> 
        <AnimatedPage>
        <Box  >
            <Typography  className="secund" sx={{height:{xl:"127vh",lg:"87vh",md:"88vh",sm:"170vh",xs:"350vh"}}}>
                <Box sx={{ marginBottom: "30px",marginTop:{lg:"-6%",md:"0%",xl:"0%",sm:"0%",xs:"13%"} }}>
                    <Grid container  spacing={4}>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Grid container justifyContent="center" spacing={4}>
                                <Grid item xs={11.6} sm={11.6} md={11.7} lg={11} xl={10.4} >
                                    <Box sx={{width:{xl:"50%",lg:"50%",md:"70%"}}}>
                                    <Typography sx={{ color: "white", fontSize: "1.8em", fontWeight: "300",marginBottom:"20px" }}>
                                    Second Gallery
                                    </Typography>
                                    <Typography sx={{ color: "white", fontSize: "1em", lineHeight: "1.8",marginBottom:"30px" }}>
                                    Aenean nulla lorem, laoreet eu nibh et, lacinia ullamcorper dui. Nullam ut tincidunt odio. Morbi accumsan diam vel enim cursus, in dapibus eros tristique.
                                    </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid container justifyContent="center" spacing={3} sx={{marginBottom:"20px"}}>
                                <Grid item xs={11.6} sm={5.8} md={3.9} lg={3.7} xl={3.5}  >
                                    <Box sx={{ marginBottom: "0px" }}>
                                        <Typography className="firsthov"
                                            sx={{
                                                textAlign: "center",
                                                position: "relative",
                                                overflow: "hidden"
                                            }}>
                                            <img src={se5} className="firstimg" style={{ width: "100%", opacity: "1", position: "relative", display: "block" }} />
                                            <Typography className="fir" sx={{
                                                textTransform: "uppercase",
                                                fontSize: "1.25em",
                                                color: "#fff",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                display: "flex",
                                                justifyContent: "center",
                                                position: "absolute",
                                                top: "0",
                                                left: "0",
                                                width: "100%",
                                                height: "100%"

                                            }}>
                                                <Typography className="firsth2" sx={{
                                                    width:"70%",
                                                    fontSize: {xl:"1.5em",lg:"1.5em",md:"1.5em",sm:"1.5em",xs:"2em"},
                                                    opacity: "1",
                                                    transition: "transform 0.35s",
                                                    transform: "translate3d(0,20px,0)"


                                                }}>Picture One
                                                </Typography>
                                                <Typography className="firstp" sx={{
                                                    marginTop: "20px",
                                                    opacity: "0",
                                                    fontWeight: "400",
                                                    padding: "1rem",
                                                    width: "70%",
                                                    border: "1px solid #fff",
                                                    transition: "opacity 0.35s, transform 0.35s",
                                                    transform: "translate3d(0,20px,0) scale(1.1)"
                                                }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                                                <Link href={se5} sx={{
                                                    zIndex: "1000",
                                                    textIndent: "200%",
                                                    whiteSpace: "nowrap",
                                                    fontSize: "0",
                                                    opacity: "0",
                                                    position: "absolute",
                                                    top: "0",
                                                    left: "0",
                                                    width: "100%",
                                                    height: "100%"
                                                }}>View more</Link>
                                            </Typography>
                                        </Typography>
                                    </Box>


                                </Grid>
                                <Grid item xs={11.6} sm={5.8} md={3.9} lg={3.7} xl={3.5}  >
                                    <Box sx={{ marginBottom: "0px" }}>
                                        <Typography className="firsthov"
                                            sx={{
                                                textAlign: "center",
                                                position: "relative",
                                                overflow: "hidden"
                                            }}>
                                            <img src={se6} className="firstimg" style={{ width: "100%", opacity: "1", position: "relative", display: "block" }} />
                                            <Typography className="fir" sx={{
                                                textTransform: "uppercase",
                                                fontSize: "1.25em",
                                                color: "#fff",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                display: "flex",
                                                justifyContent: "center",
                                                position: "absolute",
                                                top: "0",
                                                left: "0",
                                                width: "100%",
                                                height: "100%"

                                            }}>
                                                <Typography className="firsth2" sx={{
                                                    width:"70%",
                                                    fontSize: {xl:"1.5em",lg:"1.5em",md:"1.5em",sm:"1.5em",xs:"2em"},
                                                    opacity: "1",
                                                    transition: "transform 0.35s",
                                                    transform: "translate3d(0,20px,0)"


                                                }}>Picture Two
                                                </Typography>
                                                <Typography className="firstp" sx={{
                                                    marginTop: "20px",
                                                    opacity: "0",
                                                    fontWeight: "400",
                                                    padding: "1rem",
                                                    width: "70%",
                                                    border: "1px solid #fff",
                                                    transition: "opacity 0.35s, transform 0.35s",
                                                    transform: "translate3d(0,20px,0) scale(1.1)"
                                                }}>Maecenas purus sem, lobortis id odio in sapien.</Typography>
                                                <Link href={se6} sx={{
                                                    zIndex: "1000",
                                                    textIndent: "200%",
                                                    whiteSpace: "nowrap",
                                                    fontSize: "0",
                                                    opacity: "0",
                                                    position: "absolute",
                                                    top: "0",
                                                    left: "0",
                                                    width: "100%",
                                                    height: "100%"
                                                }}>View more</Link>
                                            </Typography>
                                        </Typography>
                                    </Box>


                                </Grid>
                                <Grid item xs={11.6} sm={5.8} md={3.9} lg={3.7} xl={3.5}  >
                                    <Box sx={{ marginBottom: "0px" }}>
                                        <Typography className="firsthov"
                                            sx={{
                                                textAlign: "center",
                                                position: "relative",
                                                overflow: "hidden"
                                            }}>
                                            <img src={se7} className="firstimg" style={{ width: "100%", opacity: "1", position: "relative", display: "block" }} />
                                            <Typography className="fir" sx={{
                                                textTransform: "uppercase",
                                                fontSize: "1.25em",
                                                color: "#fff",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                display: "flex",
                                                justifyContent: "center",
                                                position: "absolute",
                                                top: "0",
                                                left: "0",
                                                width: "100%",
                                                height: "100%"

                                            }}>
                                                <Typography className="firsth2" sx={{
                                                    width:"70%",
                                                    fontSize: {xl:"1.5em",lg:"1.5em",md:"1.5em",sm:"1.5em",xs:"2em"},
                                                    opacity: "1",
                                                    transition: "transform 0.35s",
                                                    transform: "translate3d(0,20px,0)"


                                                }}>Picture Three
                                                </Typography>
                                                <Typography className="firstp" sx={{
                                                    marginTop: "20px",
                                                    opacity: "0",
                                                    fontWeight: "400",
                                                    padding: "1rem",
                                                    width: "70%",
                                                    border: "1px solid #fff",
                                                    transition: "opacity 0.35s, transform 0.35s",
                                                    transform: "translate3d(0,20px,0) scale(1.1)"
                                                }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                                                <Link href={se7} sx={{
                                                    zIndex: "1000",
                                                    textIndent: "200%",
                                                    whiteSpace: "nowrap",
                                                    fontSize: "0",
                                                    opacity: "0",
                                                    position: "absolute",
                                                    top: "0",
                                                    left: "0",
                                                    width: "100%",
                                                    height: "100%"
                                                }}>View more</Link>
                                            </Typography>
                                        </Typography>
                                    </Box>


                                </Grid>
                                <Grid item xs={11.6} sm={5.8} md={3.9} lg={3.7} xl={3.5}  >
                                    <Box sx={{ marginBottom: "0px" }}>
                                        <Typography className="firsthov"
                                            sx={{
                                                textAlign: "center",
                                                position: "relative",
                                                overflow: "hidden"
                                            }}>
                                            <img src={se8} className="firstimg" style={{ width: "100%", opacity: "1", position: "relative", display: "block" }} />
                                            <Typography className="fir" sx={{
                                                textTransform: "uppercase",
                                                fontSize: "1.25em",
                                                color: "#fff",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                display: "flex",
                                                justifyContent: "center",
                                                position: "absolute",
                                                top: "0",
                                                left: "0",
                                                width: "100%",
                                                height: "100%"

                                            }}>
                                                <Typography className="firsth2" sx={{
                                                    width:"70%",
                                                    fontSize: {xl:"1.5em",lg:"1.5em",md:"1.5em",sm:"1.5em",xs:"2em"},
                                                    opacity: "1",
                                                    transition: "transform 0.35s",
                                                    transform: "translate3d(0,20px,0)"


                                                }}>Picture Four
                                                </Typography>
                                                <Typography className="firstp" sx={{
                                                    marginTop: "20px",
                                                    opacity: "0",
                                                    fontWeight: "400",
                                                    padding: "1rem",
                                                    width: "70%",
                                                    border: "1px solid #fff",
                                                    transition: "opacity 0.35s, transform 0.35s",
                                                    transform: "translate3d(0,20px,0) scale(1.1)"
                                                }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                                                <Link href={se8} sx={{
                                                    zIndex: "1000",
                                                    textIndent: "200%",
                                                    whiteSpace: "nowrap",
                                                    fontSize: "0",
                                                    opacity: "0",
                                                    position: "absolute",
                                                    top: "0",
                                                    left: "0",
                                                    width: "100%",
                                                    height: "100%"
                                                }}>View more</Link>
                                            </Typography>
                                        </Typography>
                                    </Box>


                                </Grid>
                                <Grid item xs={11.6} sm={5.8} md={3.9} lg={3.7} xl={3.5}  >
                                    <Box sx={{ marginBottom: "0px" }}>
                                        <Typography className="firsthov"
                                            sx={{
                                                textAlign: "center",
                                                position: "relative",
                                                overflow: "hidden"
                                            }}>
                                            <img src={se9} className="firstimg" style={{ width: "100%", opacity: "1", position: "relative", display: "block" }} />
                                            <Typography className="fir" sx={{
                                                textTransform: "uppercase",
                                                fontSize: "1.25em",
                                                color: "#fff",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                display: "flex",
                                                justifyContent: "center",
                                                position: "absolute",
                                                top: "0",
                                                left: "0",
                                                width: "100%",
                                                height: "100%"

                                            }}>
                                                <Typography className="firsth2" sx={{
                                                    width:"70%",
                                                    fontSize: {xl:"1.5em",lg:"1.5em",md:"1.5em",sm:"1.5em",xs:"2em"},
                                                    opacity: "1",
                                                    transition: "transform 0.35s",
                                                    transform: "translate3d(0,20px,0)"


                                                }}>Picture Five
                                                </Typography>
                                                <Typography className="firstp" sx={{
                                                    marginTop: "20px",
                                                    opacity: "0",
                                                    fontWeight: "400",
                                                    padding: "1rem",
                                                    width: "70%",
                                                    border: "1px solid #fff",
                                                    transition: "opacity 0.35s, transform 0.35s",
                                                    transform: "translate3d(0,20px,0) scale(1.1)"
                                                }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                                                <Link href={se9} sx={{
                                                    zIndex: "1000",
                                                    textIndent: "200%",
                                                    whiteSpace: "nowrap",
                                                    fontSize: "0",
                                                    opacity: "0",
                                                    position: "absolute",
                                                    top: "0",
                                                    left: "0",
                                                    width: "100%",
                                                    height: "100%"
                                                }}>View more</Link>
                                            </Typography>
                                        </Typography>
                                    </Box>


                                </Grid>
                                <Grid item xs={11.6} sm={5.9} md={3.9} lg={3.7} xl={3.5}  >
                                    <Box sx={{ marginBottom: "0px" }}>
                                        <Typography className="firsthov"
                                            sx={{
                                                textAlign: "center",
                                                position: "relative",
                                                overflow: "hidden"
                                            }}>
                                            <img src={se10} className="firstimg" style={{ width: "100%", opacity: "1", position: "relative", display: "block" }} />
                                            <Typography className="fir" sx={{
                                                textTransform: "uppercase",
                                                fontSize: "1.25em",
                                                color: "#fff",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                display: "flex",
                                                justifyContent: "center",
                                                position: "absolute",
                                                top: "0",
                                                left: "0",
                                                width: "100%",
                                                height: "100%"

                                            }}>
                                                <Typography className="firsth2" sx={{
                                                    width:"70%",
                                                    fontSize: {xl:"1.5em",lg:"1.5em",md:"1.5em",sm:"1.5em",xs:"2em"},
                                                    opacity: "1",
                                                    transition: "transform 0.35s",
                                                    transform: "translate3d(0,20px,0)"


                                                }}>Picture six
                                                </Typography>
                                                <Typography className="firstp" sx={{
                                                    marginTop: "20px",
                                                    opacity: "0",
                                                    fontWeight: "400",
                                                    padding: "1rem",
                                                    width: "70%",
                                                    border: "1px solid #fff",
                                                    transition: "opacity 0.35s, transform 0.35s",
                                                    transform: "translate3d(0,20px,0) scale(1.1)"
                                                }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                                                <Link href={se10} sx={{
                                                    zIndex: "1000",
                                                    textIndent: "200%",
                                                    whiteSpace: "nowrap",
                                                    fontSize: "0",
                                                    opacity: "0",
                                                    position: "absolute",
                                                    top: "0",
                                                    left: "0",
                                                    width: "100%",
                                                    height: "100%"
                                                }}>View more</Link>
                                            </Typography>
                                        </Typography>
                                    </Box>


                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{marginTop:{lg:"1%",md:"0%",xl:"0%"}}}>
                <Typography class="tm-footer" sx={{ display: "flex", marginBottom: "300px"  }}>
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
                <Grid spacing={0} sx={{ gap: { sm: "2px" },marginTop:{lg:"-0%",xl:"0%"} }}>
                    <Grid item xs={11.5} sm={5.8} md={3.9} lg={3.2} xl={3} >
                        <Typography sx={{ backgroundColor: "rgba(0, 0, 0, 0.3)", color: "white", fontSize: {xl:"1.1rem",lg:"1.1rem",md:"1.1rem",sm:"1.1rem",xs:"1.1rem",marginBottom:"100px"}, fontWeight: "400", padding: "5px 12px", marginLeft: "4%",width:{xl:"30%",lg:"33%",md:"45%",sm:"59%",xs:"87%"} }}>Copyright &copy; 2016 Your Company

                            - Design: <a rel="nofollow" href="http://www.templatemo.com/page/1" style={{ color: "white", textDecoration: "none" }} target="_parent">Templatemo</a></Typography>
                    </Grid>
                </Grid>
                </Box>
            </Typography>
            </Box>
            </AnimatedPage>
        </>

    )
}
export default Second