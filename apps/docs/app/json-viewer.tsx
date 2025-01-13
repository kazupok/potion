"use client";

import { Fragment } from "react";
import { JsonView, allExpanded, defaultStyles } from "react-json-view-lite";
import "react-json-view-lite/dist/index.css";

export const JsonViewer = (blocks: any) => {
  return (
    <Fragment>
      <JsonView
        data={blocks}
        shouldExpandNode={allExpanded}
        style={defaultStyles}
      />
    </Fragment>
  );
};
