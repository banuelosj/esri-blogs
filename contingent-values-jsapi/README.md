# Contingent Attribute Values in the ArcGIS API for JavaScript

## Blog
[Contingent Attribute Values in the ArcGIS API for JavaScript Esri blog](https://www.esri.com/arcgis-blog/products/product/uncategorized/contingent-attribute-values-in-the-arcgis-api-for-javascript/)

## Applications

### FeatureForm
This application showcases the native support for contingent values in the <ins>[FeatureForm widget]( https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureForm.html)</ins>. This applications uses the `calcite-panel` from the <ins>[Calcite Design System]( https://developers.arcgis.com/calcite-design-system/)</ins> for the widget container. The app also displays a `calcite-button` `Submit` button that is only enabled when there are no validation errors returned from <ins>[`FeatureForm.viewModel.validateContingencyConstraints()`](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureForm-FeatureFormViewModel.html#validateContingencyConstraints)</ins>.
This application demonstrates the user interface (UI) enhancements added in `version 4.23` of the JSAPI to support contingent values.

<img src="https://user-images.githubusercontent.com/36280386/163868490-6ecbc2b2-5f23-43f3-b269-1fc57cb4779c.png" height="400" />


<ins>[Live App](https://banuelosj.github.io/esri-blogs/contingent-values-jsapi/feature-form/index.html)</ins>

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
<img src="https://user-images.githubusercontent.com/36280386/163868696-e79937cc-eec6-4879-a394-fb38028c45a8.png" height="400" />

<ins>[Live App](https://banuelosj.github.io/esri-blogs/contingent-values-jsapi/editor/index.html)</ins>
