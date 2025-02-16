import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AuthUser() {
   let navigate = useNavigate();
   const apiUrl = process.env.REACT_APP_API_URL;
   const getToken = () => {
      const tokenString = JSON.parse(localStorage.getItem("token"));
      return tokenString;
   };

   const saveToken = (token, persona_id) => {
      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("paciente_id", JSON.stringify(persona_id));
   };
   const deleteToken = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("paciente_id");
      navigate("/");
   };
   const http = axios.create({
      // baseURL: "http://api.bregma.com.pe/public/api",
      // baseURL: "http://34.237.228.37/bregma_back/public/api",

      baseURL: apiUrl,
      headers: {
         "Content-type": "application/json",
         Authorization: `Bearer ${getToken()}`,
      },
   });

   return {
      getToken,
      deleteToken,
      setToken: saveToken,
      http,
   };
}
