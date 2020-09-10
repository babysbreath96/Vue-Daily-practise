let a = 10;

let b = 20;

function fn() {
    console.log('我是真的垃圾');
};

//1.TODO: js文件都是一个单独的模块，模块与模块之间的数据是不能直接相互访问的
//2.TODO: 默认导出: 使用 exprot default 导出 ; 只能只能出现一次
//3.TODO: 默认导入： import 别名 from '模块标识符' 接收

export default { // 默认导出
    a: a,
    b,
    fn,
};

//4.TODO:  按需导出 export 成员 变量 ; 每个模块可以多次按需导出
//5.TODO:  按需导入 import {接收到的成员 as 变量接收 } from "模块" 或者 import{变量}from "模块"
export const x = 999;
export const y = 100;
// 向外导出 方法
export function fun() {
    // console.log('1111111111');
    console.log(1111111111);
};