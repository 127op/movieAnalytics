import React, { useState } from 'react';
import StoryFlow from './components/StoryFlow';
import EmotionalGraph from './components/EmotionalGraph';
import ExportPDF from './components/ExportPDF';
import { movieScenes } from './data';

function App() {
const [scenes, setScenes] = useState(movieScenes); 

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-purple-700">
        Movie Analytics Dashboard
      </h1>

      <div id="pdf-content" className="bg-white p-6 rounded-lg shadow-lg">
        <StoryFlow setScenes={setScenes} />
        <EmotionalGraph scenes={scenes} />
      </div>

      <div className="mt-6 flex justify-center">
        <ExportPDF />
      </div>
    </div>
  );
}

export default App;