
import React from "react";
import ApexCharts from "react-apexcharts";

const series = [{
  name: 'Your Cotisation',
  type: 'column',
  data_test: [350, 275, 375, 375, 300, 225, 275],
  data: [100, 100, 100, 2,100, 100, 2, 100, 100, 2, 2, 100]
},
//  {
//   name: 'Your Goal',
//   type: 'line',
//   data_test: [400, 350, 450, 400, 350, 300, 350],
//   data: [400, 350, 450, 400, 350, 300, 350,400, 350, 450, 400, 350]


// }
];

const chartSettings = {
  colors: ["#516091", "#43BC13"], // #FFCA41
  chart: {
    height: 350,
    type: 'line',
    toolbar: {
      show: false,
    },
  },
  stroke: {
    curve: "straight",
    width: [0, 1]
  },
  dataLabels: {
    enabled: true,
    enabledOnSeries: [1],
    style: {
      fontSize: '10px',
      fontWeight: 500,
    },
    background: {
      borderWidth: 0,
    },
  },
  labels: ["Benin","Burkina","Congo","Comores","Cameroon","Cote d'Ivoire","Guinée","Mali","Niger"],
  legend: {
    position: "top",
    floating: true,
  },
  xaxis: {
    type: 'category',
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    labels: {
      show: true,
      style: {
        colors: "#6B859E",
      },
    },
  },
  yaxis: {
    show: false,
  },
  fill: {
    type: "solid",
    opacity: 1,
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
    }
  },
  grid: {
    show: false,
  }
};


const CommunityChart=() => {
  return (
    <ApexCharts
      options={chartSettings}
      series={series}
      type="area"
      height={280}
    />
  )
}

export default CommunityChart;