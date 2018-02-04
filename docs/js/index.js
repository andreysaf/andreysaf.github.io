(function($) {
  $(document).ready(function() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function(position) {
        loadWeather(position.coords.latitude + ',' + position.coords.longitude);
      });
    } else {
      $(".weather-text").html("Aw, geolocation isn't supported by this browser.");
    }

    function loadWeather(location, woeid) {
      $.simpleWeather({
        location: location,
        woeid: woeid,
        unit: 'f',
        success: function(weather) {
          console.log(weather);
          $(".weather-text").html(weather.text);
          $(".weather-title").html(weather.title);
          $(".weather-icon").html(IconGen(weather.code));
          $(".weather-city").html('<h3 class="title is-3">' + weather.city + ', ' + weather.region + '</h3>' +
            '<h4 class="subtitle is-4">' + weather.country + '</h4>');
          $(".weather-cels").html('<h3 class="subtitle is-3">' + weather.alt.temp + '&deg;C' + '</h3>');
          $(".weather-faren").html(weather.temp + '&deg;F');
          $("#tempunit").text('Celsius');
          $(".weather-currently").html(weather.currently);
          IconGen(weather.text);

          for (var key in weather.forecast) {
            var obj = weather.forecast[key];
            var divForecast = document.getElementById('weather-forecast');

            divForecast.innerHTML += '<tr><th>' + obj.date + '</th>' +
              '<td>' + obj.day + '</td>' +
              '<td>' + IconGen(obj.code) + '</td>' +
              '<td>' + obj.alt.high + '</td>' +
              '<td>' + obj.alt.low + '</td>' +
              '<td>' + obj.text + '</td></tr>';

          }
        },
        error: function(error) {
          $("#weather").html('<p>' + error + '</p>');
        }
      });
    }

    function IconGen(desc) {
      var desc = parseInt(desc)
      switch (desc) {
        case 0:
          return '<i class="wi wi-yahoo-0"></i>';
          break;
        case 1:
          return '<i class="wi wi-yahoo-1"></i>';
          break;
        case 2:
          return '<i class="wi wi-yahoo-2"></i>';
          break;
        case 3:
          return '<i class="wi wi-yahoo-3"></i>';
          break;
        case 4:
          return '<i class="wi wi-yahoo-4"></i>';
          break;
        case 5:
          return '<i class="wi wi-yahoo-5"></i>';
          break;
        case 6:
          return '<i class="wi wi-yahoo-6"></i>';
          break;
        case 7:
          return '<i class="wi wi-yahoo-7"></i>';
          break;
        case 8:
          return '<i class="wi wi-yahoo-8"</i>';
          break;
        case 9:
          return '<i class="wi wi-yahoo-9"></i>';
          break;
        case 10:
          return '<i class="wi wi-yahoo-10"></i>';
          break;
        case 11:
          return '<i class="wi wi-yahoo-11"></i>';
          break;
        case 12:
          return '<i class="wi wi-yahoo-12"></i>';
          break;
        case 13:
          return '<i class="wi wi-yahoo-13"></i>';
          break;
        case 14:
          return '<i class="wi wi-yahoo-14"></i>';
          break;
        case 15:
          return '<i class="wi wi-yahoo-15"></i>';
          break;
        case 16:
          return '<i class="wi wi-yahoo-16"></i>';
          break;
        case 17:
          return '<i class="wi wi-yahoo-17"></i>';
          break;
        case 18:
          return '<i class="wi wi-yahoo-18"></i>';
          break;
        case 19:
          return '<i class="wi wi-yahoo-19"></i>';
          break;
        case 20:
          return '<i class="wi wi-yahoo-20"</i>';
          break;
        case 21:
          return '<i class="wi wi-yahoo-21"></i>';
          break;
        case 22:
          return '<i class="wi wi-yahoo-22"></i>';
          break;
        case 23:
          return '<i class="wi wi-yahoo-23"></i>';
          break;
        case 24:
          return '<i class="wi wi-yahoo-24"></i>';
          break;
        case 25:
          return '<i class="wi wi-yahoo-25"></i>';
          break;
        case 26:
          return '<i class="wi wi-yahoo-26"></i>';
          break;
        case 27:
          return '<i class="wi wi-yahoo-27"></i>';
          break;
        case 28:
          return '<i class="wi wi-yahoo-28"></i>';
          break;
        case 29:
          return '<i class="wi wi-yahoo-29"></i>';
          break;
        case 30:
          return '<i class="wi wi-yahoo-30"></i>';
          break;
        case 31:
          return '<i class="wi wi-yahoo-31"></i>';
          break;
        case 32:
          return '<i class="wi wi-yahoo-32"></i>';
          break;
        case 33:
          return '<i class="wi wi-yahoo-33"></i>';
          break;
        case 34:
          return '<i class="wi wi-yahoo-34"></i>';
          break;
        case 35:
          return '<i class="wi wi-yahoo-35"></i>';
          break;
        case 36:
          return '<i class="wi wi-yahoo-36"</i>';
          break;
        case 37:
          return '<i class="wi wi-yahoo-37"></i>';
          break;
        case 38:
          return '<i class="wi wi-yahoo-38"></i>';
          break;
        case 39:
          return '<i class="wi wi-yahoo-39"></i>';
          break;
        case 40:
          return '<i class="wi wi-yahoo-40"></i>';
          break;
        case 41:
          return '<i class="wi wi-yahoo-41"></i>';
          break;
        case 42:
          return '<i class="wi wi-yahoo-42"></i>';
          break;
        case 43:
          return '<i class="wi wi-yahoo-43"></i>';
          break;
        case 44:
          return '<i class="wi wi-yahoo-44"></i>';
          break;
        case 45:
          return '<i class="wi wi-yahoo-45"></i>';
          break;
        case 46:
          return '<i class="wi wi-yahoo-46"></i>';
          break;
        case 47:
          return '<i class="wi wi-yahoo-47"></i>';
          break;
        case 3200:
          return '<i class="wi wi-yahoo-3200"></i>';
          break;
        default:
          return '<i class="wi wi-yahoo-0"></i>';
      }
    }

    var geocoder = new google.maps.Geocoder();

    $('button').on('click', function() {
      var address = $('#address').val();
      geocoder.geocode({
        'address': address
      }, function(results, status) {

        if (status == google.maps.GeocoderStatus.OK) {
          var latitude = results[0].geometry.location.lat();
          var longitude = results[0].geometry.location.lng();
          console.log(latitude + ',' + longitude);
          $('#coordinates').val(latitude + ', ' + longitude);
          loadWeather(latitude + ',' + longitude);
        }
      });
    });
  });
})(jQuery);
