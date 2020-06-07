import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import "./styles.css";
import { FiUpload } from "react-icons/fi";

interface Props{
  onFileUploaded: (file: File) => void;
}

const DropZone: React.FC<Props> = ({ onFileUploaded }) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState("");

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const fileURL = URL.createObjectURL(file);

    setSelectedFileUrl(fileURL);
    onFileUploaded(file);
  }, [onFileUploaded]);
  
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />

      {selectedFileUrl ? (
        <img src={selectedFileUrl} alt="Point thumnail" />
      ) : (
        <p>
          <FiUpload />
          Image do estabelecimento.
        </p>
      )}
    </div>
  );
};

export default DropZone;
