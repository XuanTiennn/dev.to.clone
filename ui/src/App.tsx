import { Routes, Route } from "react-router-dom";
import routes from "./routes/routes";
import "./style.scss";

function App() {
  return (
    <div className="App container">
      <Routes>
        {routes.map((element, index) => {
          const { layout, component } = element;
          const Layout = layout;
          const Component = component;

          return (
            <Route
              key={index}
              path={element.path}
              element={<Layout centerContent={<Component />} />}
            />
          );
        })}
      </Routes>
      {/* <Routes>
        <Route path="/" element={<Posts />}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
