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
                                family: 'Spartan',
                            },
                            callback: function(value, index, values) {
                                return '$' + value + 'K';
                            }
                        }
                    }
                },
                plugins: {
                    datalabels: {
                        display: false,
                    },
                    legend: {
                        boxWidth: 100,
                        position: 'bottom',
                        labels: {
                            color: '#1E101B',
                            font: {
                                size: 16,
                                weight: '700',
                                family: 'Spartan',
                            }
                        }
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

    $('.ownChart').each(function ( i, l ) {

        var type = $(this).data("type"),
            labels = $(this).data("labels"),
            background = $(this).data("background"),
            series = $(this).data("series"),
            ctx = this.getContext("2d");

        function  legend_show(id, data, color){
            var y_legendContainer = document.getElementById(id);
            let y_listContainer = y_legendContainer.querySelector('li');

            if (!y_listContainer) {

                function textPass(t) {
                    y_listContainer = document.createElement('li');
                    var textnode = document.createTextNode(data[t]);

                    if (color == true) {
                        y_listContainer.style.color = background[t];
                    }

                    
                    y_listContainer.appendChild(textnode);
                    y_legendContainer.appendChild(y_listContainer);
                }

                for (var i = 0; i < data.length; i += 1) {
                    addEventListener("click", textPass(i));
                }
            } 
        }

        legend_show('won-series-lagend', series, color=true);
        legend_show('won-series-value', labels, color=false); 

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
    
    $('.involvementChart').each(function ( i, l ) {

        var id = $(this).attr("id"),
            type = $(this).data("type"),
            labels = $(this).data("labels"),
            background = $(this).data("background"),
            series = $(this).data("series"),  
            ctx = this.getContext("2d");

            function  legend_show(id, data, color){
                var y_legendContainer = document.getElementById(id);
                let y_listContainer = y_legendContainer.querySelector('li');

                if (!y_listContainer) {

                    function textPass(t) {
                        y_listContainer = document.createElement('li');
                        var textnode = document.createTextNode(data[t]);


                        if (color == true) {
                            y_listContainer.style.color = background[t];
                        }

                        
                        y_listContainer.appendChild(textnode);
                        y_legendContainer.appendChild(y_listContainer);
                    }

                    for (var i = 0; i < data.length; i += 1) {
                        addEventListener("click", textPass(i));
                    }
                } 
            }

            legend_show('series-lagend', series, color=true);
            legend_show('series-value', labels, color=false);
 

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
    
    $('.compensationChart').each(function ( i, l ) {

        var type = $(this).data("type"),
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

        var type = $(this).data("type"),
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

        var type = $(this).data("type"),
            labels = $(this).data("labels"),
            background = $(this).data("background"),
            series = $(this).data("series"), 
            ctx = this.getContext("2d");  

            new Chart(ctx, {
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
    

    // $('.expected-shift').each(function ( i, l ) {
    //          var data = [{
    //            label: "Always Remote",
    //            data: 5.6,
    //            color: "#FBBC0A"
    //         }, {
    //            label: "Always Flexible",
    //            data: 8,
    //            color: "#8B8A96"
    //         }, {
    //            label: "Daily in Office → Remote",
    //            data: 14.4,
    //            color: "#E06031"
    //         }, {
    //            label: "Daily in Office → Flexible",
    //            data: 37.3,
    //            color: "#5ABD7B"
    //         }, {
    //            label: "Flexible → Remote",
    //            data: 2.7,
    //            color: "#372D88"
    //         }, {
    //            label: "Daily in Office (No Change)",
    //            data: 32,
    //            color: "#4285F4"
    //         }]; 

    //     var id = $(this).attr("id");
    //         // labels = $(this).data("labels"),
    //         // background = $(this).data("background"),
    //         // series = $(this).data("series");
    //         console.log(id);



    //     $.plot(id, data, { 
    //         series: {
    //              bars: {
    //                 show: true,
    //                 barWidth: 1000,
    //             },
    //             pie: {
    //                 innerRadius: 0.5,
    //                 show: true,
    //                 tilt: 1,
    //                  label: {
    //                     show: true,
    //                     radius: 1,
    //                     formatter: function(label, series) {

    //                         var x_color = series.color;
    //                         console.log(x_color); 
    //                         // series is the series object for the label
    //                         return '<div class="data-legend">' + '<span class="number d-block" style="color:' + x_color + '">'+series.data[0][1]+'%'+'</span>' + label + '</div>';
    //                     },
                         
    //                 }
    //             }
    //         }
    //     }); 
    // });

    var data = [{
       label: "Always Remote",
       data: 5.6,
       color: "#FBBC0A"
    }, {
       label: "Always Flexible",
       data: 8,
       color: "#8B8A96"
    }, {
       label: "Daily in Office → Remote",
       data: 14.4,
       color: "#E06031"
    }, {
       label: "Daily in Office → Flexible",
       data: 37.3,
       color: "#5ABD7B"
    }, {
       label: "Flexible → Remote",
       data: 2.7,
       color: "#372D88"
    }, {
       label: "Daily in Office (No Change)",
       data: 32,
       color: "#4285F4"
    }];

    $.plot('#placeholder', data, { 
        series: {
             bars: {
                show: true,
                barWidth: 1000,
            },
            pie: {
                innerRadius: 0.5,
                show: true,
                tilt: 1,
                 label: {
                    show: true,
                    radius: 1,
                    formatter: function(label, series) {

                        var x_color = series.color;
                        console.log(x_color); 
                        // series is the series object for the label
                        return '<div class="data-legend">' + '<span class="number d-block" style="color:' + x_color + '">'+series.data[0][1]+'%'+'</span>' + label + '</div>';
                    },
                     
                }
            }
        }
    });
    
});





let emne_listContainer = document.querySelector('ul');
emne_listContainer = document.createElement('ul');
console.log(emne_listContainer);

emne_listContainer.classList.value = "red";
emne_listContainer;