const over_all_data = {
  labels: ['18-24', '25-34', '35-44', '45-54', '55-64', '65 and over'],
  datasets: [{
      label: 'Underweight',
      data: [4.3, 1.7, 0.6, 0.8, 0.7, 0.9],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)'
      ],
      borderWidth: 1
    },
    {
      label: 'Normal',
      data: [49.9, 40.7, 30.7, 25.2, 24.6, 23.5],
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)'
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)'
      ],
      borderWidth: 1
    },
    {
      label: 'Overweight',
      data: [30.3, 33.9, 38.1, 36.6, 34.8, 38.2],
      backgroundColor: [
        'rgba(255, 206, 86, 0.2)'
      ],
      borderColor: [
        'rgba(255, 206, 86, 1)'
      ],
      borderWidth: 1
    },
    {
      label: 'Obesity class I',
      data: [9.8, 14.1, 19.6, 23.2, 25.3, 24.1],
      backgroundColor: [
        'rgba(75, 192, 192, 0.2)'
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 1
    },
    {
      label: 'Obesity class II',
      data: [3.6, 6.2, 6.4, 9.3, 10.1, 9.0],
      backgroundColor: [
        'rgba(153, 102, 255, 0.2)'
      ],
      borderColor: [
        'rgba(153, 102, 255, 1)'
      ],
      borderWidth: 1
    },
    {
      label: 'Obesity class III',
      data: [2.3, 3.3, 4.3, 5.0, 4.3, 4.1],
      backgroundColor: [
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }
  ]
}

const male_data = {
  labels: ['18-24', '25-34', '35-44', '45-54', '55-64', '65 and over'],
  datasets: [{
      label: 'Underweight',
      data: [3.6, 0.6, 0.3, 0.3, 0.7, 0.6],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)'
      ],
      borderWidth: 1
    },
    {
      label: 'Normal',
      data: [44.5, 32.9, 22.5, 16.9, 15.7, 19.4],
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)'
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)'
      ],
      borderWidth: 1
    },
    {
      label: 'Overweight',
      data: [35.0, 42.2, 45.4, 43.0, 42.2, 42.8],
      backgroundColor: [
        'rgba(255, 206, 86, 0.2)'
      ],
      borderColor: [
        'rgba(255, 206, 86, 1)'
      ],
      borderWidth: 1
    },
    {
      label: 'Obesity class I',
      data: [10.4, 15.4, 22.4, 27.1, 27.5, 25.9],
      backgroundColor: [
        'rgba(75, 192, 192, 0.2)'
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 1
    },
    {
      label: 'Obesity class II',
      data: [5.4, 7.3, 5.7, 9.2, 9.7, 8.5],
      backgroundColor: [
        'rgba(153, 102, 255, 0.2)'
      ],
      borderColor: [
        'rgba(153, 102, 255, 1)'
      ],
      borderWidth: 1
    },
    {
      label: 'Obesity class III',
      data: [2.2, 2.3, 3.4, 4.5, 4.2, 3.0],
      backgroundColor: [
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }
  ]
}

const female_data = {
  labels: ['18-24', '25-34', '35-44', '45-54', '55-64', '65 and over'],
  datasets: [{
      label: 'Underweight',
      data: [5.0, 2.4, 0.5, 1.5, 0.9, 1.2],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)'
      ],
      borderWidth: 1
    },
    {
      label: 'Normal',
      data: [56.1, 48.6, 38.9, 33.4, 32.7, 27.2],
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)'
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)'
      ],
      borderWidth: 1
    },
    {
      label: 'Overweight',
      data: [26.0, 26.0, 30.7, 30.7, 28.4, 34.1],
      backgroundColor: [
        'rgba(255, 206, 86, 0.2)'
      ],
      borderColor: [
        'rgba(255, 206, 86, 1)'
      ],
      borderWidth: 1
    },
    {
      label: 'Obesity class I',
      data: [9.6, 12.8, 17.1, 19.1, 23.1, 22.7],
      backgroundColor: [
        'rgba(75, 192, 192, 0.2)'
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 1
    },
    {
      label: 'Obesity class II',
      data: [2.6, 5.4, 7.4, 9.7, 10.5, 9.5],
      backgroundColor: [
        'rgba(153, 102, 255, 0.2)'
      ],
      borderColor: [
        'rgba(153, 102, 255, 1)'
      ],
      borderWidth: 1
    },
    {
      label: 'Obesity class III',
      data: [2.8, 4.7, 5.2, 5.7, 4.4, 5.1],
      backgroundColor: [
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }
  ]
}

const scales = {
  y: {
    beginAtZero: true,
    title: {
      display: true,
      text: 'Percentage'
    },
    max: 60
  },
  x: {
    title: {
      display: true,
      text: 'Age group'
    }
  }
}

let ctx = document.getElementById('overall_chart').getContext('2d');
let overall_chart = new Chart(ctx, {
  type: 'bar',
  data: over_all_data,
  options: {
    scales: scales,
    plugins: {
      title: {
        display: true,
        text: 'Overall Percentage of People BMI'
      }
    }
  }
});

let ctx2 = document.getElementById('male_chart').getContext('2d');
let male_chart = new Chart(ctx2, {
  type: 'bar',
  data: male_data,
  options: {
    scales: scales,
    plugins: {
      title: {
        display: true,
        text: 'Precentage of Male BMI'
      }
    }
  }
});

let ctx3 = document.getElementById('female_chart').getContext('2d');
let female_chart = new Chart(ctx3, {
  type: 'bar',
  data: female_data,
  options: {
    scales: scales,
    plugins: {
      title: {
        display: true,
        text: 'Precentage of Female BMI'
      }
    }
  }
});
