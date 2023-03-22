import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import Navbar from "../components/Navbar";
import ProfilePage from "../pages/ProfilePage";
import { CategoriesPage } from "../pages/CategoriesPage";
import { LoginPage } from "../pages/LoginPage";
import { PaymentsPage } from "../pages/PaymentsPage";
import { RegisterPage } from "../pages/RegisterPage";
import { DashboardPage } from "../pages/DashboardPage";

const user = null;

export const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={HomePage} />
        <Route exact path="/about" Component={AboutPage} />
        <Route exact path="/contact" Component={ContactPage} />
        <Route exact path="/profile/:username" Component={ProfilePage} />
        <Route exact path="/categories" Component={CategoriesRouter} />
        <Route exact path="/login" Component={LoginPage} />
        <Route exact path="/register" Component={RegisterPage} />
        <Route
          exact
          path="/dashboard"
          element={user ? <DashboardPage /> : <Navigate to="/login" />}
        />
        <Route exact path="/payments" Component={PaymentsPage} />
        <Route path="*" Component={NotFoundPage} />
      </Routes>
    </Router>
  );
};

function CategoriesRouter() {
  return (
    <Routes>
      <Route exact path="/categories" Component={CategoriesPage} />
      <Route exact path="/categories/terror" Component={CategoriesPage} />
      <Route
        exact
        path="/categories/action"
        element={<h1>Category Action</h1>}
      />
      <Route exact path="/categories/anime" element={<h1>Category Anime</h1>} />
    </Routes>
  );
}
