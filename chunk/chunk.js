// Quite traditional approach with splice
const chunk = (arr, len) => {
    let chunked = [];
    while (arr.length)
        chunked.push(arr.splice(0, len));
    return chunked;
}
