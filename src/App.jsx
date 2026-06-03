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
import Terms from "./components/Terms.jsx"
import Refund from "./components/Refund.jsx"
import Aboutus from "./components/Aboutus"
import Blogs from "./components/Blogs"
import Subscribe from "./components/Subscribe.jsx"
import Blogs_desc from "./components/Blogs_desc"
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
        <Route path="/blogs_desc/:id" element={<Blogs_desc/>}/>
        <Route path="/subscribe" element={<Subscribe/>}/>
        <Route path="/privacy" element={<Privacy/>}/>
        <Route path="/t&c" element={<Terms/>}/>
        <Route path="/rf" element={<Refund/>}/>


        </Routes>
      </BrowserRouter>

  )
}

export default App
