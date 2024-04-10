import React from "react";

const sizes = {
  xs: "text-sm font-medium",
  lg: "text-3xl font-medium",
  s: "text-base font-normal leading-5",
  md: "text-lg font-medium",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-700_01 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
