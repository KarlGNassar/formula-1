import Chart from "react-apexcharts";

const ConstructorsChart = () => {
  const chart = {
    series: [
      {
        data: [587.5, 559.5, 307.5, 269, 149],
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
      colors: ["#62b2c9", "#9e75e9", "#e97486", "#e1a583", "#da8bd4"],
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
        categories: ["Mercedes", "Red Bull", "Ferrari", "McLaren", "Alpine"],
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

export default ConstructorsChart;
