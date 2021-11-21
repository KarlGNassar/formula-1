import Chart from "react-apexcharts";

const QualiChart = () => {
  const chart = {
    series: [7, 8, 2, 2, 1],
    options: {
      chart: {
        type: "polarArea",
        foreColor: "#ffffff",
      },
      stroke: {
        colors: ["#fff"],
      },
      fill: {
        opacity: 0.8,
      },
      colors: ["#62b2c9", "#9e75e9", "#e97486", "#da8bd4", "#e1a583"],
      labels: ["P1", "P2", "P3", "P4", "P7"],
    },
  };

  return (
    <div className="App">
      <Chart
        options={chart.options}
        series={chart.series}
        width={300}
        type="polarArea"
      />
    </div>
  );
};

export default QualiChart;
