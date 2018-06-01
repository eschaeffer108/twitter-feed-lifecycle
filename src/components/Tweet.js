import React from 'react';

let monthAndDayString = (ms) => {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  let milliseconds = parseInt(ms)
  let date = new Date(milliseconds)
  return `${months[date.getMonth()]} ${date.getDate()}`
}

const Tweet = (props) => {
  let media;
  if (Object.keys(props.tweet.entities).length > 0){
    media = <img className="tweet-image" src={props.tweet.entities.media[0].media_url} />
  }

  let retweeted = "social-media-button";
  if (props.tweet.retweeted){
    retweeted += " retweeted";
  }

  let favorited = "social-media-button";
  if (props.tweet.favorited){
    favorited += " favorited"
  }

  return (
    <div className="tweet">
      <div className="row">
        <div className="columns small-2 medium-3 large-2">
          <img className="profile-pic" src={props.tweet.user.profile_image_url} />
        </div>
        <div className="columns small-10 medium-9 large-10">
          <div className="row">
            <div className="columns small-12">
              <span className="name">{props.tweet.user.name}</span>
              <div className="user-info">
                <span className="username">@{props.tweet.user.screen_name}</span>
                <span className="date">{monthAndDayString(props.tweet.timestamp_ms)}</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="columns small-12 tweet-content">
              <p>{props.tweet.text}</p>
              {media}
            </div>
          </div>
          <div className="row">
            <div className="columns small-12 social-media-buttons">
              <span className="social-media-button active">
                <i className="fa fa-reply"></i>
              </span>
              <span className={retweeted}>
                <i className="fa fa-retweet active"></i>
                <p>{props.tweet.retweetCount}</p>
              </span>
              <span className={favorited}>
                <i className="fa fa-heart active"></i>
                <p>{props.tweet.favoriteCount}</p>
              </span>
              <span className="social-media-button active">
                <i className="fa fa-ellipsis-h"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Tweet;
