export const arraysAreEqual = (arr1: any[], arr2: any[]) => {
  if (arr1.length !== arr2.length) return false

  return arr1.every((a, i) => a === arr2[i])
}