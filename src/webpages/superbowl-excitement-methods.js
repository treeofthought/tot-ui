import DraftLogin from '../components/draft-login.js';
import SB2013_SEA_DEN from '../2013_SEA_DEN.png';

function SuperBowlExcitementMethod() {
  return(
    <DraftLogin>
      <div className="d-flex flex-column align-items-center gap-2">
        <div className="d-flex flex-column align-items-center gap-2">
          <h1>Super Bowl Excitement Methodology</h1>
          <em>In collaboration with <a href="https://www.daniellecarrick.com/" target="_blank">Danielle Carrick</a></em>
        </div>
        <div className="col-md-10 offset-md-1 rounded-3 p-3 shadow bg-light mb-3">
          <h2>Contents</h2>
          <ul>
            <li className="contentsList h5">Why win probability graphs?</li>
            <li className="contentsList h5">The most boring game imaginable</li>
            <li className="contentsList h5">Surprisingness</li>
            <li className="contentsList h5">Tightness</li>
            <li className="contentsList h5">Motion</li>
            <li className="contentsList h5">Composite</li>
            <li className="contentsList h5">Wait, but why didn't you...?</li>
          </ul>
          <h2>Why win probability graphs?</h2>
          <p>While thinking about past exciting Super Bowls, I kept coming back to Super Bowl LI between New England and Atlanta. New England’s win probability graph provides a visual shorthand for the extreme drama of the game:</p>
          <div className="text-center mb-5">
            <img src={SB2013_SEA_DEN} style={{objectFit: 'contain', maxWidth: '800px', width:'100%'}} />
          </div>
          <p>The plot tells us that the Patriots kept it close for the first quarter, then were down and nearly out until the very end. They managed to force overtime, which they won in surprising and sudden fashion.  Not bad for one squiggly line!</p>
          <p>So, the win probability time series contains a lot of information about the game. This means metrics derived from it will <em>also</em> contain a lot of information about the game.</p>
          <p>But <em>what</em> metrics?</p>
          <h2>The most boring game imaginable</h2>
          <p>To calibrate our metrics, let's start with the <em>least</em> exciting game.  I present to you, the win probability graph of The Most Boring Game Imaginable:</p>
          <div className="text-center mb-5">
            <img src={SB2013_SEA_DEN} style={{objectFit: 'contain', maxWidth: '800px', width:'100%'}} />
          </div>
          <p>In this game, we are certain of who is going to win as soon as it kicks off, and it never even looks for a second like the favored team might lose. We may as well not have watched the game at all! So whatever metrics we come up with, they should always assign this game a zero.</p>
          <h2>Surprisingness</h2>
          <p>
            The Most Boring Game Imaginable suggests our first metric: how much does the game surprise us?
          </p>
          <p>
            Because we are already dealing with probabilities, there's a very easy starting point here.  What was the average value of the win probability over the course of the entire game?  If this is close to 0, then the outcome is very surprisng, and if it's close to 1, the outcome is very unsurprising.
          </p>
          <p>
            That's almost perfect, but it's backwards.  We want 0 to be least surprising and 1 to be most surprising, so we replace "average win probability" with "average <em>lose</em> probability" (which is just 1 minus the win probability).
          </p>
          <p>
            This measure is great! It's simple to calculate, easy to understand, and easy to interpret. It also has an easy visual inerpretation...the surprisingness is "the area above the line" in the win probability chart.
          </p>
          <p>To show what we mean, here's the most and least surprising games:</p>
          <div className="text-center mb-5">
            <img src={SB2013_SEA_DEN} style={{objectFit: 'contain', maxWidth: '800px', width:'100%'}} />
          </div>
          <h2>Tightness</h2>
          <p>
            Can a game be <em>too</em> surprising? Notwithstanding that it's always fun to see <em>your</em> team kick ass in a big game, let's assume in general we don't want games getting too far out of hand, <em>even if a miraculous late comeback occurs</em>. After all, The Superbowl takes nearly four hours. That's a long time to watch a seeming blowout for a few plays of exciting payoff at the end. Isn't it better if the game is a fiercely contested struggle throughout?
          </p>
          <p>
            A simple way to think about this would be "how similar is this game to a complete tossup?"
          </p>
          <p>
            Mathematically, this manifests as "is the win probability mostly close to 0.5%?" In other words, "what is the average absolute distance between the win probability and 0.5?"
          </p>
          <p>
            But just like with surprisingness, we need to do some algebra so that the metric is "0" when the answer is "very far" and "1" when the answer is "very close."  In this case, the result of that algebra is 1 - 2 * abs(0.5 - win probability)
          </p>
          <p>
            This metric <em>also</em> has a convenienent visual interpretation.  If there is more area between the l 
          </p>
          <h2>Motion</h2>
          <p>
            We've got two good metrics now that we can use to balance the trade off between dramatic late comebacks and the need to be interesting throughout the game.
          </p>
          <p>
            But there's a problem. Here are two clearly different games, but they have the same tightness and surprisingness measures!
          </p> 
          <div className="text-center mb-5">
            <img src={SB2013_SEA_DEN} style={{objectFit: 'contain', maxWidth: '800px', width:'100%'}} />
          </div>
          <p>Intuitively, the game on the left is more exciting, because it has more reversals of fortune than the one on the right. This is what we call <strong>motion</strong></p>
          <p>To calculate motion, we look at the change in win probability from one play to the next.  Big changes contribute a lot of motion, small changes contribute less motion.</p>
          <p>To be precise, our motion measure is the <a href="https://en.wikipedia.org/wiki/Root_mean_square" target="_blank">root mean square</a> of the change in win probability.</p>
          <p>A simple visual way to think about motion is of course "how much does the line squiggle?"  To show what we mean, here's the games with the most and least motion:</p>
          <div className="text-center mb-5">
            <img src={SB2013_SEA_DEN} style={{objectFit: 'contain', maxWidth: '800px', width:'100%'}} />
          </div>
          <p>Unfortunately, unlike surprisingness and tightness, motion does not have a finite range.  The most boring game imaginable does have 0 motion, but there is no maximum theoretical motion! (It's not hard to see why...there's no such thing as a line which is "the most squiggly")</p>
          <p>In practice, though, motion scores of real games tend to fall between 0.01 and 0.10</p>
          <h2>Bringing it all together -- Composite score</h2>
          <p>We've come up with three ways to measure excitement, which is no mean feat. But to answer which game is <strong>the most</strong>  exciting, we need some way to combine these three measures into one final ordered list.</p>
          <p>There are lots of ways to do that, and in general this is a very complicated stats problem which is hard to talk about simply.</p>
          <p>But, all those complicated stats challenges really boil down to "what are the relative importances of each metric?  If we sacrifice some tightness to get more surprise, does that make the game more or less exciting?"</p>
          <p>For simplicity, we chose to value all metrics equally (though even that is not as simple as it sounds). And we chose to combine them using something called a "euclidean norm."  That's just a snobby way of saying "the composite score is the square root of the sum of the individual scores squared."  In other words, we used the pythagorean theorem to compute the composite!</p>
          <h2>Wait, by why didn't you...?</h2>
          <p>We thought pretty hard about this project and explored a lot of concepts that didn't make it into the final draft.  So maybe I can tell you why we did or didn't approach something a certain way...or maybe we plum didn't think of it!  Reach out to me on <a href="https://twitter.com/treeofthought1" target="_blank">twitter</a> with questions or comments, I'd love to discuss.</p>
          <h2>Mathematical Details</h2>
          <h3>How come motion is squared?</h3>
          <h3>What's so hard about weighting all metrics equally?</h3>
        </div>
          <em>Back to <a href="/superbowl-excitement">Super Bowl Excitement</a></em>
      </div>
    </DraftLogin>
  )
}

export default SuperBowlExcitementMethod;
