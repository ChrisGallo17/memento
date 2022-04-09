import { useState } from 'react';
import { Fab } from '@mui/material';
import { Lightbulb } from '@mui/icons-material';
import './App.css';
import Feed from './components/Feed';
import NavBar from './components/Navbar'
import { FaLightbulb } from 'react-icons/fa'
import JotIdea from './components/JotIdea';
import MyVerticallyCenteredModal from './components/IdeaModal';
// import { LightbulbFill } from "react-bootstrap-icons";

function App() {
  const [showModal, setShowModal] = useState(false);

  const [quotes, setQuotes] = useState([
    "The quality of your life depends on the quality of your thoughts.",
    "Don't just explain your philosophy, embody it"
  ])

  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="App">
      <NavBar />
      <Feed quotes={quotes}/>
      {/* <Fab className='FixedButton' color="primary" onClick={() => setShowModal(true)}>
        <FaLightbulb style={{'height': '1.5rem'}} />
      </Fab> */}
      <Fab className='FixedButton' color="primary" onClick={() => setModalShow(true)}>
        <FaLightbulb style={{'height': '1.5rem'}} />
      </Fab>
      <JotIdea 
        show={showModal}
        onHide={() => setShowModal(false)}
      />
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        quotes={quotes}
        setQuotes={setQuotes}
      />
    </div>
  );
}

export default App;
