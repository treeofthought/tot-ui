import { useEffect } from 'react';
import SB2013_SEA_DEN from '../2013_SEA_DEN.png';
import SB2016_NE_ATL from '../2016_NE_ATL.png';
import SB2007_NYG_NE from '../2007_NYG_NE.png';
import SB2014_NE_SEA from '../2014_NE_SEA.png';

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
        <em>In collaboration with <a href="https://www.daniellecarrick.com/" target="_blank" rel="noreferrer">Danielle Carrick</a></em>
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
        <div className="row justify-content-center mb-5">
          <div className="flourish-embed flourish-table" style={{maxWidth: '800px'}} data-src="visualisation/12623219?662766"><script src="https://public.flourish.studio/resources/embed.js"></script></div>
        </div>
        <p>
          So, what were the most exciting Superbowls?
        </p>
        <p>
          <strong>Super Bowl XLII</strong> between New England and the New York Giants is third best in our composite score.  Here's the win probability chart:
        </p>
        <div className="text-center mb-5">
          <img src={SB2007_NYG_NE} style={{objectFit: 'contain', maxWidth: '800px', width:'100%'}} alt="Super Bowl XLII between New England and the New York Giants"/>
        </div>
        <p>
          <strong>Super Bowl LI</strong> between New England and Atlanta was the most surprising outcome by far, and this made it second in our composite score despite being average for motion and second-from last for tightness.
        </p>  
        <div className="text-center mb-5">
          <img src={SB2016_NE_ATL} style={{objectFit: 'contain', maxWidth: '800px', width:'100%' }} alt="Super Bowl LI between New England and Atlanta"/>
        </div>
        <p>
          This illustrates the tradeoff between these two metrics. In order to be extremely surprising, a game must be extremely lopsided!
        </p>
        <p>
          And ranking at number one on our composite score is <strong>Super Bowl LIX</strong> between New England and Seattle.  Looking at the win probability chart, it does seem like this game had a good balance of tightness, surprise, and motion! 
        </p>
        <div className="text-center mb-5">
          <img src={SB2014_NE_SEA} style={{objectFit: 'contain', maxWidth: '800px', width:'100%'}} alt="Super Bowl LIX between New England and Seatlle"/>
        </div>
        <p>
          The above illustrates that because we have three different metrics, the question of "most" exciting is complicated, because it matters how you balance those three metrics.
        </p>
        <p>
          The question of <em>least</em> exciting is not so complex, because <strong>Super Bowl XLVIII</strong> came dead last in all three metrics, making this the most one-sided, least-surprising, and static superbowl of them all. Here's a closer look at the win probability chart:
        </p>
        <div className="text-center mb-5">
          <img src={SB2013_SEA_DEN} style={{objectFit: 'contain', maxWidth: '800px', width:'100%'}} alt="Super Bowl XLVIII between Seattle and Denver"/>
        </div>
        <p className="text-center"><a href="/superbowl-excitement/methods">Learn more about how we compute these metrics</a></p>
        <div className="text-center">~~~</div>
        <h5>Acknowledgements</h5>
        <p><a href="https://www.nflfastr.com/" target="_blank" rel="noreferrer">nflfastR</a> provided the raw data that allowed us to derive and compute these metrics.</p> 
      </div>
    </>
  )
}

export default SuperBowlExcitement;
