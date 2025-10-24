import React from "react";
import { Routes, Route } from "react-router-dom";
import ForgottenPassWord from "./pages/ForgottenPassWord";
import HomePage from "./pages/HomePage";
import PodcastsPage from "./pages/PodcastsPage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import NewsPage from "./pages/NewsPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import ResourcesPage from "./pages/ResourcesPage";
import Signup from "./pages/Signup";
import ArticlePage from "./pages/ArticlePage";
import BlogPost from "./pages/BlogPost";
import { Toaster } from "sonner";
import Login from "./pages/Login";
const App = () => {
  return (
    <div>
      <Toaster richColors position="top-right" />
      <Routes>
        <Route path='/createPost' element={<ArticlePage/>} />
         <Route path ='/contact' element={<ContactPage/>} />
        <Route path="/blogpost/:id" element={<BlogPost/>} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/podcasts" element={<PodcastsPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgottenpassword" element={<ForgottenPassWord />} />
      </Routes>
    </div>
  );
};

export default App;
