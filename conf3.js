exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  suites: {
    search: ['tests/e2e/contact_search/**/*as.js']
	},
	  jasmineNodeOpts: {
    showColors: true, 
  }
  };