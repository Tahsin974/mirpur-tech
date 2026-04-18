import { useEffect, useState } from "react";

export default function useAreas() {
    const [areas, setAreas] = useState([]);
    
      useEffect(() => {
        fetch("./coverage_area.json")
          .then(res => res.json())
          .then(data => setAreas(data))
          .catch(err => console.error("Error loading JSON:", err));
      }, []);
  return{ areas };
}
