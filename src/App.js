import { useEffect, useState } from "react";
import "./App.css";
const PAGE_NUMBER = 1;
function App() {
  const [state, setState] = useState([]);
  const [page, setPage] = useState(PAGE_NUMBER);

  useEffect(() => {
    fetch(
      "https://api.instantwebtools.net/v1/passenger?page" + page + "&size=5"
    )
      .then((response) => response.json())
      .then((json) => setState([...state, ...json.data]));
  }, [page]);

  function scrollToEnd() {
    setPage(page + 1);
  }
  function scrollFunction(e) {
    const { clientHeight, scrollTop, scrollHeight } = e.currentTarget;
    console.log(Math.floor(scrollHeight - scrollTop) - clientHeight);
    if (Math.floor(clientHeight + scrollTop) === scrollHeight) {
      scrollToEnd();
    }
  }
  if (state.length < 1) {
    <h2>Loading...</h2>;
  }

  return (
    <div className="App" onScroll={(e) => scrollFunction(e)}>
      {state.length > 0 &&
        state.map((item, index) => (
          <div className="container" key={index}>
            <h4>ID: {item._id}</h4>
            <h4>ID: {item.name}</h4>
            <h4>ID: {item.trips}</h4>
          </div>
        ))}
    </div>
  );
}

export default App;
