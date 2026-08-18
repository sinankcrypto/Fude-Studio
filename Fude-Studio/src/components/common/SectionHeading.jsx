function SectionHeading({
  children,
  as: Tag = "h2",
  className = "",
}) {
  return (
    <Tag
      className={`
        max-w-4xl
        text-4xl
        font-normal
        leading-[0.95]
        tracking-[-0.03em]
        sm:text-5xl
        lg:text-6xl
        ${className}
      `}
    >
      {children}
    </Tag>
  );
}

export default SectionHeading;