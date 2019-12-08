Function.prototype.call2 = function(call) {
    //用this获取调用call2的函数
    call.fn = this;
    var args = [];
    for(var i = 1, len = arguments.length; i < len; i++) {
        args.push('arguments[' + i + ']');
    }
    eval('call.fn(' + args +')');
    delete call.fn;
};
var test = {
    value: 100
};

function bar(name, age) {
    console.log("name:"+name)
    console.log("age:"+age)
    console.log("value:"+this.value);
};
bar.call2(test,"John",18); 
//name:Cherry
//age:18
//value:100