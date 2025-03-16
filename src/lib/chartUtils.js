import { GoogleCharts } from 'google-charts';

export function drawAreaChart(chartContainer) {
  const data = GoogleCharts.api.visualization.arrayToDataTable([
    ['Year', 'Sales', 'Expenses'],
    ['2020', 1000, 400],
    ['2021', 1170, 460],
    ['2022', 660, 1120],
    ['2023', 1030, 540]
  ]);

  const options = {
    title: 'Company Performance',
    hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
    vAxis: { minValue: 0 },
    chartArea: { width: '70%', height: '70%' },
    backgroundColor: '#f8f9fa',
    colors: ['#4CAF50', '#2196F3'],
    areaOpacity: 0.3
  };

  const chart = new GoogleCharts.api.visualization.AreaChart(chartContainer);
  chart.draw(data, options);
}

export function drawBubbleChart(chartContainer) {
  const data = GoogleCharts.api.visualization.arrayToDataTable([
    ['ID', 'Life Expectancy', 'Fertility Rate', 'Region', 'Population'],
    ['CAN', 80.66, 1.67, 'North America', 33739900],
    ['DEU', 79.84, 1.36, 'Europe', 81902307],
    ['EGY', 72.73, 2.78, 'Middle East', 79716203],
    ['IRN', 72.49, 1.70, 'Middle East', 73137148],
    ['IRQ', 68.09, 4.77, 'Middle East', 31090763],
    ['USA', 78.09, 2.05, 'North America', 307007000]
  ]);

  const options = {
    title: 'Fertility Rate vs Life Expectancy',
    hAxis: { title: 'Life Expectancy' },
    vAxis: { title: 'Fertility Rate' },
    bubble: {
      textStyle: {
        fontSize: 11
      }
    },
    colors: ['#4CAF50', '#2196F3', '#FFC107', '#FF5722'],
    chartArea: { width: '70%', height: '70%' },
    backgroundColor: '#f8f9fa'
  };

  const chart = new GoogleCharts.api.visualization.BubbleChart(chartContainer);
  chart.draw(data, options);
}

export function drawDonutChart(chartContainer) {
  const data = GoogleCharts.api.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Work', 11],
    ['Eat', 2],
    ['Commute', 2],
    ['Watch TV', 2],
    ['Sleep', 7]
  ]);

  const options = {
    title: 'My Daily Activities',
    pieHole: 0.4,
    chartArea: { width: '70%', height: '70%' },
    backgroundColor: '#f8f9fa',
    colors: ['#4CAF50', '#2196F3', '#FFC107', '#FF5722']
  };

  const chart = new GoogleCharts.api.visualization.PieChart(chartContainer);
  chart.draw(data, options);
}

export function drawTreemap(chartContainer) {
  const data = GoogleCharts.api.visualization.arrayToDataTable([
    ['Location', 'Parent', 'Market trade'],
    ['Global', null, 0],
    ['America', 'Global', 1],
    ['Canada', 'America', 2],
    ['USA', 'America', 3],
    ['Europe', 'Global', 4],
    ['Germany', 'Europe', 5],
    ['UK', 'Europe', 6],
    ['Asia', 'Global', 7],
    ['China', 'Asia', 8],
    ['Japan', 'Asia', 9],
    ['India', 'Asia', 10]
  ]);

  const options = {
    title: 'Global Market Trade',
    minColor: '#007bff',
    midColor: '#f8f9fa',
    maxColor: '#dc3545',
    headerHeight: 0,
    showScale: true,
    generateColor: (value) => {
      if (value > 5) return '#d9534f';
      else if (value > 2) return '#f0ad4e';
      else return '#5cb85c';
    }
  };

  const chart = new GoogleCharts.api.visualization.TreeMap(chartContainer);
  chart.draw(data, options);
}

export function drawStackedBarChart(chartContainer) {
  const data = GoogleCharts.api.visualization.arrayToDataTable([
    ['Genre', 'Fantasy & Sci Fi', 'Romance', 'Mystery/Crime', 'General',
    'Western', 'Literature', { role: 'annotation' } ],
   ['2010', 10, 24, 20, 32, 18, 5, ''],
   ['2020', 16, 22, 23, 30, 16, 9, ''],
   ['2030', 28, 19, 29, 30, 12, 13, '']
 ]);

 var options = {
   width: 600,
   height: 400,
   legend: { position: 'top', maxLines: 3 },
   bar: { groupWidth: '75%' },
   isStacked: true
 };

  const chart = new GoogleCharts.api.visualization.BarChart(chartContainer);
  chart.draw(data, options);
}

export function drawDualAxisLineChart(chartContainer) {
  const data = GoogleCharts.api.visualization.arrayToDataTable([
    ['Year', 'Sales', 'Expenses'],
    ['2016', 1000, 400],
    ['2017', 1170, 460],
    ['2018', 660, 1120],
    ['2019', 1030, 540]
  ]);

  const options = {
    title: 'Company Performance',
    series: {
      0: { targetAxisIndex: 0 },
      1: { targetAxisIndex: 1 }
    },
    vAxes: {
      0: { title: 'Sales' },
      1: { title: 'Expenses' }
    }
  };

  const chart = new GoogleCharts.api.visualization.LineChart(chartContainer);
  chart.draw(data, options);
}


export function drawSlopeChart(chartContainer) {
  const data = GoogleCharts.api.visualization.arrayToDataTable([
    ['Year', 'Metric A', 'Metric B'],
    ['2016', 10, 20],
    ['2017', 15, 25],
    ['2018', 20, 30],
    ['2019', 25, 35]
  ]);

  const options = {
    title: 'Slope Chart Example',
    series: {
      0: { pointSize: 5 },
      1: { pointSize: 5 }
    },
    hAxis: { title: 'Year' },
    vAxis: { title: 'Value' }
  };

  const chart = new GoogleCharts.api.visualization.LineChart(chartContainer);
  chart.draw(data, options);
}


export function drawSankeyChart(chartContainer) {
  GoogleCharts.load(() => {
    const data = GoogleCharts.api.visualization.arrayToDataTable([
      ['From', 'To', 'Weight'],
      ['A', 'X', 5],
      ['A', 'Y', 7],
      ['A', 'Z', 6],
      ['B', 'X', 2],
      ['B', 'Y', 9],
      ['B', 'Z', 4]
    ]);

    const options = {
      title: 'Sankey Diagram Example'
    };

    const chart = new GoogleCharts.api.visualization.Sankey(chartContainer);
    chart.draw(data, options);
  }, { packages: ['sankey'] });
}


export function drawBarChart(chartContainer) {
  GoogleCharts.load(() => {
    const data = GoogleCharts.api.visualization.arrayToDataTable([
      ['Category', 'Value'],
      ['A', 10],
      ['B', 20],
      ['C', 30],
      ['D', 40]
    ]);

    const options = {
      title: 'Bar Chart',
      chartArea: { width: '50%' },
      hAxis: { title: 'Value' },
      vAxis: { title: 'Category' }
    };

    const chart = new GoogleCharts.api.visualization.BarChart(chartContainer);
    chart.draw(data, options);
  }, { packages: ['corechart'] });
}


export function drawPairedColumnsChart(chartContainer) {
  const data = GoogleCharts.api.visualization.arrayToDataTable([
    ['Category', 'Metric A', 'Metric B'],
    ['A', 10, 20],
    ['B', 15, 25],
    ['C', 20, 30],
    ['D', 25, 35]
  ]);

  const options = {
    title: 'Paired Columns Chart',
    chartArea: { width: '50%' },
    bars: 'vertical',
    isStacked: false,
    hAxis: { title: 'Category' },
    vAxis: { title: 'Value' }
  };

  const chart = new GoogleCharts.api.visualization.ColumnChart(chartContainer);
  chart.draw(data, options);
}

export function drawTreeMap(chartContainer) {
  GoogleCharts.load(() => {
    const data = GoogleCharts.api.visualization.arrayToDataTable([
      ['Location', 'Parent', 'Value'],
      ['Global', null, 0],
      ['America', 'Global', 0],
      ['Europe', 'Global', 20],
      ['Asia', 'Global', 0],
      ['USA', 'America', 10],
      ['Canada', 'America', 5],
      ['Germany', 'Europe', 7],
      ['France', 'Europe', 6],
      ['Japan', 'Asia', 8],
      ['China', 'Asia', 6]
    ]);

    const options = {
      title: 'TreeMap Example'
    };

    const chart = new GoogleCharts.api.visualization.TreeMap(chartContainer);
    chart.draw(data, options);
  }, { packages: ['treemap'] });
}
