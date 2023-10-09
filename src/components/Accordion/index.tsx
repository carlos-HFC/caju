import { createContext, useContext, useMemo, useState } from "react";

import { Icon } from "../Icon";

declare type TAccordion = React.FC<AccordionProps> & {
  Item: React.FC<AccordionItem>;
  Header: React.FC<AccordionHeader>;
  Body: React.FC<AccordionBody>;
};

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactElement<AccordionItem> | React.ReactElement<AccordionItem>[];
  initialActive?: string;
}

interface AccordionItem extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactElement<AccordionHeader & AccordionBody> | React.ReactElement<AccordionHeader & AccordionBody>[];
  open?: boolean;
  identity: string;
}

interface AccordionHeader extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  'aria-controls': string;
}

interface AccordionBody extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  id: string;
}

interface AccordionContextProps {
  active: string;
  setActive(active: string): void;
  toggle(identity: string): void;
}

interface AccordionItemContextProps {
  identity: string;
}

const AccordionContext = createContext({} as AccordionContextProps);
const useAccordion = () => useContext(AccordionContext);

const AccordionItemContext = createContext({} as AccordionItemContextProps);
const useAccordionItem = () => useContext(AccordionItemContext);

const Accordion: TAccordion = props => {
  const [active, setActive] = useState(props.initialActive ?? "");

  const value = useMemo(() => ({ active, setActive, toggle }), []);

  function toggle(identity: string) {
    if (identity === active) return setActive("");
    return setActive(identity);
  }

  return (
    <AccordionContext.Provider value={value}>
      <div className="c-accordion">
        {props.children}
      </div>
    </AccordionContext.Provider>
  );
};

const Item: React.FC<AccordionItem> = props => {
  const { active } = useAccordion();

  const value = useMemo(() => ({ identity: props.identity }), []);

  return (
    <AccordionItemContext.Provider value={value}>
      <div
        {...props}
        className={["c-accordion-item", props.identity === active && 'open'].join(" ")}
        aria-expanded={props.identity === active ? 'true' : 'false'}
      >
        {props.children}
      </div>
    </AccordionItemContext.Provider>
  );
};

const Header: React.FC<AccordionHeader> = props => {
  const { toggle } = useAccordion();
  const { identity } = useAccordionItem();

  return (
    <div className="c-accordion-header"
      role="button"
      id={identity}
      aria-controls={props['aria-controls']}
      onClick={() => toggle(identity)}
    >
      {props.children}
      <Icon name="double-chevron-down" />
    </div>
  );
};

const Body: React.FC<AccordionBody> = props => {
  return (
    <div className="c-accordion-body" id={props.id} onClick={e => e.stopPropagation()}>
      {props.children}
    </div>
  );
};

Accordion.Item = Item;
Accordion.Header = Header;
Accordion.Body = Body;

export {
  Item as AccordionItem,
  Header as AccordionHeader,
  Body as AccordionBody,
  Accordion
};