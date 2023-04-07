import ReactEcharts from "echarts-for-react"; 

const LineChart = () => {

    const option = {
        title: {
          text: 'LineChart'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: [1, 2, 3, 4, 5, 6]
        },
        yAxis: {
          type: 'value'
        },
        yAxis: {
            type: 'value',
            splitNumber: 9,
            max: 500 
        },
        series: [
            {
                name: 'Email',
                type: 'line',
                data: [90, 200, 250, 300, 350, 350, 350]
            },
            {
                name: 'Union Ads',
                type: 'line',
                data: [0, 400, 300, 200, 250, 300, 300]
            },
            {
                name: 'Video Ads',
                type: 'line',
                data: [250, 220, 280, 300, 500, 350, 410]
            },
        ],  
      };

      return (
        <div style={{marginTop:'50px'}}>
            <ReactEcharts option={option} />;
        </div>
      ) 
    
}

export default LineChart;