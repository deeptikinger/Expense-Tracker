import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const values = props.dataPoints.map((point) => point.value);
  const totalMax = Math.max(...values);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={totalMax}
          lable={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
