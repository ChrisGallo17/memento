import { Card, Row, Col } from "react-bootstrap"
import { MoreVert, ArrowBackIos, ArrowForwardIos, FavoriteBorder, AddCircleOutline, Favorite, Person, MenuBook, Lightbulb, Edit, AddCircle } from "@mui/icons-material";
// import { SpeedDialIcon } from "@mui/icons-material/SpeedDial";
import { IconButton, MobileStepper, Button, Stack, Box, SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import { useState } from "react";

export default function QuoteV2 ({setModalShow}) {
  const [activeStep, setActiveStep] = useState(0);
  const [heart, setHeart] = useState(false);
  const [add, setAdd] = useState(false);
  const quotes = {
    0 : { quote : '"The happiness of your life depends upon the quality of your thoughts."' },
    1 : { quote : '"You have power over your mind - not outside events. Realize this, and you will find strength."' },
    2 : { quote : '"Waste no more time arguing about what a good man should be. Be one."' }
  }
  const numberOfQuotes = Object.keys(quotes).length;

  const handleNext = () => {
    if (activeStep + 1 === numberOfQuotes) {
      setActiveStep(0);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };
  
  const handleBack = () => {
    if (activeStep === 0) {
      setActiveStep(numberOfQuotes - 1);
    } else {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  return (
    <>
      <Card className="mt-4">
        <Card.Header as="h5">
          <MenuBook className="me-3"/>
          Meditations
          <IconButton variant="text" size="small" align="right" className="p-0 float-end"><MoreVert /></IconButton>
        </Card.Header>

        <Card.Body className="p-0">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            className="p-2 pt-3 m-0"
            spacing={2}>
            <IconButton onClick={handleBack} alignItems="center">
              <ArrowBackIos color="primary"/>
            </IconButton> 
            <Card.Text align="center" key={activeStep}>
              <h6>
                {quotes[activeStep].quote}
              </h6>
              <div className="float-end">
                - Marcus Aurelius
              </div>
            </Card.Text>
            <IconButton onClick={handleNext}>
              <ArrowForwardIos color="primary"/>
            </IconButton> 
          </Stack>
          
          <MobileStepper
            className="pb-2"
            variant="dots"
            steps={numberOfQuotes}
            position="static"
            activeStep={activeStep}
            sx={{ flexGrow: 1 }}
            style={{justifyContent: "center"}}
          />
        </Card.Body>

        <Card.Footer className="p-0 ps-2 pe-3">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            className="p-0"
            spacing={2}>
              <div>
                <IconButton size="small" onClick={() => setHeart(!heart)}>
                  { heart ? <Favorite color="error" /> : <FavoriteBorder />}
                </IconButton> 
                <IconButton size="small" onClick={() => setAdd(!add)} >
                  { add ? <AddCircle color="primary" /> : <AddCircleOutline />}
                </IconButton> 
              </div>
              <div>
                April 26, 2022
              </div>
          </Stack>
        </Card.Footer>
      </Card>

      <Card className="mt-4">
        <Card.Header as="h5" style={{fontWeight: 400}}>
          Dr. Seuss
          <IconButton variant="text" size="small" align="right" className="p-0 float-end"><MoreVert /></IconButton>
          <Person className="me-2 GreyIcon float-end"/>
        </Card.Header>
        <Card.Body align='left' className="p-3">
          <Card.Text align="center">
            <h6>
              Sam I am, I like green eggs and ham
            </h6>
          </Card.Text>
        </Card.Body>

        <Card.Footer className="p-0 ps-2 pe-3">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            className="p-0"
            spacing={2}>
              <div>
                <IconButton size="small" onClick={() => setHeart(!heart)}>
                  { heart ? <Favorite color="error" /> : <FavoriteBorder />}
                </IconButton> 
                <IconButton size="small" onClick={() => setAdd(!add)} >
                  { add ? <AddCircle color="primary" /> : <AddCircleOutline />}
                </IconButton> 
              </div>
              <div>
                c@google.com
              </div>
          </Stack>
        </Card.Footer>
      </Card>

      <Card className="mt-4">
        <Card.Header as="h5">
          Chris Gallo
          <IconButton variant="text" size="small" align="right" className="p-0 float-end"><MoreVert /></IconButton>
          <Lightbulb className="GreyIcon float-end me-2 ps-1"/>
        </Card.Header>
        <Card.Body align='left' className="p-3">
          <Card.Text align="center" style={{fontWeight: 500}}>
            Awareness is freedom
          </Card.Text>
        </Card.Body>

        <Card.Footer className="p-0 ps-2 pe-3">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            className="p-0"
            spacing={2}>
              <div>
                <IconButton size="small" onClick={() => setHeart(!heart)}>
                  { heart ? <Favorite color="error" /> : <FavoriteBorder />}
                </IconButton> 
                <IconButton size="small" onClick={() => setAdd(!add)} >
                  { add ? <AddCircle color="primary" /> : <AddCircleOutline />}
                </IconButton> 
              </div>
              <div>
                ChrisG11
              </div>
          </Stack>
        </Card.Footer>
      </Card>

      <Card className="mt-4">
        <Card.Body align='left' className="p-3">
          <Card.Text>
            <div style={{fontWeight: 500}}>
              "Awareness is freedom"
            </div>
            <div className="float-end">
              - Chris Gallo
            </div>
          </Card.Text>
        </Card.Body>

        <Card.Footer className="p-0 ps-2 pe-2">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            className="p-0"
            spacing={2}>
              <div>
                <Lightbulb className="GreyIcon me-2 ps-1"/>
                ChrisG11
              </div>
              <div>
                <IconButton size="small" onClick={() => setHeart(!heart)}>
                  { heart ? <Favorite color="error" /> : <FavoriteBorder />}
                </IconButton> 
                <IconButton size="small" onClick={() => setAdd(!add)} >
                  { add ? <AddCircle color="primary" /> : <AddCircleOutline />}
                </IconButton> 
                <IconButton size="small" >
                  <MoreVert />
                </IconButton>
              </div>
          </Stack>
        </Card.Footer>
      </Card>

      {/* <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}> */}
        <SpeedDial
          ariaLabel="SpeedDial openIcon example"
          sx={{ position: 'absolute', bottom: 16, right: 16 }}
          icon={<SpeedDialIcon openIcon={<Edit />} />}
        >
          <SpeedDialAction
            key="quote"
            icon={<Person/>}
            tooltipTitle="Quote from author"
          />
          <SpeedDialAction
            key="idea"
            icon={<Lightbulb/>}
            tooltipTitle="Idea"
            onClick={() => setModalShow(true)}
          />
          <SpeedDialAction
            key="book"
            icon={<MenuBook/>}
            tooltipTitle="Book notes"
          />
        </SpeedDial>
      {/* </Box> */}
    </>
  )
}