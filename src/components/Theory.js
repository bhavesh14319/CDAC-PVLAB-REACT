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
        <div className="theory_box">
          <div className="theory_obj">
            <h3 className='theory_h3'>Objective:</h3>
            <p style={{paddingLeft : "40px"}}  className="theory_p">
              The objective of this vlab is to understand and implement basic
              concepts of probability.
            </p>
          </div>
          <hr />
          <div className="theory">
            <h3 className='theory_h3'>Theory:</h3>


            <p>
              <ul type='bullet' style={{ paddingLeft: "40px", listStylePosition: "outside" }}>
                <li>Probability is a measure of the likelihood of an event to occur.</li>
                <li>Many events cannot be predicted with total certainty. We can predict only the chance of an event to occur i.e. how likely they are to happen, using it.</li>
                <li>Probability can range in from 0 to 1, where 0 means the event to be an impossible one and 1 indicates a certain event.</li>
                <li>The probability of all the events in a sample space adds up to 1.</li>
              </ul>

            </p>



            <div>
              <h4 className='theory_h4'>Event and outcome</h4>
              <ul type='bullet' style={{ paddingLeft: "40px", listStylePosition: "outside" }}>



                <li>An Outcome is a result of a random experiment. For example, when we roll a dice getting six is an outcome.</li>
                <li>An Event is a set of outcomes. For example when we roll dice the probability of getting a number less than five is an event</li>
              </ul>
            </div>




            <h4 className='theory_h4'>Probability Tree</h4>
            <ul type='bullet' style={{ paddingLeft: "40px", listStylePosition: "outside" }}>

              <li> The tree diagram helps to organize and visualize the different
                possible outcomes.</li>
              <li>Branches and ends of the tree are two main
                positions. Probability of each branch is written on the branch,
                whereas the ends are containing the final outcome.</li>
              <li>Tree diagrams are used to figure out when to multiply and when to add. You can see the tree diagram for a coin:</li>

            </ul>





            <h4 className='theory_h4'>Probability of an Event</h4>
            <ul type='bullet' style={{ paddingLeft: "40px", listStylePosition: "outside" }}>

              <li>Assume an event E can occur in r ways out of a sum of n probable or possible equally likely ways.Then the  of
                happening of the event or its success is expressed as: <br /> <span className='li-span'> P(E) = r/n</span></li>
              <li>The probability that the event will not occur or known as its
                failure is expressed as: <br />
                <span className='li-span'> P(E') = (n-r)/n = 1-(r/n)</span></li>
              <li>E' represents that the event will not occur. Therefore, now we can say: <br /><span className='li-span'>P(E) + P(E') = 1</span></li>
              <li>This means that the total of all the probabilities in any random test or experiment is equal to 1.</li>
            </ul>







            <h4 className='theory_h4'>Applications of Probability</h4>
            <p style={{paddingLeft : "20px", marginBottom: "10px" }} >Probability has a wide variety of applications in real life.
              Some of the common applications which we see in our everyday
              life while checking the results of the following events: </p>
            <ul type='1' style={{ paddingLeft: "40px", listStylePosition: "outside" }}>
              <li>Choosing a card from the deck of cards.</li>
              <li>Flipping a coin.</li>
              <li>Throwing a dice in the air.</li>
              <li>Pulling a red ball out of a bucket of red and white balls.</li>
              <li>Winning a lucky draw.</li>

            </ul>




            <div className="theory_lrnoutcome"></div>




            <h4 className='theory_h4'>Types of Probability</h4>
            <p style={{paddingLeft : "20px",marginBottom: "10px" }}>There are three major types of probabilities: </p>
            <ul type='bullet' style={{ paddingLeft: "40px", listStylePosition: "outside" }}>

              <li>Theoretical Probability</li>
              <li>Experimental Probability</li>
              <li>Axiomatic Probability</li>

            </ul>

            <h5 className='theory_h4'>Theoretical Probability</h5><p style={{paddingLeft : "20px",marginBottom: "10px" }}>It is based on the possible chances of something to happen. The theoretical probability is mainly based on the reasoning behind probability. For example, if a coin is tossed, the theoretical probability of getting a head will be ½. </p> 

            <h5 className='theory_h4'>Experimental Probability</h5> <p style={{paddingLeft : "20px",marginBottom: "10px" }}>It is based on the basis of the observations of an experiment. The experimental probability can be calculated based on the number of possible outcomes by the total number of trials. For example, if a coin is tossed 10 times and heads is recorded 6 times then, the experimental probability for heads is 6/10 or, 3/5.</p>

            <h5 className='theory_h4'>Axiomatic Probability</h5><p style={{paddingLeft : "20px",marginBottom: "10px" }}> In axiomatic probability, a set of rules or axioms are set which applies to all types. These axioms are set by Kolmogorov and are known as Kolmogorov's three axioms. With the axiomatic approach to probability, the chances of occurrence or non-occurrence of the events can be quantified. The axiomatic probability lesson covers this concept in detail with Kolmogorov's three rules (axioms) along with various examples.</p>




          </div>
          <hr />

          <div className="imp-terms">
            <h3 className='theory_h3' style={{marginBottom:"20px",textAlign:"center"}}>Important Terms related to Probability:</h3>
            <img id='theory_terms' src={img1} alt="" />
          </div>
        </div>
        <aside className="theory_aside-container">


          <img id="theory_fst-img" src={img5} alt="" />
          <hr />
          <img id="theory_snd-img" src={img6} alt="" />
          <hr />

          <div className="theory_trd">
            <img id="theory_trd-img" src={img2} alt="" />
            <caption id="theory_c1">Probability for a single coin </caption>
          </div>
          <hr />

          <img id='theory_frt-img' src={img3} alt="" /><hr />


        </aside>
      </div>

    </>
  );
}

export default Theory;
