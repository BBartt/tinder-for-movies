interface IButton {
  children: string;
  className?: string;
  onClick: (...param: any) => void;
}

const Button: React.FC<IButton> = ({
  children,
  onClick,
  className,
}) => (
  <button onClick={onClick} className={`button ${className ?? ''}`}>
    {children}
  </button>
);

export default Button;
