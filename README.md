Belatrix Connect Web Admin
================================

*About the web application*

This web application has the mission to represent the idea to connect all the co-workers inside Belatrix family, to valuate and recognize the work and the team-spirit, using a gamification´s mechanics to create  and interact through motivation  in a better coexistence.

*About the project architecture*

The main purpose of this architecture is minify, simplify resources and methods to develop web applications, in order to create an alternative agile and a simple way to build a project. In this case the philosophy about this repository is avoid sofistication and the preconception of other techniques that using reinvented ideas, so this is important to reach a new challenge of do a simple and functional web application oriented and based totally in user experience.

This web application has been designed using the nex tools:

- [Semantic UI for ReactJS] (http://react.semantic-ui.com/introduction)
- [ReactJS] (https://facebook.github.io/react/)
- [Webpack] (https://webpack.github.io/)
- [Yarn] (https://yarnpkg.com/lang/en/)
- [NodeJS] (https://nodejs.org/)

**1. First you need to install following**

(if you have previous knowledge about nodeJS skip to 2nd step)

**Installing Node.js**


*Windows*
> You can download the .exe installer [here] (https://nodejs.org/en/download/) and follow the wizard to installation


*Linux - Ubuntu/Debian*

1.1. Open your terminal and execute the next commands
```bash
sudo apt-get update && sudo apt-get install git-core curl build-essential openssl libssl-dev
```
1.2. Then cloning the nodeJS repository in a desired location
```bash
git clone https://github.com/nodejs/node.git node && cd node
```
1.3. If you wish choose a version, but if you want to work with the latest skip this step
```bash
git checkout v4.4.3
```
1.4- Creating the makefile
```bash
./configure
```
1.5. Preparing the installation
```bash
make
```
1.6. Installing

```bash
sudo make install
```

2.Installing Yarn

Choose the instructions according to your OS in the next URL
[Instructions](https://yarnpkg.com/en/docs/install)

3.Excute the yarn command to install dependencies

```bash
yarn Install
```
4.Run the yarn comand to open the project 

```bash
yarn run dev
```
HJello



