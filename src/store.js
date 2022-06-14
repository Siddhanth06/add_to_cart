import { createStore } from "redux";
import { rootred } from "./redux/reducers/main";

export const store = createStore(rootred);