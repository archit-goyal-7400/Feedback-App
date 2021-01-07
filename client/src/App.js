import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
const Header = () => <div>Header</div>;
const Dashboard = () => <div>Dashboard</div>;
const SurveyNew = () => <div>SurveyNew</div>;
const Landing = () => <div>Landing</div>;
const App = (props) => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route path="/" exact component={Landing} />
        <Route path="/surveys" exact component={Dashboard} />
        <Route path="/surveys/new" exact component={SurveyNew} />
      </div>
    </BrowserRouter>
  );
};

export default App;
