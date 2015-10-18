# Nightwatch Helpers
A series of helper functions for writing Nightwatch tests for Meteor apps.

## Setup

1. Install starrynight:

```sh
$ npm install -g starrynight
```

2. Initialise project for starry night.  From the root directory of the app:

```sh
$ starrynight generate-autoconfig
$ starrynight scaffold --framework nightwatch
```

3. Clone this repo into the `packages` subdirectory from the project root.  You might need to create a `packages` directory.

```sh
user@host:~/YOUR_PROJECT/packages$ git clone https://github.com/tableflip/meteor-nightwatch-helpers
```

4. Add the package to your project:

```sh
$ meteor add tableflip:nightwatch-helpers
```

5. Add the following line to the `"custom_commands_path"` key in the `.meteor/nightwatch.json` file that will have been created:

```json
"packages/tests-helpers/nightwatch"
```

## Usage

### Logging in

```js
browser.login()
```

This will log the test client in with a user ID of *AAAAAAAAAAAAAAAAA* and name *Test User*.  Note that the core *accounts-base* package must be present in the app for this to work (*accounts-base* is included with all the *accounts-XXX* packages).

### fixtures

```js
browser.clearDB()
```

This method will remove all the contents of the collections which appear in *fixtures* files (see below).

```js
browser.populateDB()
```

This method will insert all of the documents listed in any file in the `tests-helpers/fixtures` directory.  Files must be valid JSON and must contain an object with two keys: `name`, which is the collection name (in Meteor, not in the MongoDB), and `docs`, which is an array of documents to insert.  An example is provided and should be either amended or removed before using this method.
