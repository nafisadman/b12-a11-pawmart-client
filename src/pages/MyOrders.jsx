import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import useTitle from "../hooks/useTitle";
import { jsPDF } from "jspdf";
import { AuthContext } from "../provider/AuthProvider";

const MyOrders = () => {
  useTitle("My Orders");
  const { user } = useContext(AuthContext);
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    axios
      .get(`https://b12-a11-pawmart-server.vercel.app/orders?email=${user?.email}`)
      .then((res) => {
        setMyOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(myOrders);

  const handleDownloadPDF = () => {
    const doc = new jsPDF({orientation: "landscape"});
    // console.log(document.getElementById('my-orders-table').innerText);
    const htmlTableToText = document.getElementById('my-orders-table').innerText;
    doc.text(htmlTableToText.toLocaleString(), 10, 50)
    doc.save("My Orders.pdf");
  };

  return (
    <div>
      <div className="flex justify-between">
        My Orders
        <button className="btn btn-secondary" onClick={handleDownloadPDF}>Download PDF</button>
      </div>
      <div className="overflow-x-auto">
        <table id="my-orders-table" className="table table-xs">
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
