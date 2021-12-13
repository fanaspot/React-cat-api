import React from "react";
import { Select as SelectAntd } from "antd";
import cx from "classnames";
import PropTypes from "prop-types";
import "./style.css";

export class Select extends React.Component {
  render() {
    const { options, onChange, className } = this.props;
    return (
      <SelectAntd
        className={cx(className, "select")}
        options={options}
        onChange={onChange}
      />
    );
  }
}

Select.defaultProps = {
  className: "",
  onChange: () => {},
};

Select.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
};
