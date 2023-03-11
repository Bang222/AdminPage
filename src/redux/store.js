import {combineReducers, configureStore} from "@reduxjs/toolkit";
import usersReducer from "./userSlice"
import IdeasReducer from "./ideasSlice"
import userReducer from "./authSlice"
import departmentsReducer from "./departmentSlice"
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    whitelist:['auth']
}

const combinedReducer  = combineReducers({
    auth: userReducer,
    listUsers: usersReducer,
    listIdeas: IdeasReducer,
    departments: departmentsReducer,
})
const rootReducer = (state, action) => {
    if (action.type === "auth/logoutSuccess") {
        state = undefined;
    }
    return combinedReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})
export let persistor = persistStore(store)