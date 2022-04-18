# Contingent Attribute Values in the ArcGIS API for JavaScript

## Blog
[image]

## Applications

### FeatureForm
This application showcases the native support for contingent values in the <ins>[FeatureForm widget]( https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureForm.html)</ins>. This applications uses the `calcite-panel` from the <ins>[Calcite Design System]( https://developers.arcgis.com/calcite-design-system/)</ins> for the widget container. The app also displays a `calcite-button` `Submit` button that is only enabled when there are no validation errors returned from <ins>[`FeatureForm.viewModel.validateContingencyConstraints()`](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureForm-FeatureFormViewModel.html#validateContingencyConstraints).
This application demonstrates the user interface (UI) enhancements added in `version 4.23` of the JSAPI to support contingent values.

### Editor
This application demonstrates the native editing support for contingent values in the Editor widget. Unlike the FeatureForm demo app, this application does not require any custom code. The only code necessary here is to load the Editor widget onto the application.
```js
// initialize the Editor widget
const editor = new Editor({
  view: view
});

// add the widget to the view
view.ui.add(editor, "top-right");
```
