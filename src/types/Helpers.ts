export function lcFirst(text:string):string {
    let first = text[0].toLowerCase()
    return first+text.substr(1)
}