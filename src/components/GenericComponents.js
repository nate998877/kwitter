import React from "react";

//This won't throw an error if you don't pass a component
function GenericWrapper(component, options = {}){
  return(
  <div className={options.wrapperClass || "genericWrapper"} id={options.wrapperId || ""} {...options.wrapperTags}>
    <div className={ options.componentClass || "" } id={options.componentId || ""} {...options.componentTags} >
      {component || ""}
    </div>
  </div>)
}

export default GenericWrapper;