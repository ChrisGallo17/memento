import { useState } from 'react';
import { Fab, TextField, Container, Button,  } from '@mui/material';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import './App.css';
import Feed from './components/Feed';
import NavBar from './components/Navbar'
import Appbar from './components/AppBar'
import { FaLightbulb } from 'react-icons/fa'
import MyVerticallyCenteredModal from './components/IdeaModal';
import { auth } from './utils/firebase'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [modalShow, setModalShow] = useState(false);
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState({});

  const [quotes, setQuotes] = useState([
    { quote: "The quality of your life depends on the quality of your thoughts.",
      author: "Marcus Aurelius" },
    { quote: "Don't just explain your philosophy, embody it",
      author: "Epictetus" }
  ]);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        email,
        password
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
        email,
        password
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
      <NavBar login={()=>login()} logout={()=>logout()} register={()=>register()} user={user}/>

      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="/img/:id" element={<ImageView />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>

      {/* <Switch>
        <Route exactly component={Landing} pattern="/" />
        <Route exactly component={Page1} pattern="/path1" />
        <Route exactly component={Page2} pattern="/path2" />
        <Route exactly component={Page3} pattern="/path3" />
        <Route component={Page404} />
      </Switch> */}
      
      <Feed quotes={quotes}/>
      
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
          id="liEmail"
          label="Email"
          placeholder="email@gmail.com"
          className="m-2"
          onChange={(event) => { setEmail(event.target.value) }}
          />
        <TextField
          id="liPassword"
          type="password"
          className="m-2"
          onChange={(event) => { setPassword(event.target.value) }}
          label="Password"
        />

        <h4>{user?.email}</h4>
      </Container>
    </div>
  );
}

export default App;
