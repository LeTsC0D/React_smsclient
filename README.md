![](Capture.PNG)

Serviceapi deployment: https://smsserviceapi.herokuapp.com/ <br />
Clientapi deployment:    https://github.com/Lets-coD/smsclient <br />
Hosted site: 		https://smsclient.netlify.app/ <br />

According to Question: <br />
1.	Create an account in Fast2Sms and VonageApi  for Testing <br />
2.	First we have to create  two menu list. <br />
3.	onChange event of the menu list,we  call the contact info component. <br />
4.	Upon sendMessage click event we are routed to sendotp component using Route from react router dom <br />
5.	We pass info and create history function in prop. <br />
6.	We generate 6 digit random otp. <br />
7.	We add the details in history. <br />
8.	We call back our create history function of App. <br />
9.	We call smsseviceapi using   axios , smsserviceapi is hosted in heroku. <br />
10.	We push the smsclient code to github and deploy in Netlify. <br />
