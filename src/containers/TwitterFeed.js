import React, { Component } from 'react';
import Tweet from '../components/Tweet'


class TwitterFeed extends Component {
  constructor(props) {
    debugger;
    super(props)
    this.state = {
      tweets: props.tweets
    }
    debugger;
  }

//componentWillMount will be called before render which is where we are fetching the data
//and setting the state to new tweet data.

  componentWillMount() {
    let twitterData = "";
    fetch('http://localhost:4567/api/v1/tweets')
      .then(response => {
        debugger;
        // console.log('response', response);
        // console.log('response.status:', response.status);
        // console.log('response.statusText:', response.statusText);
        // console.log('response.ok:', response.ok);
        return response.text();
      })
      .then(responseBody => {
        console.log(responseBody);
        twitterData = JSON.parse(responseBody);
        debugger;
        console.log(twitterData)
        this.setState({tweets: twitterData});
      });
    }


  render() {

    let tweets = this.state.tweets.map(tweet => {

      return <Tweet key={tweet.id_str} tweet={tweet} />
    })

    return (
      <div className="row columns small-12 medium-9 large-6">
        <div className="twitter-feed">
          {tweets}
        </div>
      </div>
    );
  }
}

export default TwitterFeed;
