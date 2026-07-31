function SectionLabel({ children, className = "" }) {
  return (
    <span
      className={`
        block
        text-xs
        font-medium
        uppercase
        tracking-[0.08em]
        text-muted
        ${className}
      `}
    >
      {children}
    </span>
  );
}

export default SectionLabel;