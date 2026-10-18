// Illustrative artwork drawn in code: flat, three colours, no stock. These stand in for real screens until those are supplied.


function Puzzle() {
  const rows = ['pppsp.', 'p.pppp', 'psppp.', 'pppp.s'];
  const tone = { p: 'f-p2', '.': 'f-p3', s: 'f-s' };
  return (
    <g>
      {rows.map((r, y) =>
        [...r].map((c, x) => (
          <rect key={`${x}-${y}`} className={tone[c]} x={104 + x * 48} y={86 + y * 48} width="40" height="40" rx="9" />
        ))
      )}
      <g className="art-fall">
        <rect className="f-p" x="296" y="22" width="40" height="40" rx="9" />
        <path className="s-s" d="M306 8v-6M316 10V0M326 8V2" />
      </g>
      <path className="s-s" d="M112 290c60 18 190 18 256 0" />
    </g>
  );
}

function Orbit() {
  const dots = Array.from({ length: 10 }, (_, i) => {
    const a = (i / 10) * Math.PI * 2 - Math.PI / 2;
    return [240 + Math.cos(a) * 112, 160 + Math.sin(a) * 112, i];
  });
  return (
    <g>
      <ellipse className="s-p2" cx="240" cy="160" rx="170" ry="70" transform="rotate(-18 240 160)" />
      <ellipse className="s-p2" cx="240" cy="160" rx="170" ry="70" transform="rotate(32 240 160)" />
      <circle className="s-p3" cx="240" cy="160" r="112" fill="none" />
      {dots.map(([x, y, i]) => (
        <g key={i}>
          <line className="s-p2" x1="240" y1="160" x2={x} y2={y} />
          <circle className={i === 7 ? 'f-s' : 'f-p'} cx={x} cy={y} r={i === 7 ? 9 : 6} />
        </g>
      ))}
      <circle className="f-s" cx="240" cy="160" r="26" />
      <circle className="f-i" cx="240" cy="160" r="10" />
    </g>
  );
}

function Ads() {
  return (
    <g>
      <rect className="s-p3" x="70" y="36" width="140" height="248" rx="24" fill="none" />
      <rect className="f-p2" x="80" y="54" width="120" height="178" rx="12" />
      <circle className="f-s" cx="140" cy="143" r="34" />
      <path className="f-p" d="M130 126l30 17-30 17z" />
      <rect className="f-p3" x="94" y="248" width="92" height="8" rx="4" />
      {[1, 2, 3, 4].map((i) => (
        <path key={i} className={i === 4 ? 's-s' : 's-p2'} d={`M${236 + i * 22} ${143 - i * 26}a${i * 34} ${i * 34} 0 0 1 0 ${i * 52}`} />
      ))}
    </g>
  );
}

function Drama() {
  return (
    <g>
      <rect className="s-p3" x="70" y="30" width="118" height="262" rx="22" fill="none" />
      <rect className="f-p2" x="80" y="48" width="98" height="200" rx="10" />
      <circle className="f-s" cx="129" cy="140" r="26" />
      <path className="f-p" d="M122 128l20 12-20 12z" />
      <rect className="f-p3" x="92" y="262" width="74" height="6" rx="3" />
      <g className="s-p2">
        <path d="M232 160h50M282 160c28 0 28-60 56-60M282 160c28 0 28 60 56 60M338 100c28 0 24-36 56-36M338 100c28 0 24 36 56 36M338 220c28 0 24-24 56-24M338 220c28 0 24 24 56 24" fill="none" />
      </g>
      {[[232, 160, 'f-p'], [282, 160, 'f-p'], [338, 100, 'f-p'], [338, 220, 'f-s'], [394, 64, 'f-p3'], [394, 136, 'f-p3'], [394, 196, 'f-p3'], [394, 244, 'f-s']].map(([x, y, c], i) => (
        <circle key={i} className={c} cx={x} cy={y} r="9" />
      ))}
    </g>
  );
}

function Clients() {
  return (
    <g>
      <rect className="f-p2" x="60" y="44" width="260" height="190" rx="14" />
      <rect className="f-p3" x="60" y="44" width="260" height="26" rx="14" />
      <circle className="f-s" cx="80" cy="57" r="4" />
      <circle className="f-p" cx="94" cy="57" r="4" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} className={i === 1 ? 'f-s' : 'f-p3'} x={78 + (i % 3) * 80} y={86 + Math.floor(i / 3) * 68} width="68" height="56" rx="10" />
      ))}
      <rect className="f-p" x="236" y="150" width="204" height="130" rx="14" />
      <rect className="f-i" x="252" y="168" width="172" height="12" rx="6" />
      <rect className="f-p3" x="252" y="192" width="120" height="8" rx="4" />
      <circle className="f-s" cx="404" cy="244" r="20" />
      <path className="s-p" d="M396 244l6 6 12-14" fill="none" />
    </g>
  );
}

function Table() {
  const plates = [[240, 112], [292, 160], [240, 208], [188, 160]];
  return (
    <g>
      <circle className="f-p3" cx="240" cy="160" r="86" />
      <circle className="f-p2" cx="240" cy="160" r="66" />
      {plates.map(([x, y], i) => (
        <g key={i}>
          <circle className="f-p" cx={x} cy={y} r="18" />
          <circle className="f-i" cx={x} cy={y} r="9" />
        </g>
      ))}
      <circle className="s-s" cx="240" cy="160" r="128" fill="none" strokeDasharray="4 10" />
      <g>
        <path className="f-s" d="M392 64c-20 0-32 14-32 32 0 24 32 52 32 52s32-28 32-52c0-18-12-32-32-32z" />
        <circle className="f-i" cx="392" cy="96" r="10" />
      </g>
    </g>
  );
}

function Paper() {
  const sq = (x, y, c) => <rect key={`${x}${y}`} className={c} x={x} y={y} width="48" height="48" />;
  return (
    <g>
      <g className="s-p">
        {sq(96, 40, 'f-p3')}
        {sq(48, 88, 'f-p2')}
        {sq(96, 88, 'f-p2')}
        {sq(144, 88, 'f-p2')}
        {sq(192, 88, 'f-p2')}
        {sq(96, 136, 'f-p3')}
      </g>
      <path className="s-s" d="M96 88h48M96 136h48M144 88v48M96 88v48" strokeDasharray="4 5" />
      <g transform="translate(300 90)">
        <path className="f-p3" d="M0 40L56 8l56 32-56 32z" />
        <path className="f-s" d="M0 40v64l56 32V72z" />
        <path className="f-p2" d="M112 40v64l-56 32V72z" />
      </g>
      <path className="s-p" d="M392 52v-24h-24M392 252v24h-24M268 28h-24v24M268 276h-24v-24" fill="none" />
    </g>
  );
}

function Pixel() {
  const map = ['..aaaa..', '.aaaaaa.', 'aabaabaa', 'aaaaaaaa', 'a.aaaa.a', '..a..a..', '.aa..aa.', '........'];
  return (
    <g>
      {map.map((r, y) =>
        [...r].map((c, x) => c !== '.' && <rect key={`${x}${y}`} className={c === 'b' ? 'f-i' : 'f-p'} x={68 + x * 20} y={50 + y * 20} width="20" height="20" />)
      )}
      <rect className="f-s" x="108" y="90" width="20" height="20" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} className={i === 2 ? 'f-s' : 'f-p3'} x={270 + i * 40} y="70" width="32" height="32" rx={i % 2 ? 16 : 6} />
      ))}
      <rect className="f-s" x="270" y="150" width="180" height="86" rx="14" />
      <circle className="f-p" cx="360" cy="193" r="22" />
      <circle className="f-s" cx="360" cy="193" r="11" />
    </g>
  );
}

const SCENES = { puzzle: Puzzle, orbit: Orbit, ads: Ads, drama: Drama, clients: Clients, table: Table, paper: Paper, pixel: Pixel };

export function ProjectArt({ kind }) {
  const Scene = SCENES[kind] || Puzzle;
  return (
    <svg className="art" viewBox="0 0 480 320" aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid slice">
      <Scene />
    </svg>
  );
}

/* Real screens and clips win over the illustrative art. Add them to a project's media list in content.js. */
export function ProjectVisual({ p, large = false }) {
  const first = p.media && p.media[0];
  if (!first) {
    return (
      <>
        <ProjectArt kind={p.art} />
        <span className="card__note">Illustrative art</span>
      </>
    );
  }
  if (first.type === 'video') {
    return (
      <video className="media" src={first.src} poster={first.poster} muted loop playsInline autoPlay={!large} controls={large} preload="metadata" aria-label={first.alt} />
    );
  }
  return <img className="media" src={first.src} alt={first.alt} loading="lazy" />;
}

/* One glyph per stage of the production loop. */
const G = {
  cube: <path d="M32 8l22 12v24L32 56 10 44V20zM10 20l22 12 22-12M32 32v24" />,
  rig: <g><circle cx="32" cy="12" r="5" /><path d="M32 17v20M32 24L18 34M32 24l14 10M32 37L22 54M32 37l10 17" /></g>,
  wave: <path d="M4 32c6-20 10-20 14 0s10 20 14 0 10-20 14 0 6 14 14 4" />,
  sound: <path d="M10 28v8M20 18v28M30 10v44M40 20v24M50 26v12" />,
  grid: <g><rect x="8" y="8" width="14" height="14" /><rect x="25" y="8" width="14" height="14" /><rect x="42" y="8" width="14" height="14" /><rect x="8" y="25" width="14" height="14" /><rect x="25" y="25" width="14" height="14" /><rect x="42" y="42" width="14" height="14" /></g>,
  check: <g><circle cx="32" cy="32" r="22" /><path d="M21 33l8 8 15-17" /></g>,
  frame: <g><rect x="8" y="14" width="48" height="36" rx="4" /><path d="M27 24l14 8-14 8z" /></g>,
  chart: <path d="M8 54V10M8 54h48M16 44l12-12 10 8 16-22" />,
  pulse: <path d="M4 34h16l6-20 10 36 8-24 4 8h12" />,
  moon: <path d="M42 10a22 22 0 1 0 12 30A18 18 0 0 1 42 10z" />,
};

export function Glyph({ name }) {
  return (
    <svg className="glyph" viewBox="0 0 64 64" fill="none" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {G[name]}
    </svg>
  );
}
