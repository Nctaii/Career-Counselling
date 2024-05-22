import Image from 'react-bootstrap/Image';
import styles from "./page.module.css";
import { Button, Container, Nav, NavDropdown, Navbar, Stack } from "react-bootstrap";
import x from '@/styles/app.module.css'
import { Baloo_Tammudu_2 } from "next/font/google";

const baloo = Baloo_Tammudu_2({
  subsets: ['latin']
});

export default function Home() {
  return (
    <div>
        <Container className={x.background}>
        <p className={x.text}>It is so incredible to finally be understood</p>
        <p className={x.text2}>Only 10 minutes to get a “freakishly accurate” description of who you are and why<br/>you do things the way you do.</p>
        <br/>
        <Button className={x.button}>
            <p className={x.text1}>Take the test</p>
        </Button>
        <br/>
        <Image src="/header-mountains-desktop 1.png" fluid/>
      </Container>
      <Stack className={x.center} direction="horizontal" gap={4}>
        <div className="p-2">
          149k+ Tests taken today
        </div>
        <div className="p-2">
          2M+ Tests taken in VietNam
        </div>
        <div className="p-2">
          111M+ Total tests taken
        </div>
        <div className="p-2">
          91,2% Test Result rated
        </div>
      </Stack>
      <Container className={x.background1}>
        <div>

        </div>
      </Container>
    </div>
    
  );
}
