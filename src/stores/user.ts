// [ username을 저장하는 store ]

import { makeObservable, action, observable } from "mobx";

export interface Score {
  id: number;
  words: string[];
  score: number;
}

interface UserData {
  username: string;
  scores: Score[];
  addScores: (content: Score) => void;
}

export default class UserDataStore implements UserData {
  @observable
  username = "";

  scores: Score[] = [];

  @action
  addScores = (content: Score) => {
    this.scores.push({
      id: content.id,
      words: content.words,
      score: content.score,
    });
  };
}
