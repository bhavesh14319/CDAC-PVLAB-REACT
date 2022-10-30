import "../css/Theory.css";
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";
import img5 from "./images/5.jfif";
import img6 from "./images/6.png";

function Theory() {
  return (
    <>
      
      <div className="theory_container">
        <div className="box">
          <div className="obj">
            <h3 className = 'h3'>Objective:</h3>
            <p>
              The objective of this vlab is to understand and implement basic
              concepts of probability.
            </p>
          </div>
          <hr />
          <div className="theory">
            <h3 className = 'h3'>Theory:</h3>


            <p>
              <ul type='bullet'>
                <li>Probability is a measure of the likelihood of an event to occur.</li>
                <li>Many events cannot be predicted with total certainty. We can predict only the chance of an event to occur i.e.
              how likely they are to happen, using it.</li>
              <li>Probability can range in from 0 to 1, where 0 means the event to be an impossible one and 1 indicates a certain event.</li>
              <li>The probability of all the events in a sample space adds up to 1.</li>
              </ul>
             
            </p>



            <div>
              <ul type='bullet'>
              <h4 className='h4'>Event and outcome</h4>


                <li>An Outcome is a result of a random experiment. For example, when we roll a dice getting six is an outcome.</li>
                <li>An Event is a set of outcomes. For example when we roll dice the probability of getting a number less than five is an event</li>
              </ul>
            </div>


            

              <ul type='bullet'>
              <h4 className='h4'>Probability Tree</h4>
              <li> The tree diagram helps to organize and visualize the different
                possible outcomes.</li>
              <li>Branches and ends of the tree are two main
                positions. Probability of each branch is written on the branch,
                whereas the ends are containing the final outcome.</li>
              <li>Tree diagrams are used to figure out when to multiply and when to add. You can see the tree diagram for a coin:</li>
              
              </ul>

              
              

              <div>
                <ul type = 'bullet'>
                <h4 className='h4'>Probability of an Event</h4>
                <li>Assume an event E can occur in r ways out of a sum of n probable or possible equally likely ways.Then the  of
                happening of the event or its success is expressed as: <br /> <span className = 'li-span'> P(E) = r/n</span></li>
                <li>The probability that the event will not occur or known as its
                failure is expressed as: <br />
                 <span className = 'li-span'> P(E') = (n-r)/n = 1-(r/n)</span></li>
                <li>E' represents that the event will not occur. Therefore, now we can say: <br /><span className = 'li-span'>P(E) + P(E') = 1</span></li>
                <li>This means that the total of all the probabilities in any random test or experiment is equal to 1.</li>
                </ul>
                </div>
            

            
              
            
              <div>
              <ul type='1'>
              <h4 className='h4'>Applications of Probability</h4>
              
                Probability has a wide variety of applications in real life.
                Some of the common applications which we see in our everyday
                life while checking the results of the following events: <br />
                <li>Choosing a card from the deck of cards.</li>
                <li>Flipping a coin.</li>
                <li>Throwing a dice in the air.</li>
                <li>Pulling a red ball out of a bucket of red and white balls.</li>
                <li>Winning a lucky draw.</li>
                  
                </ul>
              
                </div>
          </div>
         
        
          <div className="lrnoutcome"></div>

          

          <div>
            <ul type='bullet'>
            <h4 className='h4'>Types of Probability</h4>
              <p>
              There are three major types of probabilities:
              <li>Theoretical Probability</li>
              <li>Experimental Probability</li>
              <li>Axiomatic Probability</li>
              </p>

              <p>
                <h5 className='h5'>Theoretical Probability</h5>It is based on the possible chances of something to happen. The theoretical probability is mainly based on the reasoning behind probability. For example, if a coin is tossed, the theoretical probability of getting a head will be ½. <br />

                <h5 className='h5'>Experimental Probability</h5>It is based on the basis of the observations of an experiment. The experimental probability can be calculated based on the number of possible outcomes by the total number of trials. For example, if a coin is tossed 10 times and heads is recorded 6 times then, the experimental probability for heads is 6/10 or, 3/5. <br />

                <h5 className='h5'>Axiomatic Probability</h5>In axiomatic probability, a set of rules or axioms are set which applies to all types. These axioms are set by Kolmogorov and are known as Kolmogorov's three axioms. With the axiomatic approach to probability, the chances of occurrence or non-occurrence of the events can be quantified. The axiomatic probability lesson covers this concept in detail with Kolmogorov's three rules (axioms) along with various examples.<br />

              </p>

            </ul>
            
          </div>
          <hr />

          <div className="imp-terms">
            <h3 className = 'h3'>Important Terms related to Probability:</h3>
            <img id = 'terms' src={img1} alt="" />
          </div>
        </div>
        <aside className="aside-container">
         

          <img id="fst-img" src={img5} alt="" />
          <hr />
          <img id="snd-img" src={img6} alt="" />
          <hr />

          <div className="trd">
            <img id="trd-img" src={img2} alt="" />
            <caption id="c1">Probability for a single coin </caption>
          </div>
          <hr />

          <img id='frt-img'src={img3} alt="" /><hr />

          
        </aside>
      </div>
      
    </>
  );
}

export default Theory;
