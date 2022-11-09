// import { Route, Switch } from "react-router-dom";
import Routes from "./routes/routes";
import "./style.scss";
const RRD=require('react-router-dom');

function App() {
  return (
    <div className="App">
      <RRD.Switch>
        {Routes.map((element) => (
          <RRD.Route path={element.path}>{element.component}</RRD.Route>
        ))}
      </RRD.Switch>
    </div>
  );
}

export default App;
