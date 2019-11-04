### This application will serve a chat bot ####
Features:
1. expose chatbot api to receive speech text
2. call LUIS api to identify intent
3. fetch response template based on intent
4. Call speedy to get data
5 substitute data into response template and return to calling function

Install mongo db

mkdir speech
cd speech
sudo npm init
sudo npm i express mongoose
sudo npm i --save-dev dotenv nodemon
sudo npm install request --save

npm run devStart


Installation of mongoldb:
====================
mkdir mongodb
cd mongodb/
brew tap mongodb/brew
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew tap mongodb/brew
brew install mongodb-community@4.2
mongod --config /usr/local/etc/mongod.conf --fork
ps -ef | grep mongod

===========================================
Run the service
===========================================
mongod --config /usr/local/etc/mongod.conf --fork
npm run devStart
===========================================
