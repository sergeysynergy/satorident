FROM python:3.5-jessie


## PRE CONFIGURATION, optimization for docker-compose building
RUN mkdir /data
RUN mkdir /workdir


## INSTALL SECTION
# Updating image
RUN apt-get -qq update

# Installing needed applications using package manager
RUN apt-get install -qqy \
  vim \
  wget \
  bash-completion

# Installing modules needed by Python
ADD requirements.txt /tmp/
RUN pip install --upgrade pip
RUN pip install -r /tmp/requirements.txt


## SUFFIX CONFIGURATION
RUN echo "Europe/Moscow" > /etc/timezone
WORKDIR /workdir
