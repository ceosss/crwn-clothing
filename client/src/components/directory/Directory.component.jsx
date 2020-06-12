import React from "react";

import MenuItem from "../menu-item/Menu-item.component";

import { connect } from "react-redux";

// import "./Directory.styles.scss";
import { DirectoryMenuContainer } from "./Directory.styles";

const Directory = ({ sections }) => {
  return (
    <DirectoryMenuContainer>
      {sections.map(({ title, id, imageUrl, size, linkUrl }) => (
        <MenuItem
          key={id}
          title={title}
          imageUrl={imageUrl}
          size={size}
          linkUrl={linkUrl}
        />
      ))}
    </DirectoryMenuContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    sections: state.directory.sections,
  };
};

export default connect(mapStateToProps)(Directory);
