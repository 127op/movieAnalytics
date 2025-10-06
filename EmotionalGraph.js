import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const EmotionalGraph = ({ scenes }) => {
  if (!scenes || scenes.length === 0) return <p>Loading chart...</p>;

  return (
    <div className="mb-8">
      <h2 className="mb-4 text-2xl font-semibold text-gray-800">Emotional Graph</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={scenes} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="title" tick={{ fontSize: 12 }} />
          <YAxis domain={[0, 10]} tick={{ fontSize: 12 }} />
          <Tooltip />
          <Line type="monotone" dataKey="emotion" stroke="#7C3AED" strokeWidth={3} dot={{ r: 6 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EmotionalGraph;
