import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import OurTeam from './pages/OurTeam';
import AboutUs from './pages/AboutUs';
import Opinion from './pages/Opinion';
import BlogPage from './pages/BlogPage';
import TeamPage from './pages/TeamPage';
import TeamMemberPage from './pages/TeamMemberPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="opinion" element={<Opinion />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="our-team" element={<OurTeam />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="team/:slug" element={<TeamMemberPage />} />
          <Route path="blog/:slug" element={<BlogPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
