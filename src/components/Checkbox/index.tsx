interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Checkbox(props: Readonly<CheckboxProps>) {
  return (
    <div className={["c-checkbox", props.disabled && 'disabled'].join(" ")} aria-disabled={props.disabled}>
      <input type="checkbox" className="c-checkbox-field" {...props} />

      <label htmlFor={props.id} className="c-checkbox-label">
        {props.label}
      </label>
    </div>
  );
}