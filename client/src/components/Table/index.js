import React from "react";
import { Table as TableAntd } from "antd";
import cx from "classnames";
import PropTypes from "prop-types";
import "./style.css";

export class Table extends React.Component {
  render() {
    const { scrollByY, className, dataSource, columns, loading } = this.props;
    return (
      <TableAntd
        scroll={{ y: scrollByY }}
        className={cx(className)}
        columns={columns}
        dataSource={dataSource}
        loading={loading}
      />
    );
  }
}

Table.defaultProps = {
  className: "",
  scrollByY: null,
};

Table.propTypes = {
  className: PropTypes.string,
  dataSource: PropTypes.array,
  scrollByY: PropTypes.number,
};
