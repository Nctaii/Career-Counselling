import Image from "next/image";
import styles from "./page.module.css";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import x from '@/styles/app.module.css'

export default function Resources() {
  return (
    <Container className={x['background']}>
      <p className={x['text']}>It so incredible to finally be understood</p>
      <p>Only 10 minutes to get a “freakishly accurate” description of who you are and why<br/>you do things the way you do.</p>
    </Container>
  );
}
