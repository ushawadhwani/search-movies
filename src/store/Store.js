import { applyMiddleware, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import { reducers } from "./reducers/Reducers";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistenceConfigs = {
  key: "MovieStore", // whatever you want to keep as your key
  storage,
};

const persistedReducer = persistReducer(persistenceConfigs, reducers);

export const store = createStore(persistedReducer, applyMiddleware(ReduxThunk));
export const persistedStore = persistStore(store);
