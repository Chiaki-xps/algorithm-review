/**
 * 事件总线相当于发布订阅模式，有发布者，订阅者，事件总线
 * 1. 需要定义一个eventBus保存所有事件名称，事件名称下可能包含多个事件。
 * 2. 所有设计结构 eventBus = {eventName: [...eventCallback]}
 * 3. 需要定义订阅者on、发布者emit方法
 */

class EventBus {
  constructor() {
    this.eventBus = {};
  }

  on(eventName, eventCallback) {
    // 查看是否已经注册过,没有需要初始化
    let handlers = this.eventBus[eventName];

    // 不存在需要初始化
    if (!handlers) {
      handlers = [];
      this.eventBus[eventName] = handlers;
    }

    // 存入
    handlers.push(eventCallback);
  }

  emit(eventName, ...payload) {
    const handlers = this.eventBus[eventName];

    if (!handlers) return;
    handlers.forEach((handler) => handler(...payload));
  }
}

// 拓展：如果需要考虑绑定this的情况。使用apply、或者call
class myEvent {
  constructor() {
    this.eventBus = {};
  }
  // 注册事件名 eventName
  // 事件 eventCallback
  // 用于绑定this， thisArg
  on(eventName, eventCallback, thisArg) {
    let handlers = this.eventBus[eventName];

    if (!handlers) {
      handlers = [];
      this.eventBus[eventName] = handlers;
    }

    handlers.push({
      eventCallback,
      thisArg,
    });
  }

  // 第一个参数为触发事件名称 eventName，后面携带得是触发事件传递得参数
  emit(eventName, ...payload) {
    const handlers = this.eventBus[eventName];
    if (!handlers) {
      return;
    }

    handlers.forEach((handler) => {
      handler.eventCallback.apply(handler.thisArg, payload);
      // handler.eventCallback.call(handler.this.Arg, ...payload);
    });
  }
}

// 测试代码
const eventBus = new EventBus();
eventBus.on('abc', function (...arg) {
  console.log('监听abc1', arg);
});
eventBus.emit('abc', 123);
