
// Data and Axis config
const uniColor = 'rgb(255, 99, 132)';
const uniBorder = 'rgb(255, 99, 132)';
const sushiBorder = 'rgba(215, 31, 126, 0.8)';
const sushiColor = 'rgba(215, 31, 126, 0.8)';

// Axis and Data Arrays 
const myLabels = ["January", "February", "March", "April", "May", "June", "July"];
const myData = [0, 10, 15, 20, 25, 30, 35];
const myData2 = [5, 15, 20, 17, 28, 29, 40];

// plugin to set background color at the chart

const chartBackground = {
  id: 'custom_canvas_background_color',
  beforeDraw: (chart) => {
    const ctx = chart.canvas.getContext('2d');
    ctx.save();
    ctx.globalCompositeOperation = 'destination-over';
    ctx.fillStyle = 'rgb(15,15,15)';
    ctx.fillRect( 29, 35, chart.width-42, chart.height-96 );
    ctx.restore();
  }
};


var options = {
  title: {
    text: "Daily Fees Earned by DeFi Protocols - USD",
    display: true,
    position: 'top',
    fontColor: 'white',
    fontStyle: 'bold',
    fontSize: 20,
    padding: 5,
  },
  legend: {
    display: true,
    position: 'bottom'
  },
  maintainAspectRation: false,
  scales: {
    y: {
      stacked: true,
      grid: {
        display: true,
        color: 'rgba(255,99,132,0.2)'
      },
    x: {
      grid: {
        display: false
        }
      }
    }
  }
}

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

  plugins: [chartBackground],

  options: options

});