import './App.css'
import Navbar from './components/Navbar'
import Page from './components/Page'
import Table from './components/Table'
import Program from './components/Program'
import Footer from './components/Footer'
import Feature from "./components/Feature";
import AjanmApp from "./components/AjanmApp"
import AjanmProgram from "./components/AjanmProgram"
import Privacy from "./components/Privacy.jsx"
import Aboutus from "./components/Aboutus"
import Blogs from "./components/Blogs"
import Subscribe from "./components/Subscribe.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
   
    <BrowserRouter>
    <Routes>
        <Route path="/" element={
          <>
          <Navbar />
      <Page />
      <Table />
      <Program />
      <Footer />
      
          </>
        } />

        <Route path="/features" element={<Feature/>}/>
        <Route path="/ajanmapp" element={<AjanmApp/>}/>
        <Route path="/ajanmprogram" element={<AjanmProgram/>}/>
        <Route path="/aboutus" element={<Aboutus/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/subscribe" element={<Subscribe/>}/>
        <Route path="/privacy" element={<Privacy/>}/>


        </Routes>
      </BrowserRouter>

  )
}

export default App
