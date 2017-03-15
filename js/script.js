$(document).ready(function() {

 console.log('jQuery is ready');

 var url = 'https://api.twitch.tv/kraken/users/freecodecamp/follows/channels/';
 $.ajax ({
  type: 'GET',
  url: url,
  dataType: 'json',
  headers: {
    'w4phosouw8u1vbu5jtcm5jdbdpamsm7rdvmz69v8wjuij93w7yh4mjs1modf'
  },
  success: function (data) {
    console.log(data);
  },
  error: function (errorMessage) {
    console.log(errorMessage);
  }
 });

});