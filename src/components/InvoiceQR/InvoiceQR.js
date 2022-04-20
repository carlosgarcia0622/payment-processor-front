import React from 'react'
import QRCode from 'react-qr-code'
import './Invoice.style.css'

const InvoiceQR = ({query, invoice}) => {
  console.log(invoice)
  return (
    <div className="qr-container">
      <div className="invoice-price">
        <img 
          onClick={() => {navigator.clipboard.writeText(invoice.address)}} 
          src="https://img.icons8.com/windows/32/26e07f/clone-figure.png"
        />
        <h3>{`${invoice.value} ${invoice.coinSymbol}`}</h3>
      </div>
        
        <div >
            <QRCode align="center" title="QR TITLE" fgColor="#1f5156" value={query}></QRCode>
        </div>  
        <div style={{marginTop: '15px',inlineSize: '260px', overflowWrap: 'break-word'}}>
          {invoice.address}
          </div>

    </div>
  )
}

export default InvoiceQR