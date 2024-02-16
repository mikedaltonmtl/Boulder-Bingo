import { createSlice } from '@reduxjs/toolkit';
import { setCardArray, reinitializeCard } from '@/app/helpers/setCardArray';
import { cleanData } from '@/app/helpers/conversions';

const initialState = {
  value: {
    nbTasks: 12,
    colours: {
      purple: true,
      white:  true,
      blue:   true,
      red:    true,
      yellow: true,
      black:  true,
    },
    intros: true,
    exercises: {
      pullUp: true,
      pushUp: true,
      squat:  true,
      jack:   true,
    },
    climbRange: [1, 5],
    card: [
      { content: '10 Push-ups', type: 'exercise', isComplete: false, id: 1 },
      { content: 'Black climb', type: 'colour', isComplete: false, id: 2 },
      { content: '', type: 'empty', isComplete: true, id: 3 },
      { content: 'C2.2', type: 'climb', isComplete: false, id: 4 },
      { content: 'Purple climb', type: 'colour', isComplete: false, id: 5 },
      { content: 'Intro', type: 'climb', isComplete: false, id: 6 },
      { content: 'All the intros', type: 'intros', isComplete: false, id: 7 },
      { content: '', type: 'empty', isComplete: true, id: 8 },
      { content: '', type: 'empty', isComplete: true, id: 9 },
      { content: 'C1', type: 'climb', isComplete: false, id: 10 },
      { content: 'Yellow climb', type: 'colour', isComplete: false, id: 11 },
      { content: 'Red climb', type: 'colour', isComplete: false, id: 12 },
      { content: '5 Pull-ups', type: 'exercise', isComplete: false, id: 13 },
      { content: '', type: 'empty', isComplete: true, id: 14 },
      { content: 'White climb', type: 'colour', isComplete: false, id: 15 },
      { content: 'Intro', type: 'climb', isComplete: false, id: 16 },
    ],
    id: 16,
  }
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setNbTasks: (state, action) => {
      state.value.nbTasks = action.payload;
    },
    setColours: (state, action) => {
      state.value.colours = action.payload;
    },
    setIntros: (state, action) => {
      state.value.intros = action.payload;
    },
    setExercises: (state, action) => {
      state.value.exercises = action.payload;
    },
    setClimbRange: (state, action) => {
      state.value.climbRange = action.payload;
    },
    setCard: (state) => {
      state.value.card = setCardArray(
        state.value.nbTasks,
        cleanData(state.value.colours, 'colour'),
        state.value.intros,
        cleanData(state.value.exercises, 'exercise'),
        state.value.climbRange,
        state.value.id,
      );
      state.value.id += 16;
    },
    // restartCard: (state) => {
    //   const initialCard = reinitializeCard(state.value.card);
    //   state.value.card = initialCard;
    // },
    restartCard: (state, action) => {
      state.value.card = action.payload;
    },
  }
});

export const {
  setNbTasks,
  setColours,
  setIntros,
  setExercises,
  setClimbRange,
  setCard,
  restartCard,
} = settingsSlice.actions;

export default settingsSlice.reducer;