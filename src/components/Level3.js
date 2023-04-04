function Questions(props) {

  let quest = [

    {
      id: 0,
      type: "mcq",
      question:
        "The probability of getting number 10 when six sided dice is rolled is ?",
      option: {
        1: "1/6",
        2: "1/4",
        3: "0",
        4: "5/2",
      },
      correct: {
        value: "0",
      },
      explanation: {
        value: `Is there any side which is numbered zero on dice ? think and answer.`,
      },
    },




    {
      id: 1,
      type: "mcq",
      question: "  A dice is thrown, what is the probability that the number obtained is a prime number.",
      option: {
        1: "1/6",
        2: "1/8",
        3: "1/2",
        4: "1/3"
      },
      correct: {
        value: "1/2"
      },
      explanation: {
        value: "Dice is thrown, the total possible outcomes = 6.<br> Favorable outcomes = 3 i.e. (2,3,5). <br>Probability = 3 / 6 = 1 / 2 "
      }
    },

    {
      id: 2,
      type: "mcq",
      question: "Determine the probability that a digit chosen at random from digits 1, 2, 3 to 13 will be even.",
      option: {
        1: "1/2",
        2: "1/9",
        3: "5/9",
        4: "6/13"
      },
      correct: {
        value: "6/13"
      },
      explanation: {
        value: "Here out of six digits (2, 4, 6, 8,10, 12), any digits chosen will be considered favorable. Probability = 6 / 13 "
      }
    },

    {
      id: 3,
      type: "mcq",
      question: "Determine the probability that a number chosen at random from the digits 1, 2, 3, to 10 will be a multiple of 4.",
      option: {
        1: "1/4",
        2: "1/5",
        3: "1/3",
        4: "1/2"
      },
      correct: {
        value: "1/5"
      },
      explanation: {
        value: " Total possible outcomes = 10. Favorable outcomes = 2. (i.e. 4,8) Probability = 2 / 10 = 1 / 5"
      }
    },


    {
      id: 4,
      type: "mcq",
      question: "An integer is chosen between 0 and 100. What is the probability that it is divisible by 7?",
      option: {
        1: "22/98",
        2: "14/99",
        3: "5/25",
        4: "25/36"
      },
      correct: {
        value: "14/99"
      },
      explanation: {
        value: " Number of integers between 0 and 100 = n(S) = 99<br> (i) Let E be the event integer divisible by 7<br> Favourable outcomes to the event E = 7, 14, 21 to 98 Number of favourable outcomes = n(E) = 14<br>Probability = P(E) = n(E)/n(S) = 14/99"
      }
    },

    {
      id: 5,
      type: "mcq",
      question: "We know that a leap year has 366 days. Find the probability of a leap year having 53 Sundays?",
      option: {
        1: "1/7",
        2: "1/14",
        3: "2/7",
        4: "0"
      },
      correct: {
        value: "2/7"
      },
      explanation: {
        value: " A leap year has 366 days in which 52 and 2 days are extra. i.e. (Sunday, Monday), (Monday, Tuesday), (Tuesday, Wednesday), (Wednesday, Thrusdar), (Thursday, Friday), (Friday, Saturday), (Saturday, Sunday). So, probability that a leap year contains 53 Sunday = 2/7."
      }
    }
  ]
}
