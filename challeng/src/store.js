import { configureStore } from "@reduxjs/toolkit";
import tasks  from "../src/features/counter/pruebaSlider";

export const store = configureStore({
    reducer: {
      tasks
  
    },
  }) 