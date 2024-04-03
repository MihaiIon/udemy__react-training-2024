
const SideNavigation = () => {
  return (
    <aside
      className="container h-screen w-80 bg-stone-950"
      role="complementary" // The complementary landmark role is used to designate a supporting section that relates to the main content, yet can stand alone when separated.
      aria-label="Your Projects Navigation"
    >
      <header className="px-8 pt-12 pb-6">
        <h1 className="text-2xl font-bold text-stone-300 uppercase">your projects</h1>
        <button className="transition mt-4 px-4 py-2 text-lg font-base rounded-md text-stone-400 bg-stone-700 hover:bg-stone-800">+ Add Project</button>
      </header>
      <nav>
        <ul>
     
        </ul>
      </nav>
    </aside>
  );
}

export default SideNavigation;
