export default function capitalizeString(string) {
  console.debug('Invoking capitalizeString.');
  console.debug(`Capitalizing <${string}>.`);
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
};
