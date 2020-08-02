import React from 'react';
import Background from "./Background";
import Header from "./Header";
import Main from "./Main";
import Form from "./Form";
import Footer from "./Footer";

function App() {
  return (
    <Background>
      <Header title="Przelicz zanim wyjedziesz na zagraniczne wakacje!" />
      <Main>
        <Form />
      </Main>
      <Footer />
    </Background>
  );
}

export default App;
