function isValidEmail(value: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
}

function formatPhone(value: string): string {
  const numericValue = value.replace(/\D/g, '');

  if (numericValue.length <= 10) {
    return numericValue.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  } else {
    return numericValue.replace(/(\d{2})(\d)(\d{4})(\d{4})/, '($1) $2 $3-$4');
  }
}

function cleanCaracter(value: string): string {
  return value.replace(/\D/g, '');
}

function formatCNPJ(value: string): string {
  const numericValue = value.replace(/\D/g, '');

  return numericValue.replace(
    /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
    '$1.$2.$3/$4-$5'
  );
}

function isValidURL(value: string): boolean {
  const urlRegex =
    /^(https?:\/\/)?([a-z0-9-]+(\.[a-z0-9-]+)+)(\/[\w\-./?%&=]*)?$/i;
  return urlRegex.test(value);
}

export { cleanCaracter, formatCNPJ, formatPhone, isValidEmail, isValidURL };
