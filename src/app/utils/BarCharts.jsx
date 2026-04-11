"use client";

import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const BarCharts = ({ data = [] }) => {
  const safeData = Array.isArray(data) ? data : [];

  return (
    <div className="w-full! lg:w-4/12!" style={{ width: "40%", height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={safeData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <Tooltip />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarCharts;
