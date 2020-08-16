const InitialState = {
  name: ''
}

const UsuarioReducer = (state=InitialState, action) => {

  switch(action.type) {
    case 'SET_NAME':
      return{
        ...state, name: action.payload.name
      }
      break
  }

  return state;
}

export default UsuarioReducer;