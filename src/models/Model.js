import { Form } from "./Form";
import validations from "@/models/validations";

export class Model extends Form {
  constructor(url, data = {}) {
    super(data);
    this.url = url;

    this.validations = validations;
  }

  index(options = {}) {
    return this.get(this.url, options);
  }

  show(id, options = {}) {
    return this.get(`${this.url}/${id}`, options);
  }

  store(options = {}) {
    return this.post(this.url, options);
  }

  storeWithFiles(options = {}) {
    return this.postWithFiles(this.url, options);
  }

  updateWithFiles(id, options = {}) {
    return this.putWithFiles(`${this.url}/${id}`, options);
  }

  update(id, options = {}) {
    return this.put(`${this.url}/${id}`, options);
  }

  destroy(id, options = {}) {
    return this.delete(`${this.url}/${id}`, options);
  }

  restore(id, options = {}) {
    return this.patch(`${this.url}/${id}/restore`, options);
  }
}
