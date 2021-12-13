import React from "react";
import { Spin, message } from "antd";
import { getImages } from "../../actions";
import { Pagination } from "../../components/Pagination";
import { ImagesList } from "../../components/ImagesList";
import { Select } from "../../components/Select";
import { getCategories } from "../../actions";
import { paramsGetImages } from "./constants";

export class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paginationCount: 0,
      photos: [],
      categories: [],
      pageInfo: {
        currentCategory: "",
        currentPage: 1,
      },
      isLoading: true,
    };
  }

  componentDidMount() {
    this.getImages();
    this.getCategories();
  }

  getCategories() {
    getCategories()
      .then((categories) => {
        this.setState({
          categories,
        });
      })
      .catch((error) => message.error(error));
  }

  getImages = ({ page = 0, category = "" } = {}) => {
    this.setState({ isLoading: true });
    getImages({
      limit: paramsGetImages.limit,
      page: page,
      order: paramsGetImages.order,
      category_ids: category,
    })
      .then(({ paginationCount, photos }) => {
        this.setState({
          paginationCount,
          photos,
          isLoading: false,
        });
      })
      .catch((error) => message.error(error));
  };

  handleChangePagination = (currentPage) => {
    const { currentCategory } = this.state.pageInfo;
    this.setState({
      pageInfo: {
        ...this.state.pageInfo,
        currentPage,
      },
    });
    this.getImages({
      page: currentPage - 1,
      category: currentCategory,
    });
  };

  handleChangeSelect = (value) => {
    this.setState({
      pageInfo: {
        currentCategory: value,
        currentPage: 1,
      },
    });
    this.getImages({ category: value });
  };

  render() {
    const { photos, paginationCount, categories, isLoading } = this.state;
    const { currentPage } = this.state.pageInfo;
    return (
      <>
        <Select
          className="select__my-class"
          options={categories}
          onChange={this.handleChangeSelect}
        />
        <Spin spinning={isLoading} size="large" tip="Загрузка...">
          <ImagesList photos={photos} />
        </Spin>
        <Pagination
          current={currentPage}
          total={paginationCount}
          onChange={this.handleChangePagination}
        />
      </>
    );
  }
}
