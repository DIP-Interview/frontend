import { createContext, useContext } from "react";
import RootStore from "./stores";

export const StoreContext = createContext(new RootStore());
export const StoreProvider = StoreContext.Provider;

export const useStores = () => useContext(StoreContext);
