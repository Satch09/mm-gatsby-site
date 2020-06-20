import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

const TooltipButton = ({
  children,
  onClick,
  tip,
  btnClassName,
  tipClassName,
  tipPlacement = "bottom", // default
}) => (
  <Tooltip title={tip} className={tipClassName} placement={tipPlacement}>
    <IconButton onClick={onClick} className={btnClassName}>
      {children}
    </IconButton>
  </Tooltip>
);

export default TooltipButton;
