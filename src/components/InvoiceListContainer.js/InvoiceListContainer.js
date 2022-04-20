import React, { useEffect, useState, useContext } from 'react'
import { SesionContext } from '../../context/SesionContext';
import { get } from '../../utils/httpClient';
import InvoiceList from '../InvoiceList/InvoiceList';


const InvoiceListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [invoices, setInvoices] = useState([]);
  const { getToken } = useContext(SesionContext)

  useEffect(() => {
    const getInvoices = async () =>{
      const token = await getToken();
      const config = {
        headers: {
          Authorization: token
      }
    }
      const response = await get('http://34.136.10.174:5005/api/bill/all?page=1&limit=15', config)
      setInvoices(response.data);
      setLoading(false);
    }
    getInvoices();
    },[])

  return (
    <>
      {loading? <h2>Cargando...</h2>:<InvoiceList invoices={invoices}/>}
    </>
  )
}

export default InvoiceListContainer
