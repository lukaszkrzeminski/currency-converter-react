import React from 'react';
import { Fieldset, Legend, LabelText, InputField, Button } from "./styled";

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
            ></InputField>
          </label>
          <label>
            <InputField 
            select 
            name="userCurrency"
            value={startCurrency}
            onChange={(event) => setStartCurrency(event.target.value)}
            >
              <option value="PLN">PLN</option>
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
            </InputField>
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
            <InputField 
              select
              name="chosenCurrency"
              value={finalCurrency}
              onChange={(event) => setFinalCurrency(event.target.value)} 
              required>
               <option value="PLN">PLN</option>
                <option value="EUR">EUR</option>
               <option value="USD">USD</option>
            </InputField>
          </label>
        </p>
      </Fieldset>
      <p>
        <Button>Przelicz</Button>
      </p>
    </form>
  )
}

export default Form;