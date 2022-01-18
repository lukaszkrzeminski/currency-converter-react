import React, { useState } from 'react';
import { Fieldset, Legend, LabelText, InputField, SelectField, Button, Description, Loading, Failure } from "./styled";
import Loader from "../Loader"
import { useRatesData } from "./useRatesData";

const Form = () => {

  const [amount, setAmount] = useState("");
  const [currencyFrom, setCurrencyFrom] = useState("PLN");
  const [currencyTo, setCurrencyTo] = useState("EUR");
  const [result, setResult] = useState();
  const ratesData = useRatesData();

  const computeResult = (currencyFrom, currencyTo, amount) => {
    const rateFrom = ratesData.rates[currencyFrom];
    const rateTo = ratesData.rates[currencyTo];

    setResult((amount / rateFrom) * rateTo);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    computeResult(currencyFrom, currencyTo, amount);
  }

  return (
    ratesData.state === "loading"
      ? (
        <Loading>
          <Loader />
          Trwa pobieranie kursów walut z Europejskiego Banku Centralnego <br /> to moża zająć chwilkę ;)
        </Loading>
      )
      : (
        ratesData.state === "error" ? (
          <Failure>
            Coś poszło nie tak, sprawdź swoje połącznie z internetem a następnie przeładuj stronę.
          </Failure>
        )
          : (
            <form onSubmit={onFormSubmit}>
              <Fieldset>
                <Legend>Przelicznik Walut</Legend>
                <p>
                  <label>
                    <LabelText>Ile chcę wymienić: </LabelText>
                    <InputField
                      containsValue
                      value={amount}
                      onChange={(event) => setAmount(event.target.value)}
                      type="number"
                      step="0.01"
                      min="0"
                      required
                    />
                  </label>
                  <label>
                    <SelectField
                      name="userCurrency"
                      value={currencyFrom}
                      onChange={(event) => setCurrencyFrom(event.target.value)}
                    >
                      {Object.keys(ratesData.rates).map(((currencyFrom) => (
                        <option
                          key={currencyFrom}
                          value={currencyFrom}
                        >
                          {currencyFrom}
                        </option>
                      )))}
                    </SelectField>
                  </label>
                </p>

                <p>
                  <label>
                    <LabelText>Ile dostanę: </LabelText>
                    <InputField
                      containsValue
                      final
                      type="number"
                      value={result}
                      readOnly
                    />
                  </label>
                  <label>
                    <SelectField
                      name="chosenCurrency"
                      value={currencyTo}
                      onChange={(event) => setCurrencyTo(event.target.value)}
                      required>
                      {Object.keys(ratesData.rates).map(((currencyTo) => (
                        <option
                          key={currencyTo}
                          value={currencyTo}
                        >
                          {currencyTo}
                        </option>
                      )))}
                    </SelectField>
                  </label>
                </p>
              </Fieldset>
              <p>
                <Button>Przelicz</Button>
              </p>
              <Description description>
                Kursy walut pobierane są z Europejskiego Banku Centralnego.<br />
          Aktualne na dzień {ratesData.date}
              </Description>
            </form>
          ))
  )
}

export default Form;