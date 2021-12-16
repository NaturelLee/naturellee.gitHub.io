(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{193:function(t,a,_){t.exports=_.p+"assets/img/rust_learning_routes.7685a0e2.png"},194:function(t,a,_){t.exports=_.p+"assets/img/firstPrinciple.d4655293.png"},195:function(t,a,_){t.exports=_.p+"assets/img/short.86211653.png"},196:function(t,a,_){t.exports=_.p+"assets/img/def_datastructure.933cbffa.png"},197:function(t,a,_){t.exports=_.p+"assets/img/flow_control.efdec01c.png"},198:function(t,a,_){t.exports=_.p+"assets/img/ownership_lifetime.3f1c902f.png"},199:function(t,a,_){t.exports=_.p+"assets/img/innerMut.48b3f8c0.png"},200:function(t,a,_){t.exports=_.p+"assets/img/primitives.66cdc8fe.png"},201:function(t,a,_){t.exports=_.p+"assets/img/composites.59f39de6.png"},202:function(t,a,_){t.exports=_.p+"assets/img/rust_trait.877cc55c.png"},203:function(t,a,_){t.exports=_.p+"assets/img/rust_traits.6e2e362a.png"},204:function(t,a,_){t.exports=_.p+"assets/img/datastructures.359b2c8b.png"},205:function(t,a,_){t.exports=_.p+"assets/img/rust_slice.a80884bf.png"},206:function(t,a,_){t.exports=_.p+"assets/img/hash_conflict.ee550f4c.png"},207:function(t,a,_){t.exports=_.p+"assets/img/rustClosure.3525feb1.png"},231:function(t,a,_){"use strict";_.r(a);var v=_(0),r=Object(v.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"rust-编程第一课-陈天"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#rust-编程第一课-陈天"}},[t._v("#")]),t._v(" Rust 编程第一课——陈天")]),t._v(" "),v("h2",{attrs:{id:"开篇词"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#开篇词"}},[t._v("#")]),t._v(" 开篇词")]),t._v(" "),v("p",[v("img",{attrs:{src:_(193),alt:"rust_learning_routes"}})]),t._v(" "),v("h3",{attrs:{id:"学习-rust-的难点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#学习-rust-的难点"}},[t._v("#")]),t._v(" 学习 Rust 的难点")]),t._v(" "),v("ol",[v("li",[t._v("Rust 中最大的思维转换就是变量的"),v("strong",[t._v("所有权和生命周期")])])]),t._v(" "),v("h3",{attrs:{id:"如何学好-rust"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何学好-rust"}},[t._v("#")]),t._v(" 如何学好 Rust?")]),t._v(" "),v("p",[v("img",{attrs:{src:_(194),alt:"firstPrinciple"}})]),t._v(" "),v("h4",{attrs:{id:"_1-精准学习"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-精准学习"}},[t._v("#")]),t._v(" 1. 精准学习")]),t._v(" "),v("ol",[v("li",[t._v("深挖一个个高大上的表层知识点，回归底层基础知识的本原，再使用类比、联想等方法，打通涉及的基础知识；然后从底层设计往表层实现，一层层构建知识体系")]),t._v(" "),v("li",[t._v("第一性原理：回归事物最基础的条件，将其拆分成基本要素解构分析，来探索要解决的问题。")])]),t._v(" "),v("h4",{attrs:{id:"_2-刻意练习"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-刻意练习"}},[t._v("#")]),t._v(" 2. 刻意练习")]),t._v(" "),v("p",[t._v("用精巧设计的例子，通过练习进一步巩固学到的知识，并且在这个过程中尝试发现学习过程中的不自知问题，让自己从“我不知道我不知道”走向“我知道我不知道”，最终能够在下一个循环中弥补知识的漏洞。")]),t._v(" "),v("h2",{attrs:{id:"前置篇"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#前置篇"}},[t._v("#")]),t._v(" 前置篇")]),t._v(" "),v("h3",{attrs:{id:"内存"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#内存"}},[t._v("#")]),t._v(" 内存")]),t._v(" "),v("p",[v("strong",[v("em",[t._v("每个线程分配一个 stack，每个进程分配一个 heap。stack 是线程独占，heap 是线程共用。 stack 大小是确定的，heap 大小是动态的。")])])]),t._v(" "),v("p",[t._v("栈上存放的数据是静态的，固定大小，静态生命周期；堆上存放的数据是动态的，不固定大小，动态生命周期。")]),t._v(" "),v("h4",{attrs:{id:"栈"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#栈"}},[t._v("#")]),t._v(" 栈")]),t._v(" "),v("ol",[v("li",[t._v("栈是自顶向下增长；")]),t._v(" "),v("li",[t._v("每当一个函数被调用时，一块连续的内存（帧 frame）就会在栈顶被分配出来;")]),t._v(" "),v("li",[t._v("一个新的帧会分配足够的空间存储寄存器的上下文;")]),t._v(" "),v("li",[t._v("在编译时，一切无法确定大小或者大小可以改变的数据，都无法"),v("em",[t._v("安全地")]),t._v("放在栈上，最好放在堆上。")]),t._v(" "),v("li",[t._v("栈上的内存在函数调用结束之后，所使用的帧被回收，相关变量对应的内存也都被回收待用。")]),t._v(" "),v("li",[t._v("所以栈上内存的生命周期是不受开发者控制的，并且局限在当前调用栈。")]),t._v(" "),v("li",[t._v("对于存入栈上的值，它的"),v("strong",[t._v("大小在编译期就需要确定")]),t._v("。栈上存储的变量生命周期在当前调用栈的作用域内，无法跨调用栈引用。")])]),t._v(" "),v("h4",{attrs:{id:"堆"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#堆"}},[t._v("#")]),t._v(" 堆")]),t._v(" "),v("ol",[v("li",[t._v("堆可以存入"),v("strong",[t._v("大小未知")]),t._v("或者**动态伸缩（动态大小、动态生命周期）**的数据类型。")]),t._v(" "),v("li",[t._v("堆上分配出来的每一块内存需要显式地释放，这就使堆上内存有更加灵活的生命周期，可以在不同的调用栈之间共享数据。")])]),t._v(" "),v("h5",{attrs:{id:"堆内存自动管理方式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#堆内存自动管理方式"}},[t._v("#")]),t._v(" 堆内存自动管理方式")]),t._v(" "),v("ol",[v("li",[t._v("Tracing GC: tracing garbage collection; 追踪式垃圾回收")]),t._v(" "),v("li",[t._v("ARC: Automatic Reference Counting; 自动引用计数")])]),t._v(" "),v("h3",{attrs:{id:"数据"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据"}},[t._v("#")]),t._v(" 数据")]),t._v(" "),v("h4",{attrs:{id:"值和类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#值和类型"}},[t._v("#")]),t._v(" 值和类型")]),t._v(" "),v("ol",[v("li",[t._v("值是无法脱离具体的类型讨论的")])]),t._v(" "),v("h5",{attrs:{id:"类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#类型"}},[t._v("#")]),t._v(" 类型")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("原生类型")]),t._v(" "),v("ol",[v("li",[t._v("字符、整数、浮点数、布尔值、数组（array）、元组（tuple）、指针、引用、函数、闭包")]),t._v(" "),v("li",[t._v("所有原生类型大小都是固定的，因此它们可以被分配到栈上。")])])]),t._v(" "),v("li",[v("p",[t._v("组合类型")]),t._v(" "),v("ol",[v("li",[t._v("结构体（structure type） -- struct")]),t._v(" "),v("li",[t._v("标签联合（tagged union） -- enum")])])])]),t._v(" "),v("h4",{attrs:{id:"指针和引用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#指针和引用"}},[t._v("#")]),t._v(" 指针和引用")]),t._v(" "),v("ol",[v("li",[t._v("指针是一个持有内存地址的值，可以通过 derefence 来访问它指向的内存地址，理论上可以解引用到任意数据类型。")]),t._v(" "),v("li",[t._v("比正常指针携带更多信息的指针称为胖指针。")])]),t._v(" "),v("h3",{attrs:{id:"代码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[t._v("#")]),t._v(" 代码")]),t._v(" "),v("h4",{attrs:{id:"函数-方法-闭包"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#函数-方法-闭包"}},[t._v("#")]),t._v(" 函数，方法，闭包")]),t._v(" "),v("ol",[v("li",[t._v("函数也是对代码中重复行为的抽象。")]),t._v(" "),v("li",[t._v("面向对象的编程语言中，在类或者对象中定义的函数，被称为方法（method）。方法往往和对象的指针发生关系")]),t._v(" "),v("li",[t._v("闭包引用的上下文中的自由变量，会被捕获到闭包的结构中，成为闭包类型的一部分。")])]),t._v(" "),v("h4",{attrs:{id:"接口-虚表"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#接口-虚表"}},[t._v("#")]),t._v(" 接口，虚表")]),t._v(" "),v("ol",[v("li",[t._v("作为一个抽象层，接口将使用方和实现方隔离开来，使两者不直接有依赖关系，大大提高了复用性和扩展性")]),t._v(" "),v("li",[t._v("在生成这个引用的时候，我们需要构建胖指针，除了指向数据本身外，还需要指向一张涵盖了这个接口所支持方法的列表。这个列表，就是我们熟知的虚表（virtual table）。")]),t._v(" "),v("li",[t._v("虚表一般存储在堆上")]),t._v(" "),v("li",[t._v("虚表是每个 impl TraitA for TypeB {} 时就会编译出一份。")]),t._v(" "),v("li",[t._v("比如 String 的 Debug 实现, String 的 Display 实现各有一份虚表，它们在编译时就生成并放在了二进制文件中（大多是 RODATA 段中）。")]),t._v(" "),v("li",[t._v("所以虚表是每个 (Trait, Type) 一份。并且在编译时就生成好了")])]),t._v(" "),v("h3",{attrs:{id:"运行方式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#运行方式"}},[t._v("#")]),t._v(" 运行方式")]),t._v(" "),v("h4",{attrs:{id:"并发-并行"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#并发-并行"}},[t._v("#")]),t._v(" 并发，并行")]),t._v(" "),v("ol",[v("li",[t._v("并发是同时与多件事情打交道的能力")]),t._v(" "),v("li",[t._v("并行是同时处理多件事情的手段。")])]),t._v(" "),v("h4",{attrs:{id:"同步-异步"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#同步-异步"}},[t._v("#")]),t._v(" 同步，异步")]),t._v(" "),v("h3",{attrs:{id:"编程范式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#编程范式"}},[t._v("#")]),t._v(" 编程范式")]),t._v(" "),v("h4",{attrs:{id:"泛型编程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#泛型编程"}},[t._v("#")]),t._v(" 泛型编程")]),t._v(" "),v("h3",{attrs:{id:"缺陷"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#缺陷"}},[t._v("#")]),t._v(" 缺陷")]),t._v(" "),v("ol",[v("li",[v("img",{attrs:{src:_(195),alt:""}})])]),t._v(" "),v("h3",{attrs:{id:"学习资料"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#学习资料"}},[t._v("#")]),t._v(" 学习资料")]),t._v(" "),v("ol",[v("li",[v("a",{attrs:{href:"https://doc.rust-lang.org/book/",target:"_blank",rel:"noopener noreferrer"}},[t._v("rust book"),v("OutboundLink")],1)]),t._v(" "),v("li",[v("a",{attrs:{href:"https://doc.rust-lang.org/nomicon/",target:"_blank",rel:"noopener noreferrer"}},[t._v("rustnomicon rust 死灵书"),v("OutboundLink")],1)]),t._v(" "),v("li",[v("a",{attrs:{href:"https://docs.rs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("docs.rs"),v("OutboundLink")],1)]),t._v(" "),v("li",[v("a",{attrs:{href:"https://doc.rust-lang.org/stable/std/",target:"_blank",rel:"noopener noreferrer"}},[t._v("标准库文档"),v("OutboundLink")],1)])]),t._v(" "),v("h2",{attrs:{id:"基础篇"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#基础篇"}},[t._v("#")]),t._v(" 基础篇")]),t._v(" "),v("ol",[v("li",[t._v("Rust 是一门基于表达式（expression-based）的语言 Rust is an expression-oriented language.")]),t._v(" "),v("li",[t._v("语句（Statements）是执行一些操作但不返回值的指令。表达式（Expressions）计算并产生一个值")])]),t._v(" "),v("h3",{attrs:{id:"基本语法和基础数据类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#基本语法和基础数据类型"}},[t._v("#")]),t._v(" 基本语法和基础数据类型")]),t._v(" "),v("ol",[v("li",[t._v("变量类型一般可以省略；")]),t._v(" "),v("li",[t._v("const/static 变量必须声明类型；")]),t._v(" "),v("li",[t._v("函数参数的类型和返回值的类型都必须显示定义；")]),t._v(" "),v("li",[v("strong",[t._v("宏编程")]),t._v("的主要流程就是实现若干 From 和 TryFrom")])]),t._v(" "),v("p",[v("img",{attrs:{src:_(196),alt:""}}),t._v(" "),v("img",{attrs:{src:_(197),alt:""}})]),t._v(" "),v("h4",{attrs:{id:"所有权和生命周期"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#所有权和生命周期"}},[t._v("#")]),t._v(" 所有权和生命周期")]),t._v(" "),v("p",[v("strong",[t._v("核心点")]),t._v("：Rust 通过单一所有权来限制任意引用的行为")]),t._v(" "),v("h5",{attrs:{id:"所有权规则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#所有权规则"}},[t._v("#")]),t._v(" 所有权规则")]),t._v(" "),v("ol",[v("li",[t._v("一个值只能被一个变量所拥有，这个变量被称为所有者")]),t._v(" "),v("li",[t._v("一个值同一时刻只能有一个所有者")]),t._v(" "),v("li",[t._v("当所有者离开作用域，其拥有的值被丢弃")])]),t._v(" "),v("h5",{attrs:{id:"move-语义"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#move-语义"}},[t._v("#")]),t._v(" Move 语义：")]),t._v(" "),v("ol",[v("li",[t._v("赋值或者传参会导致值 Move，所有权被转移，一旦所有权转移，之前的变量就不能访问。")])]),t._v(" "),v("h5",{attrs:{id:"copy-语义和-copy-trait"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#copy-语义和-copy-trait"}},[t._v("#")]),t._v(" Copy 语义和 Copy trait")]),t._v(" "),v("ol",[v("li",[t._v("符合 Copy 语义的类型，在你赋值或者传参时，值会自动按位拷贝。")]),t._v(" "),v("li",[t._v("原生类型，包括函数、不可变引用和裸指针实现了 Copy；")]),t._v(" "),v("li",[t._v("数组和元组，如果其内部的数据结构实现了 Copy，那么它们也实现了 Copy；")]),t._v(" "),v("li",[t._v("可变引用没有实现 Copy；")]),t._v(" "),v("li",[t._v("非固定大小的数据结构，没有实现 Copy。")])]),t._v(" "),v("h5",{attrs:{id:"borrow-语义"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#borrow-语义"}},[t._v("#")]),t._v(" Borrow 语义")]),t._v(" "),v("ol",[v("li",[t._v("Borrow 语义通过引用语法（& 或者 &mut）来实现; 在 Rust 下，所有的引用都只是借用了“临时使用权”，它并不破坏值的单一所有权约束。")]),t._v(" "),v("li",[t._v("默认情况下，Rust 的借用都是只读的;")]),t._v(" "),v("li",[t._v("Rust 所有的参数传递都是传值;")]),t._v(" "),v("li",[t._v("借用的生命周期及其约束: "),v("strong",[t._v("借用不能超过（outlive）值的生存期")]),t._v("。")]),t._v(" "),v("li",[t._v("在一个作用域内，仅允许一个活跃的可变引用")]),t._v(" "),v("li",[t._v("在一个作用域内，活跃的可变引用（写）和只读引用（读）是互斥的，不能同时存在。")])]),t._v(" "),v("p",[v("img",{attrs:{src:_(198),alt:""}})]),t._v(" "),v("h5",{attrs:{id:"多个所有者"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#多个所有者"}},[t._v("#")]),t._v(" 多个所有者")]),t._v(" "),v("ol",[v("li",[t._v("Rust 处理很多问题的思路：编译时，处理大部分使用场景，保证安全性和效率；运行时，处理无法在编译时处理的场景，会牺牲一部分效率，提高灵活性。")]),t._v(" "),v("li",[t._v("Arc(Atomic Reference Counter);")]),t._v(" "),v("li",[t._v("Rc(Reference Counter)： 对一个 Rc 结构进行 clone()，不会将其内部的数据复制，只会增加引用计数。Rc 是一个只读的引用计数器")]),t._v(" "),v("li",[t._v("Box::leak() 机制： 创建不受栈内存控制的堆内存，从而绕过编译时的所有权规则")])]),t._v(" "),v("h5",{attrs:{id:"内部可变性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#内部可变性"}},[t._v("#")]),t._v(" 内部可变性")]),t._v(" "),v("ol",[v("li",[v("code",[t._v("Rc<RefCell<T>>")]),t._v("针对单线程")]),t._v(" "),v("li",[v("code",[t._v("Arc<Mutex<T>>/Arc<RwLock<T>>")]),t._v("针对多线程环境")]),t._v(" "),v("li",[v("img",{attrs:{src:_(199),alt:""}})])]),t._v(" "),v("h5",{attrs:{id:"生命周期"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[t._v("#")]),t._v(" 生命周期")]),t._v(" "),v("ol",[v("li",[t._v("一般来说，堆内存的生命周期，会默认和其栈内存的生命周期绑定在一起。")]),t._v(" "),v("li",[t._v("生命周期参数，描述的是参数和参数之间、参数和返回值之间的关系，并不改变原有的生命周期。")]),t._v(" "),v("li",[t._v("所有引用类型的参数都有独立的生命周期 'a 、'b 等。")]),t._v(" "),v("li",[t._v("如果只有一个引用型输入，它的生命周期会赋给所有输出。")]),t._v(" "),v("li",[t._v("如果有多个引用类型的参数，其中一个是 self，那么它的生命周期会赋给所有输出。")])]),t._v(" "),v("h3",{attrs:{id:"类型系统"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#类型系统"}},[t._v("#")]),t._v(" 类型系统")]),t._v(" "),v("ol",[v("li",[t._v("类型系统是一种对类型进行定义、检查和处理的工具；")]),t._v(" "),v("li",[t._v("类型，是对值的区分，它包含了值在内存中的长度、对齐以及值可以进行的操作等信息；")]),t._v(" "),v("li",[t._v("Rust 下的"),v("strong",[t._v("内存安全")]),t._v("更严格：代码只能按照被允许的方法和被允许的权限，访问它被授权访问的内存；")]),t._v(" "),v("li",[t._v("Rust 中除了 let / fn / static / const 这些定义性语句外，"),v("strong",[t._v("都是表达式")]),t._v("，而一切表达式都有"),v("strong",[t._v("类型")]),t._v("；")]),t._v(" "),v("li",[t._v("unit 是只有一个值的类型，它的值和类型都是 ()；")]),t._v(" "),v("li",[t._v("即使上下文中含有类型的信息，也需要开发者为变量提供类型，比如"),v("strong",[t._v("常量和静态变量")]),t._v("的定义；需要明确的类型声明。")])]),t._v(" "),v("p",[v("img",{attrs:{src:_(200),alt:""}}),t._v(" "),v("img",{attrs:{src:_(201),alt:""}})]),t._v(" "),v("h4",{attrs:{id:"多态"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#多态"}},[t._v("#")]),t._v(" 多态")]),t._v(" "),v("ol",[v("li",[t._v("参数多态：代码操作的类型是一个满足某些约束的参数，而非具体的类型；=> 泛型 Rust Generic")]),t._v(" "),v("li",[t._v("特设多态： 一般指函数的重载；包括运算符重载 => Rust Trait")]),t._v(" "),v("li",[t._v("子类型多态：在运行时，子类型可以被当成父类型使用。=> Rust Trait Object")])]),t._v(" "),v("h4",{attrs:{id:"泛型数据结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#泛型数据结构"}},[t._v("#")]),t._v(" 泛型数据结构")]),t._v(" "),v("ol",[v("li",[t._v("函数，是把重复代码中的参数抽取出来；")]),t._v(" "),v("li",[t._v("泛型，是把重复数据结构中的参数抽取出来；")])]),t._v(" "),v("h4",{attrs:{id:"单态化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#单态化"}},[t._v("#")]),t._v(" 单态化")]),t._v(" "),v("ol",[v("li",[t._v("好处： 泛型函数的调用是静态分派（static dispatch）;")]),t._v(" "),v("li",[t._v("缺点 1： 编译速度慢；一个泛型函数，编译器需要找到所有用到的不同类型，一个个编译；")]),t._v(" "),v("li",[t._v("缺点 2： 代码以二进制分发会损失泛型的信息。单态化之后，原本的泛型信息就被丢弃了。")])]),t._v(" "),v("h4",{attrs:{id:"trait"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#trait"}},[t._v("#")]),t._v(" trait")]),t._v(" "),v("ol",[v("li",[t._v("定义了类型使用这个接口的行为;")]),t._v(" "),v("li",[t._v("在 trait 中，方法可以有缺省的实现;")]),t._v(" "),v("li",[t._v("允许用户把错误类型延迟到 trait 实现时才决定，这种带有关联类型的 trait 比普通 trait，更加灵活，抽象度更高")]),t._v(" "),v("li",[t._v("trait 的”继承“： trait B 在定义时可以使用 trait A 中的关联类型和方法")])]),t._v(" "),v("h4",{attrs:{id:"trait-object"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#trait-object"}},[t._v("#")]),t._v(" Trait Object")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("表现为&dyn Trait 或者 "),v("code",[t._v("Box<dyn Trait>")]),t._v("：(动态分派（dynamic dispatch）)；")])]),t._v(" "),v("li",[v("p",[t._v("底层逻辑就是胖指针：数据本身+虚函数表 vtable；")])]),t._v(" "),v("li",[v("p",[t._v("如果 trait 所有的方法，返回值是 Self(trait object 产生时原来的类型会被抹去) 或者携带泛型参数(trait object 是运行时的产物)，那么这个 trait 就不能产生 trait object。")]),t._v(" "),v("p",[v("img",{attrs:{src:_(202),alt:""}})])])]),t._v(" "),v("h4",{attrs:{id:"traits"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#traits"}},[t._v("#")]),t._v(" Traits")]),t._v(" "),v("ol",[v("li",[t._v("send/sync: 如果一个类型 T: Send，那么 T 在某个线程中的独占访问是线程安全的；如果一个类型 T: Sync，那么 T 在线程间的只读共享是安全的;")]),t._v(" "),v("li",[t._v("Clone 是深度拷贝，栈内存和堆内存一起拷贝;")]),t._v(" "),v("li",[t._v("不支持 Send / Sync 的数据结构主要有：\n"),v("ol",[v("li",[t._v("裸指针 *const T / *mut T。它们是不安全的，所以既不是 Send 也不是 Sync。")]),t._v(" "),v("li",[t._v("UnsafeCell 不支持 Sync。也就是说，任何使用了 Cell 或者 RefCell 的数据结构不支持 Sync。")]),t._v(" "),v("li",[t._v("引用计数 Rc 不支持 Send 也不支持 Sync。所以 Rc 无法跨线程。")])])])]),t._v(" "),v("p",[v("img",{attrs:{src:_(203),alt:""}})]),t._v(" "),v("h4",{attrs:{id:"延迟绑定"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#延迟绑定"}},[t._v("#")]),t._v(" 延迟绑定")]),t._v(" "),v("ol",[v("li",[t._v("从数据的角度看，数据结构是具体数据的延迟绑定，泛型结构是具体数据结构的延迟绑定；")]),t._v(" "),v("li",[t._v("从代码的角度看，函数是一组实现某个功能的表达式的延迟绑定，泛型函数是函数的延迟绑定；")]),t._v(" "),v("li",[t._v("trait 是行为的延迟绑定")])]),t._v(" "),v("h3",{attrs:{id:"数据结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据结构"}},[t._v("#")]),t._v(" 数据结构")]),t._v(" "),v("ol",[v("li",[v("strong",[t._v("指针")]),t._v("是一个持有内存地址的值，可以通过解引用来访问它指向的内存地址，理论上可以解引用到任意数据类型；")]),t._v(" "),v("li",[v("strong",[t._v("引用")]),t._v("是一个特殊的指针，它的解引用访问是受限的，只能解引用到它引用数据的类型，不能用作它用")])]),t._v(" "),v("p",[v("img",{attrs:{src:_(204),alt:""}})]),t._v(" "),v("h4",{attrs:{id:"智能指针"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#智能指针"}},[t._v("#")]),t._v(" 智能指针：")]),t._v(" "),v("ol",[v("li",[t._v("是一个胖指针；")]),t._v(" "),v("li",[v("strong",[t._v("智能指针")]),t._v("String 对堆上的值具有所有权，而"),v("strong",[t._v("普通胖指针&str")]),t._v("没有所有权；")]),t._v(" "),v("li",[t._v("在 Rust 中，凡是"),v("strong",[t._v("需要做资源回收")]),t._v("的数据结构，且实现了 "),v("strong",[t._v("Deref/DerefMut/Drop")]),t._v("，都是智能指针")])]),t._v(" "),v("h5",{attrs:{id:"box-t-在堆上创建内存"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#box-t-在堆上创建内存"}},[t._v("#")]),t._v(" "),v("code",[t._v("Box<T>")]),t._v("在堆上创建内存")]),t._v(" "),v("h5",{attrs:{id:"cow-a-b-提供写时克隆"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cow-a-b-提供写时克隆"}},[t._v("#")]),t._v(" "),v("code",[t._v("Cow<'a, B>")]),t._v("提供写时克隆")]),t._v(" "),v("ol",[v("li",[t._v("使用泛型参数做静态分发")]),t._v(" "),v("li",[t._v("使用 trait object 做动态分发")]),t._v(" "),v("li",[t._v("这种根据 enum 的不同状态来进行统一分发的方法是第三种分发手段，其效率是动态分发的数十倍。")])]),t._v(" "),v("h5",{attrs:{id:"mutexguard-t-用于数据加锁"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mutexguard-t-用于数据加锁"}},[t._v("#")]),t._v(" "),v("code",[t._v("MutexGuard<T>")]),t._v("用于数据加锁")]),t._v(" "),v("ol",[v("li",[t._v("通过 Drop trait 来确保，使用到的内存以外的资源在退出时进行释放")])]),t._v(" "),v("h4",{attrs:{id:"切片-slice"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#切片-slice"}},[t._v("#")]),t._v(" 切片 Slice")]),t._v(" "),v("ol",[v("li",[v("p",[v("code",[t._v("&[T]")]),t._v(" 只读切片，只是一个借用")])]),t._v(" "),v("li",[v("p",[v("code",[t._v("&mut[T]")]),t._v(" 可写的切片")])]),t._v(" "),v("li",[v("p",[v("code",[t._v("Box<[T]>")]),t._v(" 堆上分配的切片： 而 "),v("code",[t._v("Box<[T]>")]),t._v(" 一旦生成就"),v("strong",[t._v("固定")]),t._v("下来，"),v("strong",[t._v("没有 capacity")]),t._v("，也无法增长；对数据具有所有权。")])]),t._v(" "),v("li",[v("p",[t._v("Vec 可以通过 into_boxed_slice() 转换成 "),v("code",[t._v("Box<[T]>")]),t._v("，"),v("code",[t._v("Box<[T]>")]),t._v(" 也可以通过 into_vec() 转换回 Vec；")])]),t._v(" "),v("li",[v("p",[t._v("当我们需要在堆上创建固定大小的集合数据，且不希望自动增长，那么，可以先创建 Vec，再转换成 "),v("code",[t._v("Box<[T]>")]),t._v(" ;")]),t._v(" "),v("p",[v("img",{attrs:{src:_(205),alt:""}})])])]),t._v(" "),v("h4",{attrs:{id:"哈希表"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#哈希表"}},[t._v("#")]),t._v(" 哈希表")]),t._v(" "),v("ol",[v("li",[t._v("Rust 哈希表算法的设计核心:\n"),v("ol",[v("li",[t._v("二次探查（quadratic probing）")]),t._v(" "),v("li",[t._v("SIMD 查表（SIMD lookup")])])]),t._v(" "),v("li",[t._v("处理哈希冲突\n"),v("ol",[v("li",[t._v("链地址法（chaining）")]),t._v(" "),v("li",[t._v("开放寻址法（open addressing）")])])]),t._v(" "),v("li",[t._v("通过 shrink_to_fit / shrink_to 释放掉不需要的内存")])]),t._v(" "),v("p",[v("img",{attrs:{src:_(206),alt:""}})]),t._v(" "),v("h3",{attrs:{id:"错误处理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#错误处理"}},[t._v("#")]),t._v(" 错误处理")]),t._v(" "),v("ol",[v("li",[t._v("返回值")]),t._v(" "),v("li",[t._v("异常处理")]),t._v(" "),v("li",[t._v("类型系统\n"),v("ol",[v("li",[t._v("在 Rust 代码中，如果你只想传播错误，不想就地处理，可以用 ? 操作符")]),t._v(" "),v("li",[t._v("使用 Option 和 Result 是 Rust 中处理错误的首选")]),t._v(" "),v("li",[t._v("立刻暴露 Panic!, catch_unwind!")])])])]),t._v(" "),v("h3",{attrs:{id:"闭包"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#闭包"}},[t._v("#")]),t._v(" 闭包")]),t._v(" "),v("p",[v("img",{attrs:{src:_(207),alt:""}})]),t._v(" "),v("ol",[v("li",[t._v("闭包是一种匿名类型，"),v("strong",[t._v("一旦声明，就会产生一个新的类型")]),t._v("（调用闭包时可以直接和代码对应），但这个类型无法被其它地方使用。这个类型就像一个结构体，会包含所有捕获的变量。")]),t._v(" "),v("li",[t._v("不带 move 时，闭包捕获的是对应自由变量的引用；")]),t._v(" "),v("li",[t._v("带 move 时，对应自由变量的所有权会被移动到闭包结构中")]),t._v(" "),v("li",[t._v("闭包的大小跟参数、局部变量都无关，"),v("strong",[t._v("只跟捕获的变量有关")]),t._v("，闭包捕获的变量都存储在栈上。")]),t._v(" "),v("li",[t._v("闭包是"),v("strong",[t._v("存储在栈上")]),t._v("(没有堆内存分配)，并且除了捕获的数据外，闭包本身不包含任何额外函数指针指向闭包的代码。")]),t._v(" "),v("li",[t._v("闭包的调用效率和函数调用几乎一致")])]),t._v(" "),v("h4",{attrs:{id:"fnonce"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#fnonce"}},[t._v("#")]),t._v(" FnOnce")]),t._v(" "),v("h4",{attrs:{id:"fnmut"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#fnmut"}},[t._v("#")]),t._v(" FnMut")]),t._v(" "),v("h4",{attrs:{id:"fn"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#fn"}},[t._v("#")]),t._v(" Fn")]),t._v(" "),v("h2",{attrs:{id:"进阶篇"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#进阶篇"}},[t._v("#")]),t._v(" 进阶篇")]),t._v(" "),v("h3",{attrs:{id:"类型系统-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#类型系统-2"}},[t._v("#")]),t._v(" 类型系统")]),t._v(" "),v("h4",{attrs:{id:"泛型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#泛型"}},[t._v("#")]),t._v(" 泛型")]),t._v(" "),v("ol",[v("li",[t._v("架构师的工作不是作出决策，而是尽可能久地推迟决策，在现在不作出重大决策的情况下构建程序，以便以后有足够信息时再作出决策。")]),t._v(" "),v("li",[t._v("通过使用泛型参数，BufReader 把决策交给使用者。")]),t._v(" "),v("li",[t._v("泛型参数三种常见的使用场景：\n"),v("ol",[v("li",[t._v("使用泛型参数"),v("strong",[t._v("延迟")]),t._v("数据结构的绑定；")]),t._v(" "),v("li",[t._v("使用泛型参数和 PhantomData，声明数据结构中不直接使用但在实现过程中需要用到的类型；")]),t._v(" "),v("li",[t._v("使用泛型参数让同一个数据结构对同一个 trait 可以拥有不同的实现。")])])]),t._v(" "),v("li",[t._v("PhantomData:\n"),v("ol",[v("li",[t._v("被广泛用在处理，数据结构定义过程中不需要，但是在实现过程中需要的泛型参数;")]),t._v(" "),v("li",[t._v("在定义数据结构时，对于额外的、暂时不需要的泛型参数，用 PhantomData 来“拥有”它们，这样可以规避编译器的报错。")]),t._v(" "),v("li",[t._v("实际长度为零，是个 ZST（Zero-Sized Type）, 类型标记。")])])])]),t._v(" "),v("h4",{attrs:{id:"trait-object-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#trait-object-2"}},[t._v("#")]),t._v(" Trait Object")]),t._v(" "),v("ol",[v("li",[t._v("使用 Trait Object 是有额外的代价的，首先这里有"),v("strong",[t._v("一次额外的堆分配")]),t._v("，其次"),v("strong",[t._v("动态分派")]),t._v("会带来一定的性能损失")]),t._v(" "),v("li",[t._v("当在某个上下文中需要满足某个 trait 的类型，且这样的类型可能有很多，当前上下文无法确定会得到哪一个类型时，我们可以用 trait object 来统一处理行为。")]),t._v(" "),v("li",[t._v("和泛型参数一样，trait object 也是一种"),v("strong",[t._v("延迟绑定")]),t._v("，它让决策可以延迟到运行时，从而得到最大的灵活性。")]),t._v(" "),v("li",[t._v("后果是执行效率的打折。在 Rust 里，函数或者方法的执行就是一次跳转指令，而 trait object 方法的执行还多一步，它涉及额外的内存访问，才能得到要跳转的位置再进行跳转，执行的效率要低一些。")]),t._v(" "),v("li",[t._v("返回/线程间传递 trait object 都免不了使用 Box 或者 Arc，会带来额外的堆分配的开销。")])]),t._v(" "),v("h2",{attrs:{id:"并发篇"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#并发篇"}},[t._v("#")]),t._v(" 并发篇")]),t._v(" "),v("p",[t._v("异步处理模型")]),t._v(" "),v("h2",{attrs:{id:"实战篇"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#实战篇"}},[t._v("#")]),t._v(" 实战篇")])])}),[],!1,null,null,null);a.default=r.exports}}]);