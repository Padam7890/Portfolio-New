export function getSmallText(title: string, wordlength: number): string {
  const words = title.split(/\s+/);
  if (words.length <= wordlength) return title;
  return words.slice(0, wordlength).join(" ") + " ...";
}
export function formatApiDate(apiDate: string) {
  const date = new Date(apiDate);
  const day = date.getDate();
  const month = date.getMonth() + 1; 
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}
