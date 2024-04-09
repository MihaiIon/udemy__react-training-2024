import { useState } from 'react';

import Page from './Page';
import Alert from '../components/Alert';
import Button from '../components/Button';
import TextInput from '../components/forms/TextInput';
import Title from '../components/Title';

const ProjectPage = ({ project, onDeleteProject, onCreateTask, onDeleteTask }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [taskName, setTaskName] = useState('');

  const handleCreateTaskWithValidation = () => {
    if (taskName === '') {
      setShowAlert(true);
    } else {
      onCreateTask(project.id, taskName);
      setTaskName('');
    }
  };

  return (
    <Page>
      <Alert variant="error" show={showAlert} onClose={() => setShowAlert(false)}>
        All values are required. Please fill in all fields.
      </Alert>

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
          <TextInput id='task-name' value={taskName} onChange={event => setTaskName(event.target.value) } />
        </div>
        <Button onClick={handleCreateTaskWithValidation}>Add Task</Button>
      </div>

      <div className="w-2/3 mt-6">
        {project.tasks.map(task => (
          <div key={task.id} className="flex items-center justify-between border-b border-stone-300 py-2">
            <p className="text-stone-700">{task.name}</p>
            <Button onClick={() => onDeleteTask(project.id, task.id)}>Delete</Button>
          </div>
        ))}
      </div>
    </Page>
  );
};

export default ProjectPage;