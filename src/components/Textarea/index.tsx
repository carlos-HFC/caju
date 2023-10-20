interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  info?: string;
  status?: Status;
}

export function Textarea(props: Readonly<TextareaProps>) {
  return (
    <div className={["c-textarea", props.disabled && 'disabled', props.status].join(' ')} aria-disabled={props.disabled}>
      {props.label && (
        <label htmlFor={props.id} className="c-textarea-label">
          {props.label}
        </label>
      )}

      <textarea className="c-textarea-field" {...props} />

      {props.info && (
        <span className="c-textarea-info">
          {props.info}
        </span>
      )}
    </div>
  );
}