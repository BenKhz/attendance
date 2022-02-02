export default function partialRegexMatcher(recordName, displayName) {
  // prune contents from square brackets and all bracket characters from display name
  var displayName = displayName.replace(/(\[.*?\] *)|[\(]|[\)]/ig, '').replace(/(hr.?lax?.?\d*)/ig, '')
  var recordName = recordName.replace(/(\[.*?\] *)|[\(]|[\)]/ig, '')
  displayName = displayName.toLowerCase().split(' ')
  recordName = recordName.toLowerCase().split(' ')
  console.log("Display Name :  ", displayName)
  console.log("Recorded Name :  ", recordName)
  for (var word of displayName) {
    if (word.length && !recordName.includes(word)) {
      return false
    }
  }
  return true;
}

// -------- Test Suite ------------

// var successCases = [
//   ['[HRLAX49] Ben Bernardy', 'Ben Bernardy', 'full match with HRLAX prepend'],
//   ['[HRLAX 49] Ben Bernardy', 'Ben Bernardy', 'HR prepended badge with whitespace'],
//   ['[HRLAX49] Benji Bernardy', 'Ben (Benji) Bernardy', 'full match with preferred nickname in parens'],
//   ['HRLAX-49 Ben Bernardy', "Ben Bernardy", "HRLAX prepended outside of square brackets"],
//   ['HRLAX49 Ben Bernardy', "Ben Bernardy", "HRLAX prepended outside of square brackets with no hyphen"],
//   ['HR-LA-49 Ben Bernardy', "Ben Bernardy", "HRLAX prepended outside of square brackets with multiple hyphens and no X"],
//   ['[HR-LAX] Ben (Benji) Bernardy', 'ben (Benji) BeRnardy', 'preferred name included in display parens'],
// ]
// var failCases = [
//   ['[HRLAX49] Benny Bernardy', 'Ben (Benji) Bernardy', 'Display name does not match recorded preferred name'],
// ]

// successCases.forEach(test => {
//   console.log(`SHOULD PASS: ${test[2]} : display name ${test[1]}, and recorded name ${test[0]}`)
//   console.log('-------->', partialRegexMatcher(test[1], test[0]))
// })
// failCases.forEach(test => {
//   console.log(`Should FAIL: ${test[2]} : display name ${test[1]}, and recorded name ${test[0]}`)
//   console.log('-------->', partialRegexMatcher(test[1], test[0]))
// })