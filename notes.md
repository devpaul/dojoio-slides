# Continuous Delivery in Open Source

## Intro

* Paul Shannon
	* Engineer at SitePen

## Materials

Dojo.io
https://github.com/dojo/dojo.io
https://travis-ci.org/dojo/dojo.io

https://github.com/dojo/grunt-dojo2-extras


https://github.com/dojo/web-editor

## Presentation

## Intro

Dojo is undergoing a ground-up rewrite [use dojo 2 background and dragon]

* First significant rewrite in a decade
* complete enterprise framework based on reactive programming principles
* using TypeScript to incorporate the latest standards

### The Problem

The original dojotoolkit.org site has some issues

* Not frequently deployed
* Difficult to update
* separate tools to update various parts of the site
* No automated testing

### Goal

* A site that was simple to deploy
* Could be edited collaboratively by the community

### The Site:

* Blog
* Api Docs
* Tutorials

### Tools

* GitHub
	* Source control
* Travis CI
	* Continuous integration
* Hexo
	* build static site from templates
* Typedoc
	* builds API documentation from source & comments
* Intern
	* automated testing framework
* Cloudflare
	* CDN

### Build Pipeline

#### Dojo.io site pipeline

Runs on every commit to master

1. PR submitted to GitHub
1. triggers Travis build
1. Syncs the site branch from GitHub
1. Travis runs lint, build, and unit tests on examples
1. Travis builds the static site
1. Travis runs functional tests against the site
1. If on master, Travis publishes

#### Building API Docs

Dojo 2 is comprised of a dozen projects.
We needed a way to build API docs when projects release a new version

#### API Docs build pipeline

API Docs are currently built by the dojo.io site using a nightly cron
It performs all of the site pipeline, but also builds API docs

For each package:

1. Gets a list of releases from GitHub
1. filter based on configuration
1. looks for missing builds
1. builds missing apis
1. clones package from GitHub
1. checkout release branch's hash
1. builds API docs
1. repeat!

In the future we plan to create an explicit trigger when a release is tagged. Maybe use GitHub webhook?
 
### Issues

#### Travis is not a local development environment

Your local development environment is many times more configured than Travis

* Git was an issue. Didn't have credentials available or common configuration (user.name)

Solution, tested in a Docker container

#### Credential Management

GitHub needs a deploy key (public SSH key)
Travis needs the private SSH key

Solution, encrypt the private SSH key and check it into GitHub
Provide Travis w/ means to decrypt the key using environment variables

#### GitHub API Authorization

GitHub limits anonymous ips 60 API calls an hour.
Travis reuses machines and IPs
Resulted in intermittent failures when making calls to GitHub's APIs

Solution, create a GitHub token and register it in an environment variable on Travis

#### Setting up Automation sucks

We created a script to automate setting up automation!

## Outro

* Get Involved
	* dojo.io repo
	* grunt-dojo2-extras
	* intern 4
	* dojo 2
