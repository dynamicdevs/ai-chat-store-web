export const validJson = (str: string) => {
  try {
    const json = JSON.parse(str);
    return typeof json === 'object';
  } catch (e) {
    return false;
  }
};
