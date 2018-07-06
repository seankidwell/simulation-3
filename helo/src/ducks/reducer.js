let initialState = {
  id: '',
  username: '',
  profilePicture: ''
}

const USER_DATA = "USER_DATA";

export function setUser(id, username, profilePicture) {
  return {
    type: USER_DATA, 
    payload: {
      id: id,
      username: username,
      profilePicture: profilePicture
    }
  }
}

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case USER_DATA:
      return Object.assign({}, state, {id: action.payload.id, username: action.payload.username, profilePicture: action.payload.profilePicture});
    default:
      return state;
  }
}