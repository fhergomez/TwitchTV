$(document).ready(function() {

  console.log('jQuery is ready');

  var url = 'https://wind-bow.gomix.me/twitch-api/';
  var streams = 'streams/';

  // This is declaring the list of users
  var twitchChannels = ["freecodecamp", "nintendo", "food", "bobross", "imaqtpie"];

  for (var i = 0;i < twitchChannels.length;i++) {
    status(twitchChannels[i]);
  }


  function status(user) {
    $.ajax({
      type: 'GET',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      dataType: 'jsonp',
      url: url + '/channels/' + user + '?callback=?',
      success: function (data) {
        if (data['status'] == '404') {
          $("#invalid").html('<hr>' + user);
        } else {
          var channels = data;
          details(user, channels);
        }
      },
      error: function (errorMessage1) {
        console.log(errorMessage1);
      }
    });
  }

  function details (user, channels) {
    console.log(channels);
    $.ajax({
      type: 'GET',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      dataType: 'jsonp',
      url: url + streams + user + '?callback=?',
      success: function (data) {
        console.log('this is the stream data: ', data);
        if (data.stream == null) {
          var status = "offline";
        } else {
          var status = "online";
        }
        logo = channels.logo;
        console.log('this is the logo: ', logo);
        getHTML(user, status, logo, channels['status'], channels['url']);
      },
      error: function (errorMessage2) {
        console.log(errorMessage2);
      }
    });
  }; // end of function details

  function getHTML (user, status, logo, statusblurb, userURL) {
    console.log(status);

    var html = '<div class="channels jumbotron"><img class="logo" src ="' + logo + '"/><a href="https://www.twitch.tv/' + userURL + '" target="_blank"><h3 id="name">' + user + '</h3></a><p id="status">' + status + '</p></div>';
    console.log(logo);
    $('#output').append(html);
  }; // end of function getHTML

}); // end of jQuery