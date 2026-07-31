const variants = {
  primary:
    "bg-black text-white hover:bg-neutral-800",

  secondary:
    "border border-black text-black hover:bg-black hover:text-white",

  ghost:
    "text-black hover:opacity-60",
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
        gap-2
        rounded-pill
        px-6
        py-3
        text-sm
        font-medium
        uppercase
        tracking-wide
        transition-colors
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