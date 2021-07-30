# Smart Lane Demo Code Structure and Working
SmartLane Demo Code and working (master branch)

I created this project, executed it in my local machine, Android Studio and Xcode by using the following commands

project creation: ionic start barcodeScannerAllNew tabs

chose Angular Framework

**Note** :  for static data loading into the grid and filters, I have created a db.json file in src/assets/database location and read this data via http call(data integrated).

**Steps for running project in local machine(browser) :**
1) ionic serve

Steps for running project in android studio (simulator):
1) ionic cordova platform add android
2) ionic cordova build android
3) ionic cordova run android
4) After executing these 3 commands, project will open in android simulator

**Steps for running project in Xcode(ios simulator):**
1) ionic cordova platform add ios
2) ionic cordova build ios
3) ionic cordova run ios
4) Afrer executing these 3 commands, project will open in ios simulator

**project flow**
1) when opened in browser/simulator, application redirects to login page
2) Authorised users: mani, sobhan, kiran
3) password can be anything, once user Id and password entered, user can click on Login button to login
4) once logged in application will redirect to the appointments tab and user can filter the list with cutomer name.
5) infinity scroll has been implemented, only 10 records will load once scrolled more
6) Two types of views are available  (grid and table view), user can toggle between two views.
7) Filters section is only available for authorised users (mani, sobhan, kiran) , filters can be opened in two ways(side nav and show/hide grid), one view can be    confirmed based on the requirements 
8) Wild card routing has also been implemented incase of an unknown page pops up
9) Logout/Signout button is present at the top right corner.

Deployed this application in firebase and can check the project by clicking on the followin link :   https://barcodescanner-2ce5b.web.app/
