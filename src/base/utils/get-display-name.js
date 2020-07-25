export const getDisplayName = (childInput) => {
  const child = Array.isArray(childInput) ? childInput[0] : childInput;

  const displayName =
    child?.type?.displayName ||
    child?.constructor?.displayName ||
    child?.displayName ||
    child?.name ||
    child?.constructor?.name ||
    'Unknown';

  return displayName;
};
