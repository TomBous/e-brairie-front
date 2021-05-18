import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import rootReducer from "./root";

export default (preloadedState) => {
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(
            new createLogger(), // INFO Il faut passer une instance à applyMiddleware
        )
    );
};