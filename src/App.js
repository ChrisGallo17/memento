import { useState } from 'react';
import { Fab, TextField, Container, Button,  } from '@mui/material';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import './App.css';
import Feed from './components/Feed';
import NavBar from './components/Navbar'
import { FaLightbulb } from 'react-icons/fa'
import MyVerticallyCenteredModal from './components/IdeaModal';
import { auth} from './utils/firebase'

function App() {
  const [modalShow, setModalShow] = useState(false);
  const [quotes, setQuotes] = useState([
    { quote: "The quality of your life depends on the quality of your thoughts.",
      author: "Marcus Aurelius" },
    { quote: "Don't just explain your philosophy, embody it",
      author: "Epictetus" }
  ]);

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

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
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        quotes={quotes}
        setQuotes={setQuotes}
      />
      
      <Container className='mt-3'>
        <TextField
          id="suEmail"
          label="Email"
          placeholder="email@gmail.com"
          className="m-2"
          onChange={(event) => { setRegisterEmail(event.target.value) }}
        />
        <TextField
          id="suPassword"
          type="password"
          className="m-2"
          onChange={(event) => { setRegisterPassword(event.target.value) }}
          label="Password"
        />
        <Button variant="contained" onClick={register} className="m-3">Register</Button>
      </Container>

      <Container className='mt-3'>
        <TextField
          id="liEmail"
          label="Email"
          placeholder="email@gmail.com"
          className="m-2"
          onChange={(event) => { setLoginEmail(event.target.value) }}
          />
        <TextField
          id="liPassword"
          type="password"
          className="m-2"
          onChange={(event) => { setLoginPassword(event.target.value) }}
          label="Password"
        />
        <Button variant="contained" onClick={login} className="m-3">Login</Button>
        <Button variant="contained" onClick={logout} className="m-3">Logout</Button>
        <h4>{user?.email}</h4>
      </Container>
    </div>
  );
}

export default App;
