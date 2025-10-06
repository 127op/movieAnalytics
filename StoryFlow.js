import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { movieScenes } from '../data';

const StoryFlow = ({ setScenes }) => {
  const [scenes, updateScenes] = useState(movieScenes);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(scenes);
    const [reordered] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reordered);
    updateScenes(items);
    setScenes(items);
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Story Flow</h2>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="scenes">
          {(provided) => (
            <ul
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="space-y-2"
            >
              {scenes.map((scene, index) => (
                <Draggable key={scene.id} draggableId={scene.id} index={index}>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="p-4 bg-purple-100 rounded shadow cursor-pointer hover:bg-purple-200 transition"
                    >
                      {scene.title}
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default StoryFlow;