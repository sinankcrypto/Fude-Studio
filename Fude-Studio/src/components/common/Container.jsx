function Container({ children, className = "" }) {
  return (
    <div
      className={`mx-auto w-full max-w-content px-6 lg:px-16 ${className}`}
    >
      {children}
    </div>
  );
}

export default Container;