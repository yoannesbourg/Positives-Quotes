const messages1 = ["You’re off to great places.",

"No one is perfect.",
"Winning doesn't always mean being first. Winning means you're doing better than you've done before.",
"You're braver than you believe.",

"Keep your face to the sunshine."]

const messages2 = ["Today is your day.", "You always pass failure on the way to success.", "That's why pencils have erasers.", "Stronger than you seem", "It always seems impossible."]

const messages3 = ["Your mountain is waiting, so get on your way", "And smarter than you think.", "Until it is done",]

const showMessages = (arr1, arr2, arr3) => {
    const randomIndex = (arr) => Math.floor(Math.random() * arr.length)
    
    return `${arr1[randomIndex(arr1)]} ${arr2[randomIndex(arr2)]} ${arr3[randomIndex(arr3)]}`
}

console.log(showMessages(messages1, messages2, messages3))