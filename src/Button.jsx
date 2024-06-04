

/**
 * Button for onClick events
 *
 * Props:
 * onClick: callback
 * children: ReactNode for label
 * isDisabled: boolean -> default is false
 *
 *
 * Events:
 * onClick: no default
 *
 */
function Button({ onClick, children, isDisabled = false }) {
  return (
    <button
      className="Button btn btn-dark"
      onClick={onClick}
      value={children}
      disabled={isDisabled}>
      <p className="Button-label">
        {children}
      </p>
    </button>
  );
}

export default Button;