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

# Rate limits

None available

</div>

</div>

</div>

</div>

</div>

</div>

<div class="docs-item" id="ca53a664-b3cd-4631-a6f5-af84ddf08c50">

<div class="docs-desc">

<div class="folder-title editable">

## 

<div class="pm-inline-editor shortform-editor pm-inline-editor-undefined">

<div class="base-editor">

<div class="blockview"><textarea readonly="" class="editor-blockview" rows="1">tutors</textarea></div>

</div>

</div>

</div>

<div class="docs-desc-body">

<div class="docs-description">

<div class="description-editor-loader-container" style="height: 200px; width: 500px; display: none;">

<div class="description-editor-loader"><span class="pm-loader pm-loader-xl pm-loader-secondary"></span></div>

</div>

<div class="editable-rendered-markdown editable-rendered-markdown--editable">

<div class="docs-desc-body pm-markdown docs-desc-body">

All the APIs that affect tutors

</div>

</div>

</div>

</div>

</div>

</div>

<div class="docs-item" id="903f6dfd-fa18-4540-a274-aa539e982abb">

<div class="docs-desc">

<div class="request-title push--bottom editable hasAuth"><span class="pm-h2 request-method pm-method-color-get">GET</span>

## <span class="docs-desc-title--request-name">

<div class="pm-inline-editor shortform-editor pm-inline-editor-undefined">

<div class="base-editor">

<div class="blockview"><textarea readonly="" class="editor-blockview" rows="1">Register subject</textarea></div>

</div>

</div>

</span>

<div class="request-auth-comments"><span class="pm-link docs-desc-comments docs-desc-comments--disabled"><span class="docs-desc-comments__label">Comments</span><span class="docs-desc-comments__badge">0</span></span></div>

</div>

<div class="docs-desc-title__url">https://aye-learn.herokuapp.com/api/v1/tutors/:id/:subjectId</div>

<div class="docs-desc-body">

<div class="docs-description">

<div class="description-editor-loader-container" style="height: 200px; width: 500px; display: none;">

<div class="description-editor-loader"><span class="pm-loader pm-loader-xl pm-loader-secondary"></span></div>

</div>

<div class="editable-rendered-markdown editable-rendered-markdown--editable">

<div class="docs-desc-body pm-markdown docs-desc-body">

Add the given subject id to the list of registered subjects on the tutor user profile in the users collection.

</div>

</div>

</div>

<div class="docs-request-params">

#### Path Variables

<table class="pm-table docs-request-table">

<tbody>

<tr class="">

<td class="weight--medium">id</td>

<td></td>

</tr>

<tr class="">

<td class="weight--medium">subjectId</td>

<td></td>

</tr>

</tbody>

</table>

</div>

</div>

</div>

<div class="docs-example">

<div class="docs-example__request">

<div class="docs-example__snippet-header"><span class="docs-example__snippet-type">Example Request</span><span class="docs-example__response-title" title="Register subject">Register subject</span></div>

<div class="pm-snippet-container">

<div class="pm-snippet pm-snippet-wrap">

    curl --location --request GET 'https://aye-learn.herokuapp.com/api/v1/tutors//'

</div>

</div>

</div>

</div>

</div>

<div class="docs-item" id="2641b202-a532-45bc-a8d1-046b000c254f">

<div class="docs-desc">

<div class="folder-title editable">

## 

<div class="pm-inline-editor shortform-editor pm-inline-editor-undefined">

<div class="base-editor">

<div class="blockview"><textarea readonly="" class="editor-blockview" rows="1">subjects</textarea></div>

</div>

</div>

</div>

<div class="docs-desc-body">

<div class="docs-description">

<div class="description-editor-loader-container" style="height: 200px; width: 500px; display: none;">

<div class="description-editor-loader"><span class="pm-loader pm-loader-xl pm-loader-secondary"></span></div>

</div>

<div class="editable-rendered-markdown editable-rendered-markdown--editable">

<div class="docs-desc-body pm-markdown docs-desc-body">

The APIs for modifying, adding, getting and deleting subjects

</div>

</div>

</div>

</div>

</div>

</div>

<div class="docs-item" id="8b0827d6-458e-4421-a188-6dd1e672e4e7">

<div class="docs-desc">

<div class="request-title push--bottom editable hasAuth"><span class="pm-h2 request-method pm-method-color-patch">PATCH</span>

## <span class="docs-desc-title--request-name">

<div class="pm-inline-editor shortform-editor pm-inline-editor-undefined">

<div class="base-editor">

<div class="blockview"><textarea readonly="" class="editor-blockview" rows="1">Update subject</textarea></div>

</div>

</div>

</span>

<div class="request-auth-comments"><span class="pm-link docs-desc-comments docs-desc-comments--disabled"><span class="docs-desc-comments__label">Comments</span><span class="docs-desc-comments__badge">0</span></span></div>

</div>

<div class="docs-desc-title__url">https://aye-learn.herokuapp.com/api/v1/subjects/:id</div>

<div class="docs-desc-body">

<div class="docs-description">

<div class="description-editor-loader-container" style="height: 200px; width: 500px; display: none;">

<div class="description-editor-loader"><span class="pm-loader pm-loader-xl pm-loader-secondary"></span></div>

</div>

<div class="editable-rendered-markdown editable-rendered-markdown--editable">

<div class="docs-desc-body pm-markdown docs-desc-body">

Update a subject given it's ID

## Body

req.body should contain a json object with **name** and **category** fields

</div>

</div>

</div>

<div class="docs-request-params">

#### Path Variables

<table class="pm-table docs-request-table">

<tbody>

<tr class="">

<td class="weight--medium">id</td>

<td>5eb55ace04818f00043ed3fd

<div class="pm-markdown docs-request-table__desc">

id of subject to be deleted

</div>

</td>

</tr>

</tbody>

</table>

</div>

<div class="docs-request-body">

#### Body

<span class="docs-request-body__mode push-half--left">raw (text)</span>

    {
    	"name": "subject 11",
    	"category": "Primary"
    }

</div>

</div>

</div>

<div class="docs-example">

<div class="docs-example__request">

<div class="docs-example__snippet-header"><span class="docs-example__snippet-type">Example Request</span><span class="docs-example__response-title" title="Update subject">Update subject</span></div>

<div class="pm-snippet-container">

<div class="pm-snippet pm-snippet-wrap">

    curl --location --request PATCH 'https://aye-learn.herokuapp.com/api/v1/subjects/' \
    --data-raw '{
    	"name": "subject 11",
    	"category": "Primary"
    }'

</div>

</div>

</div>

<div class="docs-example__response">

<div class="docs-example__snippet-header"><span class="docs-example__snippet-type">Example Response</span><span class="docs-example__response-status" title="200 OK">200 OK</span></div>

<div class="pm-snippet-container">

<div class="pm-snippet pm-snippet-wrap">

    {
      "id": "5eb55ace04818f00043ed3fd",
      "message": "Subject updated successfully"
    }

</div>

</div>

</div>

</div>

</div>

<div class="docs-item" id="c550ee79-c767-403b-9100-012348c36dc0">

<div class="docs-desc">

<div class="request-title push--bottom editable hasAuth"><span class="pm-h2 request-method pm-method-color-post">POST</span>

## <span class="docs-desc-title--request-name">

<div class="pm-inline-editor shortform-editor pm-inline-editor-undefined">

<div class="base-editor">

<div class="blockview"><textarea readonly="" class="editor-blockview" rows="1">Create subject</textarea></div>

</div>

</div>

</span>

<div class="request-auth-comments"><span class="pm-link docs-desc-comments docs-desc-comments--disabled"><span class="docs-desc-comments__label">Comments</span><span class="docs-desc-comments__badge">0</span></span></div>

</div>

<div class="docs-desc-title__url">https://aye-learn.herokuapp.com/api/v1/subjects/new</div>

<div class="docs-desc-body">

<div class="docs-description">

<div class="description-editor-loader-container" style="height: 200px; width: 500px; display: none;">

<div class="description-editor-loader"><span class="pm-loader pm-loader-xl pm-loader-secondary"></span></div>

</div>

<div class="editable-rendered-markdown editable-rendered-markdown--editable">

<div class="docs-desc-body pm-markdown docs-desc-body">

Create a new subject from a JSON object

</div>

</div>

</div>

<div class="docs-request-body">

#### Body

<span class="docs-request-body__mode push-half--left">raw (text)</span>

    {
    	"name": "Chemistry",
    	"category": "SSS"
    }

</div>

</div>

</div>

<div class="docs-example">

<div class="docs-example__request">

<div class="docs-example__snippet-header"><span class="docs-example__snippet-type">Example Request</span><span class="docs-example__response-title" title="Create subject">Create subject</span></div>

<div class="pm-snippet-container">

<div class="pm-snippet pm-snippet-wrap">

    curl --location --request POST 'https://aye-learn.herokuapp.com/api/v1/subjects/new' \
    --data-raw '{
    	"name": "Chemistry",
    	"category": "SSS"
    }'

</div>

</div>

</div>

</div>

</div>

<div class="docs-item" id="903ad8c9-27ce-4d72-aa71-e6f305d405aa">

<div class="docs-desc">

<div class="request-title push--bottom editable hasAuth"><span class="pm-h2 request-method pm-method-color-delete">DELETE</span>

## <span class="docs-desc-title--request-name">

<div class="pm-inline-editor shortform-editor pm-inline-editor-undefined">

<div class="base-editor">

<div class="blockview"><textarea readonly="" class="editor-blockview" rows="1">Delete subject</textarea></div>

</div>

</div>

</span>

<div class="request-auth-comments"><span class="pm-link docs-desc-comments docs-desc-comments--disabled"><span class="docs-desc-comments__label">Comments</span><span class="docs-desc-comments__badge">0</span></span></div>

</div>

<div class="docs-desc-title__url">https://aye-learn.herokuapp.com/api/v1/subjects/:id</div>

<div class="docs-desc-body">

<div class="docs-description">

<div class="description-editor-loader-container" style="height: 200px; width: 500px; display: none;">

<div class="description-editor-loader"><span class="pm-loader pm-loader-xl pm-loader-secondary"></span></div>

</div>

<div class="editable-rendered-markdown editable-rendered-markdown--editable">

<div class="docs-desc-body pm-markdown docs-desc-body">

Delete a subject based on ID. Only available to admins

</div>

</div>

</div>

<div class="docs-request-params">

#### Path Variables

<table class="pm-table docs-request-table">

<tbody>

<tr class="">

<td class="weight--medium">id</td>

<td>5eb55ace04818f00043ed3fd

<div class="pm-markdown docs-request-table__desc">

The id of the subject to be deleted

</div>

</td>

</tr>

</tbody>

</table>

</div>

</div>

</div>

<div class="docs-example">

<div class="docs-example__request">

<div class="docs-example__snippet-header"><span class="docs-example__snippet-type">Example Request</span><span class="docs-example__response-title" title="Delete subject">Delete subject</span></div>

<div class="pm-snippet-container">

<div class="pm-snippet pm-snippet-wrap">

    curl --location --request DELETE 'https://aye-learn.herokuapp.com/api/v1/subjects/5eb55ace04818f00043ed3fd' \
    --data-raw ''

</div>

</div>

</div>

</div>

</div>

<div class="docs-item" id="cd32a4ca-8e57-4282-981b-5fab4a2f07cf">

<div class="docs-desc">

<div class="folder-title editable">

## 

<div class="pm-inline-editor shortform-editor pm-inline-editor-undefined">

<div class="base-editor">

<div class="blockview"><textarea readonly="" class="editor-blockview" rows="1">categories</textarea></div>

</div>

</div>

</div>

<div class="docs-desc-body">

<div class="docs-description">

<div class="description-editor-loader-container" style="height: 200px; width: 500px; display: none;">

<div class="description-editor-loader"><span class="pm-loader pm-loader-xl pm-loader-secondary"></span></div>

</div>

<div class="editable-rendered-markdown editable-rendered-markdown--editable">

<div class="docs-desc-body pm-markdown docs-desc-body">

APIs for CRUD operations on categories. Categories hold IDs of subjects

</div>

</div>

</div>

</div>

</div>

</div>

<div class="docs-item" id="5812c803-0987-47d2-b7c5-d6915ff025da">

<div class="docs-desc">

<div class="request-title push--bottom editable hasAuth"><span class="pm-h2 request-method pm-method-color-post">POST</span>

## <span class="docs-desc-title--request-name">

<div class="pm-inline-editor shortform-editor pm-inline-editor-undefined">

<div class="base-editor">

<div class="blockview"><textarea readonly="" class="editor-blockview" rows="1">Create category</textarea></div>

</div>

</div>

</span>

<div class="request-auth-comments"><span class="pm-link docs-desc-comments docs-desc-comments--disabled"><span class="docs-desc-comments__label">Comments</span><span class="docs-desc-comments__badge">0</span></span></div>

</div>

<div class="docs-desc-title__url">https://aye-learn.herokuapp.com/api/v1/categories/new</div>

<div class="docs-desc-body">

<div class="docs-description">

<div class="description-editor-loader-container" style="height: 200px; width: 500px; display: none;">

<div class="description-editor-loader"><span class="pm-loader pm-loader-xl pm-loader-secondary"></span></div>

</div>

<div class="editable-rendered-markdown editable-rendered-markdown--editable">

<div class="docs-desc-body pm-markdown docs-desc-body">

Create a new category based on name.

## Avialability

Available to admins only

</div>

</div>

</div>

<div class="docs-request-body">

#### Body

<span class="docs-request-body__mode push-half--left">raw (text)</span>

    {
    	"name": "Adult Education"
    }

</div>

</div>

</div>

<div class="docs-example">

<div class="docs-example__request">

<div class="docs-example__snippet-header"><span class="docs-example__snippet-type">Example Request</span><span class="docs-example__response-title" title="Create category">Create category</span></div>

<div class="pm-snippet-container">

<div class="pm-snippet pm-snippet-wrap">

    curl --location --request POST 'https://aye-learn.herokuapp.com/api/v1/categories/new' \
    --data-raw '{
    	"name": "Adult Education"
    }'

</div>

</div>

</div>

</div>

</div>

<div class="docs-item" id="d17791f3-b637-4eea-9cfb-7befbb0222b2">

<div class="docs-desc">

<div class="request-title push--bottom editable hasAuth"><span class="pm-h2 request-method pm-method-color-patch">PATCH</span>

## <span class="docs-desc-title--request-name">

<div class="pm-inline-editor shortform-editor pm-inline-editor-undefined">

<div class="base-editor">

<div class="blockview"><textarea readonly="" class="editor-blockview" rows="1">Update category</textarea></div>

</div>

</div>

</span>

<div class="request-auth-comments"><span class="pm-link docs-desc-comments docs-desc-comments--disabled"><span class="docs-desc-comments__label">Comments</span><span class="docs-desc-comments__badge">0</span></span></div>

</div>

<div class="docs-desc-title__url">https://aye-learn.herokuapp.com/api/v1/categories/:id</div>

<div class="docs-desc-body">

<div class="docs-description">

<div class="description-editor-loader-container" style="height: 200px; width: 500px; display: none;">

<div class="description-editor-loader"><span class="pm-loader pm-loader-xl pm-loader-secondary"></span></div>

</div>

<div class="editable-rendered-markdown editable-rendered-markdown--editable">

<div class="docs-desc-body pm-markdown docs-desc-body">

Update category based on given id

</div>

</div>

</div>

<div class="docs-request-params">

#### Path Variables

<table class="pm-table docs-request-table">

<tbody>

<tr class="">

<td class="weight--medium">id</td>

<td>5eb55ace04818f00043ed3fd

<div class="pm-markdown docs-request-table__desc">

id of category to be updated

</div>

</td>

</tr>

</tbody>

</table>

</div>

<div class="docs-request-body">

#### Body

<span class="docs-request-body__mode push-half--left">raw (text)</span>

    {
    	"name": "Infant education"
    }

</div>

</div>

</div>

<div class="docs-example">

<div class="docs-example__request">

<div class="docs-example__snippet-header"><span class="docs-example__snippet-type">Example Request</span><span class="docs-example__response-title" title="Update category">Update category</span></div>

<div class="pm-snippet-container">

<div class="pm-snippet pm-snippet-wrap">

    curl --location --request PATCH 'https://aye-learn.herokuapp.com/api/v1/categories/5eb55ace04818f00043ed3fd' \
    --data-raw '{
    	"name": "Infant education"
    }'

</div>

</div>

</div>

</div>

</div>

<div class="docs-item" id="c499324e-2c77-456a-88dc-f7326d61d612">

<div class="docs-desc">

<div class="folder-title editable">

## 

<div class="pm-inline-editor shortform-editor pm-inline-editor-undefined">

<div class="base-editor">

<div class="blockview"><textarea readonly="" class="editor-blockview" rows="1">auth</textarea></div>

</div>

</div>

</div>

<div class="docs-desc-body">

<div class="docs-description">

<div class="description-editor-loader-container" style="height: 200px; width: 500px; display: none;">

<div class="description-editor-loader"><span class="pm-loader pm-loader-xl pm-loader-secondary"></span></div>

</div>

<div class="editable-rendered-markdown editable-rendered-markdown--editable">

<div class="docs-desc-body pm-markdown docs-desc-body">

Authentication APIs. Signup and login. They are based on JWT and are public

</div>

</div>

</div>

</div>

</div>

</div>

<div class="docs-item" id="ccc9c922-e1da-4857-8eec-851ebac91781">

<div class="docs-desc">

<div class="folder-title editable">

## 

<div class="pm-inline-editor shortform-editor pm-inline-editor-undefined">

<div class="base-editor">

<div class="blockview"><textarea readonly="" class="editor-blockview" rows="1">lessons</textarea></div>

</div>

</div>

</div>

<div class="docs-desc-body">

<div class="docs-description">

<div class="description-editor-loader-container" style="height: 200px; width: 500px; display: none;">

<div class="description-editor-loader"><span class="pm-loader pm-loader-xl pm-loader-secondary"></span></div>

</div>

<div class="editable-rendered-markdown editable-rendered-markdown--editable">

<div class="docs-desc-body pm-markdown docs-desc-body">

APIs for CRUD operations on lessons

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

