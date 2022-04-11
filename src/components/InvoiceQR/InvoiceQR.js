import React from 'react'
import QRCode from 'react-qr-code'
import './Invoice.style.css'

const InvoiceQR = ({query}) => {

  return (
    <div className="qr-container">
      <div className="invoice-price">
      <img src="https://img.icons8.com/windows/32/26e07f/clone-figure.png"/>
        <h3>0.002303 BTC</h3>
      </div>
        
        <div >
            <QRCode align="center" title="QR TITLE" fgColor="#1f5156" value={query}></QRCode>
        </div>        
    </div>
  )
}

export default InvoiceQR