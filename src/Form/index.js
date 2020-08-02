import React from 'react';
import "./style.css";

const Form = ({ computeResult, newUserValue, setNewUserValue, startCurrency, setStartCurrency, finalCurrency, setFinalCurrency, finalValue }) => {

  const onFormSubmit = (event) => {
    event.preventDefault();
    computeResult(startCurrency, finalCurrency, newUserValue, finalValue);
  }

  return (
    <form onSubmit={onFormSubmit}>
      <fieldset className="form__fieldset">
        <legend className="form__legend">
          Przelicznik Walut
      </legend>
        <p>
          <label>
            <span className="form__labelText">Ile chcę wymienić: </span>
            <input
              value={newUserValue}
              onChange={(event) => setNewUserValue(event.target.value)}
              className="form__field form__field--value" 
              type="number" 
              step="0.01" 
              min="0" 
              required
            />
          </label>
          <label>
            <select 
            className="form__field form__field--select" 
            name="userCurrency"
            value={startCurrency}
            onChange={(event) => setStartCurrency(event.target.value)}
            >
              <option value="PLN">PLN</option>
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
            </select>
          </label>
        </p>

        <p>
          <label>
            <span className="form__labelText">Ile dostanę: </span>
            <input
              className="form__field form__field--value form__field--final" 
              type="number"
              value={finalValue}
              readOnly
            />
          </label>
          <label>
            <select 
            className="form__field form__field--select" 
            name="chosenCurrency"
            value={finalCurrency}
            onChange={(event) => setFinalCurrency(event.target.value)} 
            required>
              <option value="PLN">PLN</option>
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
            </select>
          </label>
        </p>
      </fieldset>
      <p>
        <button className="form__button">Przelicz</button>
      </p>
    </form>
  )
}

export default Form;