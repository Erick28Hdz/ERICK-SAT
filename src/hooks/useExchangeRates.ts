import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_CURRENCY_API_KEY;
const API_URL = `https://api.currencyfreaks.com/latest?apikey=${API_KEY}`;

const CACHE_KEY = "exchange_rates";
const CACHE_TIMESTAMP_KEY = "exchange_rates_timestamp";
const ONE_DAY_MS = 24 * 60 * 60 * 1000; // 1 día en milisegundos

export function useExchangeRates() {
  const [rates, setRates] = useState<{ [key: string]: number }>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const now = Date.now();
    const cachedRates = localStorage.getItem(CACHE_KEY);
    const cachedTimestamp = localStorage.getItem(CACHE_TIMESTAMP_KEY);

    const isCacheValid =
      cachedRates && cachedTimestamp && now - parseInt(cachedTimestamp) < ONE_DAY_MS;

    if (isCacheValid) {
      setRates(JSON.parse(cachedRates));
      setLoading(false);
      return;
    }

    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        if (data.rates) {
          setRates(data.rates);
          localStorage.setItem(CACHE_KEY, JSON.stringify(data.rates));
          localStorage.setItem(CACHE_TIMESTAMP_KEY, now.toString());
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching exchange rates:", err);
        setLoading(false);
      });
  }, []);

  return { rates, loading };
}
