<script>
    import { Chart } from 'chart.js/auto';
    import { onMount } from 'svelte';
  
    // question flow structure
    const questionFlow = {
      start: {
        id: 'start',
        text: 'Do you want to show a trend that changes over time?',
        options: [
          {
            text: 'Yes',
            next: 'timeBasedOptions',
            action: () => setChartType('line') 
          },
          {
            text: 'No',
            next: 'mainGoal'
          }
        ]
      },
      mainGoal: {
        id: 'mainGoal',
        text: 'Your main goal is to:',
        options: [
          {
            text: 'Compare',
            next: 'compareType'
          },
          {
            text: 'Emphasize hierarchy or ranking',
            next: 'hierarchyOptions',
            action: () => setChartType('bar')
          },
          {
            text: 'Show the proportion of parts that compose a whole',
            next: 'proportionOptions',
            action: () => setChartType('pie')
          }
        ]
      },
      compareType: {
        id: 'compareType',
        text: 'What you need to compare are:',
        options: [
          {
            text: 'multiple sizes or quantities',
            next: 'result',
            action: () => setChartType('bubble')
          },
          {
            text: 'two sets of data',
            next: 'result',
            action: () => setChartType('scatter')
          }
        ]
      }
    };
  
    let currentQuestion = 'start';
    let selectedOptions = [];
    let chartType = null;
    let chart;
  
    // Track the user's path through the questions
    function handleOptionSelect(option) {
      selectedOptions = [...selectedOptions, { 
        question: currentQuestion, 
        answer: option.text 
      }];
  
      if (option.action) {
        option.action();
      }
  
      if (option.next === 'result') {
        initializeChart();
      } else {
        currentQuestion = option.next;
      }
    }
  
    function setChartType(type) {
      chartType = type;
    }
  
    function initializeChart() {
      const chartConfig = {
        line: {
          type: 'line',
          data: {
            labels: ['Jan', 'Feb', 'Mar'],
            datasets: [{
              label: 'Data',
              data: [10, 20, 15],
              borderColor: 'rgb(75, 192, 192)',
            }]
          }
        },
        bubble: {
          type: 'bubble',
          data: {
            datasets: [{
              label: 'Bubble Data',
              data: Array.from({ length: 50 }, () => ({
                x: Math.random() * 100,
                y: Math.random() * 100,
                r: Math.random() * 10
              })),
              backgroundColor: 'rgba(255, 99, 132, 0.5)'
            }]
          }
        },
      };
  
      onMount(() => {
        const ctx = document.getElementById('chart');
        if (ctx && chartType && chartConfig[chartType]) {
          if (chart) chart.destroy();
          chart = new Chart(ctx, chartConfig[chartType]);
        }
  
        return () => {
          if (chart) chart.destroy();
        };
      });
    }
  
    function goBack() {
      if (selectedOptions.length > 0) {
        selectedOptions = selectedOptions.slice(0, -1);
        currentQuestion = selectedOptions.length > 0 
          ? questionFlow[selectedOptions[selectedOptions.length - 1].question].id
          : 'start';
      }
    }
  </script>
  
  <main>
    {#if currentQuestion !== 'result'}
      <div class="question-container">
        <h1>{questionFlow[currentQuestion].text}</h1>
        
        <div class="options">
          {#each questionFlow[currentQuestion].options as option}
            <button on:click={() => handleOptionSelect(option)}>
              {option.text}
            </button>
          {/each}
        </div>
  
        {#if selectedOptions.length > 0}
          <button class="back-button" on:click={goBack}>← Back</button>
        {/if}
      </div>
    {:else}
      <div class="result-container">
        <h2>Selected Chart: {chartType}</h2>
        <div class="chart-wrapper">
          <canvas id="chart"></canvas>
        </div>
        <button class="back-button" on:click={goBack}>← Start Over</button>
      </div>
    {/if}
  </main>
  
  <style>
    .question-container {
      max-width: 800px;
      margin: 2rem auto;
      padding: 1rem;
    }
  
    .options {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 1rem;
    }
  
    .chart-wrapper {
      width: 100%;
      max-width: 800px;
      margin: 2rem auto;
    }
  
    button {
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 4px;
      background: #4CAF50;
      color: white;
      cursor: pointer;
      transition: background 0.2s;
    }
  
    button:hover {
      background: #45a049;
    }
  
    .back-button {
      margin-top: 1rem;
      background: #666;
    }
  
    .back-button:hover {
      background: #555;
    }
  </style>