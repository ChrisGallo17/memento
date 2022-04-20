import { Container } from "react-bootstrap";
import { useState } from "react";
import { db } from "../utils/firebase";
import { Fab } from "@mui/material";
import { FaLightbulb } from 'react-icons/fa'
import Quote from "./Quote";
import { useNavigate } from "react-router";

export default function Feed (props) {
  const { user, setModalShow } = props;
  let navigate = useNavigate();
  
  const [feed, setFeed] = useState(null)
  
  const pullFeed = () => {
    if (user) {
      var userRef = db.ref("users/" + user.uid + "/quotes");
      
      userRef.on('value', function(snapshot) {
        var newQuotes = []
        snapshot.forEach(function(childSnapshot) {
          var snapshotId = childSnapshot.key
          var childData = childSnapshot.val();
          childData.key = snapshotId
          newQuotes.push(childData)
        });
        setFeed(newQuotes)
      });
    } else {
      return null
    }
  }

  if (!feed) { pullFeed() }

  if (!user) { // User is not logged in
    // Prompt user to sign in or register
    navigate("../login")
    return <div>Sign in or Register</div>
  } else {
    if (feed) {
      if (feed.length > 0) {
        return(
          <Container className='mt-4'>
            {feed && feed.map((quote) =>
              <Quote quote={quote} user={user}/>
            )}

            <Fab className='FixedButton' color="primary" onClick={() => setModalShow(true)}>
              <FaLightbulb style={{'height': '1.5rem'}} />
            </Fab>
          </Container>
        )
      }
    }
    return (
      <Container className='mt-4'>
        Create a quote
        <Fab className='FixedButton' color="primary" onClick={() => setModalShow(true)}>
          <FaLightbulb style={{'height': '1.5rem'}} />
        </Fab>
      </Container>
    )
  }
}