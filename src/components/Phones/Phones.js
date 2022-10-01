import axios from "axios";
import React, { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

const Phones = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    // ** load data using axios
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((phones) => {
        const phonesData = phones.data.data;
        const myPhones = phonesData.map((phone) => {
          const { slug, phone_name } = phone;
          const price = +slug.split("-")[1];
          const singLePhone = {
            name: phone_name,
            price: price,
          };
          return singLePhone;
        });
        setPhones(myPhones);
      });
  }, []);

  console.log(phones);

  return (
    <BarChart width={500} height={200} data={phones}>
      <CartesianGrid strokeDasharray="3 3" />
      <Bar dataKey="price" color="black" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip></Tooltip>
    </BarChart>
  );
};

export default Phones;
