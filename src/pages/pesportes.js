import Menu from "./components/navbar";
import Footer from "./components/footer";
import {Container} from 'react-bootstrap';
import CardProd from "./cardprod";

export default function Pesportes() {
  return <>
  <Menu />
  <Container className="border border-2 rounded border-primay col-sm-6 text-center">
    Lista de produtos de esportes 

  </Container>
    <Container>
    <div class="row">

        <CardProd titulo={"Bola de volei"} descricao={"Bola de volei"} preco={99.99}/>
        <CardProd titulo={"Bola de basquete"} descricao={"Bola de basquete"} preco={59.68}/>
        <CardProd titulo={"Bola de tenis "} descricao={"Bola de tenis"} preco={200}/>
    </div>
    </Container>
    
  <Footer/>
  </>
}