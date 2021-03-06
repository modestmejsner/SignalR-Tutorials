$(function () {
    var chat = $.connection.chat;
    
    chat.client.announce = function (message) {
        writeToPage(message);
    }
    var writeToPage = function (message) {
        $("#welcome-messages").append(message + "<br/>")
    }
    $.connection.hub
        .start()
        .done(function () {
            $.connection.hub.log("Log");
            writeToPage("SignalR is working");
            chat.server.announceToEverybody("Connected");

        }
        )
        .fail(function () {
            writeToPage("Error connecting SingalR");
        });

    $("#click-me").on("click", function () {
         chat.server.getServerDateTime()
                .done(function (data) {
                    writeToPage(data);
                })
                .fail(function (e) {
                    writeToPage(e);
                });
    })
});
