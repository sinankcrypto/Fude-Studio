const variants = {
  primary:
    "bg-dark text-text-light hover:opacity-80",

  secondary:
    "border border-border text-text hover:bg-dark hover:text-text-light",

  ghost:
    "text-text hover:opacity-60",
};

function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  return (
    <button
      className={`
        inline-flex
        items-center
        justify-center
        transition-opacity
        duration-300
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;