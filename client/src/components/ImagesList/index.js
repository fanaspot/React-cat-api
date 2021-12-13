import { Image } from "antd";
import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import "./style.css";

export class ImagesList extends React.Component {
  render() {
    const { photos, className } = this.props;

    return (
      <div className={cx(className, "images-list")}>
        <Image.PreviewGroup>
          {photos.map((photo) => {
            return (
              <Image
                key={photo.id}
                className={cx("images-list__image")}
                src={photo.url}
                alt=""
              />
            );
          })}
        </Image.PreviewGroup>
      </div>
    );
  }
}

ImagesList.defaultProps = {
  className: "",
};

ImagesList.propTypes = {
  className: PropTypes.string,
  photos: PropTypes.array.isRequired,
};
