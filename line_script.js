
// Data and Axis config
const uniColor = 'rgb(255, 99, 132)';
const uniBorder = 'rgb(255, 99, 132)';
const sushiBorder = 'rgba(215, 31, 126, 0.8)';
const sushiColor = 'rgba(215, 31, 126, 0.8)';
const myLabels = ["January", "February", "March", "April", "May", "June", "July"];
const myData = [0, 10, 15, 20, 25, 30, 35];
const myData2 = [5, 15, 20, 17, 28, 29, 40];


var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {

  type: 'line',

  data: {
    labels: myLabels,
    datasets: [
      {
      label: 'Uniswap',
      backgroundColor: uniColor,
      borderColor: uniBorder,
      fill: false,
      tension: 0.1,
      data: myData,
    },{
      label: 'Sushi',
      backgroundColor: sushiColor,
      borderColor: sushiBorder,
      fill: false,
      tension: 0.1,
      data: myData2,
    }
  ]},

  options: {
    title: {
      text: "Protocol Earned Fees",
      display: true,
      position: 'top',
      fontColor: 'green',
      fontStyle: 'bold',
      fontSize: 20,
      padding: 5,
    },
    legend: {
      display: true,
      position: 'bottom'
    }
  }

});