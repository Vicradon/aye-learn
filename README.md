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
