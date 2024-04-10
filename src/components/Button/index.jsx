import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  round: "rounded-[5px]",
};
const variants = {
  fill: {
    white_A700: "bg-white-A700 text-gray-900",
    orange_200_01: "bg-orange-200_01 text-white-A700",
    deep_orange_400: "bg-deep_orange-400",
    red_50: "bg-red-50",
    red_300_01: "bg-red-300_01 text-white-A700",
  },
  outline: {
    red_300_01: "border-red-300_01 border border-solid text-red-300_01",
  },
};
const sizes = {
  "4xl": "h-[60px] px-[22px]",
  sm: "h-[40px] px-[15px] text-lg",
  "2xl": "h-[54px] px-[35px] text-lg",
  "3xl": "h-[59px] px-[30px] text-base",
  xs: "h-[36px] px-[9px]",
  md: "h-[43px] px-[30px] text-base",
  lg: "h-[44px] px-2.5",
  xl: "h-[51px] px-[35px] text-base",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  variant = "fill",
  size = "xl",
  color = "red_300_01",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["4xl", "sm", "2xl", "3xl", "xs", "md", "lg", "xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["white_A700", "orange_200_01", "deep_orange_400", "red_50", "red_300_01"]),
};

export { Button };
