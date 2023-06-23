import React, { useEffect, useState, PureComponent } from "react";
import axios from "axios";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
const PhoneBar = () => {
  const [phones, setPhones] = useState([]);

  //   useEffect(() => {
  //     fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
  //       .then((response) => response.json())
  //       .then((data) => console.log(data));
  //   }, []);

  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const loadedPhones = data.data.data;
        const phoneData = loadedPhones.map((phone) => {
          const parts = phone.slug.split("-");
          const price = parseInt(parts[1]);
          const phoneInfo = {
            name: phone.phone_name,
            price: price,
          };
          return phoneInfo;
        });
        setPhones(phoneData);
      });
  }, []);
  return (
    <div className="mx-20">
      <h1>Phone bar chart</h1>

      <BarChart width={1000} height={500} data={phones}>
        <Bar dataKey="price" fill="#8884d8" />
        <XAxis dataKey="name" />
        <YAxis dataKey="price" />
        <Tooltip />
        <Legend />
        <Cell />
      </BarChart>
    </div>
  );
};

export default PhoneBar;
