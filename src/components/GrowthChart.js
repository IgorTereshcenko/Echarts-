import ReactEcharts from "echarts-for-react"; 

const GrowthChart = () => {

    const xAxisData = [17, 18, 19, 20, 21];
	const barData = [950, 1210, 1100, 1150, 1250];
  
	const percentChangeData = barData.map((value, index) => {
	  if (index === 0) return 0;
	  const percent = (((value - barData[index - 1]) * 100) / barData[index - 1]).toFixed(2);
	  return percent;
	});
  
	const lineSeriesData = barData.map((value, index) => {
	  return [index, value];
	});

	const option = {
		title: {
			text: 'GrowthChart'
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		xAxis: {
		  type: 'category',
		  data: xAxisData,
		},
		yAxis: [
		  {
			type: 'value',
		  },
		  {
			type: 'value',
			axisLabel: {
			  formatter: '{value}%',
			},
		  },
		],
		series: [
		  {
			type: 'bar',
			data: barData,
			label: {
			  show: true,
			  position: 'inside',
			},
		  },
		  {
			type: 'line',
			data: lineSeriesData,
			yAxisIndex: 1,
			label: {
			  show: true,
			  position: 'bottom',
			  formatter: (params) => {
				return `${percentChangeData[params.dataIndex]}%`;
			  },
			},
		  },
		],
	  }; 

  	return <ReactEcharts option={option} />;
}

export default GrowthChart;