import React, { useEffect, useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import Paper from "@mui/material/Paper";

import api from "../../../services/api";
import { Container, LinkMenu, Menu } from "./styles";
import Row from "./row";
import formatDate from "../../../utils/formatDate";
import status from "./order-stauts";

export function Orders() {
  const [orders, setOrders] = useState([]);
  const [filteredOders, setFilteredOders] = useState([]);
  const [activeStatus, setActiveStatus] = useState(1);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get("orders");

      setOrders(data);
      setFilteredOders(data);
    }

    loadOrders();
  }, []);

  function createData(order) {
    return {
      name: order.user.name,
      orderId: order._id,
      date: formatDate(order.createdAt),
      status: order.status,
      products: order.products,
    };
  }

  useEffect(() => {
    const newRows = filteredOders.map((ord) => createData(ord));
    setRows(newRows);
  }, [filteredOders]);

  useEffect(() => {
    if (activeStatus === 1) {
      setFilteredOders(orders);
    } else {
      const statusIndex = status.findIndex((sts) => sts.id === activeStatus);
      const newFilteredOrders = orders.filter(
        (order) => order.status === status[statusIndex].value
      );
      setFilteredOders(newFilteredOrders);
    }
  }, [orders]);

  function handleStatus(status) {
    if (status.id === 1) {
      setFilteredOders(orders);
    } else {
      const newOrders = orders.filter((order) => order.status === status.value);
      setFilteredOders(newOrders);
    }
    setActiveStatus(status.id);
  }

  return (
    <Container>
      <Menu>
        {status &&
          status.map((status) => (
            <LinkMenu
              key={status.id}
              onClick={() => handleStatus(status)}
              isActiveStatus={activeStatus === status.id}
            >
              {status.label}
            </LinkMenu>
          ))}
      </Menu>

      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Pedido</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Data do pedido</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row
                key={row.orderId}
                row={row}
                setOrders={setOrders}
                orders={orders}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default Orders;
