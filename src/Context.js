import React, { useState, useEffect, useContext } from "react";

export const AppContext = React.createContext();

export const AppProvider = ({children}) => {
  const [data, setData] = useState({
    name: "John Doe",
    number: "",
    secreCode: "",
    expiry: "",
  })
  const [payAmount, setPayAmount] = useState({
    subTotal: "2497.00",
    taxEstimate: "119.64",
    promoFee: "-60.00",
    promoCode: "Z4KXLM9A",
    total: 0
  })
  const [focus, setFocus] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  //const getTotal = () => {
  //  
  //  setPayAmount({...payAmount, total: (parseFloat(tempTotal.toFixed(2)))});
  //}

  return (
    <AppContext.Provider value={
        {
          ...payAmount,
          data,
          setData,
          focus,
          showMenu,
          setShowMenu
        }
      }
    >{children}</AppContext.Provider>
  )
};

const useGlobalContext = () => useContext(AppContext)

export default useGlobalContext;