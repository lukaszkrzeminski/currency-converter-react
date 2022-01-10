import { useState, useEffect } from "react";

export const useRatesData = () => {
    const[ratesData, setRatesData] = useState({
        state: "loading",
      });
      
      useEffect(() => {
        const fetchRates = async () => {
          try {
            const response = await fetch("http://api.exchangeratesapi.io/v1/latest?access_key=b6f2f0268d043c32020de8e4126c5dc6");
      
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
        
        setTimeout(fetchRates, 1000);
      }, []);

      return ratesData;
}