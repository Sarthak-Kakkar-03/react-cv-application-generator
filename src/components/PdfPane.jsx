import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import CvDocument from "./pdf/CvDocument";

export default function PdfPane({ general, education }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div style={{ flex: 1, minHeight: 0 }}>
        <PDFViewer style={{ width: "100%", height: "100%" }}>
          <CvDocument general={general} 
          education={education}
          />
        </PDFViewer>
      </div>
    </div>
  );
}
