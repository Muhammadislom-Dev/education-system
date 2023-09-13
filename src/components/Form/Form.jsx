import React from "react";
import { FormBox } from "./style";

function Form() {
  return (
    <FormBox>
      <div className="container">
        <h3 className="form-name">Buyurtma berish</h3>
        <p className="form-text">
          Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam
          facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus
          mattis eros at sem pulvinar
        </p>
        <form action="" className="form-list">
          <input
            type="text"
            placeholder="Ismingiz"
            required
            className="form-input"
          />
          <input
            type="tel"
            placeholder="Telefon raqamingiz"
            required
            className="form-input"
          />
          <textarea
            name=""
            placeholder="Sizning xabaringiz"
            id=""
            cols="30"
            rows="10"></textarea>
          <button type="submit" className="form-button">
            Yuborish
          </button>
        </form>
      </div>
    </FormBox>
  );
}

export default Form;
