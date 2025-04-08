let google;
let chartsLoaded = false;

// Function to load Google Charts
function loadGoogleCharts() {
  return new Promise((resolve, reject) => {
    if (typeof window !== 'undefined') {
      if (chartsLoaded) {
        resolve(google.charts);
        return;
      }
      
      if (window.google && window.google.charts) {
        google = window.google;
        google.charts.load('current', { 'packages': ['corechart', 'treemap', 'sankey'] });
        google.charts.setOnLoadCallback(() => {
          chartsLoaded = true;
          resolve(google.charts);
        });
        return;
      }
      
      const script = document.createElement('script');
      script.src = 'https://www.gstatic.com/charts/loader.js';
      script.async = true;
      script.onload = () => {
        google = window.google;
        google.charts.load('current', { 'packages': ['corechart', 'treemap', 'sankey'] });
        google.charts.setOnLoadCallback(() => {
          chartsLoaded = true;
          resolve(google.charts);
        });
      };
      script.onerror = () => reject(new Error('Failed to load Google Charts'));
      document.head.appendChild(script);
    } else {
      reject(new Error('Window is not defined'));
    }
  });
}

export async function drawBubbleChart(chartContainer) {
  try {
    await loadGoogleCharts();
    
    const data = new google.visualization.arrayToDataTable([
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

    const chart = new google.visualization.BubbleChart(chartContainer);
    chart.draw(data, options);
  } catch (error) {
    console.error("Error in drawBubbleChart:", error);
  }
}

export async function drawDonutChart(chartContainer) {
  try {
    await loadGoogleCharts();
    
    const data = new google.visualization.arrayToDataTable([
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

    const chart = new google.visualization.PieChart(chartContainer);
    chart.draw(data, options);
  } catch (error) {
    console.error("Error in drawDonutChart:", error);
  }
}

export async function drawTreeMap(chartContainer) {
  try {
    await loadGoogleCharts();
    
    const data = new google.visualization.arrayToDataTable([
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

    const chart = new google.visualization.TreeMap(chartContainer);
    chart.draw(data, options);
  } catch (error) {
    console.error("Error in drawTreeMap:", error);
  }
}

export async function drawStackedBarChart(chartContainer) {
  try {
    await loadGoogleCharts();
    
    const data = new google.visualization.arrayToDataTable([
      ['Genre', 'Fantasy & Sci Fi', 'Romance', 'Mystery/Crime', 'General',
      'Western', 'Literature', { role: 'annotation' } ],
     ['2010', 10, 24, 20, 32, 18, 5, ''],
     ['2020', 16, 22, 23, 30, 16, 9, ''],
     ['2030', 28, 19, 29, 30, 12, 13, '']
    ]);

    const options = {
      width: 600,
      height: 400,
      legend: { position: 'top', maxLines: 3 },
      bar: { groupWidth: '75%' },
      isStacked: true
    };

    const chart = new google.visualization.BarChart(chartContainer);
    chart.draw(data, options);
  } catch (error) {
    console.error("Error in drawStackedBarChart:", error);
  }
}

export async function drawDualAxisLineChart(chartContainer) {
  try {
    await loadGoogleCharts();
    
    const data = new google.visualization.arrayToDataTable([
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

    const chart = new google.visualization.LineChart(chartContainer);
    chart.draw(data, options);
  } catch (error) {
    console.error("Error in drawDualAxisLineChart:", error);
  }
}

export async function drawSlopeChart(chartContainer) {
  try {
    await loadGoogleCharts();
    
    const data = new google.visualization.arrayToDataTable([
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

    const chart = new google.visualization.LineChart(chartContainer);
    chart.draw(data, options);
  } catch (error) {
    console.error("Error in drawSlopeChart:", error);
  }
}

export async function drawSankeyChart(chartContainer) {
  try {
    await loadGoogleCharts();
    
    const data = new google.visualization.arrayToDataTable([
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

    const chart = new google.visualization.Sankey(chartContainer);
    chart.draw(data, options);
  } catch (error) {
    console.error("Error in drawSankeyChart:", error);
  }
}

export async function drawBarChart(chartContainer) {
  try {
    await loadGoogleCharts();
    
    const data = new google.visualization.arrayToDataTable([
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

    const chart = new google.visualization.BarChart(chartContainer);
    chart.draw(data, options);
  } catch (error) {
    console.error("Error in drawBarChart:", error);
  }
}

export async function drawPairedColumnsChart(chartContainer) {
  try {
    await loadGoogleCharts();
    
    const data = new google.visualization.arrayToDataTable([
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

    const chart = new google.visualization.ColumnChart(chartContainer);
    chart.draw(data, options);
  } catch (error) {
    console.error("Error in drawPairedColumnsChart:", error);
  }
}

