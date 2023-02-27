const randomNumbers = (n: number): number[] => {
  const arrayOfRandomNumbers = [...Array(n).keys()].sort(
    () => Math.random() - 0.5
  );

  return arrayOfRandomNumbers;
};

export default randomNumbers;
