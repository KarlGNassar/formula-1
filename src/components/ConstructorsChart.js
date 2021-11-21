import Chart from "react-apexcharts";

const ConstructorsChart = () => {
  const chart = {
    series: [
      {
        data: [546.5, 541.5, 297.5, 258, 127],
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
      colors: ["#62b2c9", "#9e75e9", "#e97486", "#da8bd4", "#e1a583"],
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
        width={400}
      />
    </div>
  );
};

export default ConstructorsChart;
