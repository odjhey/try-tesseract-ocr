import { useState } from "react";
import ReactImagePickerEditor, {
  ImagePickerConf,
} from "react-image-picker-editor";
import "react-image-picker-editor/dist/index.css";
import ReactMarkdown from "react-markdown";

export const Picker = () => {
  const config2: ImagePickerConf = {
    language: "en",
    objectFit: "contain",
  };
  // const initialImage: string = '/assets/images/8ptAya.webp';
  const initialImage = "";
  const [rtext, setRtext] = useState("");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <ReactImagePickerEditor
        config={config2}
        imageSrcProp={initialImage}
        imageChanged={(newDataUri: any) => {
          fetch("http://localhost:5999/uploads", {
            method: "POST",
            body: `${newDataUri}`,
            headers: { "Content-Type": "text/plain;charset=US-ASCII" },
          })
            .then((r) => r.json())
            .then((r) => setRtext(r.message));
        }}
      />
      {rtext && (
        <div>
          <h1>Result</h1>
          <ReactMarkdown>{rtext}</ReactMarkdown>
        </div>
      )}
    </div>
  );
};
