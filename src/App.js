import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { GithubProvider } from './context/github/GithubContext'


function App() {
  return (
    <GithubProvider>
    <Router>
      
      
    <div className="flex flex-col justify-between h-screen">
    <NavBar/>
    <main>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/*" element={<NotFound />}></Route>
    </Routes>

    </main>
    <Footer/>
    </div>


    </Router>
    </GithubProvider>
  );
}

export default App;
