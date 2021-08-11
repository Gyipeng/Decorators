import { MessageBox ,Loading} from 'element-ui';

export function before(key) {
    return function(target, name, descriptor) {
        let oldValue = descriptor.value;
        descriptor.value = function(...args) {
            console.log(`Action-${key} 触发埋点!`, args);
            oldValue.apply(this, args)
        }
        return descriptor;
    }
}

export function after(key) {
    return function(target, name, descriptor) {
        let oldValue = descriptor.value;
        descriptor.value = function(...args) {
            oldValue.apply(this, args)
            console.log(`Action-${key} 触发埋点!`, args);
        }
        return descriptor;
    }
}

export function around(key) {
    return function(target, name, descriptor) {
        let oldValue = descriptor.value;
        descriptor.value = function(...args) {
            console.log(`before-${key} 触发埋点!`, args);
            oldValue.apply(this, args)
            console.log(`after-${key} 触发埋点!`, args);
        }
        return descriptor;
    }
}

export function time() {
     return function(target, name, descriptor){
         const oldValue = descriptor.value;
         descriptor.value = function(...args) {
             console.time();
             const results = oldValue.apply(this, args);
             console.timeEnd();
             return results;
         }
     }

    }


export function mixins(...list) {
    return function (target) {
        Object.assign(target.prototype, ...list)
    }
}

export const setTimeOut = function (time) {
    return function (target, key, descriptor) {
        const oldValue = descriptor.value;
        descriptor.value = function (...arg) {
            setTimeout(() => oldValue.apply(this, arg),time);
        }
    };
};


export function confirmation(message) {
    return function(target, name, descriptor) {
        let oldValue = descriptor.value;
        descriptor.value = function(...args) {
            MessageBox.confirm(message, '提示')
                .then(oldValue.bind(this, ...args))
                .catch(() => {});
        }
        return descriptor;
    }
}

export function debounces(time) {
    return function(target, name, descriptor) {
        let oldValue = descriptor.value;
        descriptor.value = debounce(oldValue.bind(this),time,true)
        return descriptor;
    }
}

function debounce(func,wait,immediate) {
    let timer;
    return function () {
        let context = this;
        let args = arguments;

        if (timer) clearTimeout(timer);
        if (immediate) {
            var callNow = !timer;
            timer = setTimeout(() => {
                timer = null;
            }, wait)
            if (callNow) func.apply(context, args)
        } else {
            timer = setTimeout(function(){
                func.apply(context, args)
            }, wait);
        }
    }
}


export const loading =  function(dom,errorFn = function() {}) {
    return function(target, name, descriptor) {
        const oldValue = descriptor.value
        let loadingInstance;
        descriptor.value = async function(...args) {
            try {
                 let tagert = document.querySelector(dom);
                loadingInstance = Loading.service({ tagert });
                await oldValue.apply(this, args)
                loadingInstance.close()
            } catch (error) {
                errorFn && errorFn.call(this, error, ...args)
                console.error(error)
            } finally {
                loadingInstance.close()
            }
        }
    }
}

export const disabled =  function(dom,errorFn = function() {}) {
    return function(target, name, descriptor) {
        const oldValue = descriptor.value
        descriptor.value = async function(...args) {
            try {
                let tagert = document.querySelector(dom);
                tagert.disabled = true
                await oldValue.apply(this, args)
                tagert.disabled = false
            } catch (error) {
                errorFn && errorFn.call(this, error, ...args)
                console.error(error)
            }
        }
    }
}


