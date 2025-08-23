const Button = ({ children, size = "md", variant = "primary", onClick }) => {
  
  const sizes = {
    md: "px-4 py-2 font-bold h-11",
    mdd: "px-4 py-2 text-base h-11",
  };

  const variants = {
    primary: "btn-primary ",
    secondary: "btn-secondary",
  };

  return (
    <button
      onClick={onClick}
      className={` ${sizes[size]} ${variants[variant]} `}
    >
      {children}
    </button>
  );
};

export default Button;
