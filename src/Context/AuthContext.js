import CreateDataContext from "./CreateDataContext";
import TrackerApi from "../Api/Tracker";

const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'add_error' :return {...state , errorMessage:action.payload}
    default:
      return state;
  }
};

const signUp = (dispatch) =>{
  return async ({email , password}) => {
    try {
      const response = await TrackerApi.post('/signup' , {email , password})
      console.log(response.data)
    } catch (err) {
      dispatch({type : 'add_error' , payload: 'Something went wrong with sign up'})
    }
  }
}
const signIn = (dispatch) =>{
  return({email , password}) => {
    // make API request to signIn

    // if we signIn ? mpdify state 

    // if sign in fails , Show  error msg

  }
}
const signOut = (dispatch) =>{
  return({email , password}) => {
    // make API request to signOut

    // if we signOut ? mpdify state 


  }
}


export const { Provider, Context } = CreateDataContext(
    AuthReducer,
     {signIn , signOut , signUp},
     {isSignedIn :false , errorMessage: ''}
     
     );
