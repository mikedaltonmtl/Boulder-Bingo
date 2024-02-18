const exerciseArray = [
  { label: 'Pull-ups', name: 'pullUp'},
  { label: 'Push-ups', name: 'pushUp'},
  { label: 'Squats', name: 'squat'},
  { label: 'Jumping Jacks', name: 'jack'},
];

const exerciseConversions = {
  pullUp: '5 Pull-ups',
  pushUp: '10 Push-ups',
  squat: '15 Squats',
  jack: '20 Jumping Jacks'
};

const convertValueToLabel = function(value) {
  switch (value) {
  case 1: return "Intro";
  case 2: return 1;
  case 3: return 2.1;
  case 4: return 2.2;
  case 5: return 2.3;
  case 6: return 3.1;
  case 7: return 3.2;
  case 8: return 3.3;
  case 9: return 4.1;
  case 10: return 4.2;
  }
};

const cleanData = function(object, type) {
  const array = [];

  if (type === 'colour') {
    for (const [key, value] of Object.entries(object)) {
      if (value) {
        const capitalizedColour = key[0].toUpperCase() + key.slice(1);
        array.push({ content: `${capitalizedColour} climb`, type: 'colour', isComplete: false });
      }
    }
  }

  if (type === 'exercise') {
    for (const [key, value] of Object.entries(object)) {
      if (value) {
        array.push({ content: exerciseConversions[key], type: 'exercise', isComplete: false });
      }
    }
  }

  return array;
};

module.exports = { cleanData, exerciseArray, convertValueToLabel };