import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Menuitem from "../menu-item/menu-item.component"
import { selectDirectorySections } from "../../redux/directory/directory.selectors"
import "./directory.styles.scss"


const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <Menuitem key={id} {...otherSectionProps} />
    ))}
  </div>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})
export default connect(mapStateToProps)(Directory)