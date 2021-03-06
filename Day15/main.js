// <div class="container">
//           <div class="row">
//             <div class="col-sm-12 col-md-8 col-lg-8 tv overflow-auto">
//                 <img src="TV.PNG" alt="TV" class="tvi">
//                 <img src="TV.PNG" alt="TV" class="tvi">
//                 <img src="TV.PNG" alt="TV" class="tvi">
//                 <img src="TV.PNG" alt="TV" class="tvi">
//             </div>
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// const div = document.createElement('div');
// div.classList.add("container");
// document.body.append(div);
// const row = document.createElement('div');
// row.classList.add("row");
// div.append(row);
// const division = document.createElement('div');
// division.classList.add("col-sm-12");
// division.classList.add("col-md-8");
// division.classList.add("col-lg-8");
// division.classList.add("tv");
// division.classList.add("overflow-auto");
// row.append(division);
function getMusicAsync() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, html;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://theaudiodb.com/api/v1/json/1/album.php?i=112024")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log(data);
                    html = "";
                    data.album.forEach(function (response) {
                        html +=
                            "<div class=\"card-header\">\n         <h4>" + response.strAlbum + "</h4>\n         <ul class=\"list-group\">\n            <img src=\"" + response.strAlbumThumb + "\" id=\"album\"></img>\n            <li class=\"list-group-item\">Album ID: " + response.idAlbum + "</li>\n            <li class=\"list-group-item\">Artist ID: " + response.idArtist + "</li>\n            <li class=\"list-group-item\">Label ID: " + response.idLabel + "</li>\n            <li class=\"list-group-item\">Album Striped: " + response.strAlbumStripped + "</li>        <ul>\n         </ul>\n        </div>";
                    });
                    document.getElementById('television').innerHTML = html;
                    return [2 /*return*/];
            }
        });
    });
}
getMusicAsync();
