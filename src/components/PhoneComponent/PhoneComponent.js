import axios from "axios";
import React, { useEffect, useState } from "react";
import { Pie, PieChart } from "recharts";

const PhoneComponent = () => {
  // ** data loading

  const [phones, setPhones] = useState([]);

  useEffect(() => {
    // ** load data

    axios
      .get(`https://openapi.programming-hero.com/api/phones?search=iphone`)
      .then((phonesData) => {
        const {
          data: { data: phonesArray },
        } = phonesData;
        const myPhones = phonesArray.map(({ phone_name, slug }) => {
          const price = +slug.split("-")[1];
          const singlePhone = {
            name: phone_name,
            price,
          };
          return singlePhone;
        });
        setPhones(myPhones);
      });
  }, []);
  console.log(phones);
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={phones.slice(0, 7)}
        dataKey="price"
        cx="50%"
        cy="50%"
        outerRadius={60}
        fill="#8884d8"
      />
      <Pie
        data={phones.slice(8, 15)}
        dataKey="price"
        cx="50%"
        cy="50%"
        innerRadius={70}
        outerRadius={90}
        fill="#82ca9d"
        label
      />
    </PieChart>
  );
};

export default PhoneComponent;
