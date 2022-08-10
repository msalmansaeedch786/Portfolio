import { createStore } from "redux"

import allReducers from "./GlobalState/reducer"

const GlobalState = createStore(allReducers)



export default GlobalState