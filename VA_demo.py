import speech_recognition
import pyttsx3
from mediawiki import MediaWiki
from datetime import date, datetime


wikipedia = MediaWiki()
today = date.today()
d2 = today.strftime("%B %d, %Y")
now = datetime.now()

 #Jeff little mouth
Jeff_microphone = speech_recognition.Recognizer()
engine = pyttsx3.init()
Jeff = ''
search = ''

while True:
    with speech_recognition.Microphone() as mic:
        print("jeff: I'm listening")
        audio = Jeff_microphone.record(mic,duration = 3)

    print('Jeff:...!!')

    try:
        you = Jeff_microphone.recognize_google(audio)
    except:
        you = ''

    print("user:" + you)


        #Jeff little brain
    if you =='':
        Jeff = 'I can not hear you, please try again'
    elif you == 'hello':
        Jeff = 'yes, Master!'
    elif 'today' in you: #DATE
        Jeff = today.strftime("%B %d, %Y")
    elif 'time' in you: #TIME
        Jeff = now.strftime("%H hours %M minutes")
    elif 'search for' in you: #WIKIPEDIA
        searching = you.replace('search for','')
        print(wikipedia.summary(searching))

        Jeff = wikipedia.summary(searching)

    elif 'bye' in you: #TURN OFF
        Jeff = 'Goodbye master'
        print('Jeff:' + Jeff)
        engine.say(Jeff)
        engine.runAndWait()
        break
    else:
        Jeff = "I'm fine thank you"

    print('Jeff:' + Jeff)
    engine.say(Jeff)
    engine.runAndWait()