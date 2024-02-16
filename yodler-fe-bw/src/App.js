
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MyRoutes from './navigation/MyRoutes';
import NavBar from './navigation/NavBar';
import YodlerApi from './api/api';

function App() {

  const signup = async (userData) => {
    try {
      const newUser = await YodlerApi.request("users", userData, "post");
      console.log(newUser)
    } catch(error) {
      console.error('Signup failed', error);
    }
  };
  return (
    <div className="App">
      

      <BrowserRouter>

        <NavBar/>
        <MyRoutes signup={signup}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
