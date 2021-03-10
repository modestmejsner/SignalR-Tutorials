﻿$(function () {
    $("#click-me").on("click", function () {
         myHub.server.getServerDateTime()
                .done(function (data) {
                    writeToPage(data);
                })
                .fail(function (e) {
                    writeToPage(e);
                });
    })
    var hub = $.connection.echo;
    var myHub = $.connection.chatHub;
    myHub.client.announce = function (message) {
        writeToPage(message);
    }
    var writeToPage = function (message) {
        $("#welcome-messages").append(message + "<br/>")
    }
    $.connection.hub
        .start()
        .done(function () {
            writeToPage("SignalR is working");
            myHub.server.announce("Connected");
           
        }
    )
        .fail(function() {
            writeToPage("Error connecting SingalR");
        })
});
