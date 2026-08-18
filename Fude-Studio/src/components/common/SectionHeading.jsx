function SectionHeading({
  children,
  as: Tag = "h2",
  className = "",
}) {
  return (
    <Tag
      className={`
        max-w-4xl
        xl:max-w-5xl
        2xl:max-w-6xl
        3xl:max-w-[1400px]
        4xl:max-w-[1800px]
        text-4xl
        font-normal
        leading-[0.95]
        tracking-[-0.03em]
        sm:text-5xl
        lg:text-6xl
        xl:text-7xl
        2xl:text-8xl
        3xl:text-9xl
        4xl:text-[120px]
        ${className}
      `}
    >
      {children}
    </Tag>
  );
}

export default SectionHeading;