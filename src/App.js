import './Style/App.css';
import { Route, Routes, Link } from 'react-router-dom';
import { useContext } from 'react';
import { Header } from './Components/Header';
import { Reviews } from './Components/Reviews/Reviews';
import { IndReview } from './Components/ReviewPage/IndReview';
import { Users } from "./Components/Users/Users.jsx";
import { UserContext } from './contexts/Users';
import { LoggedIn } from './Components/Users/LoggedIn';

function App() {

  const { user } = useContext(UserContext);
  
  return (
    <main className="App">
      <Header />
      {(user.length > 0) ? <LoggedIn /> : <Link to={'/users'}>Log in</Link> }
      <Routes>
        <Route path='/' element={<Reviews />} />
        <Route path='/reviews/:review_id' element={<IndReview />} />
        <Route path='/users' element={<Users />} />
      </Routes>
    </main>
  );
}

export default App;
