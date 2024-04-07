import Button from "./Button";
import Title from "./Title";

const SideNavigation = ({ onAddProject, projects, selectedProjectId, onProjectSelected }) => {
  return (
    <aside
      className="container h-screen w-80 px-8 bg-stone-950 float-left"
      role="complementary" // The complementary landmark role is used to designate a supporting section that relates to the main content, yet can stand alone when separated.
      aria-label="Your Projects Navigation"
    >
      <header className="pt-12 pb-6">
        <Title variant="dark" className="uppercase">YOUR PROJECTS</Title>
        <Button variant="dark" onClick={onAddProject}>+ Add Project</Button>
      </header>
      <nav className="mt-4">
        <ul>
          {projects.map((project) => (
            <li key={project.id} className="mb-2">
              <a
                href={`#${project.id}`}
                className={`block px-4 py-2 text-stone-200 rounded-md w-full hover:bg-stone-800 hover:text-stone-200 ${selectedProjectId === project.id ? 'bg-stone-800' : ''}`}
                onClick={() => onProjectSelected(project.id)}
              >
                {project.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default SideNavigation;
