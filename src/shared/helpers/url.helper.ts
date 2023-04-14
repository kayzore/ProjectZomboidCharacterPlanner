export const localPath = (path: string): string => {
  const pathWithBasePath = `${import.meta.env.VITE_BASE_PATH}${path}`;
  return pathWithBasePath.replace("//", "/");
};
