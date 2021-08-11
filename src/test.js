export default class MyClass {
    @unenumerable
    @readonly
    method() {
        return "哈哈哈哈哈"
    }
}

function readonly(target, name, descriptor) {
    console.log(1);
    descriptor.writable = false;
    return descriptor;
}

function unenumerable(target, name, descriptor) {
    console.log(2);
    descriptor.enumerable = false;
    return descriptor;
}
