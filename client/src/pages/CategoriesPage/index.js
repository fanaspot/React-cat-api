import React from "react";
import { message } from "antd";
import { Table } from "../../components/Table";
import { getBreeds } from "../../actions";
import { columns } from "./constants";

export class CategoriesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    this.getBreeds();
  }

  getBreeds() {
    this.setState({ isLoading: true });
    getBreeds()
      .then((data) => {
        this.setState({ data, isLoading: false });
      })
      .catch((error) => {
        message.error(error);
      });
  }

  render() {
    const { isLoading } = this.state;
    return (
      <Table
        className="table__my-class"
        scrollByY={300}
        dataSource={this.state.data}
        columns={columns}
        loading={isLoading}
      />
    );
  }
}
