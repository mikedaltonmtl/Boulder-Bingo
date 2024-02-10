const randomInteger = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Map where to put the empty spaces for a given number of tasks demanded
const setEmptiesArray = function(nbTasks) {
  if (nbTasks === 8) {
    return [1, 2, 5, 7, 8, 10, 13, 14];
  }

  if (nbTasks === 12) {
    return [2, 7, 8, 13];
  }

  return [];
};

/**
 * We need to return an array containing the number of tasks demanded,
 * plus any empty tasks to ensure that the card is square.
 *
 * First we'll add all of the elements from the settings into the cardArray.
 * If we need extra elements, we'll add more climbs.
 *
 * Next, we'll randomize the order of the array.
 * If we have too many elements, we'll cut the array.
 *
 * Lastly, we'll add any empty tasks that we need to fill the grid, and return it.
 */
const setCardArray = function(nbTasks, colours, intros, exercises, climbRange) {

  const taskArray = [];

  if (colours.length > 0) {
    taskArray.push(...colours);
  }

  if (intros) {
    taskArray.push({ content: 'All the intros', type: 'intros' });
  }

  if (exercises.length > 0) {
    taskArray.push(...exercises);
  }

  /////////////////////////////////////////////////////////////////
  // Maybe we need to use a SET to make sure no duplicate climbs?
  /////////////////////////////////////////////////////////////////

  // If we already have enough tasks, add 5 climbs by default
  if (taskArray.length >= nbTasks) {
    for (let i = 0; i < 5; i++) {
      const difficulty = randomInteger(climbRange[0], climbRange[1]);
      taskArray.push({ content: difficulty, type: 'climb' });
    }
  // else fill the remaining tasks with climbs
  } else {
    while (taskArray.length < nbTasks) {
      const difficulty = randomInteger(climbRange[0], climbRange[1]);
      taskArray.push({ content: difficulty, type: 'climb' });
    }
  }

  // Shuffle the padded array using Fisher-Yates
  for (let i = taskArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [taskArray[i], taskArray[j]] = [taskArray[j], taskArray[i]];
  }
  
  // Trim the taskArray if it's longer than the number of tasks required
  const cardArray = taskArray.slice(0, nbTasks);

  // If we need empties, add them
  if (nbTasks < 16) {
    const emptiesArray = setEmptiesArray(nbTasks);
    emptiesArray.forEach(emptyIndex => cardArray.splice(emptyIndex, 0, { content: '', type: 'empty' }));
  }

  return cardArray;
};

module.exports = { setCardArray };