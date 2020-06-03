// This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
// Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
// session persistence, api calls, and more.
const Alexa = require('ask-sdk-core');
var check = 0;
const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Welcome to the QuaranTEAM CoronaVirus skill ,You can ask me about CoronaVirus Prevention Guidelines or questions about Coronavirus and topics related to it. You can also ask about live statistics of Coronavirus pandemic in India. or You can take a Self Assessment Test.!';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
// Feature 1 starts
const quaranteamcovidpreventionguidelinesHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'quaranteamcovidpreventionguidelines';
    },
    handle(handlerInput) {
        const speakOutput = '1 Regularly and thoroughly clean your hands with an alcohol based hand rub or wash them with soap and water. 2 Maintain at least 1 metre or 3 feet distance between yourself and anyone who is coughing or sneezing. 3 Avoid touching eyes, nose and mouth. 4 Make sure you and the people around you follow good respiratory hygiene. This means covering your mouth and nose with your bent elbow or tissue when you cough or sneeze. Then dispose of the used tissue immediately. 5 Stay home and self isolate even with minor symptoms such as cough, headache, mild fever. Until you recover, have someone bring you supplies. If you need to leave your house wear a mask to avoid infecting others. 6 If you have a fever cough and difficulty breathing seek medical attention but callby telephone in advance if possible and follow the directions of your local health authority. 7 Keep up to date on the latest COVID-19 hotspots cities or local areas where COVID-19 is spreading widely. If possible avoid traveling to places especially if you are an older person or have diabetes, heart or lung disease. These were some of the MOST IMPORTANT Guidelines to prevent Coronavirus. Stay Safe and Stay Healthy!';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
// Feature 1 ends
//Feature 2 start
const CovidStatusHandler = {
  canHandle(handlerInput) {
     return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CovidStatus';
      
  },
  async handle(handlerInput) {
    let outputSpeech = 'These are the live stats provided by Ministry of Health and Family Welfare, Government of India: ';

    await getRemoteData('https://api.covid19india.org/data.json')
      .then((response) => {
        const data = JSON.parse(response);
          let i = (data.cases_time_series.length)-1
          outputSpeech = outputSpeech + 'Date: ' + data.cases_time_series[i].date + ', '
          outputSpeech = outputSpeech + 'Total Confirmed Cases: ' + data.cases_time_series[i].totalconfirmed + ', '
          outputSpeech = outputSpeech + 'Total Deceased Cases: ' + data.cases_time_series[i].totaldeceased + ', '
          outputSpeech = outputSpeech + 'Total Recovered Cases : ' + data.cases_time_series[i].totalrecovered + ', '
       
      })
      .catch((err) => {
        //set an optional error message here
        //outputSpeech = err.message;
      });

    return handlerInput.responseBuilder
      .speak(outputSpeech)
      .reprompt(outputSpeech)
      .getResponse();

  },
};

const getRemoteData = function (url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? require('https') : require('http');
    const request = client.get(url, (response) => {
      if (response.statusCode < 200 || response.statusCode > 299) {
        reject(new Error('Failed with status code: ' + response.statusCode));
      }
      const body = [];
      response.on('data', (chunk) => body.push(chunk));
      response.on('end', () => resolve(body.join('')));
    });
    request.on('error', (err) => reject(err))
  })
};
// Feature 2 ends

// Feature 3 starts
const coronainfoHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'coronainfo';
    },
    handle(handlerInput) {
        const speakOutput = 'COVID-19 is the infectious disease caused by the most recently discovered corona virus. Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment. This new virus and disease were unknown before the outbreak began in Wuhan, China, in December 2019.';
        return handlerInput.responseBuilder
            .speak(speakOutput)
           .reprompt(speakOutput)
            .getResponse();
    }
};
const spreadingHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'spreading';
    },
    handle(handlerInput) {
        const speakOutput = 'People can catch COVID-19 from others who have the virus. The disease can spread from person to person through small droplets from the nose or mouth which are spread when a person with COVID-19 coughs or exhales. The virus can also spread through contact with contaminated objects and surfaces. It is important to protect the eyes, nose and mouth and to stay more than 1 metre (3 feet) away from infected people in order to stay safe.';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const preventHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'prevent';
    },
    handle(handlerInput) {
        const speakOutput = ' Regularly and thoroughly clean your hands with an alcoholbased hand rub or wash them with soap and water. Maintain at least 1 metre (3 feet) distance between yourself andanyone who is coughing or sneezing. Avoid touching eyes, nose and mouth. Make sure you, and the people around you, follow good respiratory hygiene. This means covering your mouth and nose with your bent elbow or tissue when you cough or sneeze. Then  dispose of the used tissue immediately. Stay home and self-isolate even with minor symptoms such as cough, headache, mild fever, until you recover. Have someone bring you supplies. If you need to leave your house, wear a mask to avoid infecting others. If you have a fever, cough and difficulty breathing, seek medical attention, but call by telephone in advance if possible and follow the directions of your local health authority.Follow the directions of your local health authority. Keep up to date on the latest COVID-19 hotspots (cities or local areas where COVID-19 is spreading widely). If possible, avoid traveling to places – especially if you are an older person or have diabetes, heart or lung disease.';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const airHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'air';
    },
    handle(handlerInput) {
        const speakOutput = 'Studies to date suggest that the virus that causes COVID-19 is mainly transmitted through contact with respiratory droplets rather than through the air. ';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const symptomsHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'symptoms';
    },
    handle(handlerInput) {
        const speakOutput = "The most common symptoms of COVID-19 are fever, tiredness, and dry cough. Some patients may have aches and pains, nasal congestion, runny nose, sore throat or diarrhea. These symptoms are usually mild and begin gradually. Some people become infected but don’t develop any symptoms and don't feel unwell." ;
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const riskHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'risk';
    },
    handle(handlerInput) {
        const speakOutput = 'While we are still learning about how COVID-2019 affects people, older persons and persons with pre-existing medical conditions (such as high blood pressure, heart disease, lung disease, cancer or diabetes) appear to develop serious illness more often than others.  ';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const antibioticsHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'antibiotics';
    },
    handle(handlerInput) {
        const speakOutput = 'No. Antibiotics do not work against viruses, they only work on bacterial infections. COVID-19 is caused by a virus, so antibiotics do not work. Antibiotics should not be used as a means of prevention or treatment of COVID-19. They should only be used as directed by a physician to treat a bacterial infection.  ';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const SARSHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'SARS';
    },
    handle(handlerInput) {
        const speakOutput = 'No. The virus that causes COVID-19 and the one that caused the outbreak of Severe Acute Respiratory Syndrome (SARS) in 2003 are related to each other genetically, but the diseases they cause are quite different. ';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const maskHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'mask';
    },
    handle(handlerInput) {
        const speakOutput = 'Only wear a mask if you are ill with COVID-19 symptoms (especially coughing) or looking after someone who may have COVID-19. Disposable face masks can only be used once. ';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const incubationHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'incubation';
    },
    handle(handlerInput) {
        const speakOutput = 'The incubation period means the time between catching the virus and beginning to have symptoms of the disease. Most estimates of the incubation period for COVID-19 range from 1 to 14 days, most commonly around five days. These estimates will be updated as more data become available.  ';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};  
const surviveHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'survive';
    },
    handle(handlerInput) {
        const speakOutput = 'It is not certain how long the virus that causes COVID-19 survives on surfaces, but it seems to behave like other corona viruses. Studies suggest that corona viruses may persist on surfaces for a few hours or up to several days. This may vary under different conditions (e.g. type of surface, temperature or humidity of the environment) ';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
}; 
//Feature 3 ends
//Feature 4 starts
const startIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'startIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Please answer all the questions correctly. Which of the following symptom do you have? cough, fever, difficulty in breathing, none of these';
        check = 0;
        return handlerInput.responseBuilder
            .addElicitSlotDirective('sympotms', {
                name: 'symptomsIntent',
                confirmationStatus: 'NONE',
                slots: {}
            })
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const symptomsIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'symptomsIntent';
    },
    handle(handlerInput) {
        //const symptom = handlerInput.requestEnvelope.request.intent.slots.symptoms.value;
        
        const speakOutput = `Have you ever had any of the following. Diabetes, Hypertension,Lung disease,heart disease, none of the above`;
        return handlerInput.responseBuilder
            .addElicitSlotDirective('disease', {
                name: 'diseaseIntent',
                confirmationStatus: 'NONE',
                slots: {}
            })
            .speak(speakOutput)
            //.reprompt('please try saying any of the following options. Diabetes, Hypertension,Lung disease,heart disease, none of the above')
            .getResponse();
    }
};
const diseaseIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'diseaseIntent';
    },
    handle(handlerInput) {
        
        
        const speakOutput = `Have you travelled internationally in last twenty eight to fourty five days`;
        return handlerInput.responseBuilder
            .addDirective({
                type: 'Dialog.ElicitSlot',
                slotToElicit: 'travel',
                updatedIntent: {
                    name: 'travelIntent',
                    confirmationStatus: 'NONE'
                }
            })
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const travelIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'travelIntent';
    },
    handle(handlerInput) {
        const travelValue = handlerInput.requestEnvelope.request.intent.slots.travel.value;
       console.log(travelValue)
        if (travelValue === 'yes'){
            check=check+1;
            
        }
        const speakOutput = `Which of following option is applicable for you. a-Recently interacted or lived with someone tested COVID nineteen positive. b- Am a health care worker. c- not applicable`;
        return handlerInput.responseBuilder
            .addElicitSlotDirective('work', {
                name: 'workIntent',
                confirmationStatus: 'NONE',
                slots: {}
            })
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const workIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'workIntent';
    },
    handle(handlerInput) {
        
        const workValue = handlerInput.requestEnvelope.request.intent.slots.work.value;
        console.log(workValue)
        if (workValue !== 'option c'){
            if (workValue !== 'not applicable'){
                check = check+1;    
            }
            
            
        }
        var speakOutput =`test completed. `;
        if (check>0){
            speakOutput = `you are in high risk. `;
        }
        else{
            speakOutput = `you are safe.`;
        }
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
//Feature 4 ends

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'You can ask CoronaVirus Prevention Guidelines to me! How can I help?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Sorry, I had trouble understanding what you asked. Please try asking something like should I wear a mask to protect myself from coronavirus';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Goodbye! Thank you for using QuaranTEAM Covid Prevention Guidelines skill.';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse();
    }
};

// The intent reflector is used for interaction model testing and debugging.
// It will simply repeat the intent the user said. You can create custom handlers
// for your intents by defining them above, then also adding them to the request
// handler chain below.
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

// Generic error handling to capture any syntax or routing errors. If you receive an error
// stating the request handler chain is not found, you have not implemented a handler for
// the intent being invoked or included it in the skill builder below.
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`~~~~ Error handled: ${error.stack}`);
        const speakOutput = `Sorry, I had trouble doing what you asked. Please try again.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

// The SkillBuilder acts as the entry point for your skill, routing all request and response
// payloads to the handlers above. Make sure any new handlers or interceptors you've
// defined are included below. The order matters - they're processed top to bottom.
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        quaranteamcovidpreventionguidelinesHandler,
        CovidStatusHandler,
        coronainfoHandler,
        spreadingHandler,
        preventHandler,
        airHandler,
        symptomsHandler,
        riskHandler,
        antibioticsHandler,
        SARSHandler,
        maskHandler,
        incubationHandler,
        surviveHandler,
        startIntentHandler,
        symptomsIntentHandler,
        diseaseIntentHandler,
        travelIntentHandler,
        workIntentHandler,
        HelpIntentHandler,
        FallbackIntentHandler,
        CancelAndStopIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler,
       
    )
    .addErrorHandlers(
        ErrorHandler,
    )
    .lambda();
