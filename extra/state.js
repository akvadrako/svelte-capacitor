
    function locupdate(cause) {
        let prev = stack && stack.slice(-1)[0]
        let next = window.location.toString()
        let dir = 'forward'

        if(stack.length > 1 && next == stack.slice(-2)[0]) {
            dir = 'back'
            stack.pop()
        } else {
            stack.push(next)
        }

        console.log(dir, { prev, cause, next, length: stack.length }, stack)
        set(stack)
    }
