import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';


const contactsConfig = {
  key: 'contacts',
  storage, 
  whitelist: ['contacts'],
};

export const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsConfig, contactsReducer), // Редюсер для управління станом контактів
    filter: filterReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store); 



// import { createStore } from "redux";


//  const reducer = (state, action) => {
//   switch (action.type) {
//     case "increment":
//       return { ...state, total: action.payload };
//       break;

//     case "user":
//       return { ...state, user: [{ ...state.user }, action.payload] };
//       break;

//     case "addTodo":
//       return { ...state, todo: [...state.todo, action.payload] };
//       break;

//     default:
//       return state;
//       break;
//   }
// };

// export const store = createStore(reducer, { total: 0, user: [], todo: [] });
// console.log("state :>> ", store.getState());

// store.dispatch({ type: "increment", payload: 11 });

// store.dispatch({ type: "user", payload: 3 }); 
// console.log("state :>> ", store.getState());

// store.dispatch({ type: "todo", payload: "tits" });
// console.log("state :>> ", store.getState());


// // const reducer = (state, action) => {
// //     if(action.type === 'increment') {
// //         return {...state, total: action.payload}
// //     }
// //     if(action.type === 'user') {
// //         return {...state, user: action.payload}
// //     }
// //     return state
// // }
