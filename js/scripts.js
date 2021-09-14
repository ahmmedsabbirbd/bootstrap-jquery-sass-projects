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
                        backgroundColor: "#f4f4f4",
                        titleColor: "#333",
                        xAlign: "center",
                        yAlign: "bottom",
                        padding: {
                            top: 5,
                            left: 5,
                            right: 5,
                            bottom: 0
                        },
                        titleFont: {
                            size: 16,
                            weight: 700
                        },
                        callbacks: {
                            title: function (context) {
                                return textToLines(context[0].label, 120);
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
                            callback: function (value, index, values) {
                                return this.getLabelForValue(value);
                            }
                        }
                    },
                    y: {
                        stacked: true,
                        grid: {
                            drawBorder: false,
                        }
                    }, 
                    suggestedMin: -10,
                    suggestedMax: 200
                },
                plugins: {
                    datalabels: {
                        display: false,
                    },
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        backgroundColor: "#f4f4f4",
                        titleColor: "#333",
                        xAlign: "center",
                        yAlign: "bottom",
                        padding: {
                            top: 5,
                            left: 5,
                            right: 5,
                            bottom: 0
                        },
                        titleFont: {
                            size: 16,
                            weight: 700
                        },
                        callbacks: {
                            title: function (context) {
                                return textToLines(context[0].series, 120);
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

});