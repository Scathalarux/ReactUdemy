import { boolean } from "zod";

export const GAME_WORDS = [
  "REACT",
  "JAVASCRIPT",
  "TYPESCRIPT",
  "HTML",
  "ANGULAR",
  "SOLID",
  "NODE",
  "VUEJS",
  "SVELTE",
  "EXPRESS",
  "MONGODB",
  "POSTGRES",
  "DOCKER",
  "KUBERNETES",
  "WEBPACK",
  "VITE",
  "TAILWIND",
];
// Esta función mezcla el arreglo para que siempre sea aleatorio
export const shuffleArray = (array: string[]) => {
  return array.sort(() => Math.random() - 0.5);
};

// Esta función mezcla las letras de la palabra
export const scrambleWord = (word: string = "") => {
  return word
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
};

export type ScrambleWordState = {
  currentWord: string;
  errorCounter: number;
  guess: string;
  isGameOver: boolean;
  maxAllowErrors: number;
  maxSkips: number;
  points: number;
  scrambledWord: string;
  skipCounter: number;
  words: string[];
  totalWords: number;
};

export function getInitialState(): ScrambleWordState {
  const shuffledWords = shuffleArray(GAME_WORDS);
  const defaultValue = {
    currentWord: shuffledWords[0],
    errorCounter: 0,
    guess: "",
    isGameOver: false,
    maxAllowErrors: 3,
    maxSkips: 3,
    points: 0,
    scrambledWord: scrambleWord(shuffledWords[0]),
    skipCounter: 0,
    words: shuffledWords,
    totalWords: shuffledWords.length,
  };

  return defaultValue;
}

export type ScrambleWordAction =
  | { type: "SET_GUESS"; payload: string }
  | { type: "CHECK_ANSWER" }
  | { type: "PLAY_AGAIN"; paypload: ScrambleWordState }
  | { type: "SKIP_WORD" };

export function ScrambleWordReducer(
  state: ScrambleWordState,
  action: ScrambleWordAction
): ScrambleWordState {
  switch (action.type) {
    case "SET_GUESS":
      return { ...state, guess: action.payload.toUpperCase().trim() };

    case "CHECK_ANSWER": {
      if (state.currentWord === state.guess) {
        const newWords = state.words;
        newWords.shift();
        return {
          ...state,
          guess: "",
          points: state.points + 1,
          words: newWords,
          currentWord: newWords[0],
          scrambledWord: scrambleWord(newWords[0]),
        };
      }
      return {
        ...state,
        errorCounter: state.errorCounter + 1,
        guess: "",
        isGameOver: state.errorCounter + 1 >= state.maxAllowErrors,
      };
    }
    case "SKIP_WORD": {
      if (state.skipCounter >= state.maxSkips) return state;

      const newWords = state.words;
      newWords.shift();

      return {
        ...state,
        skipCounter: state.skipCounter + 1,
        words: newWords,
        currentWord: newWords[0],
        scrambledWord: scrambleWord(newWords[0]),
        guess: "",
      };
    }
    case "PLAY_AGAIN":
      return action.paypload;
    default:
      return state;
  }
}
