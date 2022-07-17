import { Route, Routes, Navigate } from "react-router-dom";

import { LoginPage } from "../auth/pages/LoginPage";
import { RegisterPage } from "../auth/pages/RegisterPage";

import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { AuthRoutes } from "../auth/routes/AuthRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      {/* Login y registro */}
      <Route path="/auth/*" element={ <AuthRoutes/> }/>

      {/* JournalApp */}
      <Route path="/*" element={ <JournalRoutes/> }/>
    </Routes>
  );
};
