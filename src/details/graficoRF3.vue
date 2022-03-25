<template>
<div>

  <canvas id="myChart" width="400" height="400"></canvas>
  
  <tela/>
</div>
</template> 

<script>
    src = " https://unpkg.com/vue-chartjs/dist/vue-chartjs.min.js ";
    src = " https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min.js ";
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        const config = {
            type: 'bar',
            data,
            options: {
                indexAxis: 'y',
            }
        }
    });
</script>


<style>

</style>
