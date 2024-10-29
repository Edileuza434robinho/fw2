import { Accordion, Container } from 'react-bootstrap';
import Footer from './components/footer';
import Menu from './components/navbar'
import { useEffect, useState } from 'react';

export default function Promessa(){
   const [divida, setDivida]= useState("")
   useEffect(() =>{
       setTimeout(()=>{
           document.title = "Minha Promessa"
           setDivida("da vida")
       }, 4000);
     })
    return <>
    <Menu/>
    <Container>
        Promessas {divida===""? <img src="daniela6v.gif" w></img>: divida}
    </Container>
    <Footer/>
    </>
}