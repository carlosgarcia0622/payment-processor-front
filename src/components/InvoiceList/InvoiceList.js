
import React from 'react'
import Moment from 'moment';
import { styled } from '@mui/material/styles';
import "./InvoiceList.style.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { NavLink } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#1f5156',
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

const InvoiceList = ({invoices}) => {

      return (
          <div className="container" style={{margin: '0 100px 0 100px'}}>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell>ID</StyledTableCell>
                    <StyledTableCell align="right">Fecha límite de pago</StyledTableCell>
                    <StyledTableCell align="right">Fecha de Creación</StyledTableCell>
                    <StyledTableCell align="right">Dívisa</StyledTableCell>
                    <StyledTableCell align="right">Estado</StyledTableCell>
                    <StyledTableCell align="right">Detalle</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {invoices.map((row) => (
                    <StyledTableRow key={row.billId.substring(0,6)}>
                    <StyledTableCell component="th" scope="row">
                        {row.billId.substring(0,6)}
                    </StyledTableCell>
                    <StyledTableCell align="right">{Moment(row.expires).format('d MMM, h:mm')}</StyledTableCell>
                    <StyledTableCell align="right">{Moment(row.time).format('d MMM, h:mm')}</StyledTableCell>
                    <StyledTableCell align="right">{row.coinSymbol}</StyledTableCell>
                    <StyledTableCell align="right">{row.status}</StyledTableCell>
                    <StyledTableCell align="right"><NavLink to={`/invoice/${row.billId}`}>Ver detalle</NavLink></StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </div>
      );
}

export default InvoiceList