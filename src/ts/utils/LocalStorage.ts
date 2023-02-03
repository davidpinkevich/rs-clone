import { TLocalStorageObj } from "../types/types";

class LocalStorage {
  private name: string;
  private obj: TLocalStorageObj;

  constructor(name: string) {
    this.name = name || "";
    this.obj = this.getAll()
  }

  set(key: string, value: string) {
    this.obj[key] = value;
    localStorage.setItem(this.name, JSON.stringify(this.obj))
  }
  get(key: string) {
    return this.obj[key];
  }
  getAll() {
    const data = JSON.parse(localStorage.getItem(this.name) as string);
    return data ? data : {};
  }
  remove(key: string) {
    if (this.obj[key]) delete this.obj[key];
    localStorage.setItem(this.name, JSON.stringify(this.obj))
  }
  removeAll() {
    this.obj = {};
    localStorage.removeItem(this.name);
  }
}

export default LocalStorage;
