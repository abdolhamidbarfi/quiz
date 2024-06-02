import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { callApi } from "../../helper/callApi";
import { queryGenerator } from "../../helper/queryGenerator";
import { quizGenerator } from "../../helper/quizGenerator";

export interface QuizState {
    data: {
        quizData: {
            type: string
            difficulty: string
            category: string
            question: string
            correct_answer: string
            answers: string[]
        }[],
        correctAnswers: string[]
    }
    success: boolean,
    loading: boolean,
    error: boolean,
    answers: any
}

const initialState: QuizState = {
    data: { quizData: [], correctAnswers: [] },
    success: false,
    loading: false,
    error: false,
    answers: ""
}

const getQuizRequest = (data: any) => callApi.get(queryGenerator(data, "playerName"))

export const getQuiz = createAsyncThunk("getQuiz", getQuizRequest)

export const quizSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        setAnswers: (state, action) => {
            state.answers = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getQuiz.pending, (state, action) => {
            if (action.payload === undefined) {
                state.loading = true
            } else {
                state.loading = false
            }
        });
        builder.addCase(getQuiz.fulfilled, (state, action) => {
            // console.log(action.payload)
            if (action.payload !== undefined) {
                state.data = quizGenerator(action.payload.data.results)
                state.loading = false
                state.success = action.payload.status === 200 && true
            }
        });
        builder.addCase(getQuiz.rejected, (state, action) => {
            // console.log("state rejected ---->", state, "action rejected ----->", action.payload)
        })
    }
})

export const { setAnswers } = quizSlice.actions

export default quizSlice.reducer