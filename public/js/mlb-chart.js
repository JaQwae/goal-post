    // setup
    const data = {
        labels: ['Dodgers', 'Mets', 'Astros', 'Mariners'],
        datasets: [
          {
            label: "Price",
            data: [ 4.0,
                    2.6,
                    2.0,
                    1.8],
            backgroundColor: ["rgba(0, 0, 0, 0.2)"],
            borderColor: ["darkblue"],
            borderWidth: 2.5,
          },
          {
            label: "Funding",
            data: [ 2.0,
                    0.6,
                    1.5,
                    0.8],
            backgroundColor: ["lightgreen"],
            borderColor: ["darkblue"],
            borderWidth: 2.5,
          },
        ],
      };

      // customDataLabls plugins block
      const customDataLabls = {
        id: "customDataLabls",
        afterDatasetDraw(chart, args, pluginOptions) {
          const {
            ctx,
            data,
            chartArea: { top, bottom, left, right, width, hight },
            scales: { x, y },
          } = chart;

          ctx.save();
          const datasetArray = data.datasets[0].data.map((datapoint, index) => {
            if (datapoint > data.datasets[1].data[index]) {
              return 0;
            } else {
              return 1;
            }
          });
          // the difference between cost and funding
          const diffArray = data.datasets[0].data.map((datapoint, index) => {
            return data.datasets[1].data[index] - datapoint;
          });
          // the FontAwesome icon depending on the difference
          const iconArray = data.datasets[0].data.map((datapoint, index) => {
            if (datapoint > data.datasets[1].data[index]) {
              return "\uf063";
            } else if (datapoint < data.datasets[1].data[index]) {
              return "\uf062";
            } else {
              return "\uf0ec";
            }
          });

          diffArray.forEach((value, index) => {
            ctx.font = "bold 12px san-serif";
            ctx.fillStyle = "black";
            ctx.textAlign = "center";
            ctx.fillText(
              value,
              x.getPixelForValue(index) - 6,
              chart.getDatasetMeta(datasetArray[index]).data[index].y - 10
            );

            ctx.font = "bold 12px FontAwesome";
            ctx.fillText(
              iconArray[index],
              x.getPixelForValue(index) + 6,
              chart.getDatasetMeta(datasetArray[index]).data[index].y - 10
            );
          });
        },
      };

      // config
      const config = {
        type: "bar",
        data,
        options: {
            plugins: {
                // sub-titles in chart
                title: {
                    display: true,
                    text: 'MLB Teams',
                    position: 'bottom'
                },
                subtitle: {
                    display: true,
                    text: '$ Billions',
                    position: 'left'
                }
            },
          scales: {
            y: {
              grace: 1,
              beginAtZero: true,
            },
          },
        },
        plugins: [customDataLabls],
      };

      // render init block
      const myChart = new Chart(document.getElementById("myChart"), config);