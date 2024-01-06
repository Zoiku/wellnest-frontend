import "../styles/Section.css";

const Section = (props) => {
  return (
    <div className="custom-section">
      <div className="custom-section-header">
        <span className="custom-section-label">{props.label}</span>
        {props.labelHelper && (
          <span className="custom-section-label-helper">
            {props.labelHelper}
          </span>
        )}
      </div>
      <div className={`custom-section-body ${props.className}`}>{props.children}</div>
    </div>
  );
};

export default Section;
