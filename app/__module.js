angular.module('portainer', [
  'ui.bootstrap',
  'ui.router',
  'isteven-multi-select',
  'ngCookies',
  'ngSanitize',
  'ngFileUpload',
  'angularUtils.directives.dirPagination',
  'LocalStorageModule',
  'angular-jwt',
  'angular-google-analytics',
  'angular-loading-bar',
  'portainer.templates',
  'portainer.filters',
  'portainer.rest',
  'portainer.helpers',
  'portainer.services',
  'auth',
  'container',
  'containerLogs',
  'containerStats',
  'containerInspect',
  'containers',
  'createContainer',
  'createRegistry',
  'engine',
  'endpoint',
  'endpointAccess',
  'endpoints',
  'events',
  'initAdmin',
  'initEndpoint',
  'main',
  'registries',
  'registry',
  'registryAccess',
  'settings',
  'settingsAuthentication',
  'sidebar',
  'task',
  'team',
  'teams',
  'user',
  'users',
  'userSettings',
  'rzModule']);
