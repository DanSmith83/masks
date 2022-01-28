import Head from 'next/head'
import Image from 'next/image'
import Container from "../components/container/Container";
import Overlay from "../components/overlay/Overlay";


export default function Home() {
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh'}}>
        <Container>
            <Overlay/>
        </Container>
        <Container>
            <Overlay rotated={true}/>
        </Container>
        <Container inverted={true}>
            <Overlay inverted={true}/>
        </Container>
    </div>
  )
}
