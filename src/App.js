import React from 'react';
import Background from "./Background";
import Container from "./Container";
import Header from "./Header";
import Main from "./Main";
import Form from "./Form";
import Footer from "./Footer";
import Timer from "./Timer";

function App() {

  return (
    <Background>
        <Container>
          <Timer />
          <Header title="Przelicz zanim wyjedziesz na zagraniczne wakacje!" />
          <Main>
            <Form/>
          </Main>
        </Container>
      <Footer />
    </Background>
  )
}

export default App;
