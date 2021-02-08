import Vue from "vue";
import { Errors } from "./Errors";
import store from "@/store";
import router from "@/router";

export class Form {
  constructor(data) {
    this.originalData = data;

    for (let field in data) {
      this[field] = data[field];
    }
    this.errors = new Errors();
  }

  reset() {
    for (let field in this.originalData) {
      this[field] = this.originalData[field]
    }
    this.errors.clear();
  }

  data() {
    let data = {};
    for (let property in this.originalData) {
      data[property] = this[property];
    }
    return data;
  }

  dataWithFiles(withPutMethod = false) {
    let data;
    if ( withPutMethod ) {
      data = {
        ...this.data(),
        _method: 'PUT',
      };
    } else {
      data = this.data();
    }
    return this.convertModelToFormData(data)
  }

  convertModelToFormData(val, formData = new FormData(), namespace = '') {
    if((typeof val !== 'undefined') && (val !== null)) {
      if(val instanceof Array) {
        let i = 0;
        for(let element of val) {
          this.convertModelToFormData(element, formData, namespace + '['+i+']');
          i++;
        }
      } else if(typeof val === 'object' && !(val instanceof File)) {
        for (let propertyName in val) {
          if(val.hasOwnProperty(propertyName)) {
            this.convertModelToFormData(val[propertyName], formData, namespace ? namespace + '[' + propertyName + ']' : propertyName);
          }
        }
      } else {
        formData.append(namespace, val);
      }
    }
    return formData;
  }

  submit(method, url, options = {}, hasFiles = false) {
    return new Promise((resolve, reject) => {
      method = method.toLowerCase();
      options = {
        ...options,
        cancelToken: new window.CancelToken(function executor(c) {
          // An executor function receives a cancel function as a parameter
          window.source = c;
        })
      };

      if (window.navigator.onLine) {
        let request;

        if ( hasFiles ) {
          request = method === 'put'
            ? Vue.axios["post"](url, this.dataWithFiles(true), options)
            : Vue.axios[method](url, this.dataWithFiles(), options)
        } else {
          request =
            method !== "get" && method !== "delete"
              ? Vue.axios[method](url, this.data(), options)
              : Vue.axios[method](url, options);
        }

        request
          .then(response => {
            this.onSuccess(method !== "put");
            resolve(response.data);
          })
          .catch(error => {
            if (Vue.axios.isCancel(error)) {
              console.log("Request canceled", error.message);
            } else {
              if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                if (process.env.NODE_ENV !== 'production') {
                  console.log("Response");
                  console.log(error.response);
                }

                if (
                  error.response.status !== 401 &&
                  error.response.status !== 422 &&
                  error.response.status !== 429 &&
                  error.response.status !== 404
                ) {
                  router.push({
                    name: "Error",
                    params: {
                      code: error.response.status,
                      text: error.response.data.message || 'Error Inesperado'
                    }
                  });
                }

                if (error.response.status === 401) {
                  store.dispatch('user/logout')
                    .then(() => {
                      router.push({name: 'Login'});
                    })
                }

                this.onFail(error.response.data);
                reject(error.response.data);
              } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                if (process.env.NODE_ENV === 'production') {
                  router.push({
                    name: "Error",
                    params: {
                      code: 422,
                      text: 'No se pudo realizar la solicitud al servidor.'
                    }
                  });
                }
                if (process.env.NODE_ENV !== 'production') {
                  console.log("Request");
                  console.log(error.request);
                }
                reject(error.request);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.error("Error", error.message || error);
                router.push({
                  name: "Error",
                  params: {
                    code: 422,
                    text: 'No se pudo realizar la solicitud al servidor.'
                  }
                });
                reject(error.message || error);
              }

              if ( process.env.NODE_ENV !== 'production' ) {
                console.log('Config');
                console.log(error.config);
              }
              reject(error);
            }
          });
      } else {
        console.info("You are working in offline mode.");
      }
    });
  }

  post(url, options = {}) {
    return this.submit("POST", url, options);
  }

  postWithFiles(url, options = {}) {

    return this.submit("POST", url,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        ...options
      }
      , true);
  }

  get(url, options = {}) {
    return this.submit("GET", url, options);
  }

  put(url, options = {}) {
    return this.submit("PUT", url, options);
  }

  putWithFiles(url, options = {}) {
    return this.submit("PUT", url,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        ...options
      }
      , true);
  }

  delete(url, options = {}) {
    return this.submit("DELETE", url, options);
  }

  patch(url, options = {}) {
    return this.submit("PATCH", url, options);
  }

  onSuccess(reset = false) {
    if (reset) {
      this.reset();
    }
  }

  onFail(errors) {
    this.errors.record(errors);
  }
}
