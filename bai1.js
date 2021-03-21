// Bài 1
var string = prompt('Nhập vào chuỗi kí tự cần kiểm tra: ');
function Kiemtra(string) {
    return string === string.split('').reverse().join('')
} 
console.log ('Input: ', string);
console.log('Output: ', Kiemtra(string));