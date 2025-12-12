import NavBar from './NavBar';
import styles from '../styles/Home.module.css';

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
}
