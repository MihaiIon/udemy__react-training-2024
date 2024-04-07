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

  let page;
  switch (pageDisplayed) {
    case PREDEFINED_PAGES.ADD_PROJECT:
      page = <CreateNewProjectPage />;
      break;
    default:
      page = <NoProjectSelectedPage />;
  }

  return (
    <>
      <SideNavigation onAddProject={() => setPageDisplayed(PREDEFINED_PAGES.ADD_PROJECT)} />
      <main className="ml-80 px-12">
        {page}
      </main>
    </>
  );
}

export default App;
