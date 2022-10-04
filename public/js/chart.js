    // setup
    const data = {
        labels: ['Raiders', '49ers', 'Cardinals', 'Dolphins'],
        datasets: [
          {
            label: "Cost",
            data: [ 5.5,
                    5,
                    3,
                    2.5],
            backgroundColor: ["lightgreen"],
            borderColor: ["green"],
            borderWidth: 2.5,
          },
          {
            label: "Funding",
            data: [ 5,
                    3.,
                    3.5,
                    2.5,],
            backgroundColor: ["rgba(0, 0, 0, 0.2)"],
            borderColor: ["rgba(0, 0, 0, 1)"],
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
          // the differance inbetween cost and funding
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
                    text: 'NFL TEAMS',
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