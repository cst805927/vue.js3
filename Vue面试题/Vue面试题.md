# Vue面试题

## 141.Vue的生命周期是什么？

- Vue的生命周期是指组件从创建到销毁的一系列的过程

## 142.Vue的各个生命阶段是什么？

- Vue 一共有8个生命阶段，
- 1.beforeCreate钩子函数，
  - 在实例初始化之前，在数据监听和事件配置之前触发。
  - 这个事件不能获取到data数据
- 2.Created钩子函数，
  - 在实例创建完成后触发，
  - 此时可以访问data、method等属性。
  - 组件还没挂载到页面中去，访问不到$el属性。
  - 一般进行一些页面初始化的工作，
    - 比如通过ajax请求属性来对页面进行初始化。
- 3.beforeMount钩子函数，
  - 在组件被挂载到页面之前触发，
  - 在beforeMount之前，会找到对应的template，并编译成render函数。
- 4.mounted钩子函数，
  - 在组件挂载在页面之后触发。
  - 此时可以通过DOM API获取页面中的DOM元素。
- 5.beforeUpdata钩子函数，
  - 在响应式数据更新时触发，在虚拟DOM和打补丁之前，
  - 可以对可能会被移除的元素做一些操作，
    - 比如移除事件监听器。
- 6.updata钩子函数，
  - 虚拟DOM重新渲染和打补丁之后调用。
- 7.beforeDestroy钩子函数，
  - 在实例销毁之前调用。
  - 可以销毁定时器，解绑全局事件等。
  - 数据，方法，过滤器，指令都可以使用
- 8.destoryed钩子函数，
  - 在实例销毁之后调用，
  - 调用后，VUe实例中的所有方法都会解除绑定，
  - 所有的事件监听器都会被移除，所有的子实例也会被销毁。
- 当我们使用keep-alive的时候，还有两个钩子函数，
  - 分别是activated和deactivated。
- 用keep-alive包裹的组件在切换时不会进行销毁，
- 而是缓存在内存中执行deactivated钩子函数，
- 命中缓存渲染后会执行activated钩子函数

## 143.Vue组件间的参数传递方式？

## 144.computed和watch的差异？

## 145.vue-router中的导航钩子函数?

## 146.$route和$router的区别？

## 147.vue常见的修饰符？

## 148.vue中key值的作用？

## 149.computed和watch区别？

## 150.keep-alive组件有什么作用？

## 151.vue中mixin和mixins区别？