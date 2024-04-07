import Button from "../components/Button";

export default function CreateNewProject() {
  return (
    <div className="flex flex-col justify-center h-screen w-full">
      <div className="mb-4">
        <Button variant="light" className="ml-2 float-right">Save</Button>
        <Button className="float-right">Cancel</Button>
      </div>
    </div>
  );
}
