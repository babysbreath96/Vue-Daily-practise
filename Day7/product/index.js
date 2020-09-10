//1.TODO: 导入模块成员 ---默认导入
import m1 from './code/01-ES6模块化语法-默认导出导入';
console.log(m1);

//2.TODO: 按需导入 import {接收到的成员 as 变量接收 } from "模块"或者 import{变量}from "模块"
//2.1.FIXME: 需要的话就导入不需要就不导入
import {
    x as xx
} from "./code/01-ES6模块化语法-默认导出导入.js";
import {
    y
} from "./code/01-ES6模块化语法-默认导出导入.js";
import {
    fun
} from "./code/01-ES6模块化语法-默认导出导入.js";
console.log(xx);
console.log(y);
console.log(fun());

//3.TODO:  直接导入 import '模块'