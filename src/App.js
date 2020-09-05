import React, {useState} from 'react';
import Background from "./Background";
import Container from "./Container";
import Header from "./Header";
import Main from "./Main";
import Form from "./Form";
import Footer from "./Footer";
import Timer from "./Timer";

//fetch("https://api.exchangeratesapi.io/latest?base=PLN")
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error("Something bad happened!", error));




function App() {
  const [newUserValue, setNewUserValue] = useState("");
  const [startCurrency, setStartCurrency] = useState("PLN");
  const [finalCurrency, setFinalCurrency] = useState("PLN");
  const [finalValue, setFinalValue] = useState("");

  const computeResult = (startCurrency, finalCurrency, newUserValue, finalValue) => {
    const PLNtoEUR = 0.22;
    const PLNtoUSD = 0.25;
    const EURtoUSD = 1.12;
    const EURtoPLN = 1 / PLNtoEUR;
    const USDtoPLN = 1 / PLNtoUSD;
    const USDtoEUR = 1 / EURtoUSD;

    switch (startCurrency + finalCurrency) {
      case "PLNEUR":
        setFinalValue(finalValue => (PLNtoEUR * newUserValue).toFixed(2))
        break;
      case "PLNUSD":
        setFinalValue(finalValue => (PLNtoUSD * newUserValue).toFixed(2))
        break;
      case "EURUSD":
        setFinalValue(finalValue => (EURtoUSD * newUserValue).toFixed(2))
        break;
      case "EURPLN":
        setFinalValue(finalValue => (EURtoPLN * newUserValue).toFixed(2))
        break;
      case "USDEUR":
        setFinalValue(finalValue => (USDtoEUR * newUserValue).toFixed(2))
        break;
      case "USDPLN":
        setFinalValue(finalValue => (USDtoPLN * newUserValue).toFixed(2))
        break;
      default:
        setFinalValue(finalValue => newUserValue)
    }
  }

  return (
    <Background>
        <Container>
          <Timer />
          <Header title="Przelicz zanim wyjedziesz na zagraniczne wakacje!" />
          <Main>
            <Form
            newUserValue={newUserValue}
            setNewUserValue={setNewUserValue}
            startCurrency={startCurrency}
            setStartCurrency={setStartCurrency}
            finalCurrency={finalCurrency}
            setFinalCurrency={setFinalCurrency}
            finalValue={finalValue}
            setFinalValue={setFinalValue}
            computeResult={computeResult}/>
          </Main>
        </Container>
      <Footer />
    </Background>
  );
}

export default App;
