import React from "react";
import { Row } from "react-bootstrap";
import Card from "../components/Card/Card";
import axios from "axios";

export default function Orders() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [orders, setOrders] = React.useState([]);

  React.useEffect(() => {
    try {
      async function fetchOrders() {
        const { data } = await axios.get(
          "https://615fd603f7254d001706822a.mockapi.io/orders"
        );
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      }
      fetchOrders();
    } catch (error) {
      alert("Ошибка при запросе заказов");
    }
  }, []);
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between">
        <h1>Мои покупки</h1>
      </div>
      <Row className="justify-cotent-start">
        {(isLoading ? [...Array(12)] : orders).map((order, idx) => (
          <Card {...order} key={idx} loading={isLoading} />
        ))}
      </Row>
    </div>
  );
}
