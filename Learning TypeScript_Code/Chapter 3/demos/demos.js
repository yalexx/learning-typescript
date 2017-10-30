///<reference path="../typings/handlebars/handlebars.d.ts" />
///<reference path="../typings/jquery/jquery.d.ts" />
var DemoFile = /** @class */ (function () {
    function DemoFile() {
    }
    return DemoFile;
}());
function displayCode(appendTo, files) {
    for (var i = 0; i < files.length; i++) {
        (function (path, name, description) {
            $.ajax({
                url: path,
                type: "GET",
                dataType: "text",
                success: function (content) {
                    var scaped = $("<div/>").text(content).html();
                    var html = "<h2>" + name + "</h2>" +
                        "<p>" + description + "</p>" +
                        "<pre>" + scaped + "</pre>";
                    $(appendTo).append(html);
                },
                error: function (e) {
                    console.log(e);
                }
            });
        })(files[i].path, files[i].name, files[i].description);
    }
}
