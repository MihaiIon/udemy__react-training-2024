import { useState } from 'react';

import NoProjectSelectedPage from './pages/NoProjectSelectedPage';
import CreateNewProjectPage from './pages/CreateNewProjectPage';

import SideNavigation from './components/SideNavigation';

const PREDEFINED_PAGES = {
  NO_PROJECT_SELECTED: 'no-project-selected',
  ADD_PROJECT: 'add-project',
};

const generateUniqueId = () => {
  const timestamp = Date.now();
  const randomDigits  = Math.floor(Math.random() * Math.pow(10, Math.ceil(Math.log10(timestamp))));
  const uniqueId = `${timestamp}${randomDigits}`;

  return uniqueId;
};

const createNewProject = (projectDetails) => {
  return {
    id: generateUniqueId(),
    ...projectDetails,
  };
};

const App = () => {
  const [pageDisplayed, setPageDisplayed] = useState(PREDEFINED_PAGES.NO_PROJECT_SELECTED);
  const [projects, setProjects] = useState([]);

  const goToCreateNewProjectPage = () => setPageDisplayed(PREDEFINED_PAGES.ADD_PROJECT);
  const goToNoProjectSelectedPage = () => setPageDisplayed(PREDEFINED_PAGES.NO_PROJECT_SELECTED);

  const handleOnSave = (projectDetails) => {
    const project = createNewProject(projectDetails);
    setProjects([...projects, project]);
    console.log('Projects:', projects);
    
    setPageDisplayed(PREDEFINED_PAGES.NO_PROJECT_SELECTED);
  };

  let page;
  switch (pageDisplayed) {
    case PREDEFINED_PAGES.ADD_PROJECT:
      page = <CreateNewProjectPage onCancel={goToNoProjectSelectedPage} onSave={handleOnSave} />;
      break;
    default:
      page = <NoProjectSelectedPage onCreateNewProject={goToCreateNewProjectPage} />;
  }

  return (
    <>
      <SideNavigation onAddProject={goToCreateNewProjectPage} />
      <main className="ml-80 px-12">
        {page}
      </main>
    </>
  );
}

export default App;
