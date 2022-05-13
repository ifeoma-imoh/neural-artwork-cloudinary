import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/Home.module.css";
import Aside from "../components/Aside";
import SelectImage from "../components/SelectImage";
import ProcessImage from "../components/ProcessImage";

export default function Home() {
  const [sourceImages, setSourceImages] = useState();
  const [targetImage, setTargetImage] = useState("");
  const [temp, setTemp] = useState();

  useEffect(() => {
    (async () => {
      const res = await axios.get("/api/getImages");
      setSourceImages(res.data);
    })();
  }, []);

  return (
    <div className={styles.app}>
      <h1>Cloudinary Neural Artwork Style Transfer</h1>
      <div className={styles.container}>
        <Aside sourceImages={sourceImages} temp={temp} setTemp={setTemp} />
        <SelectImage
          targetImage={targetImage}
          setTargetImage={setTargetImage}
        />
        <ProcessImage temp={temp} targetImage={targetImage} />
      </div>
    </div>
  );
}
