import { configureStore } from "@reduxjs/toolkit";
import { persistCombineReducers, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import forumReducer from "store/slices/forumSlice";
import questionModalReducer from "store/slices/questionModalSlice";

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistCombineReducers(persistConfig, {
  forum: forumReducer,
  questionModal: questionModalReducer
});

const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
