const utils = require("../utils");
const fancy = utils.maps.fancy;
var fizieren = function (str, params) {
    let fancyfied = "";
    str.split("").forEach((c) => {
        if (!(c in fancy))
            fancyfied += c;
        else
            fancyfied += fancy[c];
    });
    return fancyfied;
};
module.exports = {
    function: fizieren,
    name: "Fancify",
    show: true,
};
//# sourceMappingURL=fancy.js.map