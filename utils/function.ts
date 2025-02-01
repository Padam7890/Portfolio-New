export function getSmallText(title:string, wordlength:number):string {
    const words = title.split(/\s+/);
    if (words.length <= wordlength) return title; 
    return words.slice(0, wordlength).join(" ") + " ...";
  }