import React from "react";
import { Routes, Route } from "react-router-dom";
import { UnorderedListOutlined } from "@ant-design/icons";
import { HomeOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { MainPage } from "./pages/MainPage";
import { CategoriesPage } from "./pages/CategoriesPage";
import { Button } from "./components/Button";
import { routes } from "./routes";
import "./App.css";

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Button
            className="button__my-class"
            linkTo={routes.main}
            children="Главная страница"
            icon={<HomeOutlined />}
          />
          <Button
            className="button__my-class"
            linkTo={routes.categories}
            children={"Категории"}
            icon={<UnorderedListOutlined />}
          />
        </nav>
        <Routes>
          <Route path={routes.main} element={<MainPage />} />
          <Route path={routes.categories} element={<CategoriesPage />} />
        </Routes>
      </div>
    );
  }
}
