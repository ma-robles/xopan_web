
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
      title:{
          text: "Precipitación en estación ID: "+uid,
      },
    xAxis: {
      type: 'category',
      data: date,
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: data,
        type: 'bar'
      }
    ]
  };
  option && myChart.setOption(option);
}

//plot('123');

