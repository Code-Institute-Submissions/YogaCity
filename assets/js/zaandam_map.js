var map, popup, Popup;

function initMap() {
  map_zaandam = new google.maps.Map(document.getElementById('map_zaandam'), {
    center: {lat: 52.4353, lng: 4.8282},
    zoom: 15,
  });

  Popup = createPopupClass();
  popup = new Popup(
      new google.maps.LatLng(52.4353, 4.8282),
      document.getElementById('content_zaandam'));
  popup.setMap(map_zaandam);
}

function createPopupClass() {
 
  function Popup(position, content_zaandam) {
    this.position = position;

    content_zaandam.classList.add('popup-bubble');

    var bubbleAnchor = document.createElement('div');
    bubbleAnchor.classList.add('popup-bubble-anchor');
    bubbleAnchor.appendChild(content_zaandam);

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