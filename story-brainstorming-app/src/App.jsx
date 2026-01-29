import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import NewStory from './components/NewStory';
import StoryView from './components/StoryView';
import PlotPlanner from './components/PlotPlanner';
import CharacterBuilder from './components/CharacterBuilder';
import CharacterDetail from './components/CharacterDetail';
import Notes from './components/Notes';
import Brainstorm from './components/Brainstorm';
import ActDetail from './components/ActDetail';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/new" element={<NewStory />} />
        <Route path="/story/:storyId" element={<StoryView />} />
        <Route path="/story/:storyId/plot" element={<PlotPlanner />} />
        <Route path="/story/:storyId/act/:actId" element={<ActDetail />} />
        <Route path="/story/:storyId/characters" element={<CharacterBuilder />} />
        <Route path="/story/:storyId/character/:characterId" element={<CharacterDetail />} />
        <Route path="/story/:storyId/notes" element={<Notes />} />
        <Route path="/brainstorm" element={<Brainstorm />} />
      </Routes>
    </Layout>
  );
}

export default App;
