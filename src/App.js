import React, { Suspense } from 'react';
import Loading from './Components/Loading/Loading.jsx';
import "./Style.scss";

const Home = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./Pages/Home/Home.jsx")), 5000);
  });
});

function App() {
  return (
    <div className="App">
        <Suspense fallback={<Loading/>}>
            <Home/>
        </Suspense>
      </div>
  )
}

export default App;