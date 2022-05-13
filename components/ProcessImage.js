import { useState } from "react";
import axios from "axios";
import styles from "../styles/Home.module.css";

export default function ProcessImage({ temp, targetImage }) {
  const [output, setOutput] = useState();
  const [status, setStatus] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    (async function uploadImage() {
      setStatus("Loading....");
      try {
        const response = await axios.post("/api/upload", {
          img: targetImage,
          tempId: temp,
        });
        const d = /'(.+)'/.exec(response.data);
        setOutput(d[1]);
        setStatus("");
      } catch (error) {
        console.log(error);
        setStatus("Failed");
      }
    })();
  };

  return (
    <div className={styles.process}>
      <button
        className={styles.button}
        onClick={handleSubmit}
        disabled={!temp || !targetImage}
      >
        Generate artwork
      </button>
      {status ? (
        <p>{status}</p>
      ) : (
        <div>{output && <img src={output} alt="output-image" />}</div>
      )}
    </div>
  );
}
