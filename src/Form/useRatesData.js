import { useState, useEffect } from "react";

export const useRatesData = () => {
    const[ratesData, setRatesData] = useState({
        state: "loading",
      });
      
      useEffect(() => {
        const fetchRates = async () => {
          try {
            const response = await fetch("https://api.exchangerate.host/latest&base=PLN");
      
            if(!response.ok) {
              throw new Error(response.statustext);
            }
            const {rates, date} = await response.json();
      
            setRatesData({
              state: "success",
              rates,
              date,
            });
          }
          catch {
            setRatesData({
              state: "error",
            });
          }   
        }
        
        setTimeout(fetchRates, 2000);
      }, []);

      return ratesData;
}