### Setup

From your challenges directory, run the following:

```sh
$ et get twitter-feed-lifecycle
$ cd twitter-feed-lifecycle
$ npm install
$ npm start
```

Open a new tab, and run:

```sh
$ bundle
$ ruby server.rb
```

Visit <http://localhost:4567/> in your browser. You should see a single tweet
from [@GoatUserStories](https://twitter.com/goatuserstories).

### Instructions

* Using your knowledge of **React Lifecycle Methods**, modify `TwitterFeed.js` to `fetch` the list of tweets located at <http://localhost:4567/api/v1/tweets>.

* Then, update the  `state` in `TwitterFeed.js` to
display this information, instead of the static data passed down by `main.js` which is loaded  from `constants/data.js`.

#### Hints

Keep in mind, fetching data may take time.  You don't want your user to see a blank screen while the server is working on the data.  Best practice is to render a component without data first, then render it again with data.  What Lifecycle method might be able to do that?

It may also help to visit <http://localhost:4567/api/v1/tweets> in your browser. You should see a
JSON response of tweets about the React Framework.  This is the response you should get from your fetch call.
