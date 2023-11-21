type MaskType = 'cep' | 'cpf' | 'phone' | 'date' | 'card' | 'cvv';

export function mask(type: MaskType, value: string) {
  switch (type) {
    case "cep":
      return value
        ?.replace(/\D/g, '')
        ?.replace(/(\d{5})(\d)/, '$1-$2')
        ?.replace(/(-\d{3})\d+$/, '$1');
    case "cpf":
      return value
        ?.replace(/\D/g, "")
        ?.replace(/(\d{3})(\d)/, "$1.$2")
        ?.replace(/(\d{3})(\d)/, "$1.$2")
        ?.replace(/(\d{3})(\d{2})/, "$1-$2")
        ?.replace(/(-\d{2})\d+$/, "$1");
    case "phone":
      if (value?.length === 14)
        return value
          ?.replace(/\D/g, "")
          ?.replace(/(\d{2})(\d)/, "($1) $2")
          ?.replace(/(\d{4})(\d)/, "$1-$2")
          ?.replace(/(-\d{4})\d+$/, "$1");
      return value
        ?.replace(/\D/g, "")
        ?.replace(/(\d{2})(\d)/, "($1) $2")
        ?.replace(/(\d{5})(\d)/, "$1-$2")
        ?.replace(/(-\d{4})\d+$/, "$1");
    case "date":
      return value
        ?.replace(/\D/g, "")
        ?.replace(/(\d{2})(\d)/, "$1/$2")
        ?.replace(/(\/\d{4})\d+$/, "$1");
    case "card":
      return value
        ?.replace(/\D/g, "")
        ?.replace(/(\d{4})(\d)/, "$1 $2")
        ?.replace(/(\d{4})(\d)/, "$1 $2")
        ?.replace(/(\d{4})(\d)/, "$1 $2")
        ?.replace(/(\s\d{4})\d+$/, "$1");
    case "cvv":
      return value
        ?.replace(/\D/g, '')
        ?.replace(/(\d{3})\d+$/, '$1');
  }
}