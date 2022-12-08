import React from "react";
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link';
import th11 from "../img/tm-img-11-tn.jpg"
import th12 from "../img/tm-img-12-tn.jpg"
import th13 from "../img/tm-img-13-tn.jpg"
import th14 from "../img/tm-img-14-tn.jpg"
import th15 from "../img/tm-img-15-tn.jpg"
import th16 from "../img/tm-img-16-tn.jpg"
import { FaPagelines, FaBicycle, FaPlane, FaFacebookF, FaGooglePlusG, FaTwitter, FaBehance, FaLinkedinIn } from "react-icons/fa"
import "./style.css"
import transitions from "@material-ui/core/styles/transitions";
import AnimatedPage from "../AnimatedPage";

function Third() {
    return (
        <> 
        <AnimatedPage>
        <Box  >
            <Typography  className="third" sx={{height:{xl:"227vh",lg:"168vh",md:"168vh",sm:"500vh",xs:"350vh"}}}>
                <Box sx={{ marginBottom: "30px",marginTop:{lg:"-6%",md:"0%",xl:"0%",sm:"0%",xs:"13%"} }}>
                    <Grid container  spacing={4}>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Grid container justifyContent="center" spacing={4}>
                                <Grid item xs={11.6} sm={10.6} md={11.7} lg={11.2} xl={10.4} >
                                    <Box sx={{width:{xl:"50%",lg:"50%",md:"70%"}}}>
                                    <Typography sx={{ color: "white", fontSize: "1.8em", fontWeight: "300",marginBottom:"20px" }}>
                                    Third Image Grid
                                    </Typography>
                                    <Typography sx={{ color: "white", fontSize: "1em", lineHeight: "1.8",marginBottom:"30px" }}>
                                    Nulla efficitur, ligula et imperdiet volutpat, lacus tortor tempus massa, eget tempus quam nibh vel nulla. Maecenas purus sem, lobortis id odio in, ultrices scelerisque sapien.
                                    </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid container justifyContent="center" spacing={3} sx={{marginBottom:"20px"}}>
                                <Grid item xs={11.6} sm={10.6} md={5.8} lg={5.6} xl={5.2}  >
                                    <Box sx={{ marginBottom: "0px" }}>
                                        <Typography className="firsthov"
                                            sx={{
                                                textAlign: "center",
                                                position: "relative",
                                                overflow: "hidden"
                                            }}>
                                            <img src={th11} className="firstimg" style={{ width: "100%", opacity: "1", position: "relative", display: "block" }} />
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
                                                <Link href={th11} sx={{
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
                                <Grid item xs={11.6} sm={10.6} md={5.8} lg={5.6} xl={5.2}   >
                                    <Box sx={{ marginBottom: "0px" }}>
                                        <Typography className="firsthov"
                                            sx={{
                                                textAlign: "center",
                                                position: "relative",
                                                overflow: "hidden"
                                            }}>
                                            <img src={th12} className="firstimg" style={{ width: "100%", opacity: "1", position: "relative", display: "block" }} />
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
                                                <Link href={th12} sx={{
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
                                <Grid item xs={11.6} sm={10.6} md={5.8} lg={5.6} xl={5.2}   >
                                    <Box sx={{ marginBottom: "0px" }}>
                                        <Typography className="firsthov"
                                            sx={{
                                                textAlign: "center",
                                                position: "relative",
                                                overflow: "hidden"
                                            }}>
                                            <img src={th13} className="firstimg" style={{ width: "100%", opacity: "1", position: "relative", display: "block" }} />
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
                                                <Link href={th13} sx={{
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
                                <Grid item xs={11.6} sm={10.6} md={5.8} lg={5.6} xl={5.2}   >
                                    <Box sx={{ marginBottom: "0px" }}>
                                        <Typography className="firsthov"
                                            sx={{
                                                textAlign: "center",
                                                position: "relative",
                                                overflow: "hidden"
                                            }}>
                                            <img src={th14} className="firstimg" style={{ width: "100%", opacity: "1", position: "relative", display: "block" }} />
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
                                                <Link href={th14} sx={{
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
                                <Grid item xs={11.6} sm={10.6} md={5.8} lg={5.6} xl={5.2}   >
                                    <Box sx={{ marginBottom: "0px" }}>
                                        <Typography className="firsthov"
                                            sx={{
                                                textAlign: "center",
                                                position: "relative",
                                                overflow: "hidden"
                                            }}>
                                            <img src={th15} className="firstimg" style={{ width: "100%", opacity: "1", position: "relative", display: "block" }} />
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
                                                <Link href={th15} sx={{
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
                                <Grid item xs={11.6} sm={10.6} md={5.8} lg={5.6} xl={5.2}   >
                                    <Box sx={{ marginBottom: "0px" }}>
                                        <Typography className="firsthov"
                                            sx={{
                                                textAlign: "center",
                                                position: "relative",
                                                overflow: "hidden"
                                            }}>
                                            <img src={th16} className="firstimg" style={{ width: "100%", opacity: "1", position: "relative", display: "block" }} />
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
                                                <Link href={th16} sx={{
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
                <Box sx={{marginTop:{lg:"3%",md:"5%",xl:"0%"}}}>
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
export default Third