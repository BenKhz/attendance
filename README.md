## A Ten Dance!
-----
* React.js
* Express
* Node
* Threejs (playing with 3d assets)
* MaterialUI
* Heroku
* Zoom Api (Webhooks)

### What does this solve?
-----
During my time as a Software Engineer in Residence at Hack Reactor, part of our job was taking attendance for members of the cohort each morning. Scheduling was tight, and cohort members could often number 30+. The traditional cross checking of Zoom participant lists and an excel spreadsheet lead could often run long, preventing some students from making their morning lectures on time!

### How does this solve the problem?
------
By tapping into Zoom's API, we setup a webook to post notifications to our server when a participant joins a specific zoom room. A WebSocket listener then notifies the Front end client, and updates the UI to visually cue the student that their attendance has been recorded.
Removing the manual check from the Software Engineer in Residence allows to accomplish classroomp attendance much more efficiently, ensuring students can maximize their time. Wahoo!


## Setup
------
Replace `enrollement.example.js ` with `enrollment.js` following the structure. This file is referenced for your apps current enrollment.

Navigate to Zoom in order to setup webhooks. ![ZoomSetup](./dist/assets/ZoomSetup.png).

Ensure the webhooks POSTs to your deployed instance with the endpoint /webhooks.

