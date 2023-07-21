import './App.css';
import { Home } from "./Home";
import { Lists } from "./Lists"
import React, { useState, createContext, useEffect } from "react"
import { Login } from "./Login";
import { Register } from "./Register";
import ItemComponent from './containers/ItemComponent';
import { Switch, Route, useHistory } from "react-router-dom";
import { PostForm } from './Forum';
import { Fish } from './Fish';
import { Bugs } from './Bugs';
import { List } from './List';
import { Dashboard } from './Dashboard';
import NavBar from './NavBar/NavBar';

export const UserContext = createContext(null);

function App() {

  const [user, setUser] = useState(null);

  const [currentForm, setCurrentForm] = useState('login');

  const history = useHistory()

  useEffect(() => {
    // auto-login
    fetch("/check_session").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
    if (user) {
      history.push("/");
    }
  }, []);

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  // if (!user) return <Login setUser={setUser} />; 
  // ^^^^^^^^^^^^ if you want to require login before allowing access to the rest of the app, uncomment this line and build out the Login component
  return (
    <div className='App'>
      <UserContext.Provider value={{ user, setUser }}>
        <NavBar />
        <Switch>
        <Route path="/login" render={() => (
          currentForm === 'login' ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
          )} />
        <Route path="/lists/bugs">
          <Bugs />
        </Route>
        <Route path="/lists/fish">
          <Fish />
        </Route>
        <Route path="/lists">
          <Lists />
        </Route>
        <Route path="/list">
          <List />
        </Route>
        <Route path="/forum">
          <PostForm />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        </Switch>
      </UserContext.Provider>
    </div>
  );
}


export default App; 
