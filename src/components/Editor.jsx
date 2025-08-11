import { useState, useRef } from "react";

export default function Editor({
  general,
  isEditing,
  onGeneralChange,
  onSubmitAll,
  onEditAll,
  education,
  onEducationAdd,
  onEducationUpdate,
  onEducationDelete
}) {
  const [eduDraft, setEduDraft] = useState({ name: "", date: "", description: "" });
  const dialogRef = useRef(null);

  function openEduDialog() {
    if (dialogRef.current) dialogRef.current.showModal();
  }

  function closeEduDialog() {
    if (dialogRef.current) dialogRef.current.close();
  }

  function saveEduDialog() {
    onEducationAdd(eduDraft.name, eduDraft.date, eduDraft.description);
    setEduDraft({ name: "", date: "", description: "" });
    closeEduDialog();
  }

  let content;
  if (isEditing) {
    content = (
      <div>
        <section>
          <h3>General Information</h3>
          <label>
            Name
            <input
              name="name"
              value={general.name}
              onChange={(e) => onGeneralChange("name", e.target.value)}
            />
          </label>
          <label>
            Email
            <input
              name="email"
              value={general.email}
              onChange={(e) => onGeneralChange("email", e.target.value)}
            />
          </label>
          <label>
            Phone
            <input
              name="phone"
              value={general.phone}
              onChange={(e) => onGeneralChange("phone", e.target.value)}
            />
          </label>
        </section>

        <section>
          <h3>Education</h3>
          <button type="button" onClick={openEduDialog}>Add Education</button>

          {education.map((item) => (
            <div key={item.id} style={{ borderTop: "1px solid #eee", paddingTop: 8, marginTop: 8 }}>
              <label>
                Name
                <input
                  value={item.name}
                  onChange={(e) => onEducationUpdate(item.id, "name", e.target.value)}
                />
              </label>
              <label>
                Date
                <input
                  value={item.date}
                  onChange={(e) => onEducationUpdate(item.id, "date", e.target.value)}
                />
              </label>
              <label>
                Description
                <textarea
                  value={item.description}
                  onChange={(e) => onEducationUpdate(item.id, "description", e.target.value)}
                />
              </label>
              <button type="button" onClick={() => onEducationDelete(item.id)}>Delete</button>
            </div>
          ))}
        </section>

        <button type="button" onClick={onSubmitAll}>Submit</button>

        <dialog ref={dialogRef}>
          <form method="dialog" onSubmit={(e) => e.preventDefault()}>
            <h4>Add Education</h4>
            <label>
              Name
              <input
                value={eduDraft.name}
                onChange={(e) => setEduDraft((d) => ({ ...d, name: e.target.value }))}
              />
            </label>
            <label>
              Date
              <input
                value={eduDraft.date}
                onChange={(e) => setEduDraft((d) => ({ ...d, date: e.target.value }))}
              />
            </label>
            <label>
              Description
              <textarea
                value={eduDraft.description}
                onChange={(e) => setEduDraft((d) => ({ ...d, description: e.target.value }))}
              />
            </label>
            <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
              <button type="button" onClick={saveEduDialog}>Save</button>
              <button type="button" onClick={closeEduDialog}>Cancel</button>
            </div>
          </form>
        </dialog>
      </div>
    );
  } else {
    content = (
      <div>
        <section>
          <h3>General Information</h3>
          <p><strong>Name: </strong>{general.name || "-"}</p>
          <p><strong>Email: </strong>{general.email || "-"}</p>
          <p><strong>Phone Number: </strong>{general.phone || "-"}</p>
        </section>

        <section>
          <h3>Education</h3>
          {education.length === 0 ? (
            <p>—</p>
          ) : (
            education.map((item) => (
              <div key={item.id} style={{ borderTop: "1px solid #eee", paddingTop: 8, marginTop: 8 }}>
                <p><strong>Name: </strong>{item.name || "-"}</p>
                <p><strong>Date: </strong>{item.date || "-"}</p>
                <p><strong>Description: </strong>{item.description || "-"}</p>
              </div>
            ))
          )}
        </section>

        <button type="button" onClick={onEditAll}>Edit</button>
      </div>
    );
  }

  return <div>{content}</div>;
}
