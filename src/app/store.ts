import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import dishesSlice from "../features/dishesSlice";

export const store = configureStore({
  reducer: {
    dishes: dishesSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
