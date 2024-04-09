import { useState } from 'react';

import Page from './Page';
import Title from '../components/Title';
import Button from '../components/Button';
import TextInput from '../components/forms/TextInput';

const ProjectPage = ({ project, onDeleteProject, onCreateTask, onDeleteTask }) => {
  const [taskName, setTaskName] = useState('');

  return (
    <Page>
      <div className="flex items-center justify-between">
        <Title>{project.title}</Title>
        <Button onClick={() => onDeleteProject(project.id)}>Delete</Button>
      </div>

      <p className="text-lg font-medium text-stone-400 -mt-2 mb-4">{project.startDate}</p>

      {project.description.split('\n').map((line => (
        <p className='text-stone-700 mb-1' key={line}>{line}</p>
      )))}

      <div className="mt-6">
        <div className="w-1/2 inline-block mr-2">
          <TextInput id='task-name' value={taskName} />
        </div>
        <Button onClick={() => onCreateTask(project.id, taskName)}>Add Task</Button>
      </div>
    </Page>
  );
};

export default ProjectPage;