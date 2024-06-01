import { configureStore } from "@reduxjs/toolkit";
import quiz from "./Slices/quizSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
export const store = configureStore({
    reducer: {
        quiz
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelecor: TypedUseSelectorHook<RootState> = useSelector