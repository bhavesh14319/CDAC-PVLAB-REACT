function Questions(props) {

  let quest = [

    {
      id: 0,
      type: "mcq",
      question: "The probability of getting two tails when two coins are tossed is ?",
      option: {
        1: "1/6",
        2: "1/4",
        3: "1/3",
        4: "1/2"
      },
      correct: {
        value: "1/4"
      },
      explanation: {
        value: "`The sample space when two coins are tossed = (H, H), (H, T), (T, H), (T, T) So, n(S) = 4 The event E of getting two tails (T, T) = 1 So, n(E) = 1 So, the probability of getting tails, P (E) = n(E) / n(S) "
      }
    },

    {
      id: 1,
      type: "mcq",
      question: "Two coins are tossed simultaneously. What is the probability of getting at most one head",
      option: {
        1: "1/4",
        2: "1/2",
        3: "2/3",
        4: "3/4"
      },
      correct: {
        value: "3/4"
      },
      explanation: {
        value: "When two coins are tossed simultaneously, the possible outcomes are HH, HT, TH and TT.<br> Total number of possible outcomes = 4<br> Let E be the event of getting at most one head.<br>Then, the favourable outcomes are HT, TH and TT.<br>Number of favourable outcomes = 3"
      }
    },


    {
      id: 2,
      type: "mcq",
      question: "A card is drawn randomly from a pack of shuffled cards. What is the probability that it is a six of hearts?",
      option: {
        1: "1/52",
        2: "1/4",
        3: "12/13",
        4: "11/13"
      },
      correct: {
        value: "1/52"
      },
      explanation: {
        value: "There is one in 52 chance if getting a 6 of heart when a random card is drawn from a deck of card."
      }
    },


    {
      id: 3,
      type: "mcq",
      question: "A bag has 3 red balls and 5 green balls. If we take a ball from the bag, then what is the probability of getting red balls only?",
      option: {
        1: "2/11",
        2: "2",
        3: "5",
        4: "3/8"
      },
      correct: {
        value: "3/8"
      },
      explanation: {
        value: "The no. of red balls = 3<br>The no. of green balls = 5<br>Total no. of balls = 8<br>As we know,<br>Probability = Favorable event/ total no of events.<br>so, in this case,<br>probability of getting red balls only​ = no of red balls/total no. of red balls.<br>⇒ 3/8<br>Hence, the probability of red balls is 3/8."
      }
    },



    {
      id: 4,
      type: "mcq",
      question: "Two coins are tossed simultaneously for 360 times. The number of times 2 Tails appeared was three times the number No Tail appeared and the number of times 1 tail appeared is double the number of times No Tail appeared. What is the probability of getting Two tails?",
      option: {
        1: "3/2",
        2: "1/2",
        3: "3/4",
        4: "5/2"
      },
      correct: {
        value: "1/2"
      },
      explanation: {
        value: "Total number of outcomes = Sample space = 360 Now, assume that the number of times Not Tail appeared to be x<br>So, the number of times 2 Tails appeared = 3x (from the question)<br>Also, the number of times 1 Tail appeared =2x (from the question)<br>As the total outcomes = 360,<br>x + 2x + 3x = 360<br>=> 6x = 360<br>Or, x = 60  <br>P(getting two tails) =(3×60)/360 =1/2"

      }
    }
  ]
}