import UserDataStore from "./userDataStore";

export default class RootStore {
  userDataStore: UserDataStore;

  constructor() {
    this.userDataStore = new UserDataStore();
  }
}
