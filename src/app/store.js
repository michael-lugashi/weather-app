import weatherReducer from "./weatherReducer";
import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const myLogger = (store) => next => action=>{
    console.log("Logged Action: ", action)
    next(action)
}


export const store = createStore(weatherReducer,applyMiddleware(myLogger, thunk))

