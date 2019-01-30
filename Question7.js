console.log('Palindrome')
var status = false
process.stdin.on('data', (a) => {
    var str = a.toString().trim()
    console.log(palindromeCheck(str))
})
var palindromeCheck = str =>{
    let mid = (str.length/2)-1
    str = str.toLowerCase();
    console.log(str)
    for(var i=mid+1, j=mid;i<str.length-1,j>=0;i++,j--){
        if (mid==isNaN()){
            if (str[i]==str[j]){
                status = true
            }
            else{
                status = false
                break
            }
        }
        else{
            status = false
        }
    }
    return status
}
