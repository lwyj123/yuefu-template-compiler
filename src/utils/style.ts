export const parseStyleText = function (cssText) {
  let res = {};
  let listDelimiter = /;(?![^(]*\))/g;
  let propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      let tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res;
};
