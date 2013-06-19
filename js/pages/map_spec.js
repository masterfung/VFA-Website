if ( $(".contact").length ) {
    $(function() {
        office_locations = [{
              headquarters: "Providence",
              city: "Providence, RI 02903",
              address: "127 Dorrance St. 5th Fl.",
              phone: "401.400.1970"
            }, {
              headquarters: "New York",
              city: "New York, NY 10014",
              address: "175 Varick Street",
              phone: "212.203.5526"
            } 
          ];

        var map = L.mapbox.map('map', 'mojotech.map-va7z8jh4', {zoomControl: false})
                    .setView([41.82220, -71.40984], 7);

        // Build custom mojo icon
        mojoIcon = L.icon({
                    iconUrl: "http://www.mojotech.com/css/images/mojo_pin.png",
                    iconSize:     [30, 50],
                    iconAnchor:   [20, 40],
                    popupAnchor:  [0, -55]});

        // Create Providence Marker
        pvd       = [41.82220, -71.40984];

        pvdMarker = L.marker(pvd, { icon: mojoIcon });

        pvdMarker.features = office_locations[0];

        var pvdPopupContent =  '<div class=\"mojoMap\">' +
                            '<h2 class=\"altis_extrabold\">' + pvdMarker.features.headquarters + '</h2>' +
                            '<p>' + pvdMarker.features.address + '</p>' +
                            '<p>' + pvdMarker.features.city + '</p>' +
                            '<p>' + pvdMarker.features.phone + '</p>';

        pvdMarker.bindPopup(pvdPopupContent, {
                closeButton: false,
                minWidth: 160,
                keepInView: true});

        pvdMarker.addTo(map);

        // Create New York Marker
        newYorkCoord  = [40.727517, -74.005719];
        newYorkMarker = L.marker(newYorkCoord, { icon: mojoIcon });

        newYorkMarker.features = office_locations[1];

        var nyPopupContent =  '<div class=\"mojoMap\">' +
                            '<h2 class=\"altis_extrabold\">' + newYorkMarker.features.headquarters + '</h2>' +
                            '<p>' + newYorkMarker.features.address + '</p>' +
                            '<p>' + newYorkMarker.features.city + '</p>' +
                            '<p>' + newYorkMarker.features.phone + '</p>' +
                            '</div>';

        newYorkMarker.bindPopup(nyPopupContent,{
                    closeButton: false,
                    minWidth: 160
                });

        newYorkMarker.addTo(map);

        // disable drag and zoom handlers
        map.dragging.disable();
        map.touchZoom.disable();
        map.doubleClickZoom.disable();
        map.scrollWheelZoom.disable();

        $("#map .leaflet-control-attribution.leaflet-control").hide()
    });
};
