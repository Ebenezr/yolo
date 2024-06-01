#!/bin/bash

kubectl apply -f mongo-secret.yml
kubectl apply -f mongo.yml
kubectl apply -f mongo-configmap.yml
kubectl apply -f backend-server.yml
kubectl apply -f client.yml
