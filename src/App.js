import './Style/App.css';
import { Route, Routes } from 'react-router-dom';

import { Header } from './Components/Header';
import { Navbar } from './Components/Navbar';
import { Reviews } from './Components/Reviews/Reviews';

function App() {
  return (
    <main className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Reviews />} />
      </Routes>
    </main>
  );
}

export default App;
