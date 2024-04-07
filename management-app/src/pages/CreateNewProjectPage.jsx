import { useState } from "react";

import Button from "../components/Button";
import TextInput from "../components/forms/TextInput";
import TextAreaInput from "../components/forms/TextAreaInput";
import DatePickerInput from "../components/forms/DatePickerInput";
import Alert from "../components/Alert";

export default function CreateNewProject({ onCancel, onSave }) {
  const [showAlert, setShowAlert] = useState(false);
  const [projectDetails, setProjectDetails] = useState({
    title: "",
    description: "",
    startDate: "",
  });

  const handleOnClick = () => {
    if (projectDetails.title === "" || projectDetails.description === "" || projectDetails.startDate === "") {
      setShowAlert(true);
    } else {
      onSave(projectDetails);
    }
  };

  return (
    <div className="relative flex flex-col justify-center h-screen w-full">
      <Alert variant="error" show={showAlert} onClose={() => setShowAlert(false)}>
        All values are required. Please fill in all fields.
      </Alert>

      <div className="mb-4">
        <Button variant="light" className="ml-2 float-right" onClick={handleOnClick}>Save</Button>
        <Button className="float-right" onClick={onCancel}>Cancel</Button>
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
