import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-tl-[10px] rounded-bl-[10px]",
};
const variants = {
  fill: {
    white_A700: "bg-white-A700 text-gray-700_01",
    white_A700_33: "bg-white-A700_33 text-white-A700",
  },
};
const sizes = {
  md: "h-[66px] px-5 text-base",
  xs: "h-[50px] pl-[18px] pr-[35px] text-base",
  sm: "h-[59px] pl-5 pr-[35px] text-base",
};

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "",
      variant = "fill",
      size = "sm",
      color = "white_A700_33",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${className} flex items-center justify-center rounded-tl-[10px] rounded-bl-[10px] text-base ${shapes[shape] || ""} ${variants[variant]?.[color] || variants[variant] || ""} ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input ref={ref} type={type} name={name} onChange={handleChange} placeholder={placeholder} {...restProps} />
          {!!suffix && suffix}
        </div>
      </>
    );
  },
);

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["md", "xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["white_A700", "white_A700_33"]),
};

export { Input };
