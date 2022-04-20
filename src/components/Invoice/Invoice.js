import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router'
import { get } from '../../utils/httpClient'
import Moment from 'moment';
import "./Invoice.style.css"
import { SesionContext } from '../../context/SesionContext';



const Invoice = () => {

    const [loading, setLoading] = useState(true)
    const [invoice, setInvoice] = useState({})
    const { getToken } = useContext(SesionContext)

    const { billId } = useParams()

    useEffect(() => {
        const getInvoice = async () =>{

            const token = await getToken();
            console.log(token)
            const config = {
                headers: {
                Authorization: token
            }
            }
            const response = await get(`http://34.136.10.174:5005/api/bill/detail?billId=${billId}`, config)
            console.log(response)
            setInvoice(response);
            setLoading(false);
        }
        getInvoice();
        setLoading(false)
        },[])

  return (
     <>
        {
            loading? <h2>Cargando...</h2>:
            <div className="detail-container">
            <div className="column">
            <div className="detail-prop"></div>
            <div className="detail-prop">
                <div className="key">ID:</div>
                <div className="value">{invoice.billId}</div>
            </div>
            <div className="detail-prop">
                <div className="key">address:</div>
                <div className="value">{invoice.address}</div>
            </div>
            <div className="detail-prop">
                <div className="key">Valor en dólares:</div>
                <div className="value">{invoice.usdValue}</div>
            </div>
            <div className="detail-prop">
                <div className="key">Moneda: </div>
                <div className="value">{invoice.coinSymbol}</div>
            </div>
            <div className="detail-prop">
                <div className="key">Valor:</div>
                <div className="value">{invoice.value}</div>
            </div>
            </div>
            <div className="column"
            >
                            <div className="detail-prop"></div>
            <div className="detail-prop">
                <div className="key">Estado:</div>
                <div className="value">{invoice.status}</div>
            </div>
            <div className="detail-prop">
                <div className="key">Id Externo:</div>
                <div className="value">{invoice.externalTxId}</div>
            </div>
            <div className="detail-prop">
                <div className="key">TRM:</div>
                <div className="value">{invoice.trm}</div>
            </div>
            <div className="detail-prop">
                <div className="key">Fecha de creación:</div>
                <div className="value">{Moment(invoice.time).format('d MMM, h:mm')}</div>
            </div>
            <div className="detail-prop">
                <div className="key">Fecha de vencimiento:</div>
                <div className="value">{Moment(invoice.expires).format('d MMM, h:mm')}</div>
            </div>
            </div>
          </div>
        }
     </>
)
  
}

export default Invoice