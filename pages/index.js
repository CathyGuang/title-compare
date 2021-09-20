import styles from "../styles/Home.module.css";
import { useEffect, useState, useRef } from "react";

const Home = () => {
  const userRef = useRef(null);
  const [listLeft, setListLeft] = useState([]);
  const [listRight, setListRight] = useState([]);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async () => {
    setIsPending(true);
    const userId = userRef.current.value;
    const res = await fetch(`/api/doc?userId=${userId}`);
    const stats = await res.json();
    setListLeft(stats.data.left);
    setListRight(stats.data.right);
    setIsPending(false);
  };
  
  return (
    <div>
      <div className={styles.search}>
        <h1>Welcome!</h1>
        <br></br>
        <input ref={userRef}></input>
        <button onClick={handleSubmit}>click</button>

        {isPending && <div> Loading... </div>}
      </div>
      
      <div className={styles.container}>
        <div className={styles.left}>
        {listLeft && listLeft.map((each) => (
          <div key={each.docid}>
              <ul>
                <li><i><b>{each.title}</b></i>
                <ul>
                <li>cfb_score: <b>{each.cfb_score}</b></li>
                    <li>docid: <b>{each.docid}</b></li>
                    <li>chnl_v2: <b>{each.chnl_v2.join(', ')}</b></li>
                    <li>domain: <b>{each.domain}</b></li>
                    <li>doc_life_hr: <b>{each.doc_life_hr}</b></li>
                  </ul>
                </li>
              </ul>
          </div>
        ))}
        </div>
        <div className={styles.right}>
        {listRight && listRight.map((each) => (
          <div key={each.docid}>
              <ul>
                <li><i><b>{each.title}</b></i>
                  <ul>
                    <li>cfb_score: <b>{each.cfb_score}</b></li>
                    <li>docid: <b>{each.docid}</b></li>
                    <li>chnl_v2: <b>{each.chnl_v2.join(', ')}</b></li>
                    <li>domain: <b>{each.domain}</b></li>
                    <li>doc_life_hr: <b>{each.doc_life_hr}</b></li>
                  </ul>
                </li>
              </ul>
          </div>
        ))}

        </div>
        
      </div>
      
    </div>

  );
};

export default Home;