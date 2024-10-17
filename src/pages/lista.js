import { Accordion, Container } from 'react-bootstrap';
import Footer from './components/footer';
import Menu from './components/navbar'

export default function Lista() {
    var noticias= [
          {
            
            id: 1,
            titulo: "Descoberta Nova Espécie de Pássaro na Amazônia",
            conteudo: "Cientistas anunciaram a descoberta de uma nova espécie de pássaro na região amazônica. A ave, chamada de 'Pássaro Arco-Íris', possui penas multicoloridas e habita áreas de floresta densa. A descoberta destaca a importância da conservação ambiental."
          },
          {
            id: 2,
            titulo: "Avanços na Pesquisa de Vacinas contra a Covid-19",
            conteudo: "Pesquisadores estão desenvolvendo uma nova vacina que promete aumentar a imunidade contra variantes do vírus da Covid-19. Os testes iniciais mostram resultados promissores, com eficácia de mais de 90%."
          },
          {
            id: 3,
            titulo: "Festival de Cinema Internacional Começa em São Paulo",
            conteudo: "O Festival de Cinema Internacional de São Paulo teve início nesta quinta-feira, apresentando filmes de diversos países. O evento promete promover debates sobre temas sociais e culturais relevantes."
          }
        ]
      
      
  return (
    <>
    <Menu />
    <Container>
        <Accordion>
            {noticias.map(noticia =>
        <Accordion.Item eventKey="0">
            <Accordion.Header>{noticia.titulo}</Accordion.Header>
            <Accordion.Body>
                {noticia.conteudo}
            </Accordion.Body>
        </Accordion.Item>
        )}
        </Accordion>
    </Container>
    <Footer/>
    </>
  );
  
}

