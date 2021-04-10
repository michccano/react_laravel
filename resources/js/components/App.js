import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
// import "./App.css";
// import DogList from "./components/DogList";
// import DogDetails from "./components/DogDetails";
// import DogContextProvider from "./contexts/DogContext";
// import AddDog from "./components/AddDog";
// import EditDog from "./components/EditDog";
import { Route, Switch } from "react-router";
import AddPlanet from './AddPlanet';
import PlanetList from './PlanetList';
import PlanetEdit from './PlanetEdit';

function App() {
  return (
    <>
      <Switch>
          <Route exact path="/" component={PlanetList}/>
          <Route exact path="/add" component={AddPlanet} />
          <Route exact path="/edit/:id" component={PlanetEdit} />
      </Switch>
    </>
  );
}
export default App;