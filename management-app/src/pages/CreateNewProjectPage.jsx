import Button from "../components/Button";
import TextInput from "../components/forms/TextInput";
import TextAreaInput from "../components/forms/TextAreaInput";

export default function CreateNewProject() {
  const generalClasses = "text-xl px-4 py-2 mb-4 rounded-md";
  const colorClasses = "border-b-4 border-stone-300 bg-stone-200";
  const focusClasses = "focus:outline-none focus:ring-0 focus:border-stone-700 transition-colors duration-300 ease-in-out";
  
  const inputClassNames = `${generalClasses} ${colorClasses} ${focusClasses}`;

  return (
    <div className="flex flex-col justify-center h-screen w-full">
      <div className="mb-4">
        <Button variant="light" className="ml-2 float-right">Save</Button>
        <Button className="float-right">Cancel</Button>
      </div>

      <TextInput id="project-title" label="Title" value="project-name" className={inputClassNames} />
      <TextAreaInput id="project-description" label="Description" value="project-description" className={inputClassNames} />
    </div>
  );
}
