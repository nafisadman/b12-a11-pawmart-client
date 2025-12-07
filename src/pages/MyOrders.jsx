import axios from "axios";
import React, { useEffect, useState } from "react";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    axios
      .get(`https://b12-a11-pawmart-server.vercel.app/orders`)
      .then((res) => {
        setMyOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(myOrders);

  return (
    <div>
      My Orders
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {myOrders.map((myOrder, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{myOrder?.productName}</td>
                <td>{myOrder?.price}</td>
                <td>{myOrder?.quantity}</td>
                <td>{myOrder?.phoneNumber}</td>
                <td>{myOrder?.address}</td>
                <td>
                  {myOrder?.date
                    ? new Date(myOrder.date).toLocaleString("en-US", {
                        year: "numeric",
                        month: "short", 
                        day: "numeric", 
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric",
                        hour12: true, 
                      })
                    : ""}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
