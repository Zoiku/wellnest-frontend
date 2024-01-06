import "../styles/Centered.css";

const Centered = ({ children, className }) => {
  return (
    <div className={`centered-wrapper ${className}-wrapper`}>
      <div className={`centered ${className}`}>{children}</div>
    </div>
  );
};

export default Centered;
