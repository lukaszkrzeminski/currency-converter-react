import React from 'react';
import "./style.css";

const Form = () => (
  <form>
    <fieldset className="form__fieldset">
      <legend className="form__legend">
        Przelicznik Walut
      </legend>
      <p>
        <label>
          <span className="form__labelText">Ile chcę wymienić: </span>
          <input
            className="form__field form__field--value" type="number" step="0.01" min="0" required
          />
        </label>
        <label>
          <select className="form__field form__field--select" name="userCurrency">
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
            className="form__field form__field--value form__field--final" type="number" readonly
          />
        </label>
        <label>
          <select className="form__field form__field--select" name="chosenCurrency" required>
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

export default Form;