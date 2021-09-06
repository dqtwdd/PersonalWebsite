// 获取地址栏参数，稳定，鲁棒性强！
export function getUrlParams() {
  let urlParams = decodeURI(window.location.search + window.location.hash);
  let resObj = {};
  urlParams = urlParams
    .replace(/\//g, '')
    .replace(/\?/g, '&')
    .replace(/#/g, '&')
    .split('&')
    .filter((item) => {
      return item.includes('=');
    });
  for (let i = urlParams.length - 1; i >= 0; i--) {
    let keyValueArr = urlParams[i].split('=');
    let key = keyValueArr[0];
    let value = keyValueArr[1];
    if (Object.prototype.toString.apply(resObj[key]) === '[object Undefined]') {
      resObj[key] = value;
    } else if (Object.prototype.toString.apply(resObj[key]) === '[object String]') {
      let temp = resObj[key];
      resObj[key] = [];
      resObj[key].push(temp);
      resObj[key].push(value);
    } else if (Object.prototype.toString.apply(resObj[key]) === '[object Array]') {
      resObj[key].push(value);
    }
  }
  return resObj;
}
