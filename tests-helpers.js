if (Meteor.isClient) {
  window.testLogin = function (cb) {
    cb = cb || function () {}
    Meteor.call('tests/createAndLoginTestUser', function (err, res) {
      if (err || !res) throw new Meteor.Error('cant-create-testuser')
      Meteor.connection.setUserId('AAAAAAAAAAAAAAAAA')
      cb()
    })
  }
}

if (Meteor.isServer) {
  Meteor.methods({
    'tests/createAndLoginTestUser': function () {
      Meteor.users.upsert({ _id: 'AAAAAAAAAAAAAAAAA' }, {
        _id: 'AAAAAAAAAAAAAAAAA',
        profile: { name: 'Test User'},
        services: { twitter: { profile_image_url_https: 'https://placehold.it/48x48' } }
      })
      this.setUserId('AAAAAAAAAAAAAAAAA')
      return 'AAAAAAAAAAAAAAAAA'
    },

    'tests/clearDB': function (collections) {
      _.each(collections, function (collection) {
        if (!global[collection.name]) throw new Meteor.Error('No collection named ' + collection.name)
        global[collection.name].remove({})
      })
      return true
    },

    'tests/populateDB': function (collections) {
      _.each(collections, function (collection) {
        if (!global[collection.name]) throw new Meteor.Error('No collection named ' + collection.name)
        _.each(collection.docs, function (doc) {
          global[collection.name].insert(doc)
        })
      })
      return true
    }
  })
}
