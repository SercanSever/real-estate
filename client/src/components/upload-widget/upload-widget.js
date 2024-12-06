import { createContext, useEffect, useState } from "react";
import "./upload-widget.scss";

const CloudinaryScriptContext = createContext();

function UploadWidget({ uwConfig, setAvatar }) {
  const [loaded, setLoaded] = useState(false);
  const source = "https://upload-widget.cloudinary.com/global/all.js";

  useEffect(() => {
    if (!loaded) {
      const uwScript = document.getElementById("uw");
      if (!uwScript) {
        script.setAttribute("async", "");
        script.setAttribute("id", "uw");
        script.src = source;
        script.addEventListener("load", () => setLoaded(true));
        document.body.appendChild(script);
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
            setAvatar(result.info.secure_url);
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
