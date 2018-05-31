import { addFave, removeFave, getAllFaves } from '../../config/models';

// defining actions

const GET_FAVED_SESSION_IDS = 'GET_FAVED_SESSION_IDS';
const CREATE_FAVE_SESSION = 'CREATE_FAVE_SESSION';
const DELETE_FAVE_SESSION = 'DELETE_FAVE_SESSION';
const GET_ERROR = 'GET_ERROR';

// creating action creators

export const get_faved_session_ids = () => ({
  type: GET_FAVED_SESSION_IDS
});

export const create_fave_session = () => ({
  type: CREATE_FAVE_SESSION
});

export const delete_fave_session = () => ({
  type: DELETE_FAVE_SESSION
});

export const get_error = error => ({
  type: GET_ERROR,
  payload: error
});

const initialState = {
  faves: [],
  error: ''
};

// thunk function
export const createTheFave = faveid => dispatch => {
  try {
    addFave(faveid);
    dispatch(get_faved_session_ids());
    dispatch(create_fave_session());
  } catch (e) {
    dispatch(get_error(e));
  }
};

export const deleteTheFave = faveid => dispatch => {
  try {
    removeFave(faveid);
    dispatch(get_faved_session_ids());
    dispatch(delete_fave_session());
  } catch (e) {
    dispatch(get_error(e));
  }
};

// creating reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FAVED_SESSION_IDS: {
      return { ...state, faves: getAllFaves(), error: '' };
    }
    case CREATE_FAVE_SESSION:
    case DELETE_FAVE_SESSION:
    case GET_ERROR: {
      const error = action.payload;
      return { ...state, error };
    }
    default: {
      return {
        ...state
      };
    }
  }
};
