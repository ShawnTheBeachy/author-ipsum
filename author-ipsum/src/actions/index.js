"use strict";

import { ADD_PHRASES, POP_PHRASES, SET_GENERATE_COUNT } from "./types";

export function addPhrases (count) {
  return {
    count,
    type: ADD_PHRASES
  };
}

export function popPhrases (count) {
  return {
    count,
    type: POP_PHRASES
  };
}

export function setGenerateCount (count) {
  return {
    count,
    type: SET_GENERATE_COUNT
  };
}
