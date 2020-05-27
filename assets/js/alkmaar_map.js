var map, popup, Popup;

function initMap() {
  map_alkmaar = new google.maps.Map(document.getElementById('map_alkmaar'), {
    center: {lat: 52.6302, lng: 4.7540},
    zoom: 15,
  });

  Popup = createPopupClass();
  popup = new Popup(
      new google.maps.LatLng(52.6302, 4.7540),
      document.getElementById('content_alkmaar'));
  popup.setMap(map_alkmaar);
}

function createPopupClass() {
  
  function Popup(position, content_alkmaar) {
    this.position = position;

    content_alkmaar.classList.add('popup-bubble');

    var bubbleAnchor = document.createElement('div');
    bubbleAnchor.classList.add('popup-bubble-anchor');
    bubbleAnchor.appendChild(content_alkmaar);

    this.containerDiv = document.createElement('div');
    this.containerDiv.classList.add('popup-container');
    this.containerDiv.appendChild(bubbleAnchor);

    google.maps.OverlayView.preventMapHitsAndGesturesFrom(this.containerDiv);
  }

  Popup.prototype = Object.create(google.maps.OverlayView.prototype);

  Popup.prototype.onAdd = function() {
    this.getPanes().floatPane.appendChild(this.containerDiv);
  };

  Popup.prototype.onRemove = function() {
    if (this.containerDiv.parentElement) {
      this.containerDiv.parentElement.removeChild(this.containerDiv);
    }
  };

  Popup.prototype.draw = function() {
    var divPosition = this.getProjection().fromLatLngToDivPixel(this.position);

    var display =
        Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000 ?
        'block' :
        'none';

    if (display === 'block') {
      this.containerDiv.style.left = divPosition.x + 'px';
      this.containerDiv.style.top = divPosition.y + 'px';
    }
    if (this.containerDiv.style.display !== display) {
      this.containerDiv.style.display = display;
    }
  };

  return Popup;
}