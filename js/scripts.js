$(document).ready(function() {

    $('.chart').each(function ( i, l ) {
        var id = $(this).attr("id"),
            type = $(this).data("type"),
            labels = $(this).data("labels"),
            series = $(this).data("series"),
            background = $(this).data("background"),
            series = $(this).data("series"),
            options = $(this).data("options"),
            ctx = this.getContext("2d");

        new Chart(ctx, {
            type: type,
            plugins: [ChartDataLabels],
            data: {
                labels: labels,
                datasets: [
                    {
                        label: "",
                        backgroundColor: background,
                        data: series, 
                        borderSkipped: "bottom",
                        maxBarThickness: 60,
                        datalabels: {
                            align: 'start',
                            anchor: 'end'
                        }
                    },
                ],
            },
            options: { 
                aspectRatio: 3/3,
                scales: {
                    y: {
                        display: false
                    }, 
                    x: { 
                        grid: {
                            display: false,
                            drawBorder: false,
                        },

                        ticks: {
                            color: '#333333',
                            font: {
                                size: 16,
                                weight: 700,
                            },
                            callback: function (value, index, values) {
                                return this.getLabelForValue(value);
                            }
                        }
                    } 
                },
                plugins: {
                    datalabels: {
                        color: 'white',
                        display: function(context) {
                            return context.dataset.data[context.dataIndex];
                        },
                        font: {
                            size: 16,
                            weight: 'bold'
                        },
                        padding: {
                            top: 15
                        },
                        formatter: Math.round
                    },
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        backgroundColor: "#fff",
                        titleColor: "#1E101B",
                        xAlign: "center",
                        yAlign: "bottom",
                        padding: {
                            top: 4,
                            left: 7,
                            right: 7,
                            bottom: 0
                        },
                        titleFont: {
                            size: 14,
                            weight: 400
                        },
                        callbacks: {
                            title: function (context) {
                                return textToLines(context[0].formattedValue, 120);
                            },
                            label: function (context) {
                                return false;
                            }
                        }
                    },
                }
            }
        });

        function textToLines(text, maxWidth) {
            var words = text.split(" ");
            var lines = [];
            var currentLine = words[0];

            for (var i = 1; i < words.length; i++) {
                var word = words[i];
                var width = respChartSelector.measureText(currentLine + " " + word).width;

                if (width < maxWidth) 
                {
                    currentLine += " " + word;
                } 
                else 
                {
                    lines.push(currentLine);
                    currentLine = word;
                }
            }

            lines.push(currentLine);
            return lines;
        }
    });

    $('.chart2').each(function ( i, l ) {
        var id = $(this).attr("id"),
            type = $(this).data("type"),
            labels = $(this).data("labels"),
            series = $(this).data("series"),
            background = $(this).data("background"),
            series = $(this).data("series"),
            max = $(this).data("max"),
            step = $(this).data("step"),
            options = $(this).data("options"),
            ctx = this.getContext("2d");

        new Chart(ctx, {
            type: type,
            plugins: [ChartDataLabels],
            data: {
                labels: labels,
                datasets: [
                    {
                        label: "",
                        backgroundColor: background,
                        data: series,  
                        maxBarThickness: 40
                    },
                ],
            },
            options: { 
                aspectRatio: 4/2,
                scales: {
                    x: { 
                        grid: {
                            display: false,
                            drawBorder: false,
                        },
                        ticks: {
                            color: background,
                            font: {
                                size: 16,
                                weight: 400,
                            },
                            align: "center",
                            callback: function (value, index, values) { 
                                return textToLines(this.getLabelForValue(value), 50);
                            }
                        }
                    },
                    y: {
                        grid: {
                            drawBorder: false,
                            color: '#F0F0F0',
                        },  
                        min: 0,
                        max: max,
                        ticks: {
                            color: '#1E101B',
                            stepSize: step,
                            font: {
                                size: 14,
                                weight: 700,
                            }
                        }
                    }
                },
                plugins: {
                    datalabels: {
                        display: false,
                    },
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        backgroundColor: "#fff",
                        titleColor: "#1E101B",
                        xAlign: "center",
                        yAlign: "bottom",
                        padding: {
                            top: 4,
                            left: 7,
                            right: 7,
                            bottom: 0
                        },
                        titleFont: {
                            size: 14,
                            weight: 400
                        },
                        callbacks: {
                            title: function (context) {
                                return textToLines(context[0].formattedValue, 120);
                            },
                            label: function (context) {
                                return false;
                            }
                        }
                    },
                }
            }
        });

        function textToLines(text, maxWidth) {
            var words = text.split(" ");
            var lines = [];
            var currentLine = words[0];

            for (var i = 1; i < words.length; i++) {
                var word = words[i];
                var width = ctx.measureText(currentLine + " " + word).width;

                if (width < maxWidth) 
                {
                    currentLine += " " + word;
                } 
                else 
                {
                    lines.push(currentLine);
                    currentLine = word;
                }
            }

            lines.push(currentLine);
            return lines;
        }
    });

    $('.chart3').each(function ( i, l ) {
        var id = $(this).attr("id"),
            type = $(this).data("type"),
            labels = $(this).data("labels"),
            labels_left = $(this).data("labels-left"),
            background = $(this).data("background"),
            series = $(this).data("series"),
            max = $(this).data("max"),
            step = $(this).data("step"),
            options = $(this).data("options"),
            ctx = this.getContext("2d");

        new Chart(ctx, {
            type: type,
            plugins: [ChartDataLabels],
            data: {
                labels: labels,
                datasets: [
                    {
                        label: labels_left[0],
                        backgroundColor: background[0],
                        maxBarThickness: 20,
                        data: series[0]
                    },
                    {
                        label: labels_left[1],
                        backgroundColor: background[1],
                        maxBarThickness: 20,
                        data: series[1]
                    },
                    {
                        label: labels_left[2],
                        backgroundColor: background[2],
                        maxBarThickness: 20,
                        data: series[2]
                    },
                    {
                        label: labels_left[3],
                        backgroundColor: background[3],
                        maxBarThickness: 20,
                        data: series[3]
                    },
                ],
            },
            options: { 
                aspectRatio: 4/2,
                scales: {
                    x: { 
                        grid: {
                            display: false,
                            drawBorder: false,
                        },
                        ticks: {
                            color: "#1E101B",
                            font: {
                                size: 14,
                                weight: 400,
                            },
                            align: "center",
                            callback: function (value, index, values) {
                                // return this.getLabelForValue(value);
                                return textToLines(this.getLabelForValue(value), 89);
                            }
                        }
                    },
                    y: {
                        grid: {
                            drawBorder: false,
                            color: '#F0F0F0',
                        }, 
                        position: 'right', 
                        min: 0,
                        max: max,
                        ticks: {
                            color: '#1E101B',
                            stepSize: step,
                            font: {
                                size: 14,
                                weight: 700,
                            }
                        }
                    }
                },
                plugins: {
                    datalabels: {
                        display: false,
                    },
                    legend: {
                        position: 'left',
                    },
                    tooltip: {
                        mode: 'index',
                        backgroundColor: "#fff",
                        titleColor: "#1E101B",
                        xAlign: "center",
                        yAlign: "bottom",
                        padding: {
                            top: 4,
                            left: 7,
                            right: 7,
                            bottom: 0
                        },
                        titleFont: {
                            size: 14,
                            weight: 400
                        },
                        callbacks: {
                            title: function (context) {
                                // console.log(l);
                                for (var i = 0; i < context.length; i++) {
                                    return '$' + context[i].formattedValue;
                                }
                                // return textToLines(context[0].formattedValue, 120);
                            },
                            label: function (context) {
                                return false;
                            }
                        },
                    },
                }
            }
        });

        function textToLines(text, maxWidth) {
            var words = text.split(" ");
            var lines = [];
            var currentLine = words[0];

            for (var i = 1; i < words.length; i++) {
                var word = words[i];
                var width = ctx.measureText(currentLine + " " + word).width;

                if (width < maxWidth) 
                {
                    currentLine += " " + word;
                } 
                else 
                {
                    lines.push(currentLine);
                    currentLine = word;
                }
            }

            lines.push(currentLine);
            return lines;
        }
    });


        // Register plugin to always show tooltip // ref: https://github.com/chartjs/Chart.js/issues/4045
        // Chart.plugins.register({
        //     beforeRender: function(chart) {
        //         if (chart.config.options.showAllTooltips) {
        //             // create an array of tooltips
        //             // we can't use the chart tooltip because there is only one tooltip per chart
        //             chart.pluginTooltips = [];
        //             chart.config.data.datasets.forEach(function(dataset, i) {
        //                 chart.getDatasetMeta(i).data.forEach(function(sector, j) {
        //                     chart.pluginTooltips.push(
        //                         new Chart.Tooltip(
        //                             {
        //                                 _chart: chart.chart,
        //                                 _chartInstance: chart,
        //                                 _data: chart.data,
        //                                 _options: chart.options.tooltips,
        //                                 _active: [sector]
        //                             },
        //                             chart
        //                         )
        //                     );
        //                 });
        //             });

        //             // turn off normal tooltips
        //             chart.options.tooltips.enabled = false;
        //         }
        //     },
        //     afterDraw: function(chart, easing) {
        //         if (chart.config.options.showAllTooltips) {
        //             // we don't want the permanent tooltips to animate, so don't do anything till the animation runs atleast once
        //             if (!chart.allTooltipsOnce) {
        //                 if (easing !== 1) return;
        //                 chart.allTooltipsOnce = true;
        //             }

        //             // turn on tooltips
        //             chart.options.tooltips.enabled = true;
        //             Chart.helpers.each(chart.pluginTooltips, function(tooltip) {
        //                 tooltip.initialize();
        //                 tooltip._options.bodyFontFamily = "typeka";
        //                 tooltip._options.bodyFontStyle = "500";
        //                 tooltip._options.displayColors = false;
        //                 tooltip._options.bodyFontSize = 16;
        //                 tooltip._options.bodySpacing = 0;
        //                 tooltip._options.yPadding =  2;
        //                 tooltip._options.xPadding = 4;
        //                 tooltip._options.caretSize = 0;
        //                 tooltip._options.caretPadding = 0;
        //                 tooltip._options.cornerRadius = 0;
        //                 tooltip._options.xAlign = 'center';
        //                 tooltip._options.position = 'average';
        //                 // tooltip._options.caretSize = tooltip._options.bodyFontSize * 0.5;
        //                 //tooltip._options.cornerRadius = tooltip._options.bodyFontSize * 0.5;
        //                 tooltip.update();
        //                 // we don't actually need this since we are not animating tooltips
        //                 tooltip.pivot();
        //                 tooltip.transition(easing).draw();
        //             });
        //             chart.options.tooltips.enabled = false;
        //         }
        //     }
        // });

        // $('.chart4').each(function ( i, l ) {

        //     var id = $(this).attr("id"),
        //         type = $(this).data("type"),
        //         labels = $(this).data("labels"),
        //         background = $(this).data("background"),
        //         series = $(this).data("series"),
        //         options = $(this).data("options"),
        //         ctx = this.getContext("2d");
        //     var chart = new Chart(ctx, {
        //         'type': type,
        //         'data': {
        //             labels: labels,
        //             datasets: [{
        //                 data: series,
        //                 borderWidth: 1,
        //                 pointStyle: 'star',
        //                 backgroundColor: background,
        //                 borderColor: ['#000000', '#000000', '#000000', '#000000', '#000000', '#000000'],
        //             }]
        //         },
        //         options: {
        //             animation: {
        //                 duration: 500,
        //             },
        //             legend: {
        //                 display: false,
        //             },
        //             tooltips: {
        //                 enabled: false,
        //                 mode: 'nearest',
        //                 backgroundColor:"#000000",
        //                 callbacks: {
        //                     title: function(tooltipItems, data) {
        //                         return "";
        //                     },
        //                     label: function(tooltipItem, data) {

        //                         var datasetLabel = "";
        //                         var label = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]+'%';
        //                         return label;
        //                     }
        //                 }
        //             },
        //             showAllTooltips: true,
        //         }
        //     });

        //     var myLegendContainer = document.getElementsByClassName("sslegend");
        //     // generate HTML legend
        //     myLegendContainer[i].innerHTML = chart.generateLegend();
        //     // bind onClick event to all LI-tags of the legend
        //     var legendItems = myLegendContainer[i].getElementsByTagName('li');
        //     for (var i = 0; i < legendItems.length; i += 1) {
        //       legendItems[i].addEventListener("click", legendClickCallback, false);
        //     }

        //     function legendClickCallback(event) {
        //       event = event || window.event;

        //       var target = event.target || event.srcElement;
        //       while (target.nodeName !== 'LI') {
        //         target = target.parentElement;
        //       }
        //       var parent = target.parentElement;
        //       var chartId = parseInt(parent.classList[0].split("-")[0], 10);
        //       var chart = Chart.instances[chartId];
        //       var index = Array.prototype.slice.call(parent.children).indexOf(target);
        //       var meta = chart.getDatasetMeta(0);
        //       console.log(index);
        //         var item = meta.data[index];

        //       if (item.hidden === null || item.hidden === false) {
        //         item.hidden = true;
        //         target.classList.add('hidden');
        //       } else {
        //         target.classList.remove('hidden');
        //         item.hidden = null;
        //       }
        //       chart.update();
        //     }
        // });
    
    $('.chart4').each(function ( i, l ) {

        var id = $(this).attr("id"),
            type = $(this).data("type"),
            labels = $(this).data("labels"),
            background = $(this).data("background"),
            series = $(this).data("series"),
            ctx = this.getContext("2d"); 

            // cousom legend show
            var x_legendContainer = document.getElementById('chart4_legendcontainer');
            let x_listContainer = x_legendContainer.querySelector('li');

            if (!x_listContainer) {

                function textPass(t) {
                    x_listContainer = document.createElement('li');
                    var textnode = document.createTextNode(labels[t]);

                    x_listContainer.appendChild(textnode);
                    x_legendContainer.appendChild(x_listContainer);
                }

                for (var i = 0; i < labels.length; i += 1) {
                    addEventListener("click", textPass(i));
                }
            } 

        new Chart(ctx, {
            type: type,
            plugins: [ChartDataLabels],
            data: {
                labels: labels,
                datasets: [
                    {
                        label: "",
                        backgroundColor: background,
                        maxBarThickness: 25,
                        data: series,
                        borderWidth: 0
                    }
                ],
            },
            options: { 
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }   
                },
                aspectRatio: 1/1,
                scales: {
                    x: { 
                        display: false
                    },
                    y: {
                        display: false
                    }
                },
                plugins: {
                    datalabels: {
                        display: false,
                    },
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        mode: 'index',
                        backgroundColor: "#FFEEEE",
                        titleColor: "#1E101B",
                        xAlign: "center",
                        yAlign: "bottom",
                        padding: {
                            top: 4,
                            left: 7,
                            right: 7,
                            bottom: 0
                        },
                        titleFont: {
                            size: 14,
                            weight: 400
                        },
                        callbacks: {
                            title: function (context) { 
                                    return context[0].formattedValue + '%'; 
                            },
                            label: function (context) {
                                return false;
                            }
                        },
                    },
                }
            }
        });

        function textToLines(text, maxWidth) {
            var words = text.split(" ");
            var lines = [];
            var currentLine = words[0];

            for (var i = 1; i < words.length; i++) {
                var word = words[i];
                var width = ctx.measureText(currentLine + " " + word).width;

                if (width < maxWidth) 
                {
                    currentLine += " " + word;
                } 
                else 
                {
                    lines.push(currentLine);
                    currentLine = word;
                }
            }

            lines.push(currentLine);
            return lines;
        }
    });

    var optionsChart  = { 
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }   
        },
        aspectRatio: 1/1,
        scales: {
            x: { 
                display: false
            },
            y: {
                display: false
            }
        },
        plugins: {
            datalabels: {
                display: false,
            },
            legend: {
                display: false,
            },
            tooltip: {
                mode: 'index',
                backgroundColor: "#FFEEEE",
                titleColor: "#1E101B",
                xAlign: "center",
                yAlign: "bottom",
                padding: {
                    top: 4,
                    left: 7,
                    right: 7,
                    bottom: 0
                },
                titleFont: {
                    size: 14,
                    weight: 400
                },
                callbacks: {
                    title: function (context) { 
                            return context[0].formattedValue + '%'; 
                    },
                    label: function (context) {
                        return false;
                    }
                },
            },
        }
    }

    function textToLines(text, maxWidth) {
        var words = text.split(" ");
        var lines = [];
        var currentLine = words[0];

        for (var i = 1; i < words.length; i++) {
            var word = words[i];
            var width = ctx.measureText(currentLine + " " + word).width;

            if (width < maxWidth) 
            {
                currentLine += " " + word;
            } 
            else 
            {
                lines.push(currentLine);
                currentLine = word;
            }
        }

        lines.push(currentLine);
        return lines;
    }
    
    $('.compensationChart').each(function ( i, l ) {

        var id = $(this).attr("id"),
            type = $(this).data("type"),
            labels = $(this).data("labels"),
            background = $(this).data("background"),
            series = $(this).data("series"), 
            rotations = $(this).data("rotations"), 
            ctx = this.getContext("2d"); 

        new Chart(ctx, {
            type: type,
            plugins: [ChartDataLabels],
            data: {
                labels: labels,
                datasets: [
                    {
                        label: "",
                        backgroundColor: background,
                        maxBarThickness: 5,
                        data: series,
                        borderWidth: 0,  
                        rotation: rotations, 
                        hoverBackgroundColor: background,
                    }
                ],
            },
            options: optionsChart
        });
    });
    
    $('.genderChart').each(function ( i, l ) {

        var id = $(this).attr("id"),
            type = $(this).data("type"),
            labels = $(this).data("labels"),
            background = $(this).data("background"),
            series = $(this).data("series"), 
            ctx = this.getContext("2d"); 

        new Chart(ctx, {
            type: type,
            plugins: [ChartDataLabels],
            data: {
                labels: labels,
                datasets: [
                    {
                        label: "",
                        backgroundColor: background,
                        maxBarThickness: 5,
                        data: series,
                        borderWidth: 0,  
                        hoverBackgroundColor: background,
                    }
                ],
            },
            options: optionsChart
        });
    });
    
    $('.expectedChart').each(function ( i, l ) {

        var id = $(this).attr("id"),
            type = $(this).data("type"),
            labels = $(this).data("labels"),
            background = $(this).data("background"),
            series = $(this).data("series"), 
            ctx = this.getContext("2d");  
 
  

            // console.log(x_id);
            var x_legendContainer = document.getElementById('legendcontainer');
            let x_listContainer = x_legendContainer.querySelector('li');

            if (!x_listContainer) {

                function textPass(t) {
                    x_listContainer = document.createElement('li');
                    var textnode = document.createTextNode(labels[t]);

                    x_listContainer.appendChild(textnode);
                    x_legendContainer.appendChild(x_listContainer);
                }

                for (var i = 0; i < labels.length; i += 1) {
                    addEventListener("click", textPass(i));
                }
            }    

        var chart = new Chart(ctx, {
            type: type,
            plugins: [{ChartDataLabels}],

            data: {
                labels: labels,
                datasets: [
                    {
                        label: "",
                        backgroundColor: background,
                        data: series,
                        borderWidth: 0,  
                        hoverBackgroundColor: background,

                        // barPercentage: 0.5,
                        // barThickness: 100,
                        // maxBarThickness: 77,
                        // minBarLength: 4,
                    }
                ],
            },
            options: { 
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }   
                },
                aspectRatio: 1/1,
                scales: {
                    x: { 
                        display: false
                    },
                    y: {
                        display: false
                    }
                },
                plugins: {
                    datalabels: {
                        display: false,
                    },
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        mode: 'index',
                        backgroundColor: "#FFEEEE",
                        titleColor: "#1E101B",
                        xAlign: "center",
                        yAlign: "bottom",
                        padding: {
                            top: 4,
                            left: 7,
                            right: 7,
                            bottom: 0
                        },
                        titleFont: {
                            size: 14,
                            weight: 400
                        },
                        callbacks: {
                            title: function (context) { 
                                    return context[0].formattedValue + '%'; 
                            },
                            label: function (context) {
                                return false;
                            }
                        },
                    },
                }
            }
        });
    });
    
});