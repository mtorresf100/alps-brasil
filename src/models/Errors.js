export class Errors {
  constructor() {
    this.errors = {};
  }

  all() {
    if (typeof this.errors !== "undefined" && this.any()) {
      return this.errors;
    }
    return null;
  }

  first(field) {
    if (typeof this.errors !== "undefined" && this.errors[field]) {
      return this.errors[field][0];
    }
  }

  get(field) {
    if (typeof this.errors !== "undefined" && this.errors[field]) {
      return this.errors[field];
    }
    return null;
  }

  record(errors) {
    this.errors = errors;
  }

  has(field) {
    return this.errors ? this.errors.hasOwnProperty(field) : false;
  }

  any() {
    return Object.keys(this.errors).length > 0;
  }

  clear(field) {
    if (field) {
      delete this.errors[field];
      return;
    }
    this.errors = {};
  }

}
