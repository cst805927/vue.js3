# 第 3 章 TypeScript基础

## 3.1 TypeScript概述

### 3.1.1 TypeScript 与 JavaScript、ECMAScript的关系

- TypeScript充分利用了JavaScript原有的对象模型
  - 并在此基础上进行了扩充
- 任何合法的JavaScript都可以用在TypeScript中
- TypeScript是以JavaScript为目标语言的一种编译语言，
  - 并且提供了向原生JavaScript转换的编译器
- 如果想要运行TypeScript代码
  - 则先通过编译器将TypeScript代码编译成JavaScript
  - 然后才被浏览器运行
- ECMAScript是JavaScript的国际标准
  - JavaScript是ECMAScript的实现

### 3.1.2 TypeScript与Vue.js的关系

- 早期的Vue.js版本都是采用JavaScript作为开发语言的
- JavaScript代码缺乏强类型、模块化、可测试等特性
  - 在企业大规模开发中很难管理它
- 自Vue.js3版本开始，支持使用TypeScript来开发Vue.js应用

### 3.1.3 使用TypeScript的优势

- TypeScript充分利用了JavaScript原有的对象模型
  - 添加了类型检查机制、模块支持、API导出的能力
- TypeScript使得代码组织和服用变得更有序
  - 又使得开发大型Web应用有了一套标准方法
- TypeScript具有静态类型检查、代码重构、测试和语言服务
  - 有利于大型团队人员协作编写代码

### 3.1.4 安装TypeScript

- 想要使用TypeScript，需要在本地安装TypeScript

```
npm install -g typescript
```

### 3.1.5 TypeScript代码的编译及运行

- 浏览器不能直接运行TypeScript代码
- 所有的TypeScript代码必须
  - 经过TypeScript编译器编译成JavaScript文件，
  - 才能被浏览器运行

#### 1. 编写TypeScript代码

- 编写一段简单的TypeScript代码
  - 并将其保存在hello-typescript.ts文件中

```
var hello = 'Hello World';
console.log('hello');
```

#### 2. 编译TypeScript代码

- 通过TypeScript编译器对hello-typescript.ts文件进行编译

- 执行以下命令进行编译

```
tsc hello-typescript.ts
```

- 编译后，在与hello-typescript文件相同的目录下
  - 可以看到一个自动生成的hello-typescript.js文件
- hello-typescript.js文件内容如下：

```
var hello = "Hello World";
console.log("hello");

```

- 在这个实例中，TypeScript使用了与JavaScript一致的语法

#### 3.运行JavaScript文件

- 在Node.js中运行该JavaScript文件，执行以下命令：

```
node hello-typescript.js
```

```
hello
```

## 3.2 变量与常量

### 3.2.1 var、let、const三者的作用域

- const是对let的一个增强
  - 不允许对一个变量再次赋值
  - 一般用于常量
- 三者的作用域如下：
  - 使用var声明的变量，作用域在该语句所在的函数内
    - 存在变量提升
  - 使用let声明的变量，作用域在该语句所在的代码块内
    - 不存在变量提升
  - 使用const一般声明的变量
    - 不能再后面出现的代码中修改该常量的值

### 3.2.2 变量与常量的区别

- const用于声明常量
- 变量在被赋值之后可以被修改
  - 而常量则不能被修改

### 3.2.3 变量提升

- var存在变量提升
  - let、const不存在变量提升
- 为了防止变量误用
  - 尽量采用let和const代替var

## 3.3 TypeScript数据类型

- TypeScript具有静态类型检查功能，
  - 可以在编译期间快速定位类型错误的问题

### 3.3.1 基本类型

- TypeScript的基本类型包括Number、Boolean、String、Symbol、Void、Null、Undefined以及用户定义的枚举类型

#### 1. Number

- Number类型对应JavaScript中的Number类型
  - 用来表示双精度64位格式IEEE 754浮点值
- 关键字“number”表示Number类型

```
var x: number; // 指定类型
var y = 0; // 等同于 y: number = 0
var z = 123.456; // 等同于 z:number = 123.456
var s = z.toFixed(2); // 使用了Number接口属性
console.log(typeof x); // undefined
console.log(typeof y); // number
console.log(typeof z); // number
console.log(typeof s); // string

```

- 其中，变量说明如下：
  - 变量x指定了Number类型
  - 变量y和z没有指定类型，
    - TypeScript根据所赋的值来推导出类型
  - 变量s的类型是通过Number.toFixed()方法来返回的
- 通过typeof()函数，能够在控制台上看到各个变量的类型

![image-20220511085554100](第 3 章 TypeScript基础.assets/image-20220511085554100.png)

- 为什么变量x声明为Number类型
  - 但实际的类型是Undefined
- TypeScript规范指出，
  - 只要是未被赋值的变量都是Undefined类型

#### 2. Boolean

- Boolean类型对应JavaScript中的Boolean类型
  - 用来表示true或false的逻辑值
- 关键字boolean表示Boolean类型

```
var b: boolean; //指定类型
var yes = true; //等同于 yes:boolean = true
var no = false; //等同于 no：boolean = false

console.log("b type is:" + typeof b); // undefined
console.log("b type is:" + typeof yes); // boolean
console.log("b type is:" + typeof no); // boolean

b = false; //赋值
console.log("b type is:" + typeof b); // boolean

```

#### 3. String

- String类型用来存储为Unicode UTF-16的字符序列
- 关键字string表示String类型

```
var s: string;
var empty = "";
var abc = "abc";
var c = abc.charAt(2);

console.log(typeof s); //undefined
console.log(typeof empty); //string
console.log(typeof abc); //string
console.log(typeof c); //string

s = "false";
console.log(typeof s); //string

```

#### 4. Symbol

- Symbol类型对应JavaScript中的Symbol类型
  - 用来表示对象属性的键
  - 这些键都是唯一的
- 关键字symbol表示Symbol类型

#### 5. Void

- 如果函数不需要返回值，则使用Void类型
- 关键字void表示Void类型，表示默认值
- Void类型的值是null和undefined
- Void类型是任意类型的子类型
  - 是Null和Undefined类型的超类型

#### 6. Null

- Null类型对应JavaScript中的Null类型
- null表示引用Null类型的值，无法直接引用Null类型本身
- Null类型是除Undefined类型外的所有类型的子类型
  - null可以被认为是所有基本类型、对象类型、联合类型、交集类型和类型参数的有效值
    - 甚至包括Number类型和Boolean类型

```
var n: number = null; //基本类型可以被赋值为null
var x = null; //等同于x: any = null
var e = Null; //错误，不能直接引用Null类型
```

#### 7. Undefined

- undefined表示未初始化变量的值
  - 并且是Undefined类型的唯一值
- 无法直接引用Undefined类型本身
- Undefined类型是所有类型的子类型
  - undefined可以被认为是所有类型的有效值

```
var n: number; //等同于n: number = undefined
var x = undefined; //等同于x: any = undefined
var e: Undefined; //错误，不能直接引用undefined类型
```

#### 8.枚举

- 枚举类型是不同用户定义的Number类型的子类型
- 枚举类型使用枚举声明及类型引用声明
- 枚举类型可以分配给Number类型
  - 反之亦然
- 不同的枚举类型不能彼此分配

```
enum Direction {
    Up = 1,
    Down = 2,
    Left = 3,
    Right = 4
}
```

### 3.3.2 对象类型

- 对象类型由属性、调用签名、构造签名、索引签名等成员组成
- 类和接口类型、数组类型、元组类型、函数类型、构造函数类型都是对象类型
- TypeScript可以创建对象类型