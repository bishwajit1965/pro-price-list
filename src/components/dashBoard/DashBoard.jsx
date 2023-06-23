import React, { useEffect, useState } from "react";
import {
  PieChart,
  LineChart,
  Line,
  Pie,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const DashBoard = () => {
  // This way data is also usable
  //   const marksArray = [
  //     {
  //       id: 1,
  //       name: "John",
  //       Maths: 75,
  //       Physics: 80,
  //       Chemistry: 85,
  //       English: 70,
  //     },
  //     {
  //       id: 2,
  //       name: "Alice",
  //       Maths: 90,
  //       Physics: 75,
  //       Chemistry: 80,
  //       English: 85,
  //     },
  //     {
  //       id: 3,
  //       name: "Bob",
  //       Maths: 80,
  //       Physics: 85,
  //       Chemistry: 70,
  //       English: 90,
  //     },
  //     {
  //       id: 4,
  //       name: "Sarah",
  //       Maths: 85,
  //       Physics: 90,
  //       Chemistry: 75,
  //       English: 80,
  //     },
  //     {
  //       id: 5,
  //       name: "Michael",
  //       Maths: 75,
  //       Physics: 80,
  //       Chemistry: 85,
  //       English: 70,
  //     },
  //     {
  //       id: 6,
  //       name: "Emily",
  //       Maths: 90,
  //       Physics: 75,
  //       Chemistry: 80,
  //       English: 85,
  //     },
  //     {
  //       id: 7,
  //       name: "David",
  //       Maths: 80,
  //       Physics: 85,
  //       Chemistry: 70,
  //       English: 90,
  //     },
  //     {
  //       id: 8,
  //       name: "Olivia",
  //       Maths: 85,
  //       Physics: 90,
  //       Chemistry: 75,
  //       English: 80,
  //     },
  //     {
  //       id: 9,
  //       name: "Ethan",

  //       Maths: 70,
  //       Physics: 75,
  //       Chemistry: 80,
  //       English: 85,
  //     },
  //     {
  //       id: 10,
  //       name: "Sophia",
  //       Maths: 80,
  //       Physics: 85,
  //       Chemistry: 90,
  //       English: 75,
  //     },
  //   ];

  const data01 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const data02 = [
    { name: "A1", value: 100 },
    { name: "A2", value: 300 },
    { name: "B1", value: 100 },
    { name: "B2", value: 80 },
    { name: "B3", value: 40 },
    { name: "B4", value: 30 },
    { name: "B5", value: 50 },
    { name: "C1", value: 100 },
    { name: "C2", value: 200 },
    { name: "D1", value: 150 },
    { name: "D2", value: 50 },
  ];

  const [marks, setMarks] = useState([]);

  useEffect(() => {
    fetch("marks.json")
      .then((response) => response.json())
      .then((data) => setMarks(data));
  }, []);

  return (
    <div className="mx-20 mt-12">
      <h1>DashBoard Line chart</h1>
      <LineChart width={1100} height={500} data={marks}>
        <Line dataKey="Maths"></Line>
        <Line dataKey="English"></Line>
        <Line dataKey="Chemistry"></Line>
        <XAxis dataKey="name" />
        <YAxis></YAxis>
        <Tooltip />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
      <h1>DashBoard Pie chart</h1>

      <PieChart width={400} height={400}>
        <Pie
          data={data01}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={60}
          fill="#8884d8"
        />
        <Pie
          data={data02}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={90}
          fill="#82ca9d"
          label
        />
      </PieChart>
    </div>
  );
};

export default DashBoard;
