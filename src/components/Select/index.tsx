interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
}

export function Select(props: SelectProps) {
  return (
    <div className={["c-select", props.disabled && 'disabled', props.value && 'filled'].join(' ')} aria-disabled={props.disabled}>
      <label htmlFor={props.id} className="c-select-label">
        {props.label}
      </label>

      <select className="c-select-field" {...props}>
        {props.placeholder && (
          <option value="" disabled>
            {props.placeholder}
          </option>
        )}
        {props.children}
      </select>
    </div>
  );
}