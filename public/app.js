const questions = [
  {
    id: 'age',
    label: 'AGE CONFIRMATION',
    title: 'Are you 18 or older?',
    help: 'Ashgrove residency applications are only available to adults.',
    options: [['yes', 'Yes'], ['no', 'No']]
  },
  {
    id: 'career',
    label: 'PROFESSIONAL PROFILE',
    title: 'Which best describes your current work?',
    help: 'This helps us understand where you may fit within the Ashgrove professional community.',
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
    options: [['high', 'Very important'], ['medium', 'Nice to have'], ['low', 'Not important']]
  },
  {
    id: 'priority',
    label: 'LONG-TERM FIT',
    title: 'Which statement feels closest to your ideal future?',
    help: 'Your answer shapes the next stage of the assessment.',
    options: [
      ['roots', 'Put down roots in one community'],
      ['balance', 'Balance career, home and recreation'],
      ['advance', 'Advance professionally as quickly as possible'],
      ['flexibility', 'Keep maximum independence and flexibility']
    ]
  }
];

const refinementQuestions = [
  {
    id: 'relocation',
    label: 'FIT REFINEMENT',
    title: 'How open are you to relocating for the right long-term opportunity?',
    help: 'A few additional details can help us identify a better Ashgrove fit.',
    options: [
      ['not-open', 'I strongly prefer to remain where I am'],
      ['possible', 'I would consider the right opportunity'],
      ['open', 'I am open to relocating'],
      ['ready', 'I would relocate for a strong long-term fit']
    ]
  },
  {
    id: 'communityCommitment',
    label: 'FIT REFINEMENT',
    title: 'How involved would you want to be in your local community?',
    help: 'Ashgrove places a high value on residents who participate in the life around them.',
    options: [
      ['private', 'Mostly keep to myself'],
      ['occasional', 'Attend occasional events'],
      ['active', 'Be an active participant'],
      ['embedded', 'Build much of my social life around the community']
    ]
  },
  {
    id: 'planningStyle',
    label: 'FIT REFINEMENT',
    title: 'Which planning style sounds most comfortable?',
    help: 'This helps us distinguish independence from long-term community alignment.',
    options: [
      ['spontaneous', 'Keep plans flexible and spontaneous'],
      ['short', 'Plan a year or two ahead'],
      ['long', 'Plan several years ahead'],
      ['structured', 'Build around a stable long-term plan']
    ]
  }
];

const priorityBaseQuestions = [
  {
    id: 'sex',
    label: 'ROUND TWO',
    title: 'How should we classify your profile?',
    help: 'This information helps tailor the next stage of your Ashgrove orientation profile.',
    options: [['male', 'Male'], ['female', 'Female']]
  },
  {
    id: 'careerGoal',
    label: 'FUTURE CONTRIBUTION',
    title: 'Which path best matches your long-term goals?',
    help: 'Choose the area in which you would most like to build your future.',
    options: [
      ['clean-energy', 'Clean energy & environmental systems'],
      ['technology', 'Advanced technology & AI'],
      ['medical', 'Medical & life sciences'],
      ['infrastructure', 'Infrastructure & community operations'],
      ['education', 'Education & research'],
      ['homemaker', 'Home & family management']
    ]
  }
];

const femalePriorityQuestions = [
  {
    id: 'relationshipOutlook',
    label: 'HOUSEHOLD OUTLOOK',
    title: 'Which future feels most natural to you?',
    help: 'Ashgrove uses household planning to coordinate housing, schools, services and long-term placement.',
    options: [
      ['independent', 'Maintain an independent household'],
      ['partnered', 'Build a long-term partnership'],
      ['marriage', 'Marriage and family life'],
      ['family-centered', 'A strongly family-centered household']
    ]
  },
  {
    id: 'financialModel',
    label: 'HOUSEHOLD COORDINATION',
    title: 'How should finances work in a committed household?',
    help: 'There is no required model. We use this to understand how naturally your preferences align with Ashgrove households.',
    options: [
      ['separate', 'Mostly separate finances'],
      ['shared-plan', 'Separate accounts with shared planning'],
      ['mostly-shared', 'Mostly shared household finances'],
      ['unified', 'One unified household budget']
    ]
  },
  {
    id: 'decisionModel',
    label: 'HOUSEHOLD GOVERNANCE',
    title: 'When an important decision cannot be resolved, what feels healthiest?',
    help: 'Think about relocation, major purchases, schooling or other long-term household decisions.',
    options: [
      ['delay', 'Delay until everyone agrees'],
      ['domains', 'Each partner leads in different areas'],
      ['designated-lead', 'One partner takes final responsibility when needed'],
      ['partner-lead', 'I am comfortable with my partner taking final responsibility']
    ]
  },
  {
    id: 'careerAdjustment',
    label: 'FAMILY CONTINUITY',
    title: 'If family needs changed, how flexible would you be about your career path?',
    help: 'For example, during pregnancy, early childhood, elder care or a spouse’s major professional transition.',
    options: [
      ['minimal', 'I would prefer to keep my career path unchanged'],
      ['temporary', 'I would consider temporary adjustments'],
      ['significant', 'I would make significant adjustments if needed'],
      ['household-first', 'I would prioritize the household plan over my individual career path']
    ]
  },
  {
    id: 'privacyModel',
    label: 'HOUSEHOLD TRANSPARENCY',
    title: 'How much personal privacy should exist inside a committed household?',
    help: 'Ashgrove households often use shared calendars, health planning, transportation tools and family accounts.',
    options: [
      ['strong', 'Strong individual privacy'],
      ['practical', 'Privacy with practical sharing'],
      ['open', 'Broad transparency between partners'],
      ['integrated', 'Very little should need to be private from a spouse']
    ]
  },
  {
    id: 'familyPlanning',
    label: 'CONTINUITY PLANNING',
    title: 'How comfortable would you be including family growth in long-term household planning?',
    help: 'This can include housing eligibility, childcare capacity, leave planning and voluntary health guidance.',
    options: [
      ['private', 'I would keep family planning entirely private'],
      ['medical', 'Medical guidance only'],
      ['planning', 'I would include it in household planning'],
      ['coordinated', 'I would welcome coordinated household and community planning']
    ]
  },
  {
    id: 'wellnessSharing',
    label: 'HOUSEHOLD WELLNESS',
    title: 'If Ashgrove detected a pattern that could affect household stability, who should be notified?',
    help: 'Examples might include sustained stress, disrupted sleep, unusual financial strain or repeated schedule conflict.',
    options: [
      ['self', 'Only me'],
      ['ask-first', 'Ask me before sharing anything'],
      ['partner-summary', 'My spouse or partner may receive a general summary'],
      ['partner-proactive', 'My spouse or partner may receive proactive household guidance']
    ]
  },
  {
    id: 'conflictPriority',
    label: 'LONG-TERM STABILITY',
    title: 'If your personal preference conflicts with an established household plan, what should carry the most weight?',
    help: 'This is the final compatibility question in your Round Two profile.',
    options: [
      ['individual', 'My individual preference'],
      ['compromise', 'A negotiated compromise'],
      ['household', 'The long-term household plan'],
      ['lead', 'The decision of the partner carrying final household responsibility']
    ]
  }
];

const answers = {};
const refinementAnswers = {};
const priorityAnswers = {};
let currentIndex = 0;
let refinementIndex = 0;
let priorityIndex = 0;
let priorityQuestions = [];
let mode = 'primary';
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

function optionMarkup(q, store) {
  return q.options.map(([value, label]) => {
    const checked = store[q.id] === value ? 'checked' : '';
    return `<label class="option-row"><input type="radio" name="${q.id}" value="${value}" ${checked} /><span>${label}</span></label>`;
  }).join('');
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
  nextButton.textContent = currentIndex === questions.length - 1 ? 'Continue assessment' : 'Continue';
  questionMount.innerHTML = `<div class="question-number">${q.label}</div><h2 class="question-title">${q.title}</h2><p class="question-help">${q.help}</p><div class="option-list">${optionMarkup(q, answers)}</div>`;
}

function renderRefinementQuestion() {
  const q = refinementQuestions[refinementIndex];
  const percent = Math.round(((refinementIndex + 1) / refinementQuestions.length) * 100);
  stepLabel.textContent = `Fit refinement ${refinementIndex + 1} of ${refinementQuestions.length}`;
  progressPercent.textContent = `${percent}%`;
  progressBar.style.width = `${percent}%`;
  validationMessage.textContent = '';
  backButton.disabled = false;
  backButton.style.opacity = '1';
  nextButton.textContent = refinementIndex === refinementQuestions.length - 1 ? 'Recalculate fit' : 'Continue';
  const introCopy = refinementIndex === 0
    ? '<p class="eyebrow">ADDITIONAL MATCHING RECOMMENDED</p><h2 class="question-title">Your profile may need a little more context.</h2><p class="question-help">Three additional questions can help Ashgrove identify a stronger placement path before Round Two.</p>'
    : '';
  questionMount.innerHTML = `${introCopy}<div class="question-number">${q.label}</div><h2 class="question-title">${q.title}</h2><p class="question-help">${q.help}</p><div class="option-list">${optionMarkup(q, refinementAnswers)}</div>`;
}

function buildPriorityQuestions() {
  priorityQuestions = priorityAnswers.sex === 'female'
    ? [...priorityBaseQuestions, ...femalePriorityQuestions]
    : [...priorityBaseQuestions];
}

function renderPriorityQuestion() {
  const q = priorityQuestions[priorityIndex];
  const percent = Math.round(((priorityIndex + 1) / priorityQuestions.length) * 100);
  stepLabel.textContent = `Round Two ${priorityIndex + 1} of ${priorityQuestions.length}`;
  progressPercent.textContent = `${percent}%`;
  progressBar.style.width = `${percent}%`;
  validationMessage.textContent = '';
  backButton.disabled = false;
  backButton.style.opacity = '1';
  nextButton.textContent = priorityIndex === priorityQuestions.length - 1 ? 'Complete profile' : 'Continue';
  const introCopy = priorityIndex === 0
    ? '<p class="eyebrow">ROUND TWO</p><h2 class="question-title">Your initial profile is eligible to continue.</h2><p class="question-help">The next questions refine your long-term Ashgrove placement and household profile.</p>'
    : '';
  questionMount.innerHTML = `${introCopy}<div class="question-number">${q.label}</div><h2 class="question-title">${q.title}</h2><p class="question-help">${q.help}</p><div class="option-list">${optionMarkup(q, priorityAnswers)}</div>`;
}

function collectFrom(q, store) {
  const selected = document.querySelector(`input[name="${q.id}"]:checked`);
  if (!selected) {
    validationMessage.textContent = 'Please choose an answer to continue.';
    return false;
  }
  store[q.id] = selected.value;
  return true;
}

function collectAnswer() {
  const q = questions[currentIndex];
  if (!collectFrom(q, answers)) return false;
  if (q.id === 'age' && answers.age === 'no') {
    validationMessage.textContent = 'This fictional prototype is only available to adults.';
    return false;
  }
  return true;
}

function calculatePrimaryScore() {
  let score = 48;
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
  return Math.max(0, Math.min(96, score));
}

function calculateRefinementBonus() {
  let bonus = 0;
  if (refinementAnswers.relocation === 'possible') bonus += 1;
  if (refinementAnswers.relocation === 'open') bonus += 2;
  if (refinementAnswers.relocation === 'ready') bonus += 3;
  if (refinementAnswers.communityCommitment === 'occasional') bonus += 1;
  if (refinementAnswers.communityCommitment === 'active') bonus += 2;
  if (refinementAnswers.communityCommitment === 'embedded') bonus += 3;
  if (refinementAnswers.planningStyle === 'short') bonus += 1;
  if (refinementAnswers.planningStyle === 'long') bonus += 2;
  if (refinementAnswers.planningStyle === 'structured') bonus += 3;
  return bonus;
}

function calculateScore() {
  return Math.min(96, calculatePrimaryScore() + calculateRefinementBonus());
}

function formatCareerGoal(value) {
  const labels = {
    'clean-energy': 'Clean Energy & Environmental Systems',
    technology: 'Advanced Technology & AI',
    medical: 'Medical & Life Sciences',
    infrastructure: 'Infrastructure & Community Operations',
    education: 'Education & Research',
    homemaker: 'Home & Family Management'
  };
  return labels[value] || 'To be determined';
}

function formatHouseholdAlignment() {
  const aligned = [
    priorityAnswers.financialModel === 'unified',
    ['designated-lead', 'partner-lead'].includes(priorityAnswers.decisionModel),
    ['significant', 'household-first'].includes(priorityAnswers.careerAdjustment),
    ['open', 'integrated'].includes(priorityAnswers.privacyModel),
    ['planning', 'coordinated'].includes(priorityAnswers.familyPlanning),
    ['partner-summary', 'partner-proactive'].includes(priorityAnswers.wellnessSharing),
    ['household', 'lead'].includes(priorityAnswers.conflictPriority)
  ].filter(Boolean).length;
  if (aligned >= 6) return 'Exceptional';
  if (aligned >= 4) return 'Strong';
  if (aligned >= 2) return 'Moderate';
  return 'Independent';
}

function calculateResults() {
  const score = calculateScore();
  const categories = [
    { label: 'Community Fit', value: ['roots', 'balance'].includes(answers.priority) ? 'Excellent' : 'Strong' },
    { label: 'Professional Fit', value: ['professional', 'manager', 'executive'].includes(answers.career) ? 'Excellent' : 'Good' },
    { label: 'Lifestyle Fit', value: answers.mobility === 'high' ? 'Exceptional' : answers.mobility === 'medium' ? 'Strong' : 'Moderate' }
  ];

  if (priorityAnswers.sex === 'female' && priorityAnswers.conflictPriority) {
    categories.push({ label: 'Household Alignment', value: formatHouseholdAlignment() });
  }

  let title = 'Additional Fit Review Recommended';
  let copy = 'Your current answers suggest that Ashgrove may need more context before recommending a placement path.';
  if (score > 50) {
    title = score >= 90 ? 'Priority Community Candidate' : score >= 78 ? 'Strong Community Candidate' : 'Round Two Candidate';
    copy = priorityAnswers.sex === 'female' && priorityAnswers.conflictPriority
      ? 'Your profile has been evaluated for professional contribution, community fit and long-term household compatibility.'
      : 'Your profile has enough initial alignment to continue through Ashgrove’s extended placement review.';
  }

  const placement = priorityAnswers.careerGoal
    ? `Future contribution track: ${formatCareerGoal(priorityAnswers.careerGoal)}.`
    : score <= 50
      ? 'Additional matching questions are recommended before a preliminary placement is assigned.'
      : 'Round Two review completed. Preliminary placement remains subject to community orientation.';

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

function startRoundTwo() {
  mode = 'priority';
  priorityIndex = 0;
  priorityQuestions = [...priorityBaseQuestions];
  renderPriorityQuestion();
}

document.getElementById('startButton').addEventListener('click', () => {
  intro.classList.add('hidden');
  survey.classList.remove('hidden');
  renderQuestion();
});

nextButton.addEventListener('click', () => {
  if (mode === 'primary') {
    if (!collectAnswer()) return;
    if (currentIndex < questions.length - 1) {
      currentIndex += 1;
      renderQuestion();
      return;
    }

    if (calculatePrimaryScore() > 50) {
      startRoundTwo();
    } else {
      mode = 'refinement';
      refinementIndex = 0;
      renderRefinementQuestion();
    }
    return;
  }

  if (mode === 'refinement') {
    const q = refinementQuestions[refinementIndex];
    if (!collectFrom(q, refinementAnswers)) return;
    if (refinementIndex < refinementQuestions.length - 1) {
      refinementIndex += 1;
      renderRefinementQuestion();
      return;
    }

    if (calculateScore() > 50) {
      startRoundTwo();
    } else {
      showResults();
    }
    return;
  }

  if (mode === 'priority') {
    const q = priorityQuestions[priorityIndex];
    if (!collectFrom(q, priorityAnswers)) return;
    if (q.id === 'sex') buildPriorityQuestions();
    if (priorityIndex < priorityQuestions.length - 1) {
      priorityIndex += 1;
      renderPriorityQuestion();
    } else {
      showResults();
    }
  }
});

backButton.addEventListener('click', () => {
  if (mode === 'primary') {
    if (currentIndex === 0) return;
    currentIndex -= 1;
    renderQuestion();
    return;
  }

  if (mode === 'refinement') {
    if (refinementIndex > 0) {
      refinementIndex -= 1;
      renderRefinementQuestion();
    } else {
      mode = 'primary';
      currentIndex = questions.length - 1;
      renderQuestion();
    }
    return;
  }

  if (mode === 'priority') {
    if (priorityIndex > 0) {
      priorityIndex -= 1;
      renderPriorityQuestion();
    } else {
      mode = Object.keys(refinementAnswers).length ? 'refinement' : 'primary';
      if (mode === 'refinement') {
        refinementIndex = refinementQuestions.length - 1;
        renderRefinementQuestion();
      } else {
        currentIndex = questions.length - 1;
        renderQuestion();
      }
    }
  }
});

document.getElementById('restartButton').addEventListener('click', () => {
  Object.keys(answers).forEach(key => delete answers[key]);
  Object.keys(refinementAnswers).forEach(key => delete refinementAnswers[key]);
  Object.keys(priorityAnswers).forEach(key => delete priorityAnswers[key]);
  currentIndex = 0;
  refinementIndex = 0;
  priorityIndex = 0;
  priorityQuestions = [];
  mode = 'primary';
  results.classList.add('hidden');
  intro.classList.remove('hidden');
});

refreshAssessmentCount();
