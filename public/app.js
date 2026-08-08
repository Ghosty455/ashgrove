const questions = [
  {
    id: 'age',
    label: 'AGE CONFIRMATION',
    title: 'Are you 18 or older?',
    help: 'Ashgrove residency applications are only available to adults.',
    type: 'radio',
    required: true,
    options: [['yes', 'Yes'], ['no', 'No']]
  },
  {
    id: 'career',
    label: 'PROFESSIONAL PROFILE',
    title: 'Which best describes your current work?',
    help: 'This helps us understand where you may fit within the Ashgrove professional community.',
    type: 'radio',
    required: true,
    options: [
      ['student', 'Student or early career'],
      ['professional', 'Professional or technical'],
      ['manager', 'Manager or team leader'],
      ['executive', 'Executive or senior leader'],
      ['other', 'Other']
    ]
  },
  {
    id: 'education',
    label: 'EDUCATION',
    title: 'What is your highest completed level of education?',
    help: 'Select the closest match.',
    type: 'radio',
    required: true,
    options: [
      ['secondary', 'High school or equivalent'],
      ['associate', 'Associate or technical credential'],
      ['bachelors', "Bachelor's degree"],
      ['graduate', 'Graduate or professional degree']
    ]
  },
  {
    id: 'household',
    label: 'HOUSEHOLD',
    title: 'How would you describe your current household?',
    help: 'There is no right answer. Ashgrove includes many household stages.',
    type: 'radio',
    required: true,
    options: [
      ['single', 'Single'],
      ['partnered', 'Partnered or married'],
      ['family', 'Household with children'],
      ['extended', 'Multigenerational household']
    ]
  },
  {
    id: 'children',
    label: 'FUTURE PLANNING',
    title: 'How do you feel about having children in the future?',
    help: 'This prototype uses this only as a lifestyle-preference signal.',
    type: 'radio',
    required: true,
    options: [
      ['yes', 'Yes, definitely'],
      ['maybe', 'Possibly'],
      ['complete', 'My family is complete'],
      ['no', 'No']
    ]
  },
  {
    id: 'community',
    label: 'COMMUNITY STYLE',
    title: 'What sounds most appealing about Ashgrove?',
    help: 'Choose the feature that matters most to you.',
    type: 'radio',
    required: true,
    options: [
      ['walkable', 'Walkable neighborhoods and transit'],
      ['schools', 'Schools, childcare and family services'],
      ['career', 'Career growth and professional campus access'],
      ['nature', 'Parks, lakes and recreation'],
      ['stability', 'Long-term community stability']
    ]
  },
  {
    id: 'mobility',
    label: 'MOBILITY',
    title: 'How important is a car-light daily life to you?',
    help: 'Ashgrove is designed around walking, cycling and automated local transit.',
    type: 'radio',
    required: true,
    options: [['high', 'Very important'], ['medium', 'Nice to have'], ['low', 'Not important']]
  },
  {
    id: 'priority',
    label: 'LONG-TERM FIT',
    title: 'Which statement feels closest to your ideal future?',
    help: 'Your answer shapes the final prototype result.',
    type: 'radio',
    required: true,
    options: [
      ['roots', 'Put down roots in one community'],
      ['balance', 'Balance career, home and recreation'],
      ['advance', 'Advance professionally as quickly as possible'],
      ['flexibility', 'Keep maximum independence and flexibility']
    ]
  }
];

const answers = {};
let currentIndex = 0;
const COUNTED_KEY = 'ashgrove-assessment-counted-v1';

const intro = document.getElementById('intro');
const survey = document.getElementById('survey');
const results = document.getElementById('results');
const questionMount = document.getElementById('questionMount');
const stepLabel = document.getElementById('stepLabel');
const progressPercent = document.getElementById('progressPercent');
const progressBar = document.getElementById('progressBar');
const validationMessage = document.getElementById('validationMessage');
const backButton = document.getElementById('backButton');
const nextButton = document.getElementById('nextButton');
const assessmentCount = document.getElementById('assessmentCount');

function formatCount(value) {
  return Number(value).toLocaleString('en-US');
}

async function refreshAssessmentCount() {
  try {
    const response = await fetch('/api/count', { cache: 'no-store' });
    if (!response.ok) throw new Error('Counter unavailable');
    const data = await response.json();
    if (assessmentCount) assessmentCount.textContent = formatCount(data.count);
  } catch {
    if (assessmentCount) assessmentCount.textContent = '5,389';
  }
}

async function recordCompletion() {
  if (localStorage.getItem(COUNTED_KEY) === 'yes') {
    await refreshAssessmentCount();
    return;
  }

  try {
    const response = await fetch('/api/complete', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: '{}'
    });
    if (!response.ok) throw new Error('Counter unavailable');
    const data = await response.json();
    localStorage.setItem(COUNTED_KEY, 'yes');
    if (assessmentCount) assessmentCount.textContent = formatCount(data.count);
  } catch {
    await refreshAssessmentCount();
  }
}

function renderQuestion() {
  const q = questions[currentIndex];
  const percent = Math.round(((currentIndex + 1) / questions.length) * 100);
  stepLabel.textContent = `Question ${currentIndex + 1} of ${questions.length}`;
  progressPercent.textContent = `${percent}%`;
  progressBar.style.width = `${percent}%`;
  validationMessage.textContent = '';
  backButton.disabled = currentIndex === 0;
  backButton.style.opacity = currentIndex === 0 ? '.45' : '1';
  nextButton.textContent = currentIndex === questions.length - 1 ? 'See my result' : 'Continue';

  const options = q.options.map(([value, label]) => {
    const checked = answers[q.id] === value ? 'checked' : '';
    return `<label class="option-row"><input type="radio" name="${q.id}" value="${value}" ${checked} /><span>${label}</span></label>`;
  }).join('');

  questionMount.innerHTML = `<div class="question-number">${q.label}</div><h2 class="question-title">${q.title}</h2><p class="question-help">${q.help}</p><div class="option-list">${options}</div>`;
}

function collectAnswer() {
  const q = questions[currentIndex];
  const selected = document.querySelector(`input[name="${q.id}"]:checked`);
  if (!selected) {
    validationMessage.textContent = 'Please choose an answer to continue.';
    return false;
  }
  answers[q.id] = selected.value;
  if (q.id === 'age' && selected.value === 'no') {
    validationMessage.textContent = 'This fictional prototype is only available to adults.';
    return false;
  }
  return true;
}

function calculateResults() {
  let score = 60;
  const add = (condition, points) => { if (condition) score += points; };
  add(answers.career === 'professional', 5);
  add(answers.career === 'manager', 7);
  add(answers.career === 'executive', 6);
  add(answers.education === 'associate', 3);
  add(answers.education === 'bachelors', 4);
  add(answers.household === 'partnered', 3);
  add(answers.household === 'family', 7);
  add(answers.household === 'extended', 5);
  add(answers.children === 'yes', 7);
  add(answers.children === 'maybe', 4);
  add(answers.community === 'walkable', 4);
  add(answers.community === 'schools', 5);
  add(answers.community === 'stability', 6);
  add(answers.mobility === 'high', 5);
  add(answers.mobility === 'medium', 2);
  add(answers.priority === 'roots', 7);
  add(answers.priority === 'balance', 5);
  add(answers.priority === 'advance', 2);
  if (answers.priority === 'flexibility') score -= 4;
  if (answers.children === 'no') score -= 2;
  score = Math.max(54, Math.min(96, score));

  const categories = [
    { label: 'Community Fit', value: ['roots', 'balance'].includes(answers.priority) ? 'Excellent' : 'Strong' },
    { label: 'Professional Fit', value: ['professional', 'manager', 'executive'].includes(answers.career) ? 'Excellent' : 'Good' },
    { label: 'Lifestyle Fit', value: answers.mobility === 'high' ? 'Exceptional' : answers.mobility === 'medium' ? 'Strong' : 'Moderate' }
  ];

  let title = 'Promising Community Candidate';
  let copy = 'Your answers suggest that several elements of Ashgrove may align with the future you described.';
  if (score >= 88) {
    title = 'Exceptional Community Candidate';
    copy = 'Your profile shows unusually strong alignment with Ashgrove’s long-term community model.';
  } else if (score >= 78) {
    title = 'Strong Community Candidate';
    copy = 'Your profile suggests a strong match with Ashgrove’s professional, residential and community environment.';
  }

  const placement = score >= 88
    ? 'Priority orientation recommended. Preliminary residential band: Established Professional.'
    : score >= 78
      ? 'Standard orientation recommended. Preliminary residential band: Professional Community.'
      : 'Additional lifestyle review recommended before preliminary placement.';

  return { score, categories, title, copy, placement };
}

function showResults() {
  const result = calculateResults();
  survey.classList.add('hidden');
  results.classList.remove('hidden');
  document.getElementById('scoreValue').textContent = result.score;
  document.getElementById('resultTitle').textContent = result.title;
  document.getElementById('resultCopy').textContent = result.copy;
  document.getElementById('placementNote').textContent = result.placement;
  document.getElementById('resultBreakdown').innerHTML = result.categories.map(item => `<div class="result-card"><span>${item.label}</span><strong>${item.value}</strong></div>`).join('');
  recordCompletion();
}

document.getElementById('startButton').addEventListener('click', () => {
  intro.classList.add('hidden');
  survey.classList.remove('hidden');
  renderQuestion();
});

nextButton.addEventListener('click', () => {
  if (!collectAnswer()) return;
  if (currentIndex === questions.length - 1) {
    showResults();
    return;
  }
  currentIndex += 1;
  renderQuestion();
});

backButton.addEventListener('click', () => {
  if (currentIndex === 0) return;
  currentIndex -= 1;
  renderQuestion();
});

document.getElementById('restartButton').addEventListener('click', () => {
  Object.keys(answers).forEach(key => delete answers[key]);
  currentIndex = 0;
  results.classList.add('hidden');
  intro.classList.remove('hidden');
});

refreshAssessmentCount();
