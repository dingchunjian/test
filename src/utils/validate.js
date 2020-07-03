//过滤特殊字符
export function stripscript(str) {
    var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）&;—|{ }【】‘；：”“'。，、？]")
    var rs = "";
    for (var i = 0; i < str.length; i++) {
        rs = rs + str.substr(i, 1).replace(pattern, '');
    }
    return rs;
}
/**
 * 验证邮箱
 */
export function validateEmail(value){
    let reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    //return !reg.test(value) ? true : false;
    return !reg.test(value)
}
/**
 * 验证密码 6至20位的字母+数字 
 */
export function validatePassword(value){
    let reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
    return !reg.test(value)
}
/**
 * 验证验证码
 */
export function validateVCode(value){
    let reg = /^[a-z0-9]{6}$/;
    return !reg.test(value) ? true : false;
}

/**
 * 没有使用default时，可以同时声明多个export。
 * 文件 import 需要花括号。
 */