require([ 
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/FeatureLayer",
  "esri/widgets/FeatureForm",
  "esri/widgets/Editor"
], (Map, MapView, FeatureLayer, FeatureForm, Editor) => {
  let editFeature, highlight, featureLayerView;

  const featureLayer = new FeatureLayer({
    url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/GenusDataContingentValues/FeatureServer/0",
    outFields: ['*'],
    id: "animaltaxLayer"
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

  // FeatureForm displays attributes of fields specified in the formTemplate's
  // field elements.
  const featureForm = new FeatureForm({
    container: "formDiv",
    layer: featureLayer,
    formTemplate: {
      elements: [
        {
          type: "field",
          fieldName: "ORDER_",
          label: "Order"
        },
        {
          type: "field",
          fieldName: "FAMILY",
          label: "Family"
        },
        {
          type: "field",
          fieldName: "GENUS",
          label: "Genus"
        },
        {
          type: "field",
          fieldName: "GENUS_COMMON",
          label: "Common name"
        },
        {
          type: "field",
          fieldName: "DESCRIPTION",
          label: "Description"
        }
      ]
    }
  });

  view.when(() => {
    view.on("click", (evt) => {
      // clear previous selection if any
      unselectFeature();

      view.hitTest(evt).then((response) => {
        let hitTestGraphic = response.results[0].graphic ? response.results[0].graphic : null;
        // if user clicks on a feature, select it
        if (!!hitTestGraphic && hitTestGraphic.layer.id === featureLayer.id) {
          selectFeature(hitTestGraphic.attributes[featureLayer.objectIdField]);
        }
      });
    });

    // setup layerView for highlighting
    view.whenLayerView(featureLayer).then((layerView) => {
      featureLayerView = layerView;
    });

    // check validation
    featureForm.on("value-change", () => {
      const validations = featureForm.viewModel.validateContingencyConstraints(featureForm.getValues());
      submitBtn.disabled = validations.length > 0;
    });
  });

  // highlight the clicked feature and display the feature form
  // with the feature's attributes
  function selectFeature(objectId) {
    featureLayer.queryFeatures({
      objectIds: [objectId],
      outFields: ["*"],
      returnGeometry: true
    })
      .then((results) => {
        if (results.features.length > 0) {
          editFeature = results.features[0]; // graphic

          // display the attributes of the selected feature in the form
          featureForm.feature = editFeature;

          // highlight the feature on the view
          highlight = featureLayerView.highlight(editFeature);
        }
      });
  }

  function unselectFeature() {
    if (highlight) {
      highlight.remove();
    }
  }

  // UI
  view.ui.add("panel", "top-right");

  // verify on btn click
  const submitBtn = document.getElementById('submitBtn');
  submitBtn.onclick = () => { submitForm() };

  function submitForm() {
    editFeature.attributes = featureForm.getValues();
    featureLayer.applyEdits({ updateFeatures: [editFeature] });
    submitBtn.disabled = true;
  }

});