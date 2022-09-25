function isPalindrome(word) {

    let lowerword = word.toLowerCase().replace(/[^A-Za-z0-9]/g, "")

    const letters = lowerword.split('').reverse().join('')

    lowerword == letters ? console.log(`${word} is a palindrome`) : console.log(`${word} is NOT a palindrome`)
}

isPalindrome('A man, a plan, a canal: Panama')
