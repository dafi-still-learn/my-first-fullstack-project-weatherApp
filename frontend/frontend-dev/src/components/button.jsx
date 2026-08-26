function Button({
  children,
  onClick,
  type = "button",
  className,
  id,
  ...props
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={className}
      id={id}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
