'use strict';

/**
 * @ngdoc service
 * @name cornetrecruitmentgithubioApp.jobService
 * @description
 * # jobService
 * Service in the cornetrecruitmentgithubioApp.
 */
angular.module('cornetrecruitmentgithubioApp')
  .service('jobService', function () {
    var jobs = [
      {
        _id: 0,
        title: 'Account Manager',
        company: 'Le Blanc Advies',
        link: 'http://www.cornetrecruitment.nl/blog/vacature/account-manager-le-blanc-advies',
        description: 'Voor verdere uitbreiding en relatiebeheer van de accounts in West-Nederland zoekt Le Blanc een ervaren Account Manager (Sales Manager).',
        date: '2016-01-20',
        keywords: 'account manager, commercieel, IT, vacature',
        image: 'images/logo-leblancadvies.png',
        archived: false,
        featured: true
      },
      {
        _id: 1,
        title: 'Business Analyst',
        company: 'Le Blanc Advies',
        link: 'http://www.cornetrecruitment.nl/blog/vacature/business-analyst-le-blanc-advies/',
        description: 'Ben je als Business Analyst gepassioneerd over je vak en heb je een permanente nieuwsgierigheid? Wil je steeds beter worden en je groei de ruimte geven? Le Blanc Advies gaat dan graag met je in gesprek.',
        date: '2015-10-18',
        keywords: 'business analyst, vacature',
        image: 'images/logo-leblancadvies.png',
        archived: false,
        featured: false
      },
      {
        _id: 2,
        title: 'Java Developer',
        company: 'Rijksoverheid',
        link: 'http://www.cornetrecruitment.nl/blog/vacature/java-developer/',
        description: 'Voor Binnenlandse Zaken zoek ik voor de regio Den Haag een Java developer/ Tooling Specialist.',
        date: '2014-11-14',
        keywords: 'vacature',
        image: 'images/logo-rijksoverheid.png',
        archived: true,
        featured: true
      }
    ];

    this.getJobs = function(){
      return jobs;
    };

    this.getJob = function (index) {
      return jobs[index];
    };
  });
