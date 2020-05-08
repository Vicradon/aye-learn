# aye-learn
An API of an online-tutoring app

## Admin Login Details
ADMINEMAIL = admin@email.com

ADMINPASSWORD = adminpassword

## API root
https://aye-learn.herokuapp.com

## API Docs

# Introduction

A set of APIs for an online tutoring app. The auth routes are public, other routes are private. The APIs work with a MongoDB database using mongoose as an ODM library.

# Overview

The APIs use AccessControl for Role Based Authentication Control (RBAC)

# Authentication

The APIs use JWT for Bearer Token authentication

# Error Codes

*   401 - Unauthorized
*   201 - Created
*   200 - Get OK

The full version of the docs is hosted [here](https://web.postman.co/collections/9654495-a8cfd487-21ad-40d7-931a-597de683c89d?version=latest&workspace=f3740251-2b57-4b8b-87a6-e0f675b3a77b) on postman. Postman doesn't give the option for getting the docs as a markdown file.
