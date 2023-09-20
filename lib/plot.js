
var chartDom = document.getElementById('div_plot');
var myChart = echarts.init(chartDom);
var option;

async function get_var(uid, varname){
  const url = 'https://ruoa.unam.mx:8040/xopan_api&'+ varname + '&uid='+ uid;
  response = await fetch(url);
  if (response.ok) {
    body= await response.json();


  }else {
    body =[];
    console.log('ups');
  }
  console.log(body);
  return body;
}
async function plot( uid){
  data = await get_var(uid, 'rain');
  date = await get_var(uid, 'datetime');

  option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
    toolbox: {
        feature: {
            dataView: { readOnly: true },
            dataZoom: {
            yAxisIndex: 'none'
        },
            restore: {},
            saveAsImage: {}
        }
    },
      title:{
          text: "Precipitación Acumulada",
      },
    xAxis: {
        name: 'UTC',
      type: 'category',
      data: date,
    },
    yAxis: {
        name: '[mm]',
      type: 'value'
    },
    series: [
      {
          name: 'Precipitación Acumulada [mm]',
        data: data,
        type: 'bar'
      }
    ]
  };
  option && myChart.setOption(option);
}

//plot('123');

