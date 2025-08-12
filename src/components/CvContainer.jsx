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

    const [isEditing, setIsEditing] = useState(true);

    function onGeneralChange(field, value) {
        setGeneral((prev) => {
            const updatedGeneral = { ...prev };
            updatedGeneral[field] = value;      
            return updatedGeneral;             
        });
    }

    function onSubmitAll() {
        setIsEditing(false);
    }

    function onEditAll() {
        setIsEditing(true);
    }

    function onEducationAdd(name, date, description) {
        const widthId = {
            id: crypto.randomUUID(),
            name: name,
            date: date,
            description: description
        }
        setEducation((prev) => {
            const newArray = [...prev];
            newArray.push(widthId);
            return newArray;
        });
    }

    function onEducationUpdate(id, field, value) {
        setEducation((prev) => {
            const prevCopy = prev.map((e) => {
                if (e.id === id) {
                    const copy = {...e};
                    copy[field] = value;
                    return copy
                } else {
                    return e;
                }
            });
            return prevCopy;
        });
    }

    function onEducationDelete(id) {
        setEducation((prev) => {
            const newArray = prev.filter((e) => {
                if (e.id !== id) {
                    return true;
                } else {
                    return false;
                }
            });
            return newArray;
        });
    }

    return (
        <div className="app-container">
            <div className="editor-container">
            <Editor 
            general = {general}
            isEditing = {isEditing}
            onGeneralChange={onGeneralChange}
            onSubmitAll={onSubmitAll}
            onEditAll={onEditAll}
            education={education}
            onEducationAdd={onEducationAdd}
            onEducationUpdate={onEducationUpdate}
            onEducationDelete={onEducationDelete}
            />
            </div>
            <div className="cv-container">
            <PdfPane 
            general = {general}
            education={
                Array.isArray(education)
                    ? education
                        .filter(Boolean)
                        .map((item) => ({
                            id: String(item?.id ?? ""),
                            name: String(item?.name ?? ""),
                            date: String(item?.date ?? ""),
                            description: String(item?.description ?? "")
                        }))
                    : []
            }
            />
            </div>
        </div>
    )
};
