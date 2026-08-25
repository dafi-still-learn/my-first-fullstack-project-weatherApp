import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function Diagram_angin({ data }) {
  return (
    <LineChart
      style={{
        width: "500px",
        height: "280px",
        aspectRatio: 1.618,
        maxWidth: 600,
      }}
      responsive
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 5,
        left: 0,
      }}
    >
      <CartesianGrid stroke="#aaa" strokeDasharray="5 5" />
      <Line
        type={"monotone"}
        dataKey="angin"
        stroke="purple"
        strokeWidth={2}
        name="data angin"
      />
      <XAxis dataKey="waktu" />
      <YAxis
        width="auto"
        label={{ value: "angin", position: "insideLeft", angle: -90 }}
      />
      <Legend align="right" />
      <Tooltip />
    </LineChart>
  );
}

export default Diagram_angin;
