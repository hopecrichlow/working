// Import our core files
import angular from 'angular';

// Make sure shim jQuery first
import $ from 'jquery';
import 'bootstrap-sass';

// Import Sub Modules
import './app-core/index';

angular
  .module('app', ['app.core'])
;