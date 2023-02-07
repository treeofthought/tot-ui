import { useEffect } from 'react';
import SB2013_SEA_DEN from '../2013_SEA_DEN.png';
import SB2016_NE_ATL from '../2016_NE_ATL.png';
import SB2007_NYG_NE from '../2007_NYG_NE.png';
import SB2014_NE_SEA from '../2014_NE_SEA.png';
import arch from '../arch.png';

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
      <div className="col-md-10 offset-md-1 rounded-3 p-3 pt-5 shadow bg-light mb-5 align-content-center">
        <div className="mx-auto" style={{maxWidth: '650px'}}>
          <p>
            From the musical performances to the commercials, the Super Bowl offers spectacles beyond mere football. But of course, Super Bowl parties are that much better when the game is worth watching.
          </p>
          <p>
            In this spirit, we decided to quantify the “excitement” of recent Super Bowls. To do this, we came up with three archetypes of “exciting” games:
          </p>
          <div class="flourish-embed flourish-chart" data-src="story/1821272?662766"></div>
          <p>
            Now all we need to do is find a way to rate every game by its similarities to these three archetypes!
          </p>
          <p>
            To do this, we invented three metrics, one for each archetype. The metrics are:
          </p>
          <ol>
            <li>
              <strong>Surprisingness</strong>: Is the average win probability close to zero?
            </li>
            <li>
              <strong>Tightness</strong>: Is the average win probability close to 50%?
            </li>
            <li>
              <strong>Motion</strong>: How much does the win probability spike up and down over the course of the game? 
            </li>
          </ol>
          <h2>Why three metrics?</h2>
          <p>
            Consider <strong>The Shocking Upset</strong>.  Of course it’s exciting to see an unbelievable comeback, but what about the first three quarters of the game? The Super Bowl takes almost four hours. That’s a lot of time to watch a lopsided game for a brief payoff.
          </p>
          <p>
            So, The Shocking Upset is not the most over all exciting game. (Neither are the Fierce Contest or the Give and Take, if you think about it). We really need a healthy blend of all three archetypes. Exciting games should have an upset and/or a comeback (surprise), but the game should still be a contest (tightness), and it should have dramatic swings of fortune (motion).
          </p>
          <p>
            To find this balance, we combined all three metrics into the <strong>composite score</strong>.  This is fairly subjective, because it matters how much you weight the individual metrics relative to each other. Would you rather see a close game or a surprising game?  For simplicity’s sake, we weighted all three metrics equally.
          </p>
          <p>
            Armed with a composite score, we can now rank the excitement of recent Super Bowls! 
          </p>
          <h2>So, what were the most exciting Superbowls?</h2>
          <p>Slow down, buddy! First...</p>
          <h2>Honorable Mention - The Least Exciting Game</h2>
          <h3 className="text-muted">Super Bowl XLVIII: Seattle Seahawks (43) vs Denver Broncos (8)</h3>
          <p>
            Seattle whooped Denver. While the Seahawks' dominant performance was impressive, the game was too lopsided to be truly thrilling.
          </p>
          <p>
            In fact, this game ranked dead last in all three metrics!  Behold, the least surprising, least tight, least motion Super Bowl ever played:
          </p>
          <div className="text-center mb-5">
            <img src={SB2013_SEA_DEN} style={{objectFit: 'contain', maxWidth: '800px', width:'100%'}} alt="Super Bowl XLVIII between Seattle and Denver"/>
          </div>
          <h2>Okay, NOW the exciting games...</h2>
          <h3 className="text-muted">3. Super Bowl XLII: New York Giants (17) vs New England Patriots (14)</h3>
          <p>
            The Giants upset the undefeated Patriots 17-14, with Eli Manning's last-minute touchdown pass to Plaxico Burress being the decisive play. This Super Bowl is widely regarded as one of the biggest upsets in NFL history, and is also remembered for <a href="https://en.wikipedia.org/wiki/Helmet_Catch" target="_blank" rel="noreferrer">the helmet catch</a>.
          </p>
          <div class="flourish-embed flourish-chart" data-src="visualisation/12658585?662766"></div>
          <h3 className="text-muted">2. Super Bowl LI: New England Patriots (34) vs Atlanta Falcons (28)</h3>
          <p>
            In which The Patriots made a historic comeback, overcoming a 25-point deficit to win in overtime with a score of 34-28. This is the first and so far only Super Bowl to go into overtime.  
          </p>
          <div class="flourish-embed flourish-chart" data-src="visualisation/12658526?662766"></div>
          <p>
            This was the most surprising outcome by far, which carried it to second place in our composite ranking, despite being of average motion and second-from-last for tightness.
          </p>
          <h3 className="text-muted">1. Super Bowl LIX: New England Patriots (28) vs Seattle Seahawks (24)</h3>
          <p>
            This game had one of the most dramatic finishes in Super Bowl history. The fourth quarter was a back-and-forth battle with both teams exchanging the lead multiple times. Seattle took the lead 24-21 with two minutes to go. The Patriots then drove down the field to score a touchdown and take the lead 28-24 with just over a minute remaining. The Seahawks had one final chance to score, but their pass was intercepted by Patriots' rookie Malcolm Butler, sealing the victory for New England. It was a thrilling end to an unforgettable game.
          </p>
          <div class="flourish-embed flourish-chart" data-src="story/1820082?662766"></div>
          <p>
            Notice how this game partially conforms to all three archetypes, being tight through the first half, surprising in the second half, and featuring lots of motion throughout.
          </p>
          <h2>Explore</h2>
          <p>
            Now that you understand our rankings and how to read win probability charts, take a look at our sortable visualization combining the scores for every Super Bowl since 2000. Which one do you think was most exciting?
          </p>
          <div className="row justify-content-center mb-5">
            <div className="flourish-embed flourish-table" style={{maxWidth: '800px'}} data-src="visualisation/12623219?662766"><script src="https://public.flourish.studio/resources/embed.js"></script></div>
          </div>
          <p className="text-center"><a href="/superbowl-excitement/methods">Learn more about how we compute these metrics</a></p>
          <div className="text-center">~~~</div>
          <h5>Acknowledgements</h5>
          <p><a href="https://www.nflfastr.com/" target="_blank" rel="noreferrer">nflfastR</a> provided the raw data that allowed us to derive and compute these metrics.</p> 
        </div>
      </div>
    </>
  )
}

export default SuperBowlExcitement;
