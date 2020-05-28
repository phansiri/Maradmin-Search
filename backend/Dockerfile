FROM python:3.8-alpine
ENV PYTHONUNBUFFERED 1

RUN apk update && apk add postgresql-dev gcc python3-dev musl-dev libxml2 libxslt-dev xmlsec-dev

COPY requirements.txt /requirements.txt
RUN pip install --upgrade pip && pip install -r /requirements.txt

RUN mkdir /backend
WORKDIR /backend
COPY . /backend

RUN addgroup -S backendUser && adduser -S -G backendUser backendUser
USER backendUser

