
//2

function deepDarkCopy(obj, visited = new WeakMap()) {
    if (typeof obj !== 'object' || obj === null) {
    return obj;
    }
    
    if (visited.has(obj)) {
    return visited.get(obj);
    }
    
    let clone;
    
    if (Array.isArray(obj)) {
    clone = [];
    } else {
    clone = Object.create(Object.getPrototypeOf(obj));
    }
    
    visited.set(obj, clone);
    
    for (let key of Object.keys(obj)) {
    clone[key] = deepDarkCopy(obj[key], visited);
    }
    
    if (obj instanceof Map) {
    obj.forEach((value, key) => {
    clone.set(key, deepDarkCopy(value, visited));
    });
    } else if (obj instanceof Set) {
    obj.forEach((value) => {
    clone.add(deepDarkCopy(value, visited));
    });
    }
    
    return clone;
    } 
console.log(`This is result - ${deepDarkCopy([1,2,3,4,5])}`)

//3

function isValidParentheses(s) {
    let stack = [];
    const map = {
    '(': ')',
    '[': ']',
    '{': '}'
    };
    for (let char of s) {
        if (char in map) {
            stack.push(char);
        } else {
            if (stack.length === 0) {
                return false;
            }
            let last = stack.pop();
            if (map[last] !== char) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
}
console.log(isValidParentheses("()")); 
console.log(isValidParentheses("()[]{}")); 
console.log(isValidParentheses("(]")); 
console.log(isValidParentheses("([)]")); 
console.log(isValidParentheses("{[]}")); 
console.log(isValidParentheses("{{(([[]]))}}"));
console.log(isValidParentheses("{{(([[]]))}}}"));

