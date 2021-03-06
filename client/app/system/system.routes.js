'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider .state('system', {
    abstract: true,
    url: '/system',
    authenticate: true,
    views: {
      'navbar': {
        template: '<navbar></navbar>'
      },
      'sidebar': {
        template: '<sidebar></sidebar>'
      }
    }
  });

  $stateProvider.state('system.sysdashboard', {
    url: '/sysdashboard',
    authenticate: true,
    views: {
      'content@': {
        template: require('./sysdashboard/sysdashboard.html'),
        controller: 'SysdashboardController',
        controllerAs: 'vm'
      }
    }
  });

  $stateProvider.state('system.sysadmin', {
      url: '/sysadmin',
      authenticate: true,
      views: {
        'content@': {
          template: require('./sysadmin/sysadmin.html'),
          controller: 'SysadminController',
          controllerAs: 'vm'
        }
      }
    });
}
