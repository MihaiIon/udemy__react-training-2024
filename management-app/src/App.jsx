import SideNavigation from './components/SideNavigation';
import NoProjectSelectedPage from './pages/NoProjectSelectedPage';

const App = () => {
  return (
    <>
      <SideNavigation />
      <main className="ml-80">
        <NoProjectSelectedPage />
      </main>
    </>
  );
}

export default App;
