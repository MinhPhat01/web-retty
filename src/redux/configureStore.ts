import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import createSagaMiddlewar from '@redux-saga/core';
import rootSaga from './rootSaga';
import { reducer } from './reducers';

const sagaMiddleware = createSagaMiddlewar();

export const store = configureStore({
  reducer: reducer,
  middleware: (gDM) => gDM().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;