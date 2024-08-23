import styles from './App.module.scss'
import {Background} from "./components/Svgs";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className={styles.wrapper}>
      <Header/>
      <div className={styles.content}>
          <Main/>
      </div>
    </div>
  );
}

export default App;
