let fizieren = function (str, params) {
  let result = "";
  let startUpperCase = params ? params.startUpperCase : undefined;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let flag = startUpperCase ? 1 : 0;
    if (i % 2 === flag) {
      char = char.toLowerCase();
    } else {
      char = char.toUpperCase();
    }
    result += char;
  }
  return result;
};

module.exports = {
  function: fizieren,
  name: "Spongebobify",
  show: true,
  params: [
    {
      name: "startUpperCase",
      type: "Boolean",
    },
  ],
};
