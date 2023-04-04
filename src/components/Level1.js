function Questions(props){

    let quest = [
        
        {
            id: 0,
            type: "mcq",
            question: "What is Probability of getting Head ?",
            option: {
              1: "0",
              2: "1",
              3: "1/2",
              4: "3/4",
            },
            correct: {
              value: "1/2",
            },
            explanation: {
              value: `We know that the coin has two sides head (H) and tail (T) <br/> 
                So the possible outcomes are Xm. (where x is the number of outcomes when a coin is tossed and m is the number of coins) <br/>      
                ∴ The possible outcomes are H and T.  <br/> 
                Total possible outcomes =2 <br/> 
                ∴ Chances of getting a tail = 1(since there is a single coin) <br/> 
                By using the formula, <br/> 
                Probability p () = number of favorable outcomes/ total number of outcomes <br/> 
                ∴ Probability of getting a tail p (T) = chances/total number of outcomes = ½ <br/>`,
            },
          },

          {
            id: 1,
            type: "mcq",
            question: "What is Probability of getting Tail ?",
            option: {
              1: "0",
              2: "1",
              3: "1/2",
              4: "3/4",
            },
            correct: {
              value: "1/2",
            },
            explanation: {
              value: `An event that will never be happened is known as the impossible event. <br/> 
                For example:- <br/> 
                Tossing double-headed coins and getting tails in an impossible event <br/> 
                rolling a die and getting number > 10 in an impossible outcome, etc.`,
            },
          },

          {
            id: 2,
            type: "mcq",
            question: "The complement of P(A) is ? ",
            option: {
              1: "1-P(A)",
              2: "1+P(A)",
              3: "1/P(A)",
              4: "None of these",
            },
            correct: {
              value: "1-P(A)",
            },
            explanation: {
              value: `The complement of P(A) is 1 -P(A) <br/> 
              refer formula list on left side for reference `,
            },
          },

          {
            id: 3,
            type: "mcq",
            question:
              "The probability of all the events in a sample space adds up to ?",
            option: {
              1: "1",
              2: "2",
              3: "3",
              4: "4",
            },
            correct: {
              value: "1",
            },
            explanation: {
              value: `refer formula list on left side for reference `,
            },
          },

          {
            id: 4,
            type: "mcq",
            question: "What will be the probability of an impossible event ?",
            option: {
              1: "0",
              2: "1",
              3: "Infinity",
              4: "None Of These",
            },
            correct: {
              value: "0",
            },
            explanation: {
              value: `refer last image of formula list`,
            },
          },

          {
            id: 5,
                type: "mcq",
                question: "The probability of selecting a rotten apple randomly from a heap of 900 apples is 0.18. What is the number of rotten apples in the heap?",
                option: {
                  1: "738",
                  2: "162",
                  3: "262",
                  4: "838"
                },
                correct: {
                  value: "162"
                },
                explanation: {
                  "value": "Given,Total number of apples in the heap = n(S) = 900 Let E be the event of selecting a rotten apple from the heap.Number of outcomes favourable to E = n(E) P(E) = n(E)/n(S)0.18 = n(E)/900 ⇒ n(E) = 900 × 0.18 ⇒ n(E) = 162 Therefore, the number of rotten apples in the heap = 162"
                  
                }
           },

           {
            id: 6,
            type:"mcq" ,
            question: "A single coin is tossed 5 times. What is the probability of getting at least one head?",
            option: {
              2: "27/32",
              3: "3/32",
              4: "1/32",
              1: "31/32"
            },
            correct: {
              value: "31/32"
              
            },
            explanation: {
              value: "As we know that probability is the prediction of a particular outcome of a random event. It is a set of all the possible outcomes for a random experiment. We can calculate the question with the formula of probability i.e. Probability =No.of favourable outcomes Total number of outcomes. Let us assume a coin to be fair and 2− sides. When we flip the coin five times, it has 2^5=32 outcomes. So we have the total number of outcomes =32"
            } 
          }
    ]
}