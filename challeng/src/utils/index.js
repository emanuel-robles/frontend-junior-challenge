import axios from "axios";
import {getAllTodos } from "../features/counter/CounterSlice";
export const getTodos = () => {
    return async function (dispatch) {
      try {
        let { data } = await axios({
          method: "GET",
          url: `https://my-json-server.typicode.com/AlvaroArratia/static-todos-api/todos`,
        });
  
        dispatch(getAllTodos(data));
      } catch (error) {
        console.log(error.message);
      }
    };
  };