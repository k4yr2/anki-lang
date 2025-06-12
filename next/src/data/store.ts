import { configureStore } from '@reduxjs/toolkit';
import settings from '@/slice/settings';

const appStore = configureStore({
  reducer: {
    settings,
  }
});

export default appStore;

//

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;