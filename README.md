# HackNu-2.0-team-quaranTEAM
DEVELOPED AMAZON ALEXA SKILLS WHICH HELPS USERS IN THE COVID-19 PANDEMIC.

Tech Stack Used: Alexa Skills Kit(ASK),JavaScript,JSON and COVID-19 LIVE Stats API.

# How does a user access skill content?
A user accesses content in a skill by asking Alexa to invoke the skill. Alexa is always ready to invoke new skills. When a user says the wake word, "Alexa," and speaks to an Alexa-enabled device, the device streams the speech to the Alexa service in the cloud. Alexa recognizes the speech, determines what the user wants, and then sends a request to invoke the skill that can fulfill the request. The Alexa service handles the speech recognition and natural language processing. The skill runs as a service on a cloud platform. Alexa communicates with the skill by using a request-response mechanism over the HTTPS interface. When a user invokes an Alexa skill, the skill receives a POST request containing a JSON body. The request body contains the parameters necessary for the skill to understand the request, perform its logic, and then generate a response.

# SKILLS
1. quaranTeam CoronaVirus_Guidelines: ALEXA will give you WHO GUIDELINES on how to prevent CoronaVirus.
2. quaranTeam CoronaVirus_FAQ's: ALEXA will respond to your FAQ's on CoronaVirus.
3. quaranTEAM Coronavirus_LiveStatus_India: ALEXA will provide you LIVE information of about CoronaVirus cases in INDIA.This is the authentic information provided by Government Of India.
4. QUARANteam CoronaVirus_self_assessment: ALEXA will ask you some questions and based on your answers you will get to know if you are safe or not. Basically you will undergo a self-assessment test.
5. QuaranTEAM CoronaVirus_Pakage_Skill: This is the complete integration of all our above skills into ONE SKILL.
# DEMO
You can find DEMO of all the above listed skills here: https://drive.google.com/drive/folders/1RPLZEfmZZQNyhPqds6Yv6LRWvZsgB0sc
# STEP BY STEP PROCEDURE ON RUNNING THE SKILLS.
Here are the steps that you can follow to test our skills on our machine:
1. Go to https://developer.amazon.com/alexa/console/ask# and Sign-In with you Alexa Developers Account.
2. Press the create skill button and then create skill by giving any name of your choice.(Make Sure that it is a CUSTOM SKILL and ALEXA HOSTED NodeJS skill).
3. After this step make sure that in the next step you choose HELLO WORLD template and then wait for 1-2 minutes while ALEXA is preparing your Back-End.
4. Now suppose you want to run (quaranTEAM CoronaVirus_LiveStatus_India) so go to that folder in GitHub and first copy the FrontEnd.json file.
5. Now in your "BUILD" section you can find a JSON EDITOR in the left side drawer under Slot Types. Go the that editor and remove all the code which is pre-existing and copy the FronEnd.json code of (quaranTEAM CoronaVirus_LiveStatus_India) in that JSON EDITOR and the click SAVE AND BUILD MODEL.
6. Now go to INVOCATION section under Interaction Model(In the Left Side Drawer Only) and there you can find the Skill Invocation Name.(POINT 6).
7. Now go to the "CODE" section in your skill and replace your pre-existing file of index.js with (quaranTEAM CoronaVirus_LiveStatus_India) index.js file(which you will find in this particular skill name's GitHub folder) and then click SAVE and DEPLOY.
8. Now go to "TEST" section and invoke the skill by saying open +"(INVOCATION NAME YOU GOT FROM POINT 6)".
9. You can now see the response of ALEXA and the skills which we have developed.
# PS: DON'T FORGET TO GIVE CREDITS TO 'team-quaranTEAM' IF YOU ARE USING OUR CODE. :)
