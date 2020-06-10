import {fetchUser, fetchUsers} from '../utils/user_utils';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
})

const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
})

export const requestUser = (id) => dispatch => {
  return fetchUser(id)
    .then((user) => dispatch(receiveUser(user)))
}

export const requestUsers = () => dispatch => {
  return fetchUsers()
    .then((users) => dispatch(receiveUsers(users)))
}