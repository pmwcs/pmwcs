export const toCamel = (str) =>
  str.replace(/(-[a-z])/g, $1 => $1.toUpperCase().replace('-', ''));

export const toDashCase = (str) => {
  return str.replace(/([A-Z])/g, $1 => '-' + $1.toLowerCase());
};
