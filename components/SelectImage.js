import styles from "../styles/Home.module.css";

export default function SelectImage({ targetImage, setTargetImage }) {
  const handleInputChange = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = function (e) {
      setTargetImage(e.target.result);
    };
  };

  return (
    <div className={styles.upload}>
      <h4>Select an image</h4>
      <input type="file" onChange={handleInputChange}></input>
      <div>{targetImage && <img src={targetImage} alt="target image" />}</div>
    </div>
  );
}
