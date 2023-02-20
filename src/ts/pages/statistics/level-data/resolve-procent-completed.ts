const resolveProcentCompleted = (
  completedLevels: number,
  totalLevels: number
): number => (completedLevels * 100) / totalLevels;

export default resolveProcentCompleted;
