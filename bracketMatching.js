const bracketsValid = (brackets) => {
    const stack = []

    for (let i = 0; i < brackets.length; i++) {

        let x = brackets[i]

        if (x == '(' || x == '{' || x == '[') {
            stack.push(x)
            continue
        }

        console.log(stack)

        if (stack.length == 0) {
            return false
        }

        let check;
        switch (x) {
            case '}':
                check = stack.pop()
                if (check == '(' || check == '[') {
                    return false
                }
                break

            case ')':
                check = stack.pop()
                if (check == '{' || check == '[') {
                    return false
                }
                break
            
            case ']':
                check = stack.pop()
                if (check == '(' || check == '{') {
                    return false
                }
                break
        }
    }

    return (stack.length == 0)
}


if (bracketsValid('({[[]]})')) {
    console.log('balanced')
} else {
    console.log('NOT balanced')
}