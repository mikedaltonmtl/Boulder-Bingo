import { createSlice } from '@reduxjs/toolkit';
import { setCardArray } from '@/app/helpers/setCardArray';
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
      {content: '10 Push-ups', type: 'exercise', isComplete: false},
      {content: 'Black climb', type: 'colour', isComplete: false},
      {content: '', type: 'empty', isComplete: true},
      {content: 'C2.2', type: 'climb', isComplete: false},
      {content: 'Purple climb', type: 'colour', isComplete: false},
      {content: 'Intro', type: 'climb', isComplete: false},
      {content: 'All the intros', type: 'intros', isComplete: false},
      {content: '', type: 'empty', isComplete: true},
      {content: '', type: 'empty', isComplete: true},
      {content: 'C1', type: 'climb', isComplete: false},
      {content: 'Yellow climb', type: 'colour', isComplete: false},
      {content: 'Red climb', type: 'colour', isComplete: false},
      {content: '5 Pull-ups', type: 'exercise', isComplete: false},
      {content: '', type: 'empty', isComplete: true},
      {content: 'White climb', type: 'colour', isComplete: false},
      {content: 'Intro', type: 'climb', isComplete: false},
    ],
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
    setCard: (state, action) => {
      state.value.card = setCardArray(
        state.value.nbTasks,
        cleanData(state.value.colours, 'colour'),
        state.value.intros,
        cleanData(state.value.exercises, 'exercise'),
        state.value.climbRange,
      );
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
} = settingsSlice.actions;

export default settingsSlice.reducer;