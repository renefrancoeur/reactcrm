import * as firebase from 'firebase';


  
    // Initialize Firebase realtime database
    const config = {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.FIREBASE_DATABASE_URL,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
    };
    firebase.initializeApp(config);

    const database = firebase.database();
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

    export { firebase, googleAuthProvider, database as default };

//     //child_removed event subscription
//     database.ref('expenses').on('child_removed', (snapshot)=>{
//         console.log(snapshot.key, snapshot.val());
//     });

//     //child_changed event subscription
//     database.ref('expenses').on('child_changed', (snapshot)=>{
//         console.log('child was changed',snapshot.key, snapshot.val());
//     });

//     //child_added
//     database.ref('expenses').on('child_added', (snapshot)=>{
//         console.log('child was added',snapshot.key, snapshot.val());
//     });

// //*** subscription to changes using foreach() to get info as an array of objects */
//     // database.ref('expenses').on('value', (snapshot) => {
//     //         const expenses =[];
//     //         snapshot.forEach((childofSnapshot)=> {
//     //             expenses.push({
//     //                 id: childofSnapshot.key,
//     //                 ...childofSnapshot.val()
//     //                 })
//     //         });
//     //         console.log(expenses);
//     // });

//    database.ref('expenses').push({
//         description:'rent',
//         note:'housing',
//         amount:105000,
//         createdAt:0
//     }); 
    
// // database.ref('notes/-LLab-jxHr-jMroGdSWk').update({
// //     body: 'Buy food'
// // })

// // database.ref('notes').push({
// //     title:'Brand new title!',
// //     body: 'This is the greatest note of all time!'
// // });

// //     //***** Subscribe to data changes on the database */
// //    const onValueChange = database.ref().on('value', (snapshot) => {
// //         console.log(snapshot.val());
// //    }, (e) => {
// //        console.log('Error with data fetching ', e)
// //    });

// // setTimeout(()=>{
// //     database.ref().update({age:83}); 
// //    },3500);

// //   //**** unsubscribe to data changes */
// // setTimeout(()=>{
// //     database.ref().off('value',onValueChange); 
// //  },7500);


// // setTimeout(()=>{
// //     database.ref().update({age:20}); 
// //  },11000);

// //  const onChanges = database.ref().on('value', (snapshot)=> {
// //      const val = snapshot.val();
// //     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// //  });

//         // .then((snapshot)=> {
//         //     const val = snapshot.val();
//         //     console.log(val);
//         // }). catch ((e) => {
//         //     console.log('error fetching data: ', e);
//         // });
//     //*** fetching data from database */
//     // database.ref().once('value')
//     //     .then((snapshot)=> {
//     //         const val = snapshot.val();
//     //         console.log(val);
//     //     }). catch ((e) => {
//     //         console.log('error fetching data: ', e);
//     //     });

//     //***** set ***** */
// // database.ref().set({
// //     name: 'rene',
// //     age: '46',
// //     stressLevel: 4,
// //     job: {
// //         title: 'Software developer',
// //         company: 'Google'
// //     },
// //     location: {
// //         city: 'Philadelphia',
// //         country: 'United States'
// //     }
// // }).then(()=> {
// //     console.log('Data is saved');
// // }).catch((e)=>{
// //     console.log('This failed', e)
// // });


//     //******remove ***** */
// // database.ref('isSingle').remove()
// // .then(()=> {
// //          console.log('Data was removed');
// // }).catch((e)=>{
// //          console.log('This failed', e)
// // });

//     //*****update *** */
// // database.ref().update({
// //     stressLevel: 9,
// //     'job/company': 'Amazon',
// //     'location/city': 'Seattle'
// // }).then(()=> {
// //         console.log('Data was updated');
// // }).catch((e)=>{
// //         console.log('This failed', e)
// // });