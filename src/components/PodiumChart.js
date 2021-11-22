import Chart from "react-apexcharts";

const PodiumChart = () => {
  const chart = {
    series: [
      {
        name: "Lewis Hamilton",
        data: [1, 2, 1, 1, 7, 10, 2, 2, 4, 1, 2, 3, 2, 10, 1, 5, 2, 2, 1, 1],
      },
      {
        name: "Max Verstappen",
        data: [2, 1, 2, 2, 1, 10, 1, 1, 1, 10, 9, 1, 1, 10, 2, 2, 1, 1, 2, 2],
      },
    ],
    options: {
      chart: {
        type: "line",
        zoom: {
          enabled: false,
        },
        foreColor: "#ffffff",
      },
      tooltip: {
        theme: "dark",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        categories: [
          "R1",
          "R2",
          "R3",
          "R4",
          "R5",
          "R6",
          "R7",
          "R8",
          "R9",
          "R10",
          "R11",
          "R12",
          "R13",
          "R14",
          "R15",
          "R16",
          "R17",
          "R18",
          "R19",
          "R20",
        ],
        tickAmount: 5,
      },
      yaxis: {
        reversed: true,
        min: 1,
        max: 10,
        title: {
          text: "Position",
        },
        labels: {
          formatter: function (val) {
            if (val === 10) {
              return "DNF";
            } else {
              return Math.floor(val);
            }
          },
        },
      },
      colors: ["#62b2c9", "#e97486"],
    },
  };
  return (
    <div>
      <Chart options={chart.options} series={chart.series} height={350} />
    </div>
  );
};

export default PodiumChart;
