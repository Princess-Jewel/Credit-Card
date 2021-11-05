import React from "react";
import { Number, Cvc, Expiration } from "react-credit-card-primitives";
import useGlobalContext from "../../Context";
import "../styles/form.css";

function Form () {
  const { data, setData } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handlePostal = ({target}) => {
    return (
      setData({...data, postal: target.value})
    )
  }

  const handleCardNumChange = ({ value, valid }) => {
    console.log(valid, value)
    const number = value;
    setData({...data, number})
  }

  const handleExpiration = ({month, year, valid}) => {
    console.log(month, year, valid)
    const expiry = `${month ? month : ""}${year ? year : "" }`;
    setData({...data, expiry})
  }

  const handleSecretCode = ({value, valid}) => {
    console.log(value, valid)
    const secretCode = value
    setData({...data, secretCode})
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="payment-form">
        {/* Credit card number */}
        <div className="form-group">
          <label htmlFor="">Credit card number</label>
          <Number 
            onChange={handleCardNumChange}
            render={({ getInputProps, valid }) => (
              <input {...getInputProps()} className={valid ? "" : "error"} />
            )}
          />
        </div>
        {/* Credit card expiration date */}
        <div className="form-group">
          <label htmlFor="">Expiration date</label>
          <Expiration 
            onChange={handleExpiration}
            render={({
              getInputProps,
              valid,
              error
            }) => (
              <div>
                <input
                  {...getInputProps()}  
                  className={ valid ? "" : "error" } 
                />
                { !valid ? ""
                  : error === Expiration.ERROR_MONTHYEAR ? "Please enter valid month and year" 
                  : error === Expiration.ERROR_MONTH ? "Please enter valid month"
                  : error === Expiration.ERROR_YEAR ? "Please enter valid year"
                  : error === Expiration.ERROR_PAST_DATE ? "Please enter a date in the future."
                  : ""
                }
              </div>
            )}
          />
        </div>
        {/* Credit card CVC */}
        <div className="form-group">
          <label htmlFor="">Security code</label>
          <Cvc 
            onChange={handleSecretCode}
            render={({
              getInputProps,
              valid,
            }) => (
              <input 
                value={data.secretCode} 
                {...getInputProps()} 
                className={valid ? "" : "error"} 
                maxLength="3"
              />
            )}
          />
        </div>
            
        <div className="form-group">
          <label htmlFor="postal">Postal code</label>
          <input 
            type="text"
            className="form-control" 
            onChange={handlePostal} 
            value={data.postal}
            maxLength="8"
          />
        </div>
      </div>

      <div className="form-group">
        <input type="radio" name="use_same" id="useSame" />
        <label htmlFor="useSame">Use this card for next time purchases</label>
      </div>

      <button type="submit" className="btn submit-btn">Add card</button>
    </form>
  )
}

export default Form;