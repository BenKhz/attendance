export default function partialRegexMatcher (recordName, displayName) {
  // prune contents from square brackets and all bracket characters from display name
  var displayName = displayName.replace(/(\[.*?\] *)|[\(]|[\)]/ig, '')
  var recordName = recordName.replace(/(\[.*?\] *)|[\(]|[\)]/ig, '')
  displayName = displayName.toLowerCase().split(' ')
  recordName = recordName.toLowerCase().split(' ')
  for(var word of displayName) {
    if(!recordName.includes(word))
    return false
  }
  return true
}

// -------- Test Suite ------------

// var successCases =[
//   ['[HRLAX49] Ben Bernardy', 'Ben Bernardy', 'full match with HRLAX prepend'],
//   ['[HRLAX 49] Ben Bernardy', 'Ben Bernardy', 'HR prepended badge with whitespace'],
//   ['[HRLAX49] Benji Bernardy', 'Ben (Benji) Bernardy', 'full match with preferred nickname in parens'],
//   ['[HR-LAX] Ben (Benji) Bernardy', 'ben (Benji) BeRnardy', 'preferred name included in display parens'],
// ]
// var failCases =[
//   ['[HRLAX49] Benny Bernardy', 'Ben (Benji)Bernardy', 'Display name does not match recorded preferred name'],
// ]

// successCases.forEach(test => {
//   console.log(`Condition: ${test[2]} : display name ${test[0]}, and recorded name ${test[1]}`)
//   console.log( '-------->', partialRegexMatcher(test[0], test[1]))
// })
// failCases.forEach(test => {
//   console.log(`Condition: ${test[2]} : display name ${test[0]}, and recorded name ${test[1]}`)
//   console.log( '-------->', !partialRegexMatcher(test[0], test[1]))
// })