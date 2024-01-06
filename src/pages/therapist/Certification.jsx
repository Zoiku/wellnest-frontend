import "../../styles/Certification.css";
import Centered from "../../components/Centered";
import Button from "../../components/Button";
import useCertification from "../../hooks/useCertification";

const CertificationUpload = ({ file }) => (
  <div className="certification-uploaded-document">
    <div>{file?.name}</div>
  </div>
);

const Certification = () => {
  const { fileUploads, handleFileUpload, handleSubmission } =
    useCertification();

  return (
    <Centered className={"certification-page"}>
      <div className="certification-page-header">
        <div className="certification-header-title">Welcome</div>
        <div className="certification-header-description">
          To ensure the highest standards of care, please upload your
          certifications and licenses for review. Your qualifications are
          essential to building trust with our users.
        </div>
        <div className="certification-header-note">
          We may request additional documents for verification purposes.
        </div>
      </div>
      <div className="certification-upload-form">
        <div>
          <input type="file" onChange={handleFileUpload} />
        </div>
      </div>
      <div className="certification-uploaded-documents-container">
        <div>Uploaded Documents</div>
        <div className="certification-uploaded-documents">
          {fileUploads.length > 0 ? (
            fileUploads.map((file, index) => (
              <CertificationUpload file={file} key={index} />
            ))
          ) : (
            <div style={{ color: "gray", fontSize: "small" }}>
              No files uploaded
            </div>
          )}
        </div>
      </div>
      {fileUploads.length > 0 && (
        <div>
          <Button onClick={handleSubmission} style={"000"} label={"Submit"} />
        </div>
      )}
    </Centered>
  );
};

export default Certification;
