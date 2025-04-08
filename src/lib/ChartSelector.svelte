<script>
  import Layout from './Layout.svelte';
  import Chart from './Chart.svelte';
  import '../styles/main.css';

  let chartType = '';

  const questions = [
    {
      text: 'Do you want to show a trend that changes over time?',
      options: [
        { text: 'Yes', next: 1 },
        { text: 'No', next: 2 }
      ]
    },
    {
      text: 'Your main goal is to:',
      options: [
        { text: 'Compare', next: 3 },
        { text: 'Emphasize hierarchy or ranking', chartType: 'stacked' },
        { text: 'Show the proportion of parts that compose a whole', chartType: 'sankey' }
      ]
    },
    {
      text: 'Your main goal is to:',
      options: [
        { text: 'Compare', next: 4 },
        { text: 'Emphasize hierarchy or ranking', chartType: 'bar' },
        { text: 'Show the proportion of parts that compose a whole', next: 5 }
      ]
    },
    {
      text: 'What you need to compare are:',
      options: [
        { text: 'multiple sizes or quantities', chartType: 'overlapping area' },
        { text: 'two sets of data', chartType: 'slope' }
      ]
    },
    {
      text: 'What you need to compare are:',
      options: [
        { text: 'multiple sizes or quantities', chartType: 'bubble' },
        { text: 'two sets of data', chartType: 'paired columns' }
      ]
    },
    {
      text: "Do you have a small number of parts composing the whole?",
      options: [
        { text: 'Yes', chartType: 'donut' },
        { text: 'No', chartType: 'treemap' }
      ]
    }
  ];

  let currentQuestionIndex = 0;
  let selectedOptions = [];

  function handleOptionSelect(option) {
    selectedOptions = [...selectedOptions, {
      question: currentQuestionIndex,
      answer: option.text
    }];

    if (option.chartType) {
      chartType = option.chartType;
    } else if (option.next !== undefined) {
      currentQuestionIndex = option.next;
    }
  }

  function goBack() {
  if (chartType) {
    chartType = '';
    currentQuestionIndex = 0;
    selectedOptions = [];
  } else if (selectedOptions.length > 0) {
    selectedOptions = selectedOptions.slice(0, -1);
    currentQuestionIndex = selectedOptions.length > 0
      ? selectedOptions[selectedOptions.length - 1].question
      : 0;
    chartType = '';
  }
}

</script>
<Layout>
  <main class="select-page">
  {#if !chartType}
    <div class="question-container">
      <h1>{questions[currentQuestionIndex].text}</h1>

      <div class="segment-container">
        <div class="segment segment--{questions[currentQuestionIndex].options.length}">
          {#each questions[currentQuestionIndex].options as option}
            <button class="segment__item" on:click={() => handleOptionSelect(option)}>
              {option.text}
            </button>
          {/each}
        </div>
      </div>

      {#if selectedOptions.length > 0}
        <button class="back-button" on:click={goBack}>← Back</button>
      {/if}
    </div>

  {:else}
    <div class="result-container">
      <h2>Selected Chart: {chartType}</h2>
      <p class="test-class">Another test</p>
      <Chart {chartType} />
      <button class="back-button" on:click={goBack}>← Start Over</button>
    </div>
  {/if}
</main>
</Layout>
