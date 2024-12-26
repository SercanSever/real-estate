import { createContext, useEffect, useState } from "react";
import "./upload-widget.scss";

const CloudinaryScriptContext = createContext();

function UploadWidget({ uwConfig, setState }) {
  const [loaded, setLoaded] = useState(false);
  const source = "https://upload-widget.cloudinary.com/global/all.js";

  useEffect(() => {
    if (!loaded) {
      const uwScript = document.getElementById("uw");
      if (!uwScript) {
        const newScript = document.createElement("script");
        newScript.setAttribute("async", "");
        newScript.setAttribute("id", "uw");
        newScript.src = source;
        newScript.addEventListener("load", () => setLoaded(true));
        document.body.appendChild(newScript);
      } else {
        setLoaded(true);
      }
    }
  }, [loaded]);

  const initializeCloudinaryWidget = () => {
    if (loaded) {
      var myWidget = window.cloudinary.createUploadWidget(
        uwConfig,
        (error, result) => {
          if (!error && result && result.event === "success") {
            setState((prev) => [...prev, result.info.secure_url]);
          }
        }
      );

      document.getElementById("upload_widget").addEventListener(
        "click",
        function () {
          myWidget.open();
        },
        false
      );
    }
  };

  return (
    <CloudinaryScriptContext.Provider value={{ loaded }}>
      <div className="cloudinary">
        <button
          id="upload_widget"
          className="cloudinary-button"
          onClick={initializeCloudinaryWidget}
        >
          Upload
        </button>
      </div>
    </CloudinaryScriptContext.Provider>
  );
}

export default UploadWidget;
export { CloudinaryScriptContext };
