import Link from "next/link";
import {useEffect, useState} from "react";

export default function Index() {
const [data, setData] = useState(null);
const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching data from /api/health-check');
        const response = await fetch('/api/health-check');
        console.log('Received response:', response);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const jsonData = await response.json();
        console.log('Received JSON data:', jsonData);
        setData(jsonData.status);
      } catch (error) {
        console.error('Fetch error:', error);
        setError(error.message);
      }
    };

    fetchData();
  }, []);


  return (
    <div>
      <h1> Index </h1>
      <Link href="/about">About
      </Link>
      {data}
    </div>
  );
}