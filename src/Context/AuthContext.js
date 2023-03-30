import CreateDataContext from "./CreateDataContext";

const AuthReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const { Provider, Context } = CreateDataContext(
    AuthReducer,
     {},
     {isSignedIn :false}
     
     );
