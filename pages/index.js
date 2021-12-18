import styles from "../styles/Home.module.css";
import { Container } from "react-bootstrap";
import Todo from "../component/Todo/Todo";

export default function Home() {
  return (
    <div className={styles.container}>
      <Container>
        <Todo />
      </Container>
    </div>
  );
}
