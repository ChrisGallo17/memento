import { Card, Row, Col } from "react-bootstrap"
import { MoreVert, ArrowBackIos, ArrowForwardIos, FavoriteBorder, AddCircleOutline, Favorite } from "@mui/icons-material";
import { IconButton, MobileStepper, Button, Stack } from "@mui/material";
import { useState } from "react";

export default function QuoteV2 () {
  const [activeStep, setActiveStep] = useState(0);
  const [heart, setHeart] = useState(false);
  const quotes = {
    0 : { quote : "This is the first quote in the list" },
    1 : { quote : "The seccond quote has key = 2" },
    2 : { quote : "3rd time's a charm" }
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
    <Card className="mt-4">
      <Card.Header as="h5">
        Dr. Seuss
        <IconButton variant="text" size="small" align="right" className="p-0 float-end"><MoreVert /></IconButton>
      </Card.Header>

      <Card.Body align='left' className="p-0">

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          className="p-3 m-0"
          spacing={2}>
          <IconButton onClick={handleBack}>
            <ArrowBackIos color="primary"/>
          </IconButton> 
          <Card.Text align="center">
            {quotes[activeStep].quote}
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
              <IconButton >
                <AddCircleOutline />
              </IconButton> 
            </div>
            <div>
              Username or April 26
            </div>
        </Stack>
      </Card.Footer>
    </Card>
  )
}