    // setup
    const data = {
        labels: ['Dallas Wings', 'L.A. Sparks', 'Phoenix Mercury'],
        datasets: [
          {
            label: "Price",
            data: [ 45,
                    30,
                    20],
            backgroundColor: ["rgba(0, 0, 0, 0.2)"],
            borderColor: ["darkorange"],
            borderWidth: 2.5,
          },
          {
            label: "Funding",
            data: [ 25,
                    10,
                    15],
            backgroundColor: ["lightgreen"],
            borderColor: ["darkorange"],
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
                    text: 'WNBA Teams',
                    position: 'bottom'
                },
                subtitle: {
                    display: true,
                    text: '$ Millions',
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