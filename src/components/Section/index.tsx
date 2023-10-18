interface SectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  children?: React.ReactNode;
}

export function Section(props: Readonly<SectionProps>) {
  return (
    <div className="c-section">
      {props.title && (
        <div className="c-section-title">
          {props.title}
        </div>
      )}

      {props.subtitle && (
        <div className="c-section-subtitle">
          {props.subtitle}
        </div>
      )}

      {(props.description || props.children) && (
        <div className="c-section-description">
          {props.description || props.children}
        </div>
      )}
    </div>
  );
}