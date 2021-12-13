import { Pagination as PagAntd } from "antd";
import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import "./style.css";
export class Pagination extends React.Component {
  render() {
    const {
      className,
      current,
      total,
      onChange,
      defaultPageSize,
      showSizeChanger,
    } = this.props;
    return (
      <PagAntd
        className={cx(className, "pagination")}
        current={current}
        total={total}
        defaultPageSize={defaultPageSize}
        onChange={onChange}
        showSizeChanger={showSizeChanger}
      />
    );
  }
}

Pagination.defaultProps = {
  className: "",
  defaultPageSize: 9,
  showSizeChanger: false,
};

Pagination.propTypes = {
  className: PropTypes.string,
  defaultPageSize: PropTypes.number,
  showSizeChanger: PropTypes.bool,
};
