import axios from "axios";

const rootAPIUrl = "http://localhost:8000/api/v1";
const taskEp = rootAPIUrl + "/task";

export const fetchAllTask = async () => {
  try {
    const { data } = await axios.get(taskEp);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const postTask = async (taskData) => {
  try {
    const { data } = await axios.post(taskEp, taskData);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const updateTask = async (dataObj) => {
  try {
    const { data } = await axios.patch(taskEp, dataObj);
    // console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const deleteTasks = async (_id) => {
  try {
    const { data } = await axios.delete(taskEp, { data: _id });
    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
