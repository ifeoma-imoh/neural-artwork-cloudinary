import styles from "../styles/Home.module.css";

export default function Aside({ sourceImages, temp, setTemp }) {
  return (
    <div className={styles.sideBar}>
      <h4>Select an image</h4>
      <div>
        {sourceImages &&
          sourceImages.map((obj) => (
            <div key={obj.public_id} onClick={() => setTemp(obj.public_id)}>
              <img
                src={obj.secure_url}
                className={temp === obj.public_id ? `${styles.border}` : ""}
                alt={obj.public_id}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
