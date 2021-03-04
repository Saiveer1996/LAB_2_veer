//java_file

var b_permits;
  var markers = L.markerClusterGroup();
  $(function() {
    var start = moment().subtract(29, 'days');
    var end = moment();
    function cb(start, end) {
      $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));

      var str = "issueddate > '" + start.format('YYYY-MM-DD') + "' and issueddate < '" + end.format('YYYY-MM-DD')+"'";

      axios.get("https://data.calgary.ca/resource/c2es-76ed.geojson", {
      params: {
        $where: str
            }
          })

      .then(function(b_permits) {
        markers.clearLayers();
        for (var i = 0; i < b_permits.data.features.length; i++) {
          var data = b_permits.data.features[i];
          var address = data.properties.originaladdress;
          var issue= data.properties.issueddate;
          var community = data.properties.communityname;
          var contract = data.properties.contractorname;
          var work = data.properties.workclassgroup;
          var geo = data.geometry;
          if (geo == null){
            continue;
          }
          var lon = data.geometry.coordinates[1];
          var lat = data.geometry.coordinates[0];
          var marker = L.marker(new L.LatLng(lon, lat));
          marker.bindPopup("Issued Date: " + issue + "<br>" + "Work Class Group: " + work + "<br>" + "Contractor Name: " + contract + "<br>" + "Community Name: " + community + "<br>" + "Original Address: " + address)
          markers.addLayer(marker);
        }
        cmap.addLayer(markers);
      })

    }
    $('#reportrange').daterangepicker({
              startDate: start,
              endDate: end,
              ranges: {
                'Today': [moment(), moment()],
                'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                'This Month': [moment().startOf('month'), moment().endOf('month')],
                'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
              }
            }, cb);

  });

  //calling the calgary map

   var cmap = L.map('map').setView([51.0437, -114.0919], 13);
   L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
     id: 'mapbox/streets-v11',
     tileSize: 512,
     zoomOffset: -1,
     accessToken: 'pk.eyJ1IjoiZXJpY2hvMTk5OCIsImEiOiJjazdhdDRlMm4wNHF1M2VwcHNudXUxd3czIn0.Z8rFAU1xQUax9N5qrnfoFg'
      }).addTo(cmap);
