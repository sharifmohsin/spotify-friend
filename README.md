# spotify-friend-stalker 

> Get an email as soon as your friend listens to a new track.

This programm was written using the [spotify-buddylist](https://github.com/valeriangalliat/spotify-buddylist) library. Thank you so much for this.

## About
The application fetches the activity of a choosen Spotify friend and 
updates you live via email about their activity.
At this point, it is not possible to track multiple users with one instance. 
But you could simply run multiple instances with different usernames.

You can run the app locally following belows instructions. If you want to be 
constantly informed, I suggest you upload it to Heroku. More on that in the last chapter.

## Setup
Wether you run it locally or via Heroku, you need to fill in the required information in the `stalk.js` file.

Paste the username of the desired friend you want to track in the 'desired.user.to.track' field.
Make sure to use the same name which is displayed in the "Friends Activity" tab. The user ID  will not work.
Fill in the email information. You need to figure out the smtp host and port of you email provider.
It is possible to have the same sender and receiver address. 
I tried it with my gmail address and it worked fine locally but the mails got blocked via Heroku.
So if you want to run it via Heroku I suggest you use a different mail provider.
Yu also need to fill in your sp_dc cookie. Here is how you get it:


### Fetching the cookie

You need to grab your `sp_dc` cookie from Spotify. This is a
requirement because Spotify doesn't allow third-party apps to get the
friend activity feed, so this cookie allows us to pretend that we're the
Spotify app itself to get access to that data.

For that, login on the [web player] and open your browser's web
developer tools. It's usually in "settings", "more tools", "developer
tools". In that pane, go in "application", "storage", "cookies",
`https://open.spotify.com` (or something close to that depending on your
browser).

You'll find a cookie named `sp_dc`. Copy its value and past it in the `stalk.js` file.



## Installing locally

Because this library is built with [Node.js](https://nodejs.org/),
you'll need to install it first.

Then, [download the archive for this repository](https://github.com/valeriangalliat/spotify-buddylist/archive/refs/heads/master.zip)
and extract it.

Open a terminal, go in the spotify-buddylist directory that you just
extracted, and run:

```sh
npm install
```

This will install the extra dependencies needed for the program to run.


### Running the example

Now, you can run the following command to execute the script:

```sh
node stalker.js
```

## Deploy via Heroku
Heroku let's you deploy a Node.js application for free.
It doesn't make sense for me to explain how this works, since it is described pretty detailed [here](https://devcenter.heroku.com/articles/deploying-nodejs).
What you need to know is that this is not a web application with a port. So after you deployed it, you will need to start it like this:

```sh
heroku ps:scale worker=1
```

Just type that in your console and the programm should be running on the Heroku dyno until you take it down.

