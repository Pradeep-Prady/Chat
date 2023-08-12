import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import store from "./store";
import { useEffect } from "react";
import { loadUser } from "./actions/userActions";
import { HelmetProvider } from "react-helmet-async";
import toast, { Toaster } from "react-hot-toast";

import Navbar from "./Components/layouts/Navbar";
import Login from "./Components/user/Login";
import ForgotPassword from "./Components/user/ForgotPassword";
import Home from "./Components/Home";
import Profile from "./Components/user/Profile";
import ResetPassword from "./Components/user/ResetPassword";
import UpdateProfile from "./Components/user/UpdateProfile";
import UpdatePassword from "./Components/user/UpdatePassword";
import GangImages from "./Components/layouts/Gang/GangImages";
import ImageCardDetails from "./Components/layouts/Gang/ImageCardDetails";
import ProtectedRoute from "./Components/route/ProtectedRoute";
import Chat from "./Components/layouts/Chat/Chat";
import Dashboard from "./Components/admin/Dashboard";
import Reviews from "./Components/admin/Reviews";
import ReviewDetail from "./Components/admin/ReviewDetail";
import Register from "./Components/admin/Register";
import UpdateUser from "./Components/admin/UpdateUser";
import AdminGangImages from "./Components/admin/AdminGangImages";
import UploadGangImage from "./Components/admin/UploadGangImage";
import UserGangImages from "./Components/admin/UserGangImages";
import GangImageUpload from "./Components/user/GangImageUpload";
import GangImageDetail from "./Components/admin/GangImage/GangImageDetail";

function App() {
  useEffect(() => {
    store.dispatch(loadUser);
  });
  return (
    <Router>
      <div className="App">
        <Toaster />
        <HelmetProvider>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/password/forgot" element={<ForgotPassword />} />
            <Route path="/password/reset/:token" element={<ResetPassword />} />

            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile/update"
              element={
                <ProtectedRoute>
                  <UpdateProfile />
                </ProtectedRoute>
              }
            />

            <Route
              path="/profile/password"
              element={
                <ProtectedRoute>
                  <UpdatePassword />
                </ProtectedRoute>
              }
            />

            <Route
              path="/gang/images/:id"
              element={
                <ProtectedRoute>
                  <GangImages />
                </ProtectedRoute>
              }
            />
            <Route
              path="/gang/image/upload"
              element={
                <ProtectedRoute>
                  <GangImageUpload />
                </ProtectedRoute>
              }
            />

            <Route
              path="/gang/chat"
              element={
                <ProtectedRoute>
                  <Chat />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute isAdmin={true}>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/register"
              element={
                // <ProtectedRoute isAdmin={true}>
                  <Register />
                // </ProtectedRoute>
              }
            />

            <Route
              path="/admin/user/:id"
              element={
                <ProtectedRoute isAdmin={true}>
                  <UpdateUser />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/reviews"
              element={
                <ProtectedRoute isAdmin={true}>
                  <Reviews />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/review/:id"
              element={
                <ProtectedRoute isAdmin={true}>
                  <ReviewDetail />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/gang"
              element={
                <ProtectedRoute isAdmin={true}>
                  <AdminGangImages />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/gang/:id"
              element={
                <ProtectedRoute isAdmin={true}>
                  <GangImageDetail />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/userimages"
              element={
                <ProtectedRoute isAdmin={true}>
                  <UserGangImages />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/gang/upload"
              element={
                <ProtectedRoute isAdmin={true}>
                  <UploadGangImage />
                </ProtectedRoute>
              }
            />

            <Route path="/gang/image/:id" element={<ImageCardDetails />} />
          </Routes>
        </HelmetProvider>
      </div>
    </Router>
  );
}

export default App;
