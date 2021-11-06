// [ username을 저장하는 store ]

import { action, observable } from "mobx";

export interface Score {
  id: number;
  words: string[];
  score: number;
}

interface UserData {
  username: string;
  scores: Score[];
  addUsername: (name: string) => void;
  addScores: (contents: Score) => void;
}

export default class UserDataStore implements UserData {
  @observable
  username = "";

  scores: Score[] = [];

  @action
  addUsername = (name: string) => {
    this.username = name;
  };

  addScores = (contents: Score) => {
    this.scores.push({
      id: contents.id,
      words: contents.words,
      score: contents.score,
    });
  };
}
