(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{214:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"谁不想拥有一个自己的网站-博客呢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#谁不想拥有一个自己的网站-博客呢"}},[t._v("#")]),t._v(" 谁不想拥有一个自己的网站/博客呢？")]),t._v(" "),a("p",[t._v("是呀，谁不想拥有一个自己的网站/博客呢？")]),t._v(" "),a("p",[t._v('我们很多人可能曾经通过多种多样的方式搭建过自己的博客系统。有的是一时兴起，有时是经过深思熟虑，有的不愿成为他人嫁衣，有的是想保留下这两分自留地。即使搭建完成之后，它们大概率会像刚出生一样静静地躺在那里，但我们仍然会选择"Just do it!"。')]),t._v(" "),a("h2",{attrs:{id:"搭建博客的痛点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#搭建博客的痛点"}},[t._v("#")]),t._v(" 搭建博客的痛点")]),t._v(" "),a("ol",[a("li",[t._v("源码存放在本地，容易丢失；发布的博客系统只是打包好的文件。")]),t._v(" "),a("li",[t._v("不能一键发布。")]),t._v(" "),a("li",[t._v("源码存放 github，可能会透露一些敏感或隐私信息。")]),t._v(" "),a("li",[t._v("发布的博客网址携带项目目录名，如： naturellee.github.io/contacts/xxx.html，而我们期望的是 contacts 不存在。")])]),t._v(" "),a("p",[t._v("因此对搭建博客系统提出以下要求：")]),t._v(" "),a("ol",[a("li",[t._v("源码私有存放；")]),t._v(" "),a("li",[t._v("发布到自己的 username.github.io 主路径；")]),t._v(" "),a("li",[t._v("源码更新即可触发博客的更新发布；")])]),t._v(" "),a("h2",{attrs:{id:"正确姿势"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正确姿势"}},[t._v("#")]),t._v(" 正确姿势")]),t._v(" "),a("p",[t._v("为满足以上要求，现提出一种新的构建方式：")]),t._v(" "),a("ol",[a("li",[t._v("在个人 github 中新建 private repo: notes，用于存放整个博客系统的代码；")]),t._v(" "),a("li",[t._v("在个人 github 中新建 public repo: username.github.io；这是一个特殊的 repo，提交到 master 分支的代码会自动作为 username.github.io 的内容；因此我们会把 notes 分支打包好的代码自动推送到这个项目中；")]),t._v(" "),a("li",[t._v("使用 github actions 在 notes repo 中添加 CI 构建脚本，监听 push 请求，触发编译，并自动提交打包好的代码到 username.github.io repo 中；")]),t._v(" "),a("li",[t._v("由于 github actions 中会使用项目权限，需要添加相应的 access token;")])]),t._v(" "),a("h2",{attrs:{id:"实战案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实战案例"}},[t._v("#")]),t._v(" 实战案例")]),t._v(" "),a("p",[t._v(".github/workflows/ci.yml文件")]),t._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Build and Deploy\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" master\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build-and-deploy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Checkout 🛎️\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/checkout@v2.3.1 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# If you're using actions/checkout@v2 you must set persist-credentials to false in most cases for the deployment to work correctly.")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("persist-credentials")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Install and Build 🔧 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This example project is built using npm and outputs the result to the 'build' folder. Replace with the commands required to build your project, or remove this step entirely if your site is pre-built.")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n          npm install\n          npm run build #具体命令对应你的项目打包命令")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deploy 🚀\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" JamesIves/github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pages"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("deploy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("action@4.1.0\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("token")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.ACCESS_TOKEN "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ACCESS_TOKEN需要在notes/settings/Secrets 下面添加Actions secrets")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("repository-name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" NaturelLee/naturellee.github.io\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" master "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The branch that the action should deploy to.")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("folder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" docs/.vuepress/dist "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The folder that the action should deploy.")]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);