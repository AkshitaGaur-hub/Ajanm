import './App.css'
import Navbar from './components/Navbar'
import Page from './components/Page'
import Table from './components/Table'
import Program from './components/Program'
import Footer from './components/Footer'
import Feature from "./components/Feature";
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
        </Routes>
      </BrowserRouter>

  )
}

export default App
