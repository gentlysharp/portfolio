import Vue from 'vue';

/* 
  context Object를 선언하고 
  전역으로 사용될 Object를 선언한다.
*/
const _context = {
  logo: {
    // src: require("") // ""값을 require과 import와 같은 키워드의 값으로 넣으면 컴파일이 안된다. 
  },
  menus: [
    // {
    //   id: 0,
    //   icon: "mdi-home",
    //   title: "HOME",
    //   path: "/"
    // },
    {
      id: 0,
      icon: "mdi-brain",
      title: "About",
      path: "/about"
    },
    {
      id: 1,
      icon: "mdi-draw",
      title: "Blog",
      path: "/blog"
    },
    {
      id: 2,
      icon: "mdi-account-circle",
      title: "Resume",
      path: "/resume"
    },

  ],
  sns: [{
      service: "github",
      href: "https://github.com/gentlysharp",
      icon: "mdi-github",
    },
    {
      service: "instagram",
      href: "https://www.instagram.com/sanghyuphan/?hl=ko",
      icon: "mdi-instagram",
    },

  ],
}

/*
  Context 전역 변수를 플러그인으로 설치한다.
*/
const Context = {};
Context.install = function (Vue) {
  Vue.context = _context;
  window.context = _context;
  Object.defineProperties(Vue.prototype, {
    context: {
      get() {
        return _context;
      }
    },
    $context: {
      get() {
        return _context;
      }
    }
  })
}

Vue.use(Context);

export default Context;