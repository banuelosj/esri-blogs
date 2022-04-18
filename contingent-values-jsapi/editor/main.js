require([ 
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/FeatureLayer",
  "esri/widgets/Editor"
], (Map, MapView, FeatureLayer, Editor) => {
  const featureLayer = new FeatureLayer({
    url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/GenusDataContingentValues/FeatureServer/0",
    outFields: ['*'],
    popupTemplate: {
      title: "{GENUS_COMMON}",
      content: [{
        type: "fields",
        fieldInfos: [
          {
            fieldName: "ORDER_",
            label: "Order"
          },
          {
            fieldName: "FAMILY",
            label: "Family"
          },
          {
            fieldName: "GENUS",
            label: "Genus"
          },
          {
            fieldName: "GENUS_COMMON",
            label: "Common name"
          }
        ]
      }]
    }
  });

  const map = new Map({
    basemap: "gray-vector",
    layers: [featureLayer]
  });

  const view = new MapView({
    container: "viewDiv",
    map: map,
    center: [5, 5],
    zoom: 2
  });

  const editor = new Editor({
    view: view
  });

  view.ui.add(editor, "top-right");

});