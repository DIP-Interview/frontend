// [ 여러개의 store 합쳐주는 useStore ]

import store from "./stores";

const useStore = () => store;

export default useStore;
