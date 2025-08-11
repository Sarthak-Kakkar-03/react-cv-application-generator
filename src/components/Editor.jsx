export default function Editor({
    general,
  isEditingGeneral,
  onGeneralChange,
  onGeneralSubmit,
  onGeneralEdit,

}) {
    let content;
    if (isEditingGeneral) {
        content = (
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
                <button type="button" onClick={onGeneralSubmit}>Submit</button>
            </section>
            
        );
    } else {
        content = (
            <section>
                <h3>General Information</h3>
                <p><strong>Name: </strong> {general.name || '-'}</p>
                <p>
                    <strong>Email: </strong> {general.email || '-'}
                </p>
                <p>
                    <strong>Phone Number: </strong> {general.phone || '-'}
                </p>
                <button type="button" onClick={onGeneralEdit}>Edit</button>
            </section>
        )
    }

    return (
        <div>
            {content}
        </div>
    );
};