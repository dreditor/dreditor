/**
 * Initialize Dreditor.
 */
// Enable detection of installed chrome extension on dreditor.github.io.
if (window.location.href.match('dreditor.github.io')) {
  var isInstalledNode = document.createElement('div');
  isInstalledNode.id = 'dreditor-is-installed';
  document.body.appendChild(isInstalledNode);
}

jQuery(document).ready(function () {
  Drupal.attachBehaviors(this);
});

// Invoke Dreditor update check once.
Drupal.dreditor.updateCheck();
