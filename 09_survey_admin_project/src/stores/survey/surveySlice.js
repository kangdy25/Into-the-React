import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    addQuestion: (state, action) => {
      const type = action.payload;
      let options = {};
      if (type === 'text' || type === 'textarea') {
        options = {
          max: 20,
          placeholder: '',
        };
      } else if (type === 'select') {
        options = {
          max: 1,
          items: ['가', '나', '다'],
        };
      }

      state.questions.push({
        title: 'Untitled',
        desc: '',
        type,
        required: false,
        options,
      });
    },
    moveUpQuestion: (state, action) => {
      const index = action.payload;
      const temp = state.questions[index];

      state.questions[index] = state.questions[index - 1];
      state.questions[index - 1] = temp;
    },
    moveDownQuestion: (state, action) => {
      const index = action.payload;
      const temp = state.questions[index];

      state.questions[index] = state.questions[index + 1];
      state.questions[index + 1] = temp;
    },
    moveDeleteQuestion: (state, action) => {
      const index = action.payload;

      state.questions.splice(index, 1);
    },
    setSurvey: (state, action) => {
      state.data = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setTitle,
  addQuestion,
  moveUpQuestion,
  moveDownQuestion,
  moveDeleteQuestion,
  setSurvey,
  setError,
  setLoading,
} = surveySlice.actions;

export default surveySlice.reducer;
