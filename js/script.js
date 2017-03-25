$(document).ready(function() {

 console.log('jQuery is ready');

 var url = 'https://wind-bow.gomix.me/twitch-api/';
 var streams = 'streams/';
 var channels = ["freecodecamp", "nintendo", "food", "bobross", "imaqtpie"];
 var users = 'users/';
 var channel;
 var status;

 function onLoad() {
   for (var i = 0;i < channels.length;i++) {
    channel = channels[i];
    // console.log(channel);


     $.ajax ({
        type: 'GET',
        headers:{
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        dataType: 'jsonp',
        url: url + streams + channel,
        success: function (data1) {
          var stream = data1.stream;
          // streamName = data1.stream.channel.display_name;
          console.log("This is data1: ", data1);
          // console.log("This is the stream status: ", stream);
          // console.log("This is the stream name live ", streamName);
          if (stream == null) {
            status = "Currently offline";
            $("#status").innerHTML = status;
          } else {
            status = "Currently Online";
            $("#status").innerHTML = status;
          }
        },
        error: function (errorMessage1) {
          console.log(errorMessage1);
        }
     });

     $.ajax ({
        type: 'GET',
        headers:{
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        dataType: 'jsonp',
        url: url + users + channel,
        success: function (data2) {
          // console.log("This is data2: ", data2);
          var name = data2.display_name;
          // console.log(name);
          var logo = data2.logo;
          var name = data2.name;
          $('#output').prepend('<div class="channels jumbotron"><img class="logo" src ="' + logo + '"/><a href="https://www.twitch.tv/' + name + '" target="_blank"><h3 id="name">' + name + '</h3></a><p id="status">' + status + '</p></div>');
          // console.log(logo);
        },
        error: function (errorMessage2) {
          console.log(errorMessage2);
        }
      });
    }
  };

  onLoad();
});