import { useState } from "react";
import PdfPane from "./PdfPane";
import Editor from "./Editor";

export default function CvContainer() {

    const [general, setGeneral] = useState(
        {
            name: "",
            email: "",
            phone: ""
        }
    );

    const [education, setEducation] = useState(
        []
    );

    const [experience, setExperience] = useState(
        []
    );

    const [isEditingGeneral, setIsEditingGeneral] = useState(true);
    const [isEditingEducation, setIsEditingEducation] = useState(true);
    const [isEditingExperience, setIsEditingExperience] = useState(true);

    function onGeneralChange(field, value) {
        setGeneral((prev) => {
            const updatedGeneral = { ...prev };
            updatedGeneral[field] = value;      
            return updatedGeneral;             
        });
    }

    function onGeneralSubmit() {
        setIsEditingGeneral(false);
    }

    function onGeneralEdit() {
        setIsEditingGeneral(true);
    }


    return (
        <div className="app-container">
            <div className="editor-container">
            <Editor 
            general = {general}
            isEditingGeneral = {isEditingGeneral}
            onGeneralChange={onGeneralChange}
            onGeneralSubmit={onGeneralSubmit}
            onGeneralEdit={onGeneralEdit}
            />
            </div>
            <div className="cv-container">
            <PdfPane 
            general = {general}
            />
            </div>
        </div>
    )
};