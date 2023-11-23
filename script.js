let qoutes = [
  "Fried Chicken is the best", 
  "Are you sad? Don't be", 
  "You will find someone...Eventually", 
  "Go to the gym...Or ride a Peleton or something be fit smh :)", 
  "You know I like my chicken fried, A cold beer on a Friday night, A pair of jeans that fit just right, And the radio up", 
  "J'avoue, J'avoue, Quand ton regard se pose sur moi, J'avoue, tu hante mes, pensées et mon sommeil, Je ne sais pas pourquoi, Je le sens, comme d'habitude, je vais tout gâcher (I confess I confess, When your gaze lands on me I confess, You haunt my thoughts and my sleep I don’t know why, I feel it, As usual I’m going to ruin everything)",
  "I'm gonna slap you, slap you, slap you,",
  "il me manque un peu pour faire le tour du monde, j'ai des numéros en pagaille si jamais tu bombes, tes appels manqués remplissent mon téléphone, a défaut de courir après toi, moi, je cours après les sommes I'm missing a little to do around the world I have a mess of numbers, if you ever bomb your missed calls fill my phone, failing to run after you, me, I run after the sums)"
]

function randomQoute() {
  let qoute = qoutes[Math.floor(Math.random() * qoutes.length)]
  document.getElementById("qoute").innerHTML = qoute
}

randomQoute();
