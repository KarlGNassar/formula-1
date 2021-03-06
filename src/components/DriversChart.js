import Chart from "react-apexcharts";

const DriversChart = () => {
  const chart = {
    series: [
      {
        data: [395.5, 387.5, 226, 190, 164.5],
      },
    ],
    options: {
      chart: {
        type: "bar",
        foreColor: "#ffffff",
      },
      plotOptions: {
        bar: {
          barHeight: "100%",
          distributed: true,
          horizontal: true,
          dataLabels: {
            position: "bottom",
          },
        },
      },
      colors: ["#9e75e9", "#62b2c9", "#e1a583", "#da8bd4", "#e97486"],
      dataLabels: {
        enabled: true,
        textAnchor: "start",
        style: {
          colors: ["#fff"],
        },
        formatter: function (val, opt) {
          return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
        },
        offsetX: 0,
        dropShadow: {
          enabled: true,
        },
      },
      stroke: {
        width: 1,
        colors: ["#fff"],
      },
      xaxis: {
        categories: [" Verstappen", " Hamilton", " Bottas", "Perez", "Sainz"],
      },
      yaxis: {
        labels: {
          show: false,
        },
      },

      tooltip: {
        theme: "dark",
        x: {
          show: false,
        },
        y: {
          title: {
            formatter: function (val, opt) {
              return opt.w.globals.labels[opt.dataPointIndex];
            },
          },
        },
      },
    },
  };
  return (
    <div>
      <Chart
        options={chart.options}
        series={chart.series}
        type="bar"
        width="100%"
        height={300}
      />
    </div>
  );
};

export default DriversChart;
