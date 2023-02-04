import SB2016_NE_ATL from '../2016_NE_ATL.png';
import boringPlot from '../boring_plot.png';
import surpriseExtremes from '../surprise_extremes.png';
import tightExtremes from '../tight_extremes.png';
import motionMotive from '../motion_motive.png';
import motionExtremes from '../motion_extremes.png';
// import { MathComponent } from "mathjax-react";

function SuperBowlExcitementMethod() {
  // const example = String.raw`\int_{-\infty}^{\infty}e^{-x^2}\ dx`;
  // const surpriseForm = String.raw`Surprisingness = \sum_{i=1}^n \frac{1 - w_i}{n}`;
  // const tightForm = String.raw`Tightnesss = 1 - 2 * \big|0.5 - w_i\big|`
  
  return(
      <>
        <div className="d-flex flex-column align-items-center gap-2">
          <h1>Super Bowl Excitement Methodology</h1>
          <em>In collaboration with <a href="https://www.daniellecarrick.com/" target="_blank" rel="noreferrer">Danielle Carrick</a></em>
        </div>
        <div className="col-md-10 offset-md-1 rounded-3 p-3 p-3 pt-5 shadow bg-light mb-3">
          <div className="mx-auto" style={{maxWidth: '650px'}}>
            <p>
              Here we go into detail on the metrics we used for <a href="/superbowl-excitement">measuring Super Bowl excitement</a>
            </p>
            <h2>Contents</h2>
            <ul>
              <li className="contentsList h5"><a href="#why-win-probability">Why win probability graphs?</a></li>
              <li className="contentsList h5"><a href="#the-most-boring">The most boring game imaginable</a></li>
              <li className="contentsList h5"><a href="#surprisingness">Surprisingness</a></li>
              <li className="contentsList h5"><a href="#tightness">Tightness</a></li>
              <li className="contentsList h5"><a href="#motion">Motion</a></li>
              <li className="contentsList h5"><a href="#composite">Composite</a></li>
              <li className="contentsList h5"><a href="#why-didnt-you">Wait, but why didn't you...?</a></li>
              <li className="contentsList h5"><a href="#mathematical-details">Mathematical details</a></li>
            </ul>
            <h2 id="why-win-probability">Why win probability graphs?</h2>
            <p>Win probability graphs give us a visual shorthand what happened in a football game.  Consider the graph for Super Bowl LI between New England and Atlanta:</p>
            <div className="text-center mb-5">
              <img src={SB2016_NE_ATL} style={{objectFit: 'contain', maxWidth: '800px', width:'100%'}} alt="Win probabilty chart for Super Bowl LI between New England and Atlanta"/>
            </div>
            <p>We can see that the Patriots kept it close for the first quarter, then were down and nearly out until the very end. They managed to force overtime, which they won in sudden fashion.  Not bad for one squiggly line!</p>
            <p>Of course, the graph isn't <em>really</em> helpful for calculation. The graph is just a way to help us understand a list of numbers.  Numbers we can use to calculate metrics</p>
            <p>But <em>what</em> metrics?</p>
            <h2 id="the-most-boring">The most boring game imaginable</h2>
            <p>To derive our metrics, let's start with the <em>least</em> exciting game.  I present to you, the win probability graph of The Most Boring Game Imaginable:</p>
            <div className="text-center mb-5">
              <img src={boringPlot} style={{objectFit: 'contain', maxWidth: '800px', width:'100%'}} alt="A maximally uninteresting game"/>
            </div>
            <p>In this game, we are certain of who is going to win as soon as it kicks off, and it never looks for a second like the favored team might lose. We didn't even really need to watch that game! So <strong>whatever metrics we come up with, they should always be zero for this game.</strong></p>
            <h2 id="surprisingness">Surprisingness</h2>
            <p>
              The Most Boring Game Imaginable suggests our first metric: how much does the game surprise us?
            </p>
            <p>
              Because we are already dealing with probabilities, there's a very easy starting point here.  What was the average value of the win probability over the course of the entire game?  If this is close to 0, then the outcome is very surprising (we mostly thought the winning team would lose!), and if it's close to 1, the outcome is very unsurprising.
            </p>
            <p>
              That's almost perfect, but it's backwards.  We want 0 to be least surprising and 1 to be most surprising, so we replace "average win probability" with "average <em>lose</em> probability" (which is just 1 minus the win probability).
            </p>
            <p>
              As an equation, the metric is: 
            </p>
            <div>LaTex here if I can figure that out</div>
            {/*<MathComponent tex={surpriseForm} display={true} />*/}
            <p>
              This measure is great! It's simple to calculate, easy to understand, and easy to interpret. It also has a clear geometric meaning...the surprisingness is "the area above the line" in the win probability chart.
            </p>
            <p>To show what we mean, here's the most and least surprising games:</p>
            <div className="text-center mb-5">
              <img src={surpriseExtremes} style={{objectFit: 'contain', maxWidth: '800px', width:'100%'}} alt="Games with the most and least surprisingness"/>
            </div>
            <h2 id="tightness">Tightness</h2>
            <p>
              Can a game be <em>too</em> surprising? While it's always fun to see <em>your</em> team kick ass in a big game, let's assume in general we don't want games getting too far out of hand, <em>even if a miraculous late comeback occurs</em>. After all, The Superbowl takes nearly four hours. That's a long time to watch a lopsided game for one big payoff at the end. Isn't it better if the game is a fiercely contested struggle throughout?
            </p>
            <p>
              In other words, we need a way to measure how closely contested a game is.
            </p>
            <p>
              Mathematically, this manifests as "is the win probability mostly close to 0.5?" A simple formula for this would be the average absolute value of 0.5 minus the win probability.
            </p>
            <p>
              But just like with surprisingness, we need to do some algebra so that the metric is  close to 0 when the game is not very tight, and "1" when the game is very tight.  In this case, the result of that algebra is:
            </p>
             <div>LaTex here if I can figure that out</div>
            <p>
              This metric <em>also</em> has a convenienent visual interpretation.  If there is more area between the win probability line and the 50% mark, then the game is less tight.  Here's a picture:
            </p>
            <div className="text-center mb-5">
              <img src={tightExtremes} style={{objectFit: 'contain', maxWidth: '800px', width:'100%'}} alt="Games with the most and least tightness"/>
            </div>
            <h2 id="motion">Motion</h2>
            <p>
              Now we've got two metrics that we can use to balance the trade off between dramatic late comebacks and close, down-to-the-wire games.
            </p>
            <p>
              But there's a problem. Here are two clearly different games, but they have the same tightness and surprisingness measures!
            </p> 
            <div className="text-center mb-5">
              <img src={motionMotive} style={{objectFit: 'contain', maxWidth: '800px', width:'100%'}} alt="An example of why we need motion in addition to tightness and surprise"/>
            </div>
            <p>Intuitively, the game on the right is more exciting, because it has more reversals of fortune than the one on the left. This is what we call <strong>motion</strong></p>
            <p>To calculate motion, we look at the change in win probability from one play to the next.  Big changes contribute a lot of motion, small changes contribute less motion.</p>
            <p>To be precise, our motion measure is the <a href="https://en.wikipedia.org/wiki/Root_mean_square" target="_blank" rel="noreferrer">root mean square</a> of the change in win probability.</p>
            <p>A simple visual way to think about motion is of course "how much does the line squiggle?"  To show what we mean, here's the games with the most and least motion:</p>
            <div className="text-center mb-5">
              <img src={motionExtremes} style={{objectFit: 'contain', maxWidth: '800px', width:'100%'}} alt="The games with the most and least motion"/>
            </div>
            <p>Unfortunately, unlike surprisingness and tightness, motion does not have a finite range.  The most boring game imaginable does have 0 motion, but there is no maximum theoretical motion! (It's not hard to see why...there's no such thing as a line which is "the most squiggly")</p>
            <p>In practice, though, motion scores of real games tend to fall between 0.01 and 0.10</p>
            <h2 id="composite">Bringing it all together -- Composite score</h2>
            <p>We've come up with three ways to measure excitement, which is no mean feat. But to answer which game is <strong>the most</strong>  exciting, we need some way to combine these three measures into one final ordered list.</p>
            <p>There are lots of ways to do that, and in general this is a very complicated stats problem which is hard to talk about simply.</p>
            <p>But, all those complicated stats challenges really boil down to "what are the relative importances of each metric?  If we sacrifice some tightness to get more surprise, does that make the game more or less exciting?"</p>
            <p>For simplicity, we chose to value all metrics equally (though even that is not as simple as it sounds). And we chose to combine them using something called a "euclidean norm."  That's just a snobby way of saying "the composite score is the square root of the sum of the individual scores squared."  In other words, we used the pythagorean theorem to compute the composite!</p>
            <h2 id="why-didnt-you">Wait, by why didn't you...?</h2>
            <p>We thought pretty hard about this project and explored a lot of concepts that didn't make it into the final draft.  So maybe I can tell you why we did or didn't approach something a certain way...or maybe we plum didn't think of it!  Reach out to me on <a href="https://twitter.com/treeofthought1" target="_blank" rel="noreferrer">twitter</a> with questions or comments, I'd love to discuss.</p>
            <h2 id="mathematical-details">Mathematical Details</h2>
            <h3>How come motion is squared?</h3>
            <h3>What's so hard about weighting all metrics equally?</h3>
            <h3>A closer look at the relationship between surprisingness and tightness</h3>
            <h3>How might we improve on motion?</h3>
            <h3>Other metrics we might have employed</h3>
          </div>
        </div>
        <em className="text-center mb-5">Back to <a href="/superbowl-excitement">Super Bowl Excitement</a></em>
      </>
  )
}

export default SuperBowlExcitementMethod;
