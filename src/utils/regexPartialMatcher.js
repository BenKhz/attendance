function partialRegexMatcher(displayName, recordName) {
  // prune contents from square brackets and all bracket characters from display name
  var displayName = displayName.replace(/(\[.*?\] *)|[\(]|[\)]/ig, '').replace(/(hr.?lax?.?\d*)/ig, '')
  var recordName = recordName.replace(/(\[.*?\] *)|[\(]|[\)]/ig, '')
  displayName = displayName.toLowerCase().split(' ')
  recordName = recordName.toLowerCase().split(' ')
  console.log("Display Name :  ", displayName)
  console.log("Recorded Name :  ", recordName)
  for (var word of displayName) {
    if (word.length && !recordName.includes(word)) {
      console.log("Checking word::", word)
      return false
    }
  }
  return true;
}

// const testData =  {
//       "enrolled": [
//         {
//           "cohort": 49,
//           "user_name": "Daniel (Sangyoon) Kim",
//           "email": "ksydaniel@gmail.com",
//           "present": true,
//           "date_time": "2022-02-09T16:58:34.739Z"
//         },
//         {
//           "cohort": 49,
//           "user_name": "Irving Obrian Soto",
//           "email": "irving.sotocastillo@gmail.com",
//           "present": true,
//           "date_time": "2022-02-09T16:55:25.249Z"
//         },
//         {
//           "cohort": 49,
//           "user_name": "Matthew Chang",
//           "email": "matthewtchang25@gmail.com",
//           "present": true,
//           "date_time": "2022-02-09T16:56:03.589Z"
//         },

//         {
//           "cohort": 49,
//           "user_name": "Tiffany Vu",
//           "email": "tiffanyv.330@gmail.com",
//           "present": true,
//           "date_time": "2022-02-09T16:55:31.990Z"
//         },
//         {
//           "cohort": 48,
//           "user_name": "Emily (Zhiying) Hu",
//           "email": "emilyhu08@gmail.com",
//           "present": true,
//           "date_time": "2022-02-09T16:58:12.131Z"
//         },
//         {
//           "cohort": 48,
//           "user_name": "David Sung",
//           "email": "dks99455@gmail.com",
//           "present": true,
//           "date_time": "2022-02-09T16:53:36.817Z"
//         },
//         {
//           "cohort": 48,
//           "user_name": "Weiran (Rebecca) Cheng",
//           "email": "chengwr1128@gmail.com",
//           "present": true,
//           "date_time": "2022-02-09T16:53:40.610Z"
//         },


//       ],
//       "unregistered": [
//         {
//           "user_id": "16784384",
//           "user_name": "HR-LAX48 Weiran (Rebecca) Cheng",
//           "registrant_id": null,
//           "id": "",
//           "join_time": "2022-02-09T16:53:14Z",
//           "email": ""
//         },
//         {
//           "user_id": "16785408",
//           "user_name": "HRLAX48 David Sung",
//           "registrant_id": null,
//           "id": "",
//           "join_time": "2022-02-09T16:53:30Z",
//           "email": ""
//         },
//         {
//           "user_id": "16791552",
//           "user_name": "HR-LAX49 Irving Soto",
//           "registrant_id": null,
//           "id": "",
//           "join_time": "2022-02-09T16:55:12Z",
//           "email": ""
//         },
//         {
//           "user_id": "16794624",
//           "user_name": "HR-LAX49 Tiffany Vu",
//           "registrant_id": null,
//           "id": "zY_3YUd7TaiiPkzjSaRdrA",
//           "join_time": "2022-02-09T16:55:25Z",
//           "email": ""
//         },
//         {
//           "user_id": "16795648",
//           "user_name": "HR-LAX49 Matthew Chang",
//           "registrant_id": null,
//           "id": "",
//           "join_time": "2022-02-09T16:55:26Z",
//           "email": ""
//         },
//         {
//           "user_id": "16804864",
//           "user_name": "HRLAX48 Emily Hu",
//           "registrant_id": null,
//           "id": "bfgXjrzVSlC9Up8YjdQdQw",
//           "join_time": "2022-02-09T16:58:01Z",
//           "email": ""
//         },
//         {
//           "user_id": "16805888",
//           "user_name": "HR-LAX49 Daniel Sangyoon Kim",
//           "registrant_id": null,
//           "id": "GFsrHDMmRY2yvSSLD5KbtA",
//           "join_time": "2022-02-09T16:58:22Z",
//           "email": "daniel@draper.vc"
//         }
//       ],
//     }


// // -------- Test Suite ------------
// // success [0]: Webhook name,
// var successCases = [
//   ['[HRLAX49] Ben Bernardy', 'Ben Bernardy', 'full match with HRLAX prepend'],
//   ['[HRLAX 49] Ben Bernardy', 'Ben Bernardy', 'HR prepended badge with whitespace'],
//   ['[HRLAX49] Benji Bernardy', 'Ben (Benji) Bernardy', 'full match with preferred nickname in parens'],
//   ['HRLAX-49 Ben Bernardy', "Ben Bernardy", "HRLAX prepended outside of square brackets"],
//   ['HRLAX49 Ben Bernardy', "Ben Bernardy", "HRLAX prepended outside of square brackets with no hyphen"],
//   ['HR-LA-49 Ben Bernardy', "Ben Bernardy", "HRLAX prepended outside of square brackets with multiple hyphens and no X"],
//   ['[HR-LAX] Ben (Benji) Bernardy', 'ben (Benji) BeRnardy', 'preferred name included in display parens'],
//   ["HR-LAX49 Daniel Sangyoon Kim", "Daniel (Sangyoon) Kim", 'Daniel Kim Test from live data'],
//   ["HRLAX48 David Sung", 'David Sung', 'David Sung from test cases'],
//   [ "HR-LAX49 Irving Soto" ,"Irving Obrian Soto", "Irving from test data"],
//   [ "Irving Obrian Soto", "HR-LAX49 Irving Soto", "Irving from reversed inputs "]
// ]
// var failCases = [
//   ['[HRLAX49] Benny Bernardy', 'Ben (Benji) Bernardy', 'Display name does not match recorded preferred name'],
// ]

// successCases.forEach(test => {
//   console.log(`SHOULD PASS: ${test[2]} : display name ${test[1]}, and recorded name ${test[0]}`)
//   console.log('-------->', partialRegexMatcher(test[0], test[1]))
// })
// failCases.forEach(test => {
//   console.log(`Should FAIL: ${test[2]} : display name ${test[1]}, and recorded name ${test[0]}`)
//   console.log('-------->', partialRegexMatcher(test[0], test[1]))
// })