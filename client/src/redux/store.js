import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartReducer'
import wishlistReducer from './wishlistReducer'

//
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
}
//

const persistedReducerCart = persistReducer(persistConfig, cartReducer)
const persistedReducerWishlist = persistReducer(persistConfig, wishlistReducer)


export const store = configureStore({
  reducer: {
    cart: persistedReducerCart,
    wishlist:persistedReducerWishlist
  },

  //
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  //
})

//
export let persistor = persistStore(store)
//