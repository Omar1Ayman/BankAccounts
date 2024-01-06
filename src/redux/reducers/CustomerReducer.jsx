import { createSlice } from "@reduxjs/toolkit";

const CustomerinitState = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};
// function CustomerReducer(state = CustomerinitState, action) {
//   switch (action.type) {
//     case "customer/create":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         nationalID: action.payload.nationalID,
//         createdAt: new Date().toISOString(),
//       };
//     case "customer/update":
//       return { ...state, fullName: action.payload };
//     default:
//       return state;
//   }
// }

const CustomerReducer = createSlice({
  name: "customer",
  initialState: CustomerinitState,
  reducers: {
    createCustomer: {
      prepare(fullName, nationalID) {
        return {
          payload: { fullName, nationalID },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalID = action.payload.nationalID;
        state.createdAt = new Date().toISOString();
      },
    },
    updateCustomer: (state, action) => {
      state.fullName = action.payload.fullName;
    },
  },
});

export const { createCustomer, updateCustomer } = CustomerReducer.actions;
export default CustomerReducer.reducer;

// export function createCustomer(fullName, nationalID) {
//   return { type: "customer/create", payload: { fullName, nationalID } };
// }

// export function updateCustomer(fullName) {
//   return { type: "customer/update", payload: fullName };
// }
// export default CustomerReducer;
