import DraftLogin from '../components/draft-login.js';
import { useEffect } from 'react';

function SuperBowlExcitement() {
    useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://public.flourish.studio/resources/embed.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);
  return(
    <>
      <div className="d-flex flex-column align-items-center gap-2">
        <h1>Measuring Super Bowl Excitement</h1>
        <em>In collaboration with <a href="https://www.daniellecarrick.com/" target="_blank">Danielle Carrick</a></em>
      </div>
      <div className="col-md-10 offset-md-1 rounded-3 p-3 shadow bg-light mb-5">
        <p>
          From the musical performances to the commercials, the Super Bowl
          offers a lot of spectacle beyond a mere football game. Still,
          football is the main event, and your Super Bowl party will be that
          much more fun if the game itself is worth watching.
        </p>
        <p>
          In this spirit, we got interested in trying to rank the “excitement”
          of every Super Bowl this millennium.  Specifically, we ranked each game according to three different exciting qualities:
        </p>
        <ol>
          <li>
            <strong>Surprisingness</strong>: Was the winning team an underdog coming into the game? Were they behind most of the game? These attributes to lead to higher surprisingness scores.
          </li>
          <li>
            <strong>Tightness</strong>: Was it clear early on who would win the game? That would be a high tightness score.
          </li>
          <li>
            <strong>Motion</strong>: How much did the advantage ebb and flow over the course of the game?
          </li>
        </ol>
        <p>
          Explore our visualization below to see how each Super Bowl ranks along all three metrics! 
        </p>
        <div className="flourish-embed flourish-table" data-src="visualisation/12623219?662766"><script src="https://public.flourish.studio/resources/embed.js"></script></div>
        <p>
          So, what were the most exciting Superbowls?
        </p>
        <p>
          <strong>Super Bowl XLII</strong> between New England and the New York Giants did very well in all metrics. It was scored as second most surprising and third most for tightness and motion.
          <strong>Super Bowl LI</strong> between New England and Atlanta is an interesting game, ranking as the most surprising outcome, but also as the second-least tight game.  This illustrates the tradeoff between these two metrics. In order to be extremely surprising, a game must be extremely lopsided!
        </p>
        <p>
          Though there's some debate as to exactly which game is "most" exciting, we can say that <strong>Super Bowl XLVIII</strong> came dead last in all three metrics, making this the most one-sided, least-surprising, and static superbowl of them all.
        </p>
        <p className="text-center"><a href="/superbowl-excitement/methods">Learn more about how we compute these metrics</a></p>
        <div className="text-center">~~~</div>
        <h5>Acknowledgements</h5>
        <p><a href="https://www.nflfastr.com/" target="_blank">nflfastR</a> provided the raw data that allowed us to derive and compute these metrics.</p> 
      </div>
    </>
  )
}

export default SuperBowlExcitement;
