import { vocabulary } from "../app/vocabulary";

const getInitialState = (stateSlice = "") => {
  let initialState = stateSlice === "vocabulary" ? vocabulary.content : [];

  if (stateSlice === "vocabulary" && localStorage.getItem("words")) {
    initialState = JSON.parse(localStorage.getItem("words"));
  } else if (stateSlice === "history" && localStorage.getItem("tests")) {
    initialState = JSON.parse(localStorage.getItem("tests"));
  }

  return initialState;
};

const getRandomWords = (arr = [], limit = 0) => {
  const shuffled = [...arr];

  // eslint-disable-next-line no-plusplus
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, limit);
};

export { getInitialState, getRandomWords };
