import React, { useState } from "react";

const Tooltip = (props) => {
  let timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, props.delay || 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <div // When to show the tooltip
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {props.children}
      <div className="tooltip">
        <div className="Tooltip-Wrapper">
          {/* Wrapping */}
          {active && (
            <div
              style={{ width: props.width }}
              className={`Tooltip-Tip ${props.direction || "top"}`}
            >
              {/* Content */}
              <p className="leading-normal">{props.content}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
