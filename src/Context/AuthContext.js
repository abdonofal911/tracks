import CreateDataContext from "./CreateDataContext";

const AuthReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signUp = (dispatch) =>{
  return({email , password}) => {
    // make API request to signUP

    // if we signUp ? mpdify state 

    // if sign up fails , Show  error msg

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
     {isSignedIn :false}
     
     );
