

  let quest4 = [

    {

      id: 0,
      type: "mcq",
      question:
        "Two six-sided, fair dice are rolled. What are the probabilities of getting one even and one odd number?",
      option: {
        1: "1/6",
        2: "1/4",
        3: "1/2",
        4: "5/2",
      },
      correct: {
        value: "1/2",
      },
      explanation: {
        value: `Refer the possible combinations of numbers when two dice are tossed`,
      },

    },

    {
      id: 1,
      type: "mcq",
      question: "Two dice are thrown at the same time. Find the probability of getting (i) the same number on both dice.",
      option: {
        1: "1/4",
        2: "1/2",
        3: "1/6",
        4: "1/8"
      },
      correct: {
        value: "1/6"
      },
      explanation: {
        value: "Given that, Two dice are thrown at the same time.<br> So, the total number of possible outcomes n(S) = 62 = 36<br>Getting the same number on both dice:<br>Let A be the event of getting the same number on both dice.<br>Possible outcomes are (1,1), (2,2), (3, 3), (4, 4), (5, 5) and (6, 6).<br>Number of possible outcomes = n(A) = 6<br>Hence, the required probability =P(A) = n(A)/n(S)<br>= 6/36 = 1/6"

      }
    },

    {
      id: 2,
      type: "mcq",
      question: "Two dice are rolled simultaneously. Find the probability of getting a multiple of 2 on one die and a multiple of 3 on the other die",
      option: {
        1: "11/36",
        2: "5/8",
        3: "11/3",
        4: "15/18"
      },
      correct: {
        value: "11/36"
      },
      explanation: {
        value: "Only 11 possible combinations out of 36"
      }
    },

    {
      id: 3,
      type: "mcq",
      question: "Three dice are thrown together. Find the probability of:",
      option: {
        1: "30/100",
        2: "20/108",
        3: "6/120",
        4: "5/108"
      },
      correct: {
        value: "5/108"
      },
      explanation: {
        value: " Therefore, total number of possible outcomes will be(6 × 6 × 6) = 216. <br>Number of events of getting a total of 6 = 10 i.e. (1, 1, 4), (1, 4, 1), (4, 1, 1), (1, 2, 3), (1, 3, 2), (2, 1, 3), (2, 3, 1), (3, 1, 2), (3, 2, 1) and (2, 2, 2).<br> Hence, P(E) = 10 / 216 = 5/108"
      }
    },

    {
      id: 4,
      type: "mcq",
      question: "Two dice, one white and one red, are rolled together. Find the probability of getting two different digits",
      option: {
        1: "29/36",
        2: "5/6",
        3: "11/36",
        4: "4/6"
      },
      correct: {
        value: "5/6"
      },
      explanation: {
        value: "for each value of first dice there are 5 possible values making 30 possible combinations "
      }
    },

    {
      id: 5,
      type: "mcq",
      question: "Two dice, one white and one red, are rolled together. Find the probability of getting a difference of 1",
      option: {
        1: "8/18",
        2: "25/36",
        3: "13/18",
        4: "5/18"
      },
      correct: {
        value: "5/18"
      },
      explanation: {
        value: " For white dice having values  1 and 6 there is only one possible combination but for values of white dice from 2 to 5 two possible combinations for each summing upto 10 combinations out off 36"
      }
    }

  ]

  export default quest4;