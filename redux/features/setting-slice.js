import { createSlice } from '@reduxjs/toolkit';

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
    climbRange: [1, 5]
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
  }
});

export const {
  setNbTasks,
  setColours,
  setIntros,
  setExercises,
  setClimbRange,
} = settingsSlice.actions;

export default settingsSlice.reducer;