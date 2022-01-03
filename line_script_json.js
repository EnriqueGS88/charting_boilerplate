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

let dataEthereum = jsonFile.ethereumArray.map(function(e) {
    return e.fee;
});

let dataUniswap = jsonFile.uniArray.map(function(e) {
    return e.fee;
});

let dataSushi = jsonFile.sushiArray.map( function(e) {
    return e.fee;
});

// Real output from scraper
let scrapeOutput = {
    scrape: [
      { date: '2021-12-31', protocol: 'Ethereum', fee: '34347395' },
      { date: '2021-12-31', protocol: 'Uniswap', fee: '4027706' },
      {
        date: '2021-12-31',
        protocol: 'Binance_Smart_Chain',
        fee: '2574232'
      },
      { date: '2021-12-31', protocol: 'SushiSwap', fee: '1289752' },
      { date: '2021-12-31', protocol: 'Aave', fee: '1139513' },
      { date: '2021-12-31', protocol: 'Bitcoin', fee: '814037' },
      { date: '2021-12-31', protocol: 'Trader_Joe', fee: '796024' },
      { date: '2021-12-31', protocol: 'Compound', fee: '728653' },
      { date: '2021-12-31', protocol: 'Balancer', fee: '645590' },
      { date: '2021-12-31', protocol: 'Quickswap', fee: '423483' }
    ]
  }
  {
    scrape: [
      { date: '2022-01-01', protocol: 'Ethereum', fee: '30741693' },
      { date: '2022-01-01', protocol: 'Uniswap', fee: '3115069' },
      {
        date: '2022-01-01',
        protocol: 'Binance_Smart_Chain',
        fee: '2303642'
      },
      { date: '2022-01-01', protocol: 'SushiSwap', fee: '1279710' },
      {
        date: '2022-01-01',
        protocol: 'Abracadabra_money',
        fee: '1169820'
      },
      { date: '2022-01-01', protocol: 'Aave', fee: '1084302' },
      { date: '2022-01-01', protocol: 'Compound', fee: '732881' },
      { date: '2022-01-01', protocol: 'Trader_Joe', fee: '559551' },
      { date: '2022-01-01', protocol: 'Bitcoin', fee: '437068' },
      { date: '2022-01-01', protocol: 'MakerDAO', fee: '391062' }
    ]
  }
 
//  var ctx = canvas.getContext('2d');
 var ctx = document.getElementById('myChart').getContext('2d');
 var config = {
    type: 'line',
    data: {
       labels: labels,
       datasets: [{
        label: 'Ethereum',
        backgroundColor: 'rgba(0, 119, 204, 0.3)',
        borderColor: 'rgba(0, 119, 204, 0.3)',
        fill: false,
        data: dataEthereum,
       }, {
        label: 'Uniswap',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        fill: false,
        data: dataUniswap,
       }, {
        label: 'Sushi',
        backgroundColor: 'rgb(215, 31, 126)',
        borderColor: 'rgb(215, 31, 126)',
        fill: false,
        data: dataSushi,
    }]
    }
 };
 
 var chart = new Chart(ctx, config);