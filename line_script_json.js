// Sample from stackoverflow
// source: https://stackoverflow.com/questions/44990517/displaying-json-data-in-chartjs

const jsonFile = {
    ethereumData: [
      { date: '2021-12-15', fee: 36707369 },
      { date: '2021-12-16', fee: 41423662 },
      { date: '2021-12-17', fee: 39239439 },
      { date: '2021-12-18', fee: 26795865 },
      { date: '2021-12-19', fee: 25355936 },
      { date: '2021-12-20', fee: 28700496 },
      { date: '2021-12-21', fee: 28036811 }
    ],
    uniswapData: [
      { date: '2021-12-15', fee: 5605966 },
      { date: '2021-12-16', fee: 4207082 },
      { date: '2021-12-17', fee: 4824260 },
      { date: '2021-12-18', fee: 3721218 },
      { date: '2021-12-19', fee: 3718491 },
      { date: '2021-12-20', fee: 4370582 },
      { date: '2021-12-21', fee: 3873456 }
    ],
    binance_Smart_ChainData: [
      { date: '2021-12-15', fee: 2973182 },
      { date: '2021-12-16', fee: 3122655 },
      { date: '2021-12-17', fee: 3381074 },
      { date: '2021-12-18', fee: 2873172 },
      { date: '2021-12-19', fee: 2548941 },
      { date: '2021-12-20', fee: 2997805 },
      { date: '2021-12-21', fee: 3428016 }
    ],
    sushiswapData: [
      { date: '2021-12-15', fee: 1197523 },
      { date: '2021-12-16', fee: 823867 },
      { date: '2021-12-17', fee: 1232246 },
      { date: '2021-12-18', fee: 1198872 },
      { date: '2021-12-19', fee: 940814 },
      { date: '2021-12-20', fee: 1063478 },
      { date: '2021-12-21', fee: 1033840 }
    ],
    aaveData: [
      { date: '2021-12-15', fee: 1201361 },
      { date: '2021-12-16', fee: 1212604 },
      { date: '2021-12-17', fee: 1214952 },
      { date: '2021-12-18', fee: 1248161 },
      { date: '2021-12-19', fee: 1284183 },
      { date: '2021-12-20', fee: 1273764 },
      { date: '2021-12-21', fee: 1274200 }
    ],
    bitcoinData: [
      { date: '2021-12-15', fee: 556157 },
      { date: '2021-12-16', fee: 491487 },
      { date: '2021-12-17', fee: 612283 },
      { date: '2021-12-20', fee: 515934 },
      { date: '2021-12-21', fee: 585498 }
    ],
    trader_JoeData: [
      { date: '2021-12-15', fee: 1494138 },
      { date: '2021-12-16', fee: 1378778 },
      { date: '2021-12-17', fee: 1531625 },
      { date: '2021-12-18', fee: 1030164 },
      { date: '2021-12-19', fee: 919089 },
      { date: '2021-12-20', fee: 1325496 },
      { date: '2021-12-21', fee: 1250485 }
    ],
    compoundData: [
      { date: '2021-12-15', fee: 814570 },
      { date: '2021-12-16', fee: 891507 },
      { date: '2021-12-18', fee: 814364 },
      { date: '2021-12-19', fee: 807445 },
      { date: '2021-12-21', fee: 809960 }
    ],
    balancerData: [
      { date: '2021-12-15', fee: 467937 },
      { date: '2021-12-16', fee: 492714 },
      { date: '2021-12-17', fee: 458155 }
    ],
    terraswapData: [
      { date: '2021-12-15', fee: 437746 },
      { date: '2021-12-17', fee: 409312 },
      { date: '2021-12-18', fee: 575329 },
      { date: '2021-12-19', fee: 542218 },
      { date: '2021-12-20', fee: 804306 },
      { date: '2021-12-21', fee: 600492 }
    ],
    makerDAOData: [
      { date: '2021-12-16', fee: 400463 },
      { date: '2021-12-20', fee: 395817 }
    ],
    avalancheData: [
      { date: '2021-12-17', fee: 413690 },
      { date: '2021-12-19', fee: 401105 },
      { date: '2021-12-20', fee: 798748 }
    ],
    abracadabra_moneyData: [
      { date: '2021-12-18', fee: 1753552 },
      { date: '2021-12-21', fee: 4203942 }
    ],
    spookyswapData: [ 
        { date: '2021-12-18', fee: 596660 } ],
    quickswapData: [ 
        { date: '2021-12-19', fee: 420549 } ]
  }




// Define the labels for Axis X
let labels = jsonFile.ethereumData.map(function(e) {
    return e.date;
});


// Data for sample Demo

let dataEthereum = jsonFile.ethereumData.map( e => {
    return e.fee;
});

let dataUniswap = jsonFile.uniswapData.map(function(e) {
    return e.fee;
});

let dataSushi = jsonFile.sushiswapData.map( function(e) {
    return e.fee;
});


// Funcctions for real scraped Data

// let dataEthereum = jsonFile.ethereumData.map( e => {
//   return e.fee;
// });

// let dataUniswap = jsonFile.uniswapData.map(function(e) {
//   return e.fee;
// });

// let dataSushi = jsonFile.sushiswapData.map( function(e) {
//   return e.fee;
// });

// let dataBinance_Smart_Chain = jsonFile.binance_Smart_ChainData.map(function(e) {
//   return e.fee;
// });

// let dataAave = jsonFile.aaveData.map( function(e) {
//   return e.fee;
// });

// let dataBitcoin = jsonFile.bitcoinData.map( function(e) {
//   return e.fee;
// });

// let dataBalancer = jsonFile.balancerData.map( function(e) {
//   return e.fee;
// });

// let dataMakerDAO = jsonFile.makerDAOData.map( function(e) {
// return e.fee;
// });

// let dataAvalanche = jsonFile.avalancheData.map( function(e) {
//   return e.fee;
// });

// let dataAbracadabra_money = jsonFile.abracadabra_moneyData.map( function(e) {
//   return e.fee;
// });

// let dataSpookyswap = jsonFile.spookyswapData.map( function(e) {
//   return e.fee;
// });

// let dataQuickswap = jsonFile.quickswapData.map( function(e) {
//   return e.fee;
// });



// Real output from scraper
// let scrapeOutput = {
//     scrape: [
//       { date: '2021-12-31', protocol: 'Ethereum', fee: '34347395' },
//       { date: '2021-12-31', protocol: 'Uniswap', fee: '4027706' },
//       {
//         date: '2021-12-31',
//         protocol: 'Binance_Smart_Chain',
//         fee: '2574232'
//       },
//       { date: '2021-12-31', protocol: 'SushiSwap', fee: '1289752' },
//       { date: '2021-12-31', protocol: 'Aave', fee: '1139513' },
//       { date: '2021-12-31', protocol: 'Bitcoin', fee: '814037' },
//       { date: '2021-12-31', protocol: 'Trader_Joe', fee: '796024' },
//       { date: '2021-12-31', protocol: 'Compound', fee: '728653' },
//       { date: '2021-12-31', protocol: 'Balancer', fee: '645590' },
//       { date: '2021-12-31', protocol: 'Quickswap', fee: '423483' }
//     ]
//   }
//   {
//     scrape: [
//       { date: '2022-01-01', protocol: 'Ethereum', fee: '30741693' },
//       { date: '2022-01-01', protocol: 'Uniswap', fee: '3115069' },
//       {
//         date: '2022-01-01',
//         protocol: 'Binance_Smart_Chain',
//         fee: '2303642'
//       },
//       { date: '2022-01-01', protocol: 'SushiSwap', fee: '1279710' },
//       {
//         date: '2022-01-01',
//         protocol: 'Abracadabra_money',
//         fee: '1169820'
//       },
//       { date: '2022-01-01', protocol: 'Aave', fee: '1084302' },
//       { date: '2022-01-01', protocol: 'Compound', fee: '732881' },
//       { date: '2022-01-01', protocol: 'Trader_Joe', fee: '559551' },
//       { date: '2022-01-01', protocol: 'Bitcoin', fee: '437068' },
//       { date: '2022-01-01', protocol: 'MakerDAO', fee: '391062' }
//     ]
//   }


const ethereumColor = 'rgba(0, 119, 204, 0.3)';
const uniswapColor = 'rgb(255, 99, 132)';
const sushiswapColor = 'rgb(215, 31, 126)';
// const binance_Smart_ChainColor = 'rgb(215, 31, 126)';
// const aaveColor = 'rgb(215, 31, 126)';
// const bitcoinColor = 'rgb(215, 31, 126)';
// const balancerColor = 'rgb(215, 31, 126)';
// const terraswapColor = 'rgb(215, 31, 126)';
// const makerDAOColor = 'rgb(215, 31, 126)';
// const avalancheColor = 'rgb(215, 31, 126)';
// const abracadabra_moneyColor = 'rgb(215, 31, 126)';
// const spookyswapColor = 'rgb(215, 31, 126)';
// const quickswapColor = 'rgb(215, 31, 126)';

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