
import { Box, Grid, CardContent, Typography, Container, Chip, Button } from '@mui/material'
import React from 'react'
import "./style.css"
import rasm from "./tabs-image-01.jpg"
import rasm22 from "./tabs-image-02.jpg"
import rasm23 from "./tabs-image-03.jpg"
import rasm24 from "./tabs-image-04.jpg"
import rasm25 from "./tabs-image-05.jpg"
import ReactDOM from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import rasm1 from "./search-icon-01.png"
import rasm2 from "./search-icon-02.png"
import rasm3 from "./search-icon-03.png"
import rasm4 from "./search-icon-04.png"
import rasm5 from "./search-icon-05.png"
import { FaEye } from "react-icons/fa";




function Category() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box justifyContent='center' textAlign='center'>
            <Container>

                <Box sx={{ textAlign: "center", }}>
                    <Grid container justifyContent="center" spacing={4} >
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}   >
                            <CardContent sx={{ width: "93%", paddingLeft: "30px", marginTop: "5%" }}>

                                <Typography sx={{ color: "black", fontSize: { lg: "35px", xs: "35px" }, display: "block", marginBlockStart: "0.1em", marginBlockEnd: "0.5em", marginInlineStart: "0px", marginInlineEnd: "0px", fontWeight: "600" }} >
                                    Popular Categories
                                </Typography>
                                <Typography sx={{ color: "black", fontSize: { lg: "14px", xs: "16px" }, display: "block", marginBlockStart: "1em", marginBlockEnd: "0.5em", marginInlineStart: "0px", marginInlineEnd: "0px", fontWeight: "400", letterSpacing: "2px" }} >
                                    CHECK THEM OUT
                                </Typography>

                            </CardContent>
                        </Grid >
                    </Grid>
                </Box>
                <Box justifyContent='center' sx={{ textAlign: 'center' }} >

                    <Box sx={{
                        width: { lg: "100%" },
                        height: { lg: "auto", md: "auto ", sm: "280vh", xs: "240vh" },
                        background: "#2B2D42",
                        mt: "5%",
                        mb: "5%",
                        // ml:{lg:"7%", md:"4%", sm:"4%", xs:"4%"},
                        borderRadius: "10px"

                    }}>
                        <Grid container spacing={2} >
                            <Grid item lg={2.9} md={3} sm={12} xs={12} >
                                <Typography color='white' sx={{ height: "103%", mt: { lg: "-6%", md: "-7%", sm: "-2.8%", xs: "-4%" } }}>

                                    <Button sx={{
                                        width: "100%",
                                        height: { lg: "20%", md: "20%", sm: "35%", xs: "30%" },
                                        background: "#8D99AF",
                                        borderRadius: "0px",
                                        borderRadius: { lg: "0 0 0 0 ", md: "0 0 00 0 ", sm: "10px 10px 0 0" }

                                    }}>
                                        <Typography sx={{ width: "70px", height: "50px", background: "white", padding: "20px 0 0 2px", borderRadius: "75px", ml: { lg: "-15%", md: "0%", sm: "0", xs: "0" } }}>
                                            <img src={rasm1} alt="" width='30px' />
                                        </Typography>
                                        <Typography sx={{ marginLeft: "15px", fontSize: { lg: "15px", md: "0", sm: "0 ", xs: "0" }, color: "white" }}>Apartments</Typography>
                                    </Button>

                                    <Button sx={{
                                        width: "100%",
                                        height: { lg: "20%", md: "20%", sm: "35%", xs: "30%" },
                                        background: "#8D99AF",
                                        borderRadius: "0px"
                                    }}>
                                        <Typography sx={{ width: "70px", height: "50px", background: "white", padding: "20px 0 0 2px", borderRadius: "75px", ml: { lg: "-15%", md: "-0%", sm: "0", xs: "0" } }}>
                                            <img src={rasm2} alt="" width='30px' />
                                        </Typography>
                                        <Typography sx={{ marginLeft: "15px", fontSize: { lg: "15px", md: "0", sm: "0 ", xs: "0" }, color: "white" }}>Food & Life</Typography>
                                    </Button>

                                    <Button sx={{
                                        width: "100%",
                                        height: { lg: "20%", md: "20%", sm: "35%", xs: "30%" },
                                        background: "#8D99AF",
                                        borderRadius: "0px"


                                    }}>
                                        <Typography sx={{ width: "70px", height: "50px", background: "white", padding: "20px 0 0 2px", borderRadius: "75px", ml: { lg: "-35%", md: "0%", sm: "0", xs: "0" } }}>
                                            <img src={rasm3} alt="" width='30px' />
                                        </Typography>
                                        <Typography sx={{ marginLeft: "15px", fontSize: { lg: "15px", md: "0", sm: "0 ", xs: "0" }, color: "white" }}>Cars</Typography>
                                    </Button>

                                    <Button sx={{
                                        width: "100%",
                                        height: { lg: "20%", md: "20%", sm: "35%", xs: "30%" },

                                        background: "#8D99AF",
                                        borderRadius: "0px"


                                    }}>
                                        <Typography sx={{ width: "70px", height: "50px", background: "white", padding: "20px 0 0 2px", borderRadius: "75px", ml: { lg: "-22%", md: "-0%", sm: "0", xs: "0" } }}>
                                            <img src={rasm4} alt="" width='30px' />
                                        </Typography>
                                        <Typography sx={{ marginLeft: "15px", fontSize: { lg: "15px", md: "0", sm: "0 ", xs: "0" }, color: "white" }}>Shopping</Typography>
                                    </Button>

                                    <Button sx={{
                                        width: "100%",
                                        height: { lg: "20%", md: "20%", sm: "35%", xs: "30%" },
                                        background: "#8D99AF",
                                        borderRadius: "0px"

                                    }}>
                                        <Typography sx={{ width: "70px", height: "50px", background: "white", padding: "20px 0 0 2px", borderRadius: "75px", ml: { lg: "-22%", md: "0%", sm: "0", xs: "0" } }}>
                                            <img src={rasm5} alt="" width='30px' />
                                        </Typography>
                                        <Typography sx={{ marginLeft: "15px", fontSize: { lg: "15px", md: "0", sm: "0 ", xs: "0" }, color: "white" }}>       Traveling</Typography>
                                    </Button>
                                </Typography>
                            </Grid>
                            <Grid item lg={9} md={9}>
                                <Grid container spacing={2}>
                                    <Grid item lg={5} md={5} sx={{ height: "642px", alignItems: "center", }}>


                                        <Typography textAlign="start" sx={{ mt: { lg: "26%", md: "0%", sm: "42%", xs: "72%" }, padding: { lg: "25px 0 0 50px", md: "25px 0 0 50px", sm: "25px 10px 0 50px", xs: "15px 20px 0 30px" } }} color="white" >
                                            <span style={{ fontSize: "21px", textAlign: "start", fontWeight: "700", }}>  One Of The Most Trending Stuffs Right Now!</span> <br /> <br />
                                            <span style={{ lineHeight: "2", }}>   Plot Listing is a responsive Bootstrap 5 website template that included 4 different HTML pages. This template is provided by TemplateMo website. You can apply this layout for your static or dynamic CMS websites. </span> <br /> <br />
                                            <Button sx={{
                                                width: { lg: "100%", md: "100%", sm: "93%", xs: "98%" }, background: "white", color: "Black ", "&:hover": {
                                                    color: "white",
                                                    background: "#8D99AF"
                                                },
                                            }}> <Typography sx={{
                                                width: "18px",
                                                height: "20px",
                                                background: "#8D99AF",
                                                padding: "1px 0 0 5px",
                                                borderRadius: "50px",
                                                mr: "8px"
                                            }}>



                                                    <FaEye style={{ marginRight: "15px", color: "white", fontSize: "14px " }} /></Typography>
                                            Discover More
                                        </Button>
                                        </Typography>

                                    </Grid>

                                    <Grid item lg={7} md={7} sx={{ height: "642px" }}>
                                        <Typography sx={{
                                            width: { lg: "80%", md: "70%", sm: "135%", xs: "88%" },
                                            padding: { lg: "8% 0 0 10%", },
                                            mt: { lg: "0%", md: "24%", sm: "-10%", xs: "5%" },
                                            ml: { lg: "0", md: "16%", sm: "10%", xs: "6%" }
                                        }}>

                                            <img style={{ width: "100%", borderRadius: "7px" }} src={rasm} alt="" />
                                        </Typography>
                                    </Grid>

                                </Grid>

                            </Grid>



                        </Grid>
                    </Box>


                </Box>

            </Container>

        </Box>
    )
}

export default Category