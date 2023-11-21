import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initailState: IUser = {
  user: null,
  loading: false,
  isLogged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initailState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isLogged = true;
      state.loading = false;
      localStorage.setItem("email", state.user.email);
      localStorage.setItem("displayName", state.user.displayName);
      localStorage.setItem("photoUrl", state.user.photoUrl);
      localStorage.setItem("id", state.user.id);
    },
    logout: (state) => {
      state.user = null;
      state.isLogged = false;
      localStorage.removeItem("email");
      localStorage.removeItem("displayName");
      localStorage.removeItem("photoUrl");
      localStorage.removeItem("id");
      window.location.reload;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
