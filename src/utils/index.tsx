export const directionToParam = (
  direction: 'left' | 'right',
): 'accept' | 'reject' => {
  if (direction === 'left') {
    return 'accept';
  }

  return 'reject';
};
