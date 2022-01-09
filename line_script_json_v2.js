// Sample from stackoverflow
// source: https://stackoverflow.com/questions/44990517/displaying-json-data-in-chartjs


const jsonFile = {
    "ethereumArray": [{
       date: '2021-12-29',
       fee: 100
    }, {
        date: '2021-12-30',
        fee: 110
    }, {
        date: '2021-12-31',
        fee: 250
    }],
    "sushiArray": [{
        date: '2021-12-29',
        fee: 50
     }, {
         date: '2021-12-30',
         fee: 195
     }, {
         date: '2021-12-31',
         fee: 70
     }],
     "uniArray": [{
        date: '2021-12-29',
        fee: 50
     }, {
         date: '2021-12-30',
         fee: 110
     }, {
         date: '2021-12-31',
         fee: 280
     }]
};




let labels = jsonFile.ethereumArray.map(function(e) {
    return e.date;
});


// Data for sample Demo

let dataEthereum = jsonFile.ethereumArray.map( e => {
    return e.fee;
});

let dataUniswap = jsonFile.uniArray.map(function(e) {
    return e.fee;
});

let dataSushi = jsonFile.sushiArray.map( function(e) {
    return e.fee;
});

const ethereumColor = 'rgba(0, 119, 204, 0.3)';
const uniswapColor = 'rgb(255, 99, 132)';
const sushiswapColor = 'rgb(215, 31, 126)';

//  var ctx = canvas.getContext('2d');
 var ctx = document.getElementById('myChart').getContext('2d');
 var config = {
    type: 'line',
    data: {
       labels: labels,
       datasets: [{
        label: 'Ethereum',
        backgroundColor: ethereumColor,
        borderColor: ethereumColor,
        fill: false,
        data: dataEthereum,
       }, {
        label: 'Uniswap',
        backgroundColor: uniswapColor,
        borderColor: uniswapColor,
        fill: false,
        data: dataUniswap,
       }, {
        label: 'Sushi',
        backgroundColor: sushiswapColor,
        borderColor: sushiswapColor,
        fill: false,
        data: dataSushi,
      } ]
    }
 };
 
 var chart = new Chart(ctx, config);