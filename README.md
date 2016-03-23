# Logging your Steam messages.
[![Dependency Status](https://david-dm.org/nikitavondel/steam-logger.svg)](https://david-dm.org/nikitavondel/steam-logger)
### version

1.0.0

[steam-logger] is a [Node.js] application which allows for efficient and easy logging of your incoming and outgoing [Steam] messages.

  - No configuration required.
  - No experience in programming is required.
  - The logs are organised in separate folders with separate files.
  - [MIT-license]
  
  
### Installation

In order to get this application to work you need to either make use of the git command or just download this repository as a ZIP file. Once that is done, make sure you have Node.js installed
on your machine and then browse to the folder where the file 'index.js' is located. Then run the following commands:

```sh
$ npm install
$ node index.js
```

It will then prompt you with your Steam username, Steam password and ocasionally your current Steam guard code.


### Explanation

The first time the app runs it will automatically create a folder called 'data' for you wherein we are going to store all our logs. Make sure the application has reading and writing rights.
Each time a new user starts messaging you the application will create a folder (inside the data folder) named by their steamid64, then it will create a file called main.log and info.json.
The info.json file stores the timestamp of the most recent message which is logged; do not edit this because this allows the application to decide which message is old and new.
From then on, every 30 seconds it will check if you have received messages, so the logs are updated twice every minute.


[steam-logger]: <https://github.com/nikitavondel/steam-logger>
[Node.js]: <https://nodejs.org>
[Steam]: <https://steamcommunity.com/>
[MIT-license]: <https://opensource.org/licenses/MIT>
