import ReactEcharts from "echarts-for-react";

const PieСhart = () => {

    const option = {
        title: {
            text: 'PieСhart',
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
        tooltip: {
            trigger: 'item'
          },
        legend: {
            orient: 'vertical',
            right: 'right',
            padding: [
                5,  // up
                100, // right
                5,  // down
                10, // left
            ]
          },
        series: [
            {
              name: 'Access From',
              type: 'pie',
              radius: '90%',
             
              data: [
                { value: 6, name: 'Комедия' },
                { value: 9, name: 'Исторический' },
                { value: 35, name: 'Боевик' },
                { value: 24, name: 'Приключения' },
                { value: 26, name: 'Love story' }
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
        ]
    }

    return (
        <div style={{marginTop:'50px'}}>
            <ReactEcharts option={option} />;
        </div>
    ) 
}

export default PieСhart;