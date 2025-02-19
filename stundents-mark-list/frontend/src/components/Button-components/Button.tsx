interface ButtonProps {
    className?: string;
    buttonName: string;
    onClick?: () => void;
    type?:string;
  }
  
  const Button: React.FC<ButtonProps> = ({ className, buttonName, onClick }) => {
    return (
      <button
        className={`py-2 px-4 font-semibold rounded-lg transition-transform transform hover:scale-105 ${className}`}
        onClick={onClick}
      >
        {buttonName}
      </button>
    );
  };
  
  export default Button;
  