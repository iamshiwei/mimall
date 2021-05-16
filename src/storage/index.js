/**
 * storag封装
 */
const STORAGE_KEY = "mall";
export default {
  // 存取值
  setItem(key, value, moudleName) {
    if (moudleName) {
      let val = this.getItem(moudleName);
      val[key] = value;
      this.setItem(moudleName, val);
    } else {
      let val = this.getStorage();
      val[key] = value;
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
    }
  },
  // 获取值
  getItem(key, moudleName) {
    if (moudleName) {
      let val = this.getItem(moudleName);
      if (val) return val[key];
    }
    return this.getStorage()[key];
  },
  getStorage() {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || "{}");
  },
  clear(key, moudleName) {
    let val = this.getStorage();
    if (moudleName) {
      delete val[moudleName][key];
    } else {
      delete val[key];
    }
    this.setItem(STORAGE_KEY, val);
  },
};
