import './App.css';
import SiteHeader from './component/layout/Header';
import AboutPage from './pages/aboutPage';
import ErrorPage from './pages/errorPage';
import HomePage from './pages/homePage';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <SiteHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
