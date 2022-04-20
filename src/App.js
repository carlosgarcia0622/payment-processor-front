import { BrowserRouter } from 'react-router-dom';
import './App.css';
import InvoiceForm from './components/InvoiceForm/InvoiceForm';
import InvoiceListContainer from './components/InvoiceListContainer.js/InvoiceListContainer';
import Navbar from './components/navbar/Navbar';
import {  Routes, Route } from "react-router-dom";
import Invoice from './components/Invoice/Invoice';
import { SesionProvider } from './context/SesionContext';
import Home from './components/home/Home';


function App() {
  return (
    <SesionProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/invoice/form" element={<InvoiceForm/>} />
            <Route path="/invoice/list" element={<InvoiceListContainer/>} />
            <Route path="/invoice/:billId" element={<Invoice/>} />
        </Routes>
      </BrowserRouter>
    </SesionProvider>
  );
}

export default App;
