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

});