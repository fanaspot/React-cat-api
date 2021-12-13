import { Button as BtnAntd } from "antd";
import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./style.css";

export class Button extends React.Component {
  render() {
    const { linkTo, icon, className, type, children } = this.props;
    const btn = (
      <BtnAntd className={cx(className)} type={type} icon={icon}>
        {children}
      </BtnAntd>
    );
    return linkTo ? <Link to={linkTo}>{btn}</Link> : btn;
  }
}

Button.defaultProps = {
  className: "",
  type: "primary",
  nameButton: "Кнопка",
};

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  nameButton: PropTypes.string,
};
