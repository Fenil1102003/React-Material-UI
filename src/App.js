import { AppBar, Box, MenuItem, Toolbar, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FaAmazon, FaAnchor, FaAngellist, FaAppleAlt, FaFacebook, FaTwitter, FaHeart, FaShare, FaAlignJustify } from "react-icons/fa";
import Link from '@mui/material/Link';
import { FaCartShopping, FaGoogle } from "react-icons/fa6";
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { IoClose } from "react-icons/io5";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import './App.css'
import { AiOutlineStock } from "react-icons/ai";
const App = () => {
  const [test, testOne] = useState(false);
  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 200)
      );
    }
  }, []);
  
  const clickMenu = () => {
    testOne(!test)
  }

  return (
    <>

      <div className="padding_cir re">
        <AppBar component="nav" className={small ? "active" : ""}>
          <Toolbar className="d-flex justify-content-around">
            <Typography >
              Matrial Kit PRO React
            </Typography>
            {/* <Box> */}
            <MenuItem textAlign="right" className="upeer_navbar">
              <FaAmazon fontSize="11" className="marginright" />
              <Link sx={{ color: "white", mr: 2, textDecoration: "none" }} href="/">
                COMPONET
              </Link>
              <FaAnchor fontSize="11" className="marginright" />
              <Link sx={{ color: "white", mr: 2, textDecoration: "none" }} href="/">
                SECTION
              </Link>
              <FaAngellist fontSize="11" className="marginright" />
              <Link sx={{ color: "white", mr: 2, textDecoration: "none" }} href="/">
                EXAMPLE
              </Link>
              <Button className="color_grey"><FaCartShopping className="appleMargin color_grey" />BUY NOW</Button>
            </MenuItem>
            {/* </Box> */}
            {
            test ? <IoClose className="no"  onClick={clickMenu}/> : <FaAlignJustify className="no" onClick={clickMenu}/>
          }
          </Toolbar>
        </AppBar>

{
  test && 
        <List className="none abo">
          {['COMPONET', 'SECTION', 'EXAMPLE'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
}
        <div className="main_img position-relative">
          <div className="img_center_name">
            <Typography variant="h4" color="white" sx={{ ml: 3 }}>
              How We Built the Most Successful Castle Ever
            </Typography>

            <Typography color="white" >
              The last 48 hours of my life were total madness. This is what I did.
            </Typography>
            <Button variant="contained" color="error" >
              <FaAppleAlt className="appleMargin" />READ ARTICAL
            </Button>
          </div>
        </div>

        <div className="upperImg " >
          <Container maxWidth="sm" className=" upperImg_box" sx={{ paddingTop: "40px", paddingBottom: "40px" }}>
            <Box>
              <Typography className="font-14" sx={{ mb: 1, pt: 2 }} >
                The Castle Looks Different at Night...
              </Typography>
              <Typography className="font-12" sx={{ mb: 1 }}>
                This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn't scroll to get here. Add a button if you want the user to see more. We are here to make life better.
              </Typography>
              <Typography className="font-12">
                And now I look and look around and there’s so many Kanyes I've been trying to figure out the bed design for the master bedroom at our Hidden Hills compound... and thank you for turning my personal jean jacket into a couture piece.
              </Typography>

              <Card sx={{ mt: 2 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    // width="25%"

                    image="https://demos.creative-tim.com/material-kit-pro-material-ui-v4/static/media/blog4.d36b3323.jpg" />

                  <CardMedia
                    component="img"
                    height="250"
                    // width="25%"

                    image="https://demos.creative-tim.com/material-kit-pro-material-ui-v4/static/media/blog3.e8477144.jpg" />

                  <CardMedia
                    component="img"
                    height="250"
                    // width="25%"
                    image="https://demos.creative-tim.com/material-kit-pro-material-ui-v4/static/media/blog1.abedc97f.jpg" />

                </CardActionArea>
              </Card>

              <Typography sx={{ mt: 2 }}>
                Rest of the Story:
              </Typography>

              <Typography sx={{ mt: 2 }} className="font-12">
                We are here to make life better. And now I look and look around and there’s so many Kanyes I've been trying to figure out the bed design for the master bedroom at our Hidden Hills compound... and thank you for turning my personal jean jacket into a couture piece.
              </Typography>

              <Typography className="font-12">
                I speak yell scream directly at the old guard on behalf of the future. daytime All respect prayers and love to Phife’s family Thank you for so much inspiration
              </Typography>

              <Typography sx={{ mt: 2 }} className="font-12">
                Thank you Anna for the invite thank you to the whole Vogue team And I love you like Kanye loves Kanye Pand Pand Panda I've been trying to figure out the bed design for the master bedroom at our Hidden Hills compound...The Pablo pop up was almost a pop up of influence. All respect prayers and love to Phife’s family Thank you for so much inspiration daytime I love this new Ferg album! The Life of Pablo is now available for purchase I have a dream. Thank you to everybody who made The Life of Pablo the number 1 album in the world! I'm so proud of the nr #1 song in the country. Panda! Good music 2016!
              </Typography>

              <Typography sx={{ mt: 2 }} className="font-12"  >
                I love this new Ferg album! The Life of Pablo is now available for purchase I have a dream. Thank you to everybody who made The Life of Pablo the number 1 album in the world! I'm so proud of the nr #1 song in the country. Panda! Good music 2016!
              </Typography>


              <Stack direction="row" spacing={0.3} sx={{ mt: 4 }}>
                <div className="tags_name_left">
                  <Typography className="font-12 line_hight" >Thags:</Typography>
                  <Chip label="PHOTOGRAPHY" variant="contained" />
                  <Chip label="STORIES" variant="contained" />
                  <Chip label="CASTLE" variant="contained" />
                </div>
                <div className="tags_name_right">

                  <Chip icon={<FaFacebook className="icon" />} label="872" variant="contained" className="icon_facebook" />
                  <Chip icon={<FaTwitter className="icon" />} label="910" variant="contained" className="icon_twitter" />
                  <Chip icon={<FaGoogle className="icon" />} label="232" variant="contained" className="icon_google" />
                </div>
              </Stack>

              <Divider component="" sx={{ mt: 1 }} />
              <Stack direction="row" spacing={2} className="posi" sx={{ mt: 2 }}>
                <Avatar alt="Remy Sharp" src="https://demos.creative-tim.com/material-kit-pro-material-ui-v4/static/media/card-profile1-square.78a01818.jpg" className="avtar_width"
                />
                <Stack direction="column" spacing={2} paddingRight="100px">
                  <Typography className="font-12_color_dark" >Alec Thompson</Typography>
                  <Typography className="font-10_color_grey">I've been trying to figure out the bed design for the master bedroom at our Hidden Hills compound...I like good music from Youtube.</Typography>
                </Stack>
                <Button variant="contained" className="po_ab">FOLLOW</Button>
              </Stack>

              <Typography sx={{ mt: 7, textAlign: "center", fontWeight: "600", color: "#3C4858" }}>
                3 Comments
              </Typography>

              <Stack direction="row" spacing={2} className="posi" sx={{ mt: 2 }}>
                <Avatar alt="Remy Sharp" src="https://demos.creative-tim.com/material-kit-pro-material-ui-v4/static/media/card-profile4-square.368a64e8.jpg" className="avtar_width"
                />
                <Stack direction="column" spacing={2} paddingRight="70px">
                  <Stack direction="row" spacing={2} >

                    <Typography className="font-12_color_dark" > Tina Andrew·</Typography>
                    <Typography className="font-10_color_grey margin-0" > 7 minutes ago</Typography>
                  </Stack>

                  <Typography className="font-10_color_grey">Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!</Typography>
                </Stack>
              </Stack>
              <Tooltip>
                <Button className="color_red"><FaHeart />243</Button>
              </Tooltip>
              <Tooltip title="Reply to comment" placement="top">
                <Button className="purpul"><FaShare />Reaply</Button>
              </Tooltip>

              <Stack direction="row" spacing={2} className="posi" sx={{ mt: 2 }}>
                <Avatar alt="Remy Sharp" src="https://demos.creative-tim.com/material-kit-pro-material-ui-v4/static/media/card-profile1-square.78a01818.jpg" className="avtar_width"
                />
                <Stack direction="column" spacing={2} paddingRight="70px">
                  <Stack direction="row" spacing={2} >

                    <Typography className="font-12_color_dark" > John Camber </Typography>
                    <Typography className="font-10_color_grey margin-0">  yesterday</Typography>
                  </Stack>

                  <Typography className="font-10_color_grey">Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news.
                  </Typography>
                  <Typography className="font-10_color_grey">Don't forget, You're Awesome!
                  </Typography>
                </Stack>
              </Stack>
              <Tooltip>
                <Button className="color_red"><FaHeart />25</Button>
              </Tooltip>
              <Tooltip title="Reply to comment" placement="top">
                <Button className="purpul"><FaShare />Reaply</Button>
              </Tooltip>


              <Stack direction="row" spacing={2} className="posi" sx={{ mt: 2 }} paddingLeft="70px" paddingRight="10px">
                <Avatar alt="Remy Sharp" src="https://demos.creative-tim.com/material-kit-pro-material-ui-v4/static/media/card-profile4-square.368a64e8.jpg" className="avtar_width"
                />
                <Stack direction="column" spacing={2} paddingRight="70px">
                  <Stack direction="row" spacing={2} >

                    <Typography className="font-12_color_dark" > Tina Andrew </Typography>
                    <Typography className="font-10_color_grey margin-0">  12 Hours Ago</Typography>
                  </Stack>

                  <Typography className="font-10_color_grey">Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news.
                  </Typography>
                  <Typography className="font-10_color_grey">Don't forget, You're Awesome!
                  </Typography>
                </Stack>
              </Stack>
              <Tooltip title="Reply to comment" placement="top">
                <Button className="purpul marginright_450" ><FaShare />Reaply</Button>
              </Tooltip>
              {/* <Tooltip title="Reply to comment" placement="top">
                      <Button className="purpul">Reaply</Button>
                  </Tooltip>   */}
              <Typography sx={{ fontWeight: "700", color: "#3C4858", textAlign: "center", mt: 4 }} >Post your comment</Typography>

              <Stack direction="row" spacing={2} >
                <Avatar alt="Remy Sharp" src="https://demos.creative-tim.com/material-kit-pro-material-ui-v4/static/media/card-profile6-square.9f286150.jpg" className="avtar_width" />
                <TextField
                  id="standard-multiline-flexible"
                  label="Write some nice stuff or nothing..."
                  multiline
                  maxRows={20}
                  variant="standard"
                />
              </Stack>

              <Button sx={{ background: "primary  " }}>POST COMMENT</Button>
            </Box>
          </Container>



        </div>
        <Container maxWidth="md" className="d-flex">
          <Card sx={{ maxWidth: 220 }} className="img_posi">
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              className="width_90"
              image="https://images.pexels.com/photos/459203/pexels-photo-459203.jpeg?auto=compress&cs=tinysrgb&w=800"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                ENTERPRISE
              </Typography>
              <Typography variant="body1" color="text.dark">
                Autodesk looks to future of 3D printing with Project Escher
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses.
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ maxWidth: 220 }} className="img_posi">
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              className="width_90"
              image="https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=800"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" className="green">
                STARTUPS
              </Typography>
              <Typography variant="body1" color="text.dark">
                Lyft launching cross-platform service this week
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses.
              </Typography>
            </CardContent>

          </Card>

          <Card sx={{ maxWidth: 220 }} className="img_posi">
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              className="width_90"
              image="https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=800"
            />
            <CardContent>

              <Typography gutterBottom variant="h5" component="div" className="red">
                <AiOutlineStock className="iconFont-12" />ENTERPRISE
              </Typography>
              <Typography variant="body1" color="text.dark">
                6 insights into the French Fashion landscape
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses.
              </Typography>
            </CardContent>

          </Card>


        </Container>
        {/* <Container maxWidth="md" > */}

        <AppBar component="nav" className="bg_red">
          <Toolbar className="d-flex justify-content-around">
            <MenuItem textAlign="right" >
              <Link sx={{ color: "white", mr: 2, textDecoration: "none" }} href="/" className="font-6">
                CREATIVE TIM
              </Link>
              <Link sx={{ color: "white", mr: 2, textDecoration: "none" }} href="/" className="font-6">
                ABOUT US
              </Link>
              <Link sx={{ color: "white", mr: 2, textDecoration: "none" }} href="/" className="font-6">
                BLOG
              </Link>
              <Link sx={{ color: "white", mr: 2, textDecoration: "none" }} href="/" className="font-6">
                LICENSES
              </Link>

            </MenuItem>
            <Typography className="font-10">© 2024 , made with  by ❤️Creative Tim for a better web.</Typography>
          </Toolbar>
        </AppBar>
        {/* </Container> */}

      </div>

    </>
  );
}

export default App;