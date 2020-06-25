import Vue from "vue";
import axios from "axios";
import qs from 'qs';


// const _api = process.env.VUE_APP_API_URI;
const _api = '/';

const _rest = {
  api: {
    create(uri, data) {
      return axios({
        method: 'post',
        url: _api + uri,
        data: data,
      });
    },
    read(uri) {
      return axios({
        method: 'get',
        url: _api + uri,
      });
    },
    update(uri, data, isPut) {
      return axios({
        method: isPut == false ? 'patch' : 'put',
        url: _api + uri,
        data: data,
      });
    },
    delete(uri) {
      return axios({
        method: 'delete',
        url: _api + uri,
      });
    },
    search(uri, data, params) {
      return axios({
        method: 'post',
        url: _api + uri,
        headers: {
          query: "true"
        },
        params: params,
        paramsSerializer: (params) => {
          return qs.stringify(params, {
            arrayFormat: 'repeat'
          });
        },
        data: data,
      });
    }
  },
};


const RESTful = {};
RESTful.install = function (Vue) {
  Vue.rest = _rest;
  window.rest = _rest;
  Object.defineProperties(Vue.prototype, {
    rest: {
      get() {
        return _rest;
      }
    },
    $rest: {
      get() {
        return _rest;
      }
    },
  });
};

Vue.use(RESTful)

export default RESTful;