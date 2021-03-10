$(function () {
    var hub = $.connection.echo;
    var myHub = $.connection.echo;
    $.connection.myHub.client.announce = function (message) {
        $("#welcome-messages").append(message + "<br/>")
    }
    $.connection.hub
        .start()
        .done(function () {
            console.log("SignalR is working");
            $.connection.myHub.server.announce("Connected");
        });
});
