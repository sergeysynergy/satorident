# satorident_nodejs

## Get NodeJS LTS release
FROM node:boron


## PRE CONFIGURATION, optimization for docker-compose building
RUN mkdir /workdir


## INSTALL SECTION
RUN apt-get -qq update && apt-get -qqy upgrade
RUN npm install -g create-react-app

WORKDIR /opt
COPY /workdir/package.json /opt/.
RUN npm install


## SUFFIX CONFIGURATION
RUN echo "Europe/Moscow" > /etc/timezone
WORKDIR /workdir
