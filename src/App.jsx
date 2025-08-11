import Editor from "./components/Editor"
import PdfPane from "./components/PdfPane"

export default function App() {

  return (
    <div>
      <div className="title-container">
        <h1>CV Builder</h1>
      </div>
      <div className="app-container">
        <div className="editor-container">
          <Editor />
        </div>
        <div className="cv-container">
          <PdfPane />
        </div>
      </div>
    </div>
  )
};