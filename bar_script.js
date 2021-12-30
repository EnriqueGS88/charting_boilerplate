const ctx = document.getElementById('myChart').getContext('2d');

const myArray = [12, 19, 3, 5, 2.5, 3];

const myBackgrounds = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)'
];

const myBorders = [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)'
];

const myLabels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: myLabels,
        datasets: [{
            label: '# of Votes',
            data: myArray,
            backgroundColor: myBackgrounds,
            borderColor: myBorders,
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
