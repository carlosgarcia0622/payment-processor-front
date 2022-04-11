import React, { useEffect, useState } from 'react'
import { get } from '../../utils/httpClient';
import InvoiceList from '../InvoiceList/InvoiceList';


const InvoiceListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    const getInvoices = async () =>{
      const config = {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRldkB1ZGVhLmVkdS5jbyIsImlkIjoiYTRjZWJmMWEtNTY2YS00NTc4LWE3NjYtNjViN2EzNTQ5ODQwMSIsInJvbGUiOiIxMjExMTg4Zi1jNTdmLTRlMTgtODFkMC1iYzM5M2FlMGRiMzkiLCJjb21wYW55SWQiOiI2NTdjYjczMy1kYjg0LTRlNDYtOGEzNi1hNGFmYTRjOGExMTUiLCJpYXQiOjE2NDk0NzgxNTAsImV4cCI6MTY0OTQ4ODk1MH0.e5xO3ZobnkSSM1Lvg_2iGpsZtaKnuYlWIbMCCVXFKoI"
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
