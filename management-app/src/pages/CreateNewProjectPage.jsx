import { useState } from "react";

import Button from "../components/Button";
import TextInput from "../components/forms/TextInput";
import TextAreaInput from "../components/forms/TextAreaInput";
import DatePickerInput from "../components/forms/DatePickerInput";

export default function CreateNewProject() {
  const [projectDetails, setProjectDetails] = useState({
    title: "",
    description: "",
    startDate: "",
  });

  return (
    <div className="flex flex-col justify-center h-screen w-full">
      <div className="mb-4">
        <Button variant="light" className="ml-2 float-right">Save</Button>
        <Button className="float-right">Cancel</Button>
      </div>

      <TextInput
        id="project-title"
        label="Title"
        value={projectDetails.title}
        onChange={event => setProjectDetails({ ...projectDetails, title: event.target.value })}
      />
      <TextAreaInput
        id="project-description"
        label="Description"
        value={projectDetails.description}
        onChange={event => setProjectDetails({ ...projectDetails, description: event.target.value })}
      />
      <DatePickerInput
        id="project-start-date"
        label="Start Date"
        value={projectDetails.startDate}
        onChange={event => setProjectDetails({ ...projectDetails, startDate: event.target.value })}
      />
    </div>
  );
}
