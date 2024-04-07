import Button from "../components/Button";
import Title from "../components/Title";

import noProjectsImg from "../assets/no-projects.png";

export default function NoProjectSelectedPage() {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="text-center">
        <img src={noProjectsImg} alt="No Project Selected" className="mx-auto mb-4 w-24" />
        <Title>No Project Selected</Title>
        <p className="mb-4 text-stone-400">Select a project or get started with a new one</p>
        <Button>Create a New Project</Button>
      </div>
    </div>
  );
}
