import { loginStart, loginFailure, loginSucess } from "./userRedux";

import { publicRequest } from "../requestaxios";

const apicallLogin = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const response = await publicRequest.post("auth/login", user);
    dispatch(loginSucess(response.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};

export default apicallLogin;
