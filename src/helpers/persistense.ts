export const getLocalStorage = (item:string) => {
    return JSON.parse(localStorage.getItem(item)!) || []
}