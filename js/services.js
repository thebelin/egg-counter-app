angular.module('starter.services', [])
.factory('Counters', ['$localstorage', function ($localStorage) {
  /**
   * The key to store data in for localStorage
   * @type {String}
   */
  var lsKey = 'counters',

  /**
   * The counters tracked by this factory
   * @return object
   */
    counters = $localStorage.getObject(lsKey);

    // If the counters are blank, add the 'none item'
    if (!counters.hasOwnProperty('none')) {
      counters.none = 0;
    }

    /**
     * Get all the counters which are in the specified category
     * 
     * @param string cat the category to look up
     * @return object    an object with timestamps indicating the counts
     */
    getCountersByCategory = function (cat) {
      var retCounters;
      Object.keys(counters).map(function (counter) {
        if (counter === cat) {
          retCounters = counters[counter];
        }
      });
      return retCounters;
    };

  return {
    // add a count to a category
    add: function (category, amount) {
      console.log('add to counter', category, amount);
      // If no category was specified, add to none
      category = category || 'none';

      // set the amount to 1 if not set
      amount = isNaN(amount) ? 1 : parseInt(amount, 10);

      // If the counter exists, add to it
      if (counters.hasOwnProperty(category)) {
        counters[category] += amount;
      } else {
        // otherwise, create it
        counters[category] = amount;
      }

      // Save the counters in localStorage
      $localStorage.setObject(lsKey, counters);
    },

    // get a counter by category
    get: function (category) {
      // Is the category set in the options?
      if (counters.hasOwnProperty(category)) {
        return getCountersByCategory(category);
      }
    },

    // List all the counters
    list: function () {
      return counters;
    }
  };
}])

.factory('$localstorage', ['$window', function($window) {
  return {
    set: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key) {
      return JSON.parse($window.localStorage[key] || '{}');
    }
  };
}])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
