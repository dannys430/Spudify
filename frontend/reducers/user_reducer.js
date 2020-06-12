import {RECEIVE_USER, RECEIVE_USERS} from '../actions/user_actions';


const UserReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER:
      return Object.assign({}, state, {[action.user.id]: action.user})
      // const copy = Object.assign({}, state)
      // copy[action.user.id] = action.user;
      // return copy;
    case RECEIVE_USERS:
      return action.users;
    default:
      return state;
  }
}

export default UserReducer;