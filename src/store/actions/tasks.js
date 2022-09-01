import { getTask } from '../../services/api';

export const getTasksAction = () => async dispatch => {
  console.tron.log('action');
  dispatch(setIsLoading(true));
  try {
    const res = await getTask();
    const { data } = res.data;

    dispatch({
      type: 'SET_TASKS',
      payload: data,
    });
  } catch (error) {
    console.log('error: ', error);
  } finally {
    dispatch(setIsLoading(false));
  }
};

export const setIsLoading = isLoading => ({
  type: 'SET_LOADING',
  payload: isLoading,
});
