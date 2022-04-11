import React, { useState } from 'react'
import "./InvoiceForm.style.css"
import Select from 'react-select';
import { post } from '../../utils/httpClient';
import InvoiceQR from '../InvoiceQR/InvoiceQR';

const InvoiceForm = () => {

    const [isInvoiceCreated, setIsInvoiceCreated] = useState(false);
    const [invoice, setInvoice] = useState({
        companyId: "657cb733-db84-4e46-8a36-a4afa4c8a115",
        customerUserid: "test-udea-customer-id"
      });
    const [qrString, setQrString] = useState('');
    

    const handleSubmit = async (e) => {
        e.preventDefault();  
        const response = await post('http://34.136.10.174:5005/api/bill', 
            invoice, {
            headers: {"x-api-key": "123"}
          })
        const coin = response.coinSymbol === 'BTC'?  'bitcoin':'ethereum' 
        setQrString(`${coin}:${response.address}?amount=${response.value}`);
        setIsInvoiceCreated(true);

    }

    const onChange = (e) => {
        const value = e.target.type === 'number'? parseFloat(e.target.value) : e.target.value
        setInvoice({
            ...invoice,
            [e.target.name]: value
        })
    }

    const options = [
        { value: 'BTC', label: 'Bitcoin' },
        { value: 'ETH', label: 'Ethereum' }
      ]

      const customStyles = {
        control: (provided) => {
          return {
            ...provided,
            marginTop: '8px',
            borderColor: 'black'
          }
        },
    }

  return (
    <div className="container">
        {isInvoiceCreated? <InvoiceQR query={qrString}></InvoiceQR>
        : <div className="card">
            <form className='form'>
                <h1>Crear Factura</h1>
                <div >
                    <input className='text-input'
                    placeholder= 'Nombre del usuario'
                        type='text'
                        id='customerUsername'
                        name='customerUsername'
                        onChange={onChange}
                    />
                </div>
                <div>
                    <input className='text-input'
                        placeholder='Valor en USD'
                        type='number'
                        id='usdValue'
                        name='usdValue'
                        onChange={onChange}
                    />
                </div>
                        <Select className="salect"
                        styles={customStyles}
                        options={options}
                        onChange={(e) => setInvoice({...invoice, coinSymbol: e.value})}> 
                        </Select>
                <div >
                    <input className='text-input'
                        placeholder='Identificador de la factura'
                        type='text'
                        id='externalTxId'
                        name='externalTxId'
                        onChange={onChange}
                    />
                </div>
                <button className="btn" type='submit' onClick={handleSubmit}>Crear factura</button>
            </form>
        </div>}
    </div>
  )
}

export default InvoiceForm