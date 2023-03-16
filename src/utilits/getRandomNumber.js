export const getRandomNumber = (min, max) => {
  const amplitude = max - min;
  return min + Math.round(Math.random() * amplitude);
};
