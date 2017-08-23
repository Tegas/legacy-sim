export const getHealingCoefficient = (level, castTime) => {
  return (castTime / 3.5) * (1 - ((20 - Math.min(level, 20)) * 0.0375));
};
