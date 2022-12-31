import { configureStore } from '@reduxjs/toolkit'
import mediasoupReducer from '../features/mediasoupSlice'
import { enableMapSet } from 'immer';

enableMapSet();


export const store = configureStore({
  reducer: {
    mediasoup : mediasoupReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch