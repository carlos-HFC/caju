type InputStatus = 'success' | 'error';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  info?: string;
  status?: InputStatus;
}

export function Input(props: InputProps) {
  return (
    <div className={["c-input", props.status, props.disabled && 'disabled'].join(' ')} aria-disabled={props.disabled}>
      {props.label && (
        <label htmlFor={props.id} className="c-input-label">
          {props.label}
        </label>
      )}

      <input type="text" className="c-input-field" {...props} />

      {props.info && (
        <span className="c-input-info">
          {props.info}
        </span>
      )}
    </div>
  );
}