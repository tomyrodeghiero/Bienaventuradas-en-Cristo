import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ReadingScreen from "./pages/reading-screen/ReadingScreen";
import TopicsScreen from "./pages/topics-screen/TopicsScreen";
import { useTranslation } from "react-i18next";
import LoginScreen from "./pages/login-screen/LoginScreen";
import CreatePost from "./pages/create-post/CreatePost";
import { UserContextProvider } from "./context/UserContext";
import PostPage from "./pages/post-page/PostPage";

function App() {
  const { t } = useTranslation();
  document.title = t("Blessed in Christ");

  return (
    <UserContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reading" element={<ReadingScreen />} />
          <Route path="/topics" element={<TopicsScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<PostPage />} />
        </Routes>
      </Router>
    </UserContextProvider>
  );
}

export default App;
