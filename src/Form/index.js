import React from 'react';
import { Fieldset, Legend, LabelText, InputField, SelectField, Button, Description } from "./styled";
import jsonData from "../data.json"

const tmpData = jsonData[0];
console.log(tmpData);

const Form = ({ computeResult, newUserValue, setNewUserValue, startCurrency, setStartCurrency, finalCurrency, setFinalCurrency, finalValue }) => {

  const onFormSubmit = (event) => {
    event.preventDefault();
    computeResult(startCurrency, finalCurrency, newUserValue, finalValue);
  }

  return (
    <form onSubmit={onFormSubmit}>
      <Fieldset>
        <Legend>Przelicznik Walut</Legend>
        <p>
          <label>
            <LabelText>Ile chcę wymienić: </LabelText>
            <InputField
              containsValue
              value={newUserValue}
              onChange={(event) => setNewUserValue(event.target.value)}
              type="number" 
              step="0.01" 
              min="0" 
              required
            />
          </label>
          <label>
            <SelectField 
            name="userCurrency"
            value={startCurrency}
            onChange={(event) => setStartCurrency(event.target.value)}
            >
              <option value="PLN">PLN</option>
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
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
              value={finalValue}
              readOnly
            />
          </label>
          <label>
            <SelectField 
            name="chosenCurrency"
            value={finalCurrency}
            onChange={(event) => setFinalCurrency(event.target.value)} 
            required>
              <option value="PLN">PLN</option>
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
            </SelectField>
          </label>
        </p>
      </Fieldset>
      <p>
        <Button>Przelicz</Button>
      </p>
      <Description description>
        Kursy walut pobierane są z Europejskiego Banku Centralnego.<br /> 
        Aktualne na dzień {tmpData.date}
      </Description>
    </form>
  )
}

export default Form;