import {useState , useEffect} from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(true);
  const [error, setError] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
      .then(res => {
        if (!res.ok) {
          throw Error('could not fetch data ')
        }
        console.log(res)
        return res.json();
      })
      .then(data => {
        console.log(data);
        setData(data);
        setPending(false);
        setError(null);
      })

      .catch(err => {
        setPending(false);
        setError(err.message);
      }

      )
    }, 2000)

  }, []);
  return {data , pending , error}
}

export default useFetch;