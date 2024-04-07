import { useState } from 'react';

import NoProjectSelectedPage from './pages/NoProjectSelectedPage';
import CreateNewProjectPage from './pages/CreateNewProjectPage';

import SideNavigation from './components/SideNavigation';

const PREDEFINED_PAGES = {
  NO_PROJECT_SELECTED: 'no-project-selected',
  ADD_PROJECT: 'add-project',
};

const App = () => {
  const [pageDisplayed, setPageDisplayed] = useState(PREDEFINED_PAGES.NO_PROJECT_SELECTED);
  const [projects, setProjects] = useState([]);

  const goToCreateNewProjectPage = () => setPageDisplayed(PREDEFINED_PAGES.ADD_PROJECT);
  const goToNoProjectSelectedPage = () => setPageDisplayed(PREDEFINED_PAGES.NO_PROJECT_SELECTED);

  const createNewProject = (projectDetails) => {
    console.log(projectDetails);
    setProjects([...projects, projectDetails]);
    setPageDisplayed(PREDEFINED_PAGES.NO_PROJECT_SELECTED);
  };

  let page;
  switch (pageDisplayed) {
    case PREDEFINED_PAGES.ADD_PROJECT:
      page = (
        <CreateNewProjectPage
          onCancel={goToNoProjectSelectedPage}
          onSave={createNewProject}
        />
      );
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
