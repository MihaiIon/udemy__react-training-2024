import Button from "./Button";
import Title from "./Title";

const SideNavigation = () => {
  return (
    <aside
      className="container h-screen w-80 bg-stone-950 float-left"
      role="complementary" // The complementary landmark role is used to designate a supporting section that relates to the main content, yet can stand alone when separated.
      aria-label="Your Projects Navigation"
    >
      <header className="px-8 pt-12 pb-6">
        <Title variant="dark" className="uppercase">YOUR PROJECTS</Title>
        <Button variant="dark">+ Add Project</Button>
      </header>
      <nav>
        <ul>
     
        </ul>
      </nav>
    </aside>
  );
}

export default SideNavigation;
