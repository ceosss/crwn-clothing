import React from "react";

import MenuItem from "../menu-item/Menu-item.component";

import { connect } from "react-redux";

import "./Directory.styles.scss";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ title, id, imageUrl, size, linkUrl }) => (
        <MenuItem
          key={id}
          title={title}
          imageUrl={imageUrl}
          size={size}
          linkUrl={linkUrl}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    sections: state.directory.sections,
  };
};

export default connect(mapStateToProps)(Directory);
