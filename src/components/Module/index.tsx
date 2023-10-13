interface ModuleProps {
  position: number;
  title: string;
  description: string;
}

export function Module(props: Readonly<ModuleProps>) {
  return (
    <div className="c-module" data-position={props.position}>
      <div className="c-module-header">
        <div className="c-module-mod">Módulo</div>
        <div className="c-module-title">
          {' - ' + props.title}
        </div>
      </div>
      <div className="c-module-description">
        {props.description}
      </div>
    </div>
  );
}