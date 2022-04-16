import { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import './App.css';
import Feed from './components/Feed';
import NavBar from './components/Navbar'
import MyVerticallyCenteredModal from './components/IdeaModal';
import { auth } from './utils/firebase'
import { useLocation, Routes, Route } from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import { db } from './utils/firebase';

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

  let location = useLocation();
  
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

      if (user.user.uid){
        debugger
        // Add user to realtime db
        db.ref("users/" + user.user.uid ).set({
          email : user.user.email
        }).catch(alert);
        console.log("Added " + user.user.email + " to DB")
      } else {
        console.log("ERROR: Failed to add user to DB")
      }
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
      <NavBar 
        login={()=>login()} 
        logout={()=>logout()} 
        register={()=>register()} 
        user={user} 
        location={location}
      />

      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="feed" element={<Feed quotes={quotes} user={user} setModalShow={setModalShow}/>} />
        <Route path="login" element={
          <Login login={()=>login()} setEmail={setEmail} setPassword={setPassword} user={user}/>
        }/>
        <Route path="register" element={
          <Register register={()=>register()} setEmail={setEmail} setPassword={setPassword} user={user}/>
        }/>
      </Routes>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        quotes={quotes}
        // setQuotes={setQuotes}
        user={user}
      />
    </div>
  );
}

export default App;
