import { Button } from "../Button";

interface CardPriceProps {
  category: string;
  price: number;
  list: string[];
  children?: string;
}

export function CardPrice(props: Readonly<CardPriceProps>) {
  const HAS_LIST = props?.list?.length > 0;

  return (
    <div className="c-cardprice">
      <div className="c-cardprice-category">
        {props.category}
      </div>

      <div className="c-cardprice-value">
        <div className="price-total">
          {HAS_LIST
            ? Intl.NumberFormat('pt-BR', { style: "currency", currency: "BRL" }).format(props.price)
            : 'Empresas'}
        </div>
        <div className="price-parcel">
          {HAS_LIST
            ? 'Ou em 10x de R$ 19,90'
            : 'Ou empreendedores'}
        </div>
      </div>

      <div className="c-cardprice-body">
        {HAS_LIST
          ? (
            <ul className="c-cardprice-list">
              {props.list.map((item, i) => (
                <li key={String(i).padStart(2, '0')} className="c-cardprice-list-item">
                  {item}
                </li>
              ))}
            </ul>
          ) : props.children}
      </div>

      <div className="c-cardprice-button">
        <Button href="/contato" variant="secondary">
          {HAS_LIST
            ? "Começar"
            : "Contato"}
        </Button>
      </div>
    </div>
  );
}