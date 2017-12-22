"use strict";

import { ADD_PHRASES, POP_PHRASES, SET_GENERATE_COUNT } from "actions/types";
import allPhrases from "../phrases";
import { combineReducers } from "redux";

function generateCount (state = 1, action) {
  switch (action.type) {
    case SET_GENERATE_COUNT:
      var stringValue = action.count.toString();

      if (stringValue.length === 0) {
        stringValue = "1";
      }

      return parseInt(stringValue, 10);
    default:
      return state;
  }
}

function phrases (state = [ allPhrases[random(allPhrases.length - 1)] ], action) {
  switch (action.type) {
    case ADD_PHRASES:
      let toAdd = [];

      for (var i = 0; i < action.count; i++) {
        toAdd.push(allPhrases[random(allPhrases.length - 1)]);
      }

      return [
        ...state,
        ...toAdd
      ];
    case POP_PHRASES:
      return [
        ...state.splice(0, state.length - action.count)
      ];
    default:
      return state;
  }
}

function random (max) {
  return Math.floor(Math.random() * (max + 1));
}

export default combineReducers({
  generateCount,
  phrases
});
