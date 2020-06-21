import Vue from "vue";

const _eventBus = new Vue();

const EventBus = {}
EventBus.install = function (Vue) {
  Vue.eventBus = _eventBus;
  window.eventBus = _eventBus;
  Object.defineProperties(Vue.prototype, {
    eventBus: {
      get() {
        return _eventBus;
      }
    },
    $eventBus: {
      get() {
        return _eventBus;
      }
    }
  })
};

Vue.use(EventBus);

export default EventBus;