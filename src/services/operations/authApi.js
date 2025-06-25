// import { apiconnector } from "../apiConnector";
// import { userEndpoints } from "../apis";
// import { toast } from "react-hot-toast";
// import { setToken, setLoading, setSignupData, setUser } from "../../slices/authSlice";

// export const registerUser = async (email,password,name,phone,navigate) =>{
//     toast.loading("Registering User...");
//     try {
//         const response = await apiconnector("POST",userEndpoints.REGISTER,{email,password,name,phone});

//         if(!response.data.success){
//             toast.error(response.data.message);
//             return;
//         }

//         toast.success("User Registered Successfully");
//         navigate("/login");
//         return response.data;
//     } catch (error) {
//         console.log(error);
//     } finally {
//         toast.dismiss();
//     }
// }

// export function login(
//     email,
//     password,
//     navigate
// ){
//     return async (dispatch) =>{
//         const toastId = toast.loading("LOADING...");
//         dispatch(setLoading(true));
//         try {
//             const response = await apiconnector("POST",userEndpoints.LOGIN,{
//                 email,password
//             });

//             if(!response.data.success){
//                 throw new Error(response.data.message);
//             }

//             toast.success("Login Successful");
//             dispatch(setToken(response.data.token));
//             dispatch(setUser(response.data.user));
//             localStorage.setItem("token",JSON.stringify(response.data.token));
//             localStorage.setItem("user",JSON.stringify(response.data.user));

//             navigate("/")
//         } catch (error) {
//             console.log("LOGIN API ERROR" ,error);
//             toast.error(error.response.data.message);
//         }
//         dispatch(setLoading(false));
//         toast.dismiss(toastId);
//     }
// }

// export const logout = (navigate) =>{
//     return async (dispatch) =>{
//         const toastId = toast.loading("LOADING...");
//         dispatch(setLoading(true));
//         try {
//             const response = await apiconnector("POST",userEndpoints.LOGOUT);
//             if(!response.data.success){
//                 throw new Error(response.data.message);
//             }
//             dispatch(setToken(null));
//             dispatch(setUser(null));
//             localStorage.removeItem("token");
//             localStorage.removeItem("user");
//             toast.success("Logged out successfully");
//             navigate("/login");
//         } catch (error) {
//             console.log("LOGOUT API ERROR" ,error);
//             toast.error(error.response.data.message);
//         } finally {
//             dispatch(setLoading(false));
//             toast.dismiss(toastId);
//         }
//     }
// }