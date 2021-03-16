function renderIcons() {

	// Move icon
	//        if (!this.series[0].icon) {
	//            this.series[0].icon = this.renderer.path(['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8])
	//                .attr({
	//                    stroke: '#303030',
	//                    'stroke-linecap': 'round',
	//                    'stroke-linejoin': 'round',
	//                    'stroke-width': 2,
	//                    zIndex: 10
	//                });
	//            this.onMouseOver();
	////                .add(this.series[2].group);
	//        }


	//        this.series[0].icon.translate(
	//            this.chartWidth / 2 - 10,
	//            this.plotHeight / 2 - this.series[0].points[0].shapeArgs.innerR -
	//            (this.series[0].points[0].shapeArgs.r - this.series[0].points[0].shapeArgs.innerR) / 2
	//        );

	// Exercise icon
	//        if (!this.series[1].icon) {
	//            this.series[1].icon = this.renderer.path(
	//                    ['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8,
	//                        'M', 8, -8, 'L', 16, 0, 8, 8
	//                    ]
	//                )
	//                .attr({
	//                    stroke: '#ffffff',
	//                    'stroke-linecap': 'round',
	//                    'stroke-linejoin': 'round',
	//                    'stroke-width': 2,
	//                    zIndex: 10
	//                })
	//                .add(this.series[2].group);
	//        }
	//        this.series[1].icon.translate(
	//            this.chartWidth / 2 - 10,
	//            this.plotHeight / 2 - this.series[1].points[0].shapeArgs.innerR -
	//            (this.series[1].points[0].shapeArgs.r - this.series[1].points[0].shapeArgs.innerR) / 2
	//        );
	//
	//        // Stand icon
	//        if (!this.series[2].icon) {
	//            this.series[2].icon = this.renderer.path(['M', 0, 8, 'L', 0, -8, 'M', -8, 0, 'L', 0, -8, 8, 0])
	//                .attr({
	//                    stroke: '#303030',
	//                    'stroke-linecap': 'round',
	//                    'stroke-linejoin': 'round',
	//                    'stroke-width': 2,
	//                    zIndex: 10
	//                })
	//                .add(this.series[2].group);
	//        }
	//
	//        this.series[2].icon.translate(
	//            this.chartWidth / 2 - 10,
	//            this.plotHeight / 2 - this.series[2].points[0].shapeArgs.innerR -
	//            (this.series[2].points[0].shapeArgs.r - this.series[2].points[0].shapeArgs.innerR) / 2
	//        );
}

$(document).ready(function (e) {

	Highcharts.chart('container-line-distri', {
		chart: {
			type: 'column',
			height: '265px',
			events: {
				load: function () {
					this.renderer.createElement('rect.highcharts-point').attr({

						rx: 50,
						ry: 25,
						zIndex: 3
					}).add();
				}
			}
		},
		title: {
			text: null
		},
		credits: {
			enabled: false
		},
		xAxis: {
			categories: ['05 May', '10 May', '16 May', '21 May', '29 May'],
		},
		yAxis: {
			min: 0,
			title: {
				text: null
			},
			gridLineWidth: 0.8
		},

		tooltip: {
			zIndex: 99,
			backgroundColor: '#fff',
			fillOpacity: 1,
			pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
			shared: true,
			useHTML: true,
			dataLabels: {
				enabled: true,
				useHTML: true,
				backgroundColor: '#fff',
				fillOpacity: 1,
			},

		},
		legend: {
			enabled: true,
			align: 'center',
			shadow: false,
			useHTML: true,
			y: 0,
			//				padding: 0,
			//				itemMarginTop: 0,
			itemMarginBottom: 0,
			width: 750,
			verticalAlign: 'bottom',
		},
		series: {
			stacking: 'normal',
			pointWidth: 20,
			pointPadding: 0,
			maxPointWidth: 20,
			showCheckbox: true
		},

		plotOptions: {
			column: {
				stacking: 'percent',
			},
			series: {
				pointWidth: 15,
				borderRadius: 3

			},

		},
		series: [{
				//                name: '<span class="wHover all"><img src="../images/web-site.png" height="25" style="padding-bottom:5px;padding-right:5px"></span>',<span><label for="g1" class="checkbox-g blue"></label></span>
				name: '<span class="wh " style=""><span class="bb-span"></span>WEBSITE</span>',
				data: [5, 3, 4, 7, 2],
				color: "#ED723D",
				dataLabels: {
					width: 50,
				},

		}, {
				//                name: '<span class="mHover all"><img src="../images/mobile.png" height="25"  style="padding-bottom:5px;padding-right:5px"></span>',
				name: '<span class="mh " style=""><span class="bb-span"></span>MOBILE</span>',
				data: [2, 2, 3, 2, 1],
				color: "#5DBEFF",
				dataLabels: {
					width: 50,
				}
		},
			{
				//                name: '<span class="loHover all"><img src="../images/load-times.png" height="25" style="padding-bottom:5px;padding-right:5px"></span>',
				name: '<span class="lh " style=""><span class="bb-span"></span>LOAD. TIME</span>',
				data: [2, 2, 3, 2, 1],
				color: "#E88ED7",
				dataLabels: {
					width: 50,
				}
		},
			{
				//                name: '<span class="gaHover all"><img src="../images/GAnalysis.png" height="25" style="padding-bottom:5px;padding-right:5px"></span>',
				name: '<span class="gh " style=""><span class="bb-span"></span>G.ANALYTICS</span>',
				data: [2, 2, 3, 2, 1],
				color: "#F5c100"

		},
			{

				name: '<span class="sh " style=""><span class="bb-span"></span>SEARCH CONSOLE</span>',
				data: [2, 2, 3, 2, 1],
				color: "#9E6244"
		},
			{
				//                name: '<span class="yHover all"><img src="../images/youtube.png" height="25" style="padding-bottom:5px;padding-right:5px"></span>',
				name: '<span class="yh " style=""><span class="bb-span"></span>YOUTUBE</span>',
				data: [2, 2, 3, 2, 1],
				color: "#FF0000"
		},
			{
				//                name: '<span class="gmbHover all"><img src="../images/gmb.png" height="25" style="padding-bottom:5px;padding-right:5px"></span>',
				name: '<span class="gmh " style=""><span class="bb-span"></span>GMB</span>',
				data: [2, 2, 3, 2, 1],
				color: "#FF7994"

		}, {
				//                name: '<span class="lHover all"><img src="../images/logs.png" height="25" style="padding-bottom:5px;padding-right:5px"></span>',
				name: '<span class="loh " style=""><span class="bb-span"></span>LOGS</span>',
				data: [3, 4, 4, 2, 5],
				color: "#5f6dd7"

		}
	]
	});

	Highcharts.chart('container-line-distri-b', {
		chart: {
			type: 'column',
			height: '265px',
		},
		title: {
			text: null
		},
		credits: {
			enabled: false
		},
		xAxis: {
			categories: ['05 May', '10 May', '16 May', '21 May', '29 May'],
		},
		yAxis: {
			min: 0,
			title: {
				text: null
			},
			gridLineWidth: 0.8,
		},


		tooltip: {
			zIndex: 99,
			backgroundColor: '#fff',
			fillOpacity: 1,
			pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
			shared: true,
			useHTML: true,
			dataLabels: {
				enabled: true,
				useHTML: true,
				backgroundColor: '#fff',
				fillOpacity: 1,
			},

		},
		//    		legend: {
		//
		//    			shadow: false,
		//    			useHTML: true,
		//				verticalAlign: 'top',
		//    		},
		legend: {
			enabled: true,
			align: 'center',
			shadow: false,
			useHTML: true,
			y: 0,
			//				padding: 0,
			//				itemMarginTop: 0,
			itemMarginBottom: 0,
			//				width:750,
			verticalAlign: 'bottom',
		},
		series: {
			stacking: 'normal',
			pointWidth: 20,
			pointPadding: 0,
			maxPointWidth: 20,
		},

		plotOptions: {
			column: {
				stacking: 'percent',
			},
			series: {
				pointWidth: 15,
				borderRadius: 3
			}
		},
		series: [{
				//                name: '<span class="wHover all"><img src="../images/web-site.png" height="25" style="padding-bottom:5px;padding-right:5px"></span>',<span><label for="g1" class="checkbox-g blue"></label></span>
				name: '<span class="wh " style=""><span class="bb-span-b"></span>TECHNICAL/CONTENT</span>',
				data: [5, 3, 4, 7, 2],
				color: "#ED723D",
				dataLabels: {
					width: 50,
				}

		}, {
				//                name: '<span class="mHover all"><img src="../images/mobile.png" height="25"  style="padding-bottom:5px;padding-right:5px"></span>',
				name: '<span class="mh " style=""><span class="bb-span-b"></span>NETLINKING</span>',
				data: [2, 2, 3, 2, 1],
				color: "#5DBEFF",
				dataLabels: {
					width: 50,
				}
		}

	]
	});

	Highcharts.chart('container-line-mobile-3', {
		chart: {
			type: 'column',
			height: '265px',
		},
		title: {
			text: null
		},
		credits: {
			enabled: false
		},
		xAxis: {
			categories: ['05 May', '10 May', '16 May', '21 May', '29 May'],
		},
		yAxis: {
			min: 0,
			title: {
				text: null
			},
			gridLineWidth: 0.8,
		},


		tooltip: {
			zIndex: 99,
			backgroundColor: '#fff',
			fillOpacity: 1,
			pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
			shared: true,
			useHTML: true,
			dataLabels: {
				enabled: true,
				useHTML: true,
				backgroundColor: '#fff',
				fillOpacity: 1,
			},

		},
		//    		legend: {
		//
		//    			shadow: false,
		//    			useHTML: true,
		//				verticalAlign: 'top',
		//    		},
		legend: {
			enabled: true,
			align: 'center',
			shadow: false,
			useHTML: true,
			y: 0,
			//				padding: 0,
			//				itemMarginTop: 0,
			itemMarginBottom: 0,
			//				width:750,
			verticalAlign: 'bottom',
		},
		series: {
			stacking: 'normal',
			pointWidth: 20,
			pointPadding: 0,
			maxPointWidth: 20,
		},

		plotOptions: {
			column: {
				stacking: 'percent',
			},
			series: {
				pointWidth: 15,
				borderRadius: 3
			}
		},
		series: [{
				name: '<span class="wh " style=""><span class="bb-span-b"></span>CONTENT ADAPTATION</span>',
				data: [5, 3, 4, 7, 2],
				color: "#ED723D",
				dataLabels: {
					width: 50,
				}

		}, {
				name: '<span class="mh " style=""><span class="bb-span-b"></span>SPEED</span>',
				data: [2, 2, 3, 2, 1],
				color: "#5DBEFF",
				dataLabels: {
					width: 50,
				}
		},{
				name: '<span class="lh " style=""><span class="bb-span"></span>WEBSITE STRUCTURE</span>',
				data: [2, 2, 3, 2, 1],
				color: "#E88ED7",
				dataLabels: {
					width: 50,
				}
		}

	]
	});

	Highcharts.chart('container-line-load-3', {
		chart: {
			type: 'column',
			height: '265px',
		},
		title: {
			text: null
		},
		credits: {
			enabled: false
		},
		xAxis: {
			categories: ['05 May', '10 May', '16 May', '21 May', '29 May'],
		},
		yAxis: {
			min: 0,
			title: {
				text: null
			},
			gridLineWidth: 0.8,
		},


		tooltip: {
			zIndex: 99,
			backgroundColor: '#fff',
			fillOpacity: 1,
			pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
			shared: true,
			useHTML: true,
			dataLabels: {
				enabled: true,
				useHTML: true,
				backgroundColor: '#fff',
				fillOpacity: 1,
			},

		},
		//    		legend: {
		//
		//    			shadow: false,
		//    			useHTML: true,
		//				verticalAlign: 'top',
		//    		},
		legend: {
			enabled: true,
			align: 'center',
			shadow: false,
			useHTML: true,
			y: 0,
			//				padding: 0,
			//				itemMarginTop: 0,
			itemMarginBottom: 0,
			//				width:750,
			verticalAlign: 'bottom',
		},
		series: {
			stacking: 'normal',
			pointWidth: 20,
			pointPadding: 0,
			maxPointWidth: 20,
		},

		plotOptions: {
			column: {
				stacking: 'percent',
			},
			series: {
				pointWidth: 15,
				borderRadius: 3
			}
		},
		series: [{
				name: '<span class="wh " style=""><span class="bb-span-b"></span>DESKTOP</span>',
				data: [5, 3, 4, 7, 2],
				color: "#ED723D",
				dataLabels: {
					width: 50,
				}

		}, {
				name: '<span class="mh " style=""><span class="bb-span-b"></span>MOBILE</span>',
				data: [2, 2, 3, 2, 1],
				color: "#5DBEFF",
				dataLabels: {
					width: 50,
				}
		}

	]
	});

	Highcharts.chart('container-line-g-3', {
		chart: {
			type: 'column',
			height: '265px',
		},
		title: {
			text: null
		},
		credits: {
			enabled: false
		},
		xAxis: {
			categories: ['05 May', '10 May', '16 May', '21 May', '29 May'],
		},
		yAxis: {
			min: 0,
			title: {
				text: null
			},
			gridLineWidth: 0.8,
		},


		tooltip: {
			zIndex: 99,
			backgroundColor: '#fff',
			fillOpacity: 1,
			pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
			shared: true,
			useHTML: true,
			dataLabels: {
				enabled: true,
				useHTML: true,
				backgroundColor: '#fff',
				fillOpacity: 1,
			},

		},
		//    		legend: {
		//
		//    			shadow: false,
		//    			useHTML: true,
		//				verticalAlign: 'top',
		//    		},
		legend: {
			enabled: true,
			align: 'center',
			shadow: false,
			useHTML: true,
			y: 0,
			//				padding: 0,
			//				itemMarginTop: 0,
			itemMarginBottom: 0,
			//				width:750,
			verticalAlign: 'bottom',
		},
		series: {
			stacking: 'normal',
			pointWidth: 20,
			pointPadding: 0,
			maxPointWidth: 20,
		},

		plotOptions: {
			column: {
				stacking: 'percent',
			},
			series: {
				pointWidth: 15,
				borderRadius: 3
			}
		},
		series: [{
				name: '<span class="wh " style=""><span class="bb-span-b"></span>DATA INTEGRITY</span>',
				data: [5, 3, 4, 7, 2],
				color: "#ED723D",
				dataLabels: {
					width: 50,
				}

		}, {
				name: '<span class="mh " style=""><span class="bb-span-b"></span>CONFIGURATION</span>',
				data: [2, 2, 3, 2, 1],
				color: "#5DBEFF",
				dataLabels: {
					width: 50,
				}
		},{
				name: '<span class="lh " style=""><span class="bb-span"></span>TRACKING CODE</span>',
				data: [2, 2, 3, 2, 1],
				color: "#E88ED7",
				dataLabels: {
					width: 50,
				}
		},
			{
				name: '<span class="gh " style=""><span class="bb-span"></span>LEGAL</span>',
				data: [2, 2, 3, 2, 1],
				color: "#F5c100",
				dataLabels: {
					width: 50,
				}

		}

	]
	});

	Highcharts.chart('container-line-youtube-3', {
		chart: {
			type: 'column',
			height: '265px',
		},
		title: {
			text: null
		},
		credits: {
			enabled: false
		},
		xAxis: {
			categories: ['05 May', '10 May', '16 May', '21 May', '29 May'],
		},
		yAxis: {
			min: 0,
			title: {
				text: null
			},
			gridLineWidth: 0.8,
		},


		tooltip: {
			zIndex: 99,
			backgroundColor: '#fff',
			fillOpacity: 1,
			pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
			shared: true,
			useHTML: true,
			dataLabels: {
				enabled: true,
				useHTML: true,
				backgroundColor: '#fff',
				fillOpacity: 1,
			},

		},
		//    		legend: {
		//
		//    			shadow: false,
		//    			useHTML: true,
		//				verticalAlign: 'top',
		//    		},
		legend: {
			enabled: true,
			align: 'center',
			shadow: false,
			useHTML: true,
			y: 0,
			//				padding: 0,
			//				itemMarginTop: 0,
			itemMarginBottom: 0,
			//				width:750,
			verticalAlign: 'bottom',
		},
		series: {
			stacking: 'normal',
			pointWidth: 20,
			pointPadding: 0,
			maxPointWidth: 20,
		},

		plotOptions: {
			column: {
				stacking: 'percent',
			},
			series: {
				pointWidth: 15,
				borderRadius: 3
			}
		},
		series: [{
				name: '<span class="wh " style=""><span class="bb-span-b"></span>CHANNEL</span>',
				data: [5, 3, 4, 7, 2],
				color: "#ED723D",
				dataLabels: {
					width: 50,
				}

		}, {
				name: '<span class="mh " style=""><span class="bb-span-b"></span>VIDEOS</span>',
				data: [2, 2, 3, 2, 1],
				color: "#5DBEFF",
				dataLabels: {
					width: 50,
				}
		},{
				name: '<span class="lh " style=""><span class="bb-span"></span>PLAYLISTS</span>',
				data: [2, 2, 3, 2, 1],
				color: "#E88ED7",
				dataLabels: {
					width: 50,
				}
		}

	]
	});

});

donut_graph($('#container'));
donut_graph($('#container2'));
donut_graph($('#container2-mobile'));
donut_graph($('#container2-load'));
donut_graph($('#container2-g'));
donut_graph($('#container2-search'));
donut_graph($('#container2-youtube'));
donut_graph($('#container2-gmb'));
donut_graph($('#container2-logs'));

function donut_graph(vidd) {
	vidd.highcharts({
		chart: {
			type: 'solidgauge',
			height: '160px',
			events: {
				render: renderIcons
			}
		},

		title: {
			text: '',
			//                text: 'Overall score',
			style: {
				fontSize: '16px',
				fontWeight: 'bold',
				fontFamily: 'Proxima Nova Light',
				color: '#6b6b6b'
			},
			align: 'left'
		},
		tooltip: {
			enabled: false
		},

		yAxis: {
			min: 0,
			max: 100,
			lineWidth: 0,
			tickPositions: []
		},

		plotOptions: {
			solidgauge: {
				borderWidth: '12px',
				dataLabels: {
					enabled: true,
					y: -30,
					borderWidth: 0,
					backgroundColor: 'none',
					useHTML: true,
					shadow: false,
					style: {
						fontSize: '20px',
						lineHeight: '30px'
					},
					valueSuffix: '%',
					pointFormat: '<span style="font-size:30px; color: #6b6b6b; font-weight: bold;font-family: Proxima Nova Light;">{point.y}%</span><br><span style="color:#3DD674;font-size:15px;">{series.name}</span>',
					positioner: function (labelWidth) {
						return {
							x: (this.chart.chartWidth - labelWidth) / 2,
							y: (this.chart.plotHeight / 2) + 30
						};
					}
				},
				linecap: 'round',
				stickyTracking: true
			}
		},
		pane: {
			startAngle: 0,
			endAngle: 360,
			background: [{
				outerRadius: '105%',
				innerRadius: '88%',
				backgroundColor: '#D7F5E2',
				borderWidth: 0
				}]
		},

		series: [{
			name: '<i class="fa fa-caret-up" aria-hidden="true"></i> <span style="font-size:14px;">1.5k</span>',
			data: [{
				color: '#3DD674',
				radius: '112%',
				innerRadius: '80%',
				y: 60
				}]
			}]
	})
}

line_graph($('#container-line'), 0);
line_graph($('#container-line-2'), 0);
line_graph($('#container-line-3'), 0);
line_graph($('#container-line-cumu'), 0.1);
line_graph($('#container-line-cumu-b'), 0.1);

line_graph($('#container-line-mobile-1'), 0);
line_graph($('#container-line-mobile-2'), 0.1);

line_graph($('#container-line-load-1'), 0);
line_graph($('#container-line-load-2'), 0.1);

line_graph($('#container-line-g-1'), 0);
line_graph($('#container-line-g-2'), 0.1);

line_graph($('#container-line-search-1'), 0);
line_graph($('#container-line-search-2'), 0.1);

line_graph($('#container-line-youtube-1'), 0);
line_graph($('#container-line-youtube-2'), 0.1);

line_graph($('#container-line-gmb-1'), 0);
line_graph($('#container-line-gmb-2'), 0.1);

line_graph($('#container-line-logs-1'), 0);
line_graph($('#container-line-logs-2'), 0.1);

function line_graph(title, fill) {
	title.highcharts({
		chart: {
			type: 'areaspline',
			height: '265px',
		},
		credits: {
			enabled: false
		},
		title: {
			text: ''
		},
		subtitle: {
			enabled: false
		},
		xAxis: {
			categories: ['', '05 May', '', '10 May', '', '15 May', '', '20 May', '', '25 May', '', '30 May'],
			tickmarkPlacement: 'on',
			title: {
				enabled: false
			},
			tickInterval: 0,
			gridLineWidth: 0.8,
			title: false,
			plotBands: [
				{
					from: 1,
					to: 2,
					color: 'rgba(247, 247, 249, 0.8)'
					},
				{
					from: 3,
					to: 4,
					color: 'rgba(247, 247, 249, 0.8)'
					},
				{
					from: 5,
					to: 6,
					color: 'rgba(247, 247, 249, 0.8)'
					},
				{
					from: 7,
					to: 8,
					color: 'rgba(247, 247, 249, 0.8)'
					}
				],

		},
		yAxis: {
			title: {
				enabled: false
			},
			visible: true,
			min: 0,
			gridLineDashStyle: 'longdash',
			gridLineWidth: 0,
			labels: {
				align: 'left',
				x: 0,
				y: 0
			}

		},
		tooltip: {
			crosshairs: [false, false],
			shared: true,
			animation: true,

		},
		plotOptions: {
			title: false,
			series: {

				lineWidth: 2,
				fillOpacity: fill,

				marker: {
					symbol: 'circle',
					radius: 4,
					states: {
						hover: {
							enabled: true,
							radius: 3
						}
					}
				},

			}
		},
		legend: {
			enabled: false,

		},
		series: [{
			name: 'line1',
			color: '#519ffb',
			data: [8000, 21000, 8000, 12000, 5000, 2000, 29000, 1000, 8000, 12000]
		}]
	});
}

cicle_graph($('#container-a'), '#3DD674', '#D7F5E2', 60);
cicle_graph($('#container-b'), '#FF0D12', '#FFD2D3', 11);
cicle_graph($('#container-c'), '#FEB654', '#FFF2DF', 90);
cicle_graph($('#container-d'), '#FFE052', '#FFFADF', 50);
cicle_graph($('#container-e'), '#FEB654', '#FFF2DF', 17);
cicle_graph($('#container-f'), '#3DD674', '#D7F5E2', 14);
cicle_graph($('#container-g'), '#D6D8DC', '#D6D8DC', 0);
cicle_graph($('#container-h'), '#FEB654', '#FFF2DF', 10);

cicle_graph($('#container-website'), '#3DD674', '#D7F5E2', 10);
cicle_graph($('#container-mobile'), '#FF0D12', '#FFD2D3', 11);

cicle_graph($('#container-themetic-mobile-1'), '#3DD674', '#D7F5E2', 10);
cicle_graph($('#container-themetic-mobile-2'), '#FF0D12', '#FFD2D3', 11);
cicle_graph($('#container-themetic-mobile-3'), '#FEB654', '#FFF2DF', 10);

cicle_graph($('#container-themetic-load-1'), '#3DD674', '#D7F5E2', 10);
cicle_graph($('#container-themetic-load-2'), '#FF0D12', '#FFD2D3', 11);

cicle_graph($('#container-themetic-g-1'), '#3DD674', '#D7F5E2', 10);
cicle_graph($('#container-themetic-g-2'), '#FF0D12', '#FFD2D3', 11);
cicle_graph($('#container-themetic-g-3'), '#3DD674', '#D7F5E2', 10);
cicle_graph($('#container-themetic-g-4'), '#FEB654', '#FFF2DF', 11);

cicle_graph($('#container-themetic-youtube-1'), '#3DD674', '#D7F5E2', 10);
cicle_graph($('#container-themetic-youtube-2'), '#FF0D12', '#FFD2D3', 11);
cicle_graph($('#container-themetic-youtube-3'), '#FEB654', '#FFF2DF', 10);

function cicle_graph(title, bg, bgb, val) {
	title.highcharts({

		chart: {
			type: 'solidgauge',
			height: '100%',
			events: {
				render: renderIcons
			}
		},

		title: {
			text: '',
			style: {
				fontSize: '20px',
				fontWeight: 'bold',
				fontFamily: 'Proxima Nova Light',
				color: '#6b6b6b'
			},
			align: 'left'
		},
		tooltip: {
			enabled: false
		},
		yAxis: {
			min: 0,
			max: 100,
			lineWidth: 0,
			tickPositions: []
		},

		plotOptions: {
			solidgauge: {
				borderWidth: '12px',
				dataLabels: {
					enabled: true,
					y: -15,
					borderWidth: 0,
					backgroundColor: 'none',
					useHTML: true,
					shadow: false,
					style: {
						fontSize: '12px',
						lineHeight: '10px'
					},
					valueSuffix: '%',
					pointFormat: '<span style="font-size:16px; color: #6b6b6b; font-weight: bold;font-family:Proxima Nova Light">{point.y}%</span><br><span style="color:#3DD674;font-size:10px;font-family:Proxima Nova Light;line-height: 20px;">{series.name}</span>',
					positioner: function (labelWidth) {
						return {
							x: (this.chart.chartWidth - labelWidth) / 2,
							y: (this.chart.plotHeight / 2) + 30
						};
					}
				},
				linecap: 'round',
				stickyTracking: true
			}
		},
		pane: {
			startAngle: 0,
			endAngle: 360,
			background: [{
				outerRadius: '105%',
				innerRadius: '88%',
				backgroundColor: bgb,
				borderWidth: 0
						}]
		},

		series: [{
			name: '<i class="fa fa-caret-up" aria-hidden="true"></i> 1.5k',
			data: [{
				color: bg,
				radius: '112%',
				innerRadius: '80%',
				y: val
			}]
		 }]

	});
}

$(document).ready(function () {

	$('[data-toggle="tooltip"]').tooltip();

	//    	$('#example').dataTable({
	//    		"ordering": false,
	//			"info":false,
	//			"lengthChange":false,
	//			"paging":   false,
	//    		"pagingType": "simple",
	//    		"searching": false,
	//    		"sDom": 'Rfrtlip',
	////    		"language": {
	////    			"lengthMenu": "SHOW ROW  _MENU_",
	////    			"info": "_START_ - _END_ -  _TOTAL_",
	////    			"oPaginate": {
	////
	////    				"sPrevious": "<i class='fa fa-angle-left' aria-hidden='true'></i>",
	////    				"sNext": "<i class='fa fa-angle-right' aria-hidden='true'></i>",
	////    			},
	////    		}
	//    	});

	$(".protab .progress-bar").hover(function () {

		var did = $(this).data('id');

		//			$(".protab .progress-bar").css({
		//    			'opacity': '0.3',
		//    			'transition': 'visibility 0s'
		//    		});
		//
		//			$(this).css({
		//    			'opacity': '1'
		//    		});

		$(".out").css({
			'opacity': '0.3',
			'transition': 'visibility 0s'
		});

		$(".out-" + did).css({
			'opacity': '1',
			'transition': 'visibility 0s'
		});

	}, function () {
		//			$(".protab .progress-bar").css({
		//    			'opacity': '1',
		//    			'transition': 'visibility 0s'
		//    		});

		$(".out").css({
			'opacity': '1',
			'transition': 'visibility 0s'
		});
	});

	$(".out").hover(function () {
		var did = $(this).data('id');

		//			$(".out").css({
		//    			'opacity': '0.3',
		//    			'transition': 'visibility 0s'
		//    		});
		//
		//			$(this).css({
		//    			'opacity': '1'
		//    		});

		$(".protab .progress-bar").css({
			'opacity': '0.3',
			'transition': 'visibility 0s, opacity 0.2s linear'
		});


		$(".bar-" + did).css({
			'opacity': '1',
			'transition': 'visibility 0s'
		});

	}, function () {

		//			$(".out").css({
		//    			'opacity': '1',
		//    			'transition': 'visibility 0s'
		//    		});

		$(".protab .progress-bar").css({
			'opacity': '1',
			'transition': 'visibility 0s'
		});

	});


	//    	$(".bar19").hover(function () {
	//    		$(".out-20").css({
	//    			'opacity': '0.3',
	//    			'transition': 'visibility 0s, opacity 0.2s linear'
	//    		});
	//
	//    	}, function () {
	//    		$(".out-20").css({
	//    			'opacity': '1'
	//    		});
	//
	//    	});
	//
	//    	$(".bar20").hover(function () {
	//    		$(".out-19").css({
	//    			'opacity': '0.3',
	//    			'transition': 'visibility 0s, opacity 0.2s linear'
	//    		});
	//
	//    	}, function () {
	//    		$(".out-19").css({
	//    			'opacity': '1'
	//    		});
	//
	//    	});

});


var elevationData = [

[44.9, 596],
[45.0, 599],
[45.1, 601],
[45.2, 601],
[45.3, 604],
[45.4, 607],
[45.5, 607],
[45.6, 607],
[45.7, 607],
[45.8, 605],
[45.9, 607],
[46.0, 609],
[46.1, 612],
[46.2, 613],
[46.3, 614],
[46.4, 614],
[46.5, 614],
[46.6, 616],
[46.7, 616],
[46.8, 615],
[46.9, 615],
[47.0, 618],
[47.1, 617],
[47.2, 615],
[47.3, 614],
[47.4, 613],
[47.5, 613],
[47.6, 613],
[47.7, 613],
[47.8, 612],
[47.9, 612],
[48.0, 609],
[48.1, 610],
[48.2, 603],
[48.3, 598],
[48.4, 598],
[48.5, 596],
[48.6, 595],
[48.7, 593],
[48.8, 590],
[48.9, 587],
[49.0, 583],
[49.1, 580],
[49.2, 576],
[49.3, 569],
[49.4, 568],
[49.5, 566],
[49.6, 560],
[49.7, 559],
[49.8, 558],
[49.9, 562],
[50.0, 564],
[50.1, 563],
[50.2, 563],
[50.3, 567],
[50.4, 574],
[50.5, 577],
[50.6, 580],
[50.7, 581],
[50.8, 579],
[50.9, 579],
[51.0, 578],
[51.1, 574],
[51.2, 569],
[51.3, 564],
[51.4, 558],
[51.5, 554],
[51.6, 550],
[51.7, 543],
[51.8, 539],
[51.9, 536],
[52.0, 532],
[52.1, 530],
[52.2, 529],
[52.3, 528],
[52.4, 528],
[52.5, 528],
[52.6, 528],
[52.7, 527],
[52.8, 527],
[52.9, 528],
[53.0, 529],
[53.1, 528],
[53.2, 526],
[53.3, 526],
[53.4, 524],
[53.5, 519],
[53.6, 517],
[53.7, 517],
[53.8, 522],
[53.9, 521],
[54.0, 520],
[54.1, 518],
[54.2, 513],
[54.3, 518],
[54.4, 520],
[54.5, 523],
[54.6, 526],
[54.7, 522],
[54.8, 513],
[54.9, 512],
[55.0, 513],
[55.1, 513],
[55.2, 518],
[55.3, 522],
[55.4, 526],
[55.5, 526],
[55.6, 525],
[55.7, 522],
[55.8, 520],
[55.9, 519],
[56.0, 518],
[56.1, 518],
[56.2, 518],
[56.3, 517],
[56.4, 516],
[56.5, 517],
[56.6, 517],
[56.7, 517],
[56.8, 521],
[56.9, 522],
[57.0, 518],
[57.1, 517],
[57.2, 514],
[57.3, 515],
[57.4, 513],
[57.5, 511],
[57.6, 511],
[57.7, 511],
[57.8, 510],
[57.9, 510],
[58.0, 509],
[58.1, 509],
[58.2, 509],
[58.3, 509],
[58.4, 509],
[58.5, 509],
[58.6, 509],
[58.7, 509],
[58.8, 509],
[58.9, 510],
[59.0, 510],
[59.1, 521],
[59.2, 524],
[59.3, 528],
[59.4, 533],
[59.5, 539],
[59.6, 545],
[59.7, 551],
[59.8, 562],
[59.9, 572],
[60.0, 579],
[60.1, 585],
[60.2, 593],
[60.3, 596],
[60.4, 605],
[60.5, 617],
[60.6, 620],
[60.7, 627],
[60.8, 628],
[60.9, 627],
[61.0, 627],
[61.1, 628],
[61.2, 629],
[61.3, 632],
[61.4, 634],
[61.5, 638],
[61.6, 637],
[61.7, 638],
[61.8, 639],
[61.9, 640],
[62.0, 640],
[62.1, 639],
[62.2, 639],
[62.3, 637],
[62.4, 637],
[62.5, 636],
[62.6, 637],
[62.7, 636],
[62.8, 637],
[62.9, 635],
[63.0, 629],
[63.1, 626],
[63.2, 626],
[63.3, 623],
[63.4, 621],
[63.5, 621],
[63.6, 621],
[63.7, 622],
[63.8, 625],
[63.9, 626],
[64.0, 629],
[64.1, 631],
[64.2, 633],
[64.3, 631],
[64.4, 632],
[64.5, 634],
[64.6, 637],
[64.7, 637],
[64.8, 637],
[64.9, 637],
[65.0, 638],
[65.1, 641],
[65.2, 644],
[65.3, 646],
[65.4, 649],
[65.5, 648],
[65.6, 647],
[65.7, 647],
[65.8, 649],
[65.9, 650],
[66.0, 651],
[66.1, 654],
[66.2, 652],
[66.3, 651],
[66.4, 650],
[66.5, 650],
[66.6, 649],
[66.7, 648],
[66.8, 648],
[66.9, 648],
[67.0, 649],
[67.1, 650],
[67.2, 647],
[67.3, 642],
[67.4, 641],
[67.5, 638],
[67.6, 636],
[67.7, 635],
[67.8, 633],
[67.9, 636],
[68.0, 638],
[68.1, 639],
[68.2, 641],
[68.3, 643],
[68.4, 644],
[68.5, 645],
[68.6, 649],
[68.7, 651],
[68.8, 648],
[68.9, 645],
[69.0, 640],
[69.1, 637],
[69.2, 637],
[69.3, 637],
[69.4, 635],
[69.5, 630],
[69.6, 628],
[69.7, 625],
[69.8, 622],
[69.9, 620],
[70.0, 618],
[70.1, 613],
[70.2, 612],
[70.3, 608],
[70.4, 603],
[70.5, 599],
[70.6, 597],
[70.7, 591],
[70.8, 590],
[70.9, 587],
[71.0, 584],
[71.1, 584],
[71.2, 582],
[71.3, 574],
[71.4, 572],
[71.5, 570],
[71.6, 572],
[71.7, 573],
[71.8, 575],
[71.9, 578],
[72.0, 590],
[72.1, 595],
[72.2, 595],
[72.3, 579],
[72.4, 581],
[72.5, 583],
[72.6, 583],
[72.7, 583],
[72.8, 583],
[72.9, 580],
[73.0, 579],
[73.1, 584],
[73.2, 587],
[73.3, 594],
[73.4, 597],
[73.5, 597],
[73.6, 596],
[73.7, 593],
[73.8, 591],
[73.9, 596],
[74.0, 596],
[74.1, 598],
[74.2, 598],
[74.3, 595],
[74.4, 592],
[74.5, 592],
[74.6, 592],
[74.7, 594],
[74.8, 597],
[74.9, 600],
[75.0, 601],
[75.1, 605],
[75.2, 604],
[75.3, 604],
[75.4, 607],
[75.5, 607],
[75.6, 607],
[75.7, 604],
[75.8, 605],
[75.9, 608],
[76.0, 616],
[76.1, 618],
[76.2, 629],
[76.3, 633],
[76.4, 634],
[76.5, 637],
[76.6, 644],
[76.7, 650],
[76.8, 653],
[76.9, 653],
[77.0, 657],
[77.1, 664],
[77.2, 668],
[77.3, 668],
[77.4, 668],
[77.5, 672],
[77.6, 674],
[77.7, 679],
[77.8, 681],
[77.9, 689],
[78.0, 692],
[78.1, 704],
[78.2, 708],
[78.3, 714],
[78.4, 716],
[78.5, 719],
[78.6, 722],
[78.7, 729],
[78.8, 733],
[78.9, 735],
[79.0, 736],
[79.1, 737],
[79.2, 737],
[79.3, 737],
[79.4, 737],
[79.5, 736],
[79.6, 736],
[79.7, 736],
[79.8, 737],
[79.9, 737],
[80.0, 737],


];

global_graph($('#smGraph1'), 'Website');
global_graph($('#smGraph2'), 'Mobile');
global_graph($('#smGraph3'), 'Load. time');
global_graph($('#smGraph4'), 'G.Analytics');
global_graph($('#smGraph5'), 'Search Console');
global_graph($('#smGraph6'), 'Youtube');
global_graph($('#smGraph7'), 'GMB');
global_graph($('#smGraph8'), 'Logs');
global_graph($('#smGraph9'), 'Technical');
global_graph($('#smGraph10'), 'Netlink');

global_graph($('#smGraph11'), 'Detail');
global_graph($('#smGraph12'), 'Detail');
global_graph($('#smGraph13'), 'Detail');
global_graph($('#smGraph14'), 'Detail');
global_graph($('#smGraph15'), 'Detail');
global_graph($('#smGraph16'), 'Detail');
global_graph($('#smGraph17'), 'Detail');
global_graph($('#smGraph18'), 'Detail');
global_graph($('#smGraph19'), 'Detail');
global_graph($('#smGraph20'), 'Detail');
global_graph($('#smGraph21'), 'Detail');
global_graph($('#smGraph22'), 'Detail');
global_graph($('#smGraph23'), 'Detail');

//mobile
global_graph($('#smGraph-mobile-1'), 'Content adaptation');
global_graph($('#smGraph-mobile-2'), 'Speed');
global_graph($('#smGraph-mobile-3'), 'Website structure');

global_graph($('#smGraph30'), 'Detail');
global_graph($('#smGraph31'), 'Detail');
global_graph($('#smGraph32'), 'Detail');
global_graph($('#smGraph33'), 'Detail');
global_graph($('#smGraph34'), 'Detail');
global_graph($('#smGraph35'), 'Detail');
global_graph($('#smGraph36'), 'Detail');
global_graph($('#smGraph37'), 'Detail');
global_graph($('#smGraph38'), 'Detail');
global_graph($('#smGraph39'), 'Detail');

//load
global_graph($('#smGraph-load-1'), 'Content adaptation');
global_graph($('#smGraph-load-2'), 'Speed');

global_graph($('#smGraph40'), 'Detail');
global_graph($('#smGraph41'), 'Detail');
global_graph($('#smGraph42'), 'Detail');
global_graph($('#smGraph43'), 'Detail');
global_graph($('#smGraph44'), 'Detail');
global_graph($('#smGraph45'), 'Detail');
global_graph($('#smGraph46'), 'Detail');
global_graph($('#smGraph47'), 'Detail');
global_graph($('#smGraph48'), 'Detail');
global_graph($('#smGraph49'), 'Detail');

//g
global_graph($('#smGraph-g-1'), 'Content adaptation');
global_graph($('#smGraph-g-2'), 'Speed');
global_graph($('#smGraph-g-3'), 'Speed');
global_graph($('#smGraph-g-4'), 'Speed');

global_graph($('#smGraph50'), 'Detail');
global_graph($('#smGraph51'), 'Detail');
global_graph($('#smGraph52'), 'Detail');
global_graph($('#smGraph53'), 'Detail');
global_graph($('#smGraph54'), 'Detail');
global_graph($('#smGraph55'), 'Detail');
global_graph($('#smGraph56'), 'Detail');
global_graph($('#smGraph57'), 'Detail');
global_graph($('#smGraph58'), 'Detail');
global_graph($('#smGraph59'), 'Detail');

//youtube
global_graph($('#smGraph-youtube-1'), 'Content adaptation');
global_graph($('#smGraph-youtube-2'), 'Speed');
global_graph($('#smGraph-youtube-3'), 'Speed');

global_graph($('#smGraph60'), 'Detail');
global_graph($('#smGraph61'), 'Detail');
global_graph($('#smGraph62'), 'Detail');
global_graph($('#smGraph63'), 'Detail');
global_graph($('#smGraph64'), 'Detail');
global_graph($('#smGraph65'), 'Detail');
global_graph($('#smGraph66'), 'Detail');
global_graph($('#smGraph67'), 'Detail');
global_graph($('#smGraph68'), 'Detail');
global_graph($('#smGraph69'), 'Detail');

global_graph($('#smGraph70'), 'Detail');
global_graph($('#smGraph71'), 'Detail');
global_graph($('#smGraph72'), 'Detail');
global_graph($('#smGraph73'), 'Detail');
global_graph($('#smGraph74'), 'Detail');
global_graph($('#smGraph75'), 'Detail');
global_graph($('#smGraph76'), 'Detail');
global_graph($('#smGraph77'), 'Detail');
global_graph($('#smGraph78'), 'Detail');
global_graph($('#smGraph79'), 'Detail');

global_graph($('#smGraph80'), 'Detail');
global_graph($('#smGraph81'), 'Detail');
global_graph($('#smGraph82'), 'Detail');
global_graph($('#smGraph83'), 'Detail');
global_graph($('#smGraph84'), 'Detail');
global_graph($('#smGraph85'), 'Detail');
global_graph($('#smGraph86'), 'Detail');
global_graph($('#smGraph87'), 'Detail');
global_graph($('#smGraph88'), 'Detail');
global_graph($('#smGraph89'), 'Detail');

global_graph($('#smGraph90'), 'Detail');
global_graph($('#smGraph91'), 'Detail');
global_graph($('#smGraph92'), 'Detail');
global_graph($('#smGraph93'), 'Detail');
global_graph($('#smGraph94'), 'Detail');
global_graph($('#smGraph95'), 'Detail');
global_graph($('#smGraph96'), 'Detail');
global_graph($('#smGraph97'), 'Detail');
global_graph($('#smGraph98'), 'Detail');
global_graph($('#smGraph99'), 'Detail');


function global_graph(title, desc) {
	title.highcharts({
		chart: {
			type: 'area',
			zoomType: 'x',
			height: 70,
			width: 110,
			maxPadding: 0,
			panning: false,
			gridLineWidth: 0,
			panKey: false,
			scrollablePlotArea: {
				maxWidth: 70
			}
		},


		title: {
			text: null
		},

		credits: {
			enabled: false
		},


		xAxis: {
			gridLineWidth: 0,
			labels: {
				enabled: false
			},
			title: {
				text: null
			},

		},

		yAxis: {
			gridLineWidth: 0,
			endOnTick: false,
			maxPadding: 0.1,
			title: {
				text: null
			},
			labels: {
				enabled: false
			},
		},

		plotOptions: {
			series: {
				states: {
					hover: {
						enabled: true,
						lineWidth: 1
					}
				}
			}
		},


		tooltip: false,

		legend: {
			enabled: false
		},

		series: [{
			accessibility: {
				keyboardNavigation: {
					enabled: false
				},

			},
			lineWidth: 1,
			title: null,
			showline: false,
			showgrid: false,
			data: elevationData,
			lineColor: '#004a97',
			color: 'transparent',
			fillOpacity: 0.5,
			name: null,
			hover: {
				lineWidth: 1
			},
			marker: {
				enabled: false
			},
			threshold: null
		}]
	});


};

function init_tooltip() {
  $('[data-toggle="tooltip"]').tooltip();
}
