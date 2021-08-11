import Vue from 'vue'
let vue =new Vue()

export function on(key) {
    return function(target, name, descriptor) {
        let oldValue = descriptor.value;
        descriptor.value = function() {
            vue.$on(key,oldValue.bind(this))
        }
        return descriptor;
    }
}

export function emit(key) {
    return function(target, name, descriptor) {
        let oldValue = descriptor.value;
        descriptor.value = function(...arg) {
           let result =oldValue.apply(this,arg)
            vue.$emit(key,result)
        }
        return descriptor;
    }
}
export function off(key) {
    return function(target, name, descriptor) {
        let oldValue = descriptor.value;
        descriptor.value = function(...arg) {
            vue.$off(key)
            oldValue.apply(this,arg)
        }
        return descriptor;
    }
}
