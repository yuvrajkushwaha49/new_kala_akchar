import logoImg from "../assets/second_logo.png";

export default function BusinessProcessFlow() {
  return (
    <section className="businessFlowWrapper">
      {/*
        DevTools: Inspect section.businessFlowWrapper → Styles → edit --flow-d, --flow-stroke, etc. (live).
        Or select svg.businessFlowConnSvgFull → Attributes → viewBox (live).
        HTML `d` on path is fallback when CSS `d` is not supported.
      */}
      <svg
        className="businessFlowConnSvgFull"
        viewBox="0 8 1000 118"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          className="businessFlowConnPath"
          d="M 0 20 H 120 Q 160 20 160 46 V 84 Q 160 108 200 108 H 800 Q 840 108 840 84 V 46 Q 840 20 880 20 H 1000"
        />
      </svg>

      {/* Top Labels */}
      <div className="businessFlowTop">
        <div className="businessFlowTopBox left">Business Goals</div>

        <div className="businessFlowTopBox right">Client Success</div>
      </div>

      {/* Main Content */}
      <div className="businessFlowContent">
        {/* Left */}
        <div className="businessFlowSide leftSide">
          <div className="businessFlowPill">Launch</div>

          <div className="businessFlowDarkCard businessFlowDarkCard--left">
            Website &amp; Brand Presence
          </div>
        </div>

        {/* Center */}
        <div className="businessFlowCenter">
          <div className="businessFlowCenterBorder">
            <div className="businessFlowCenterLogo">
              <img src={logoImg} alt="logo" />
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="businessFlowSide rightSide">
          <div className="businessFlowPill businessFlowPill--right">Deliver</div>

          <div className="businessFlowDarkCard businessFlowDarkCard--right">
            Outreach &amp; Growth
          </div>
        </div>
      </div>

      <style>{`
      
      .businessFlowSide.rightSide .businessFlowPill {
            align-self: end;
      }

        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        .businessFlowWrapper{
          position:relative;
          width:100%;
          min-height:260px;
          background:transparent;
          overflow:hidden;
          display:flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          /* Live-tweak in DevTools on section.businessFlowWrapper */
          --flow-d: path("M 0 20 H 120 Q 160 20 160 46 V 84 Q 160 108 200 108 H 800 Q 840 108 840 84 V 46 Q 840 20 880 20 H 1000");
          --flow-stroke: rgba(255, 255, 255, 0.26);
          --flow-stroke-w: 1.75px;
          --flow-dash: 3 6;
        }

        /* Top Labels */

        .businessFlowTop{
          position:relative;
          z-index:2;
          top:0;
          left:0;
          width:100%;
          display:flex;
          justify-content:space-between;
          padding:0 0;
          margin-bottom: 88px;
        }

        .businessFlowTopBox{
          position:relative;
          background:#111827;
          color:#fff;
          padding:10px 18px;
          border-radius:12px;
          font-size:13px;
          font-weight:500;
        }

        /* Main Layout */

        .businessFlowContent{
          width:100%;
          max-width:1000px;
          display:flex;
          align-items:center;
          justify-content:center;
          gap:56px;
          position:relative;
        }

        .businessFlowConnSvgFull {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 80%;
          z-index: 1;
          pointer-events: none;
          overflow: visible;
        }

        .businessFlowConnPath {
          fill: none;
          d: var(--flow-d);
          stroke: var(--flow-stroke);
          stroke-width: var(--flow-stroke-w);
          stroke-dasharray: var(--flow-dash);
          stroke-linecap: round;
          stroke-linejoin: round;
          vector-effect: non-scaling-stroke;
        }

        .businessFlowSide{
          position:relative;
          display:flex;
          flex-direction:column;
          align-items:center;
          gap:14px;
          z-index:2;
        }

        .businessFlowPill{
          background:#fff;
          color:#000;
          padding:10px 26px;
          border-radius:999px;
          font-size:14px;
          font-weight:600;
          position:relative;
          z-index:2;
        }

        .businessFlowDarkCard{
          background:#111827;
          color:#fff;
          padding:16px 24px;
          border-radius:14px;
          font-size:14px;
          white-space:nowrap;
          position:relative;
          z-index:2;
        }

        /* Center */

        .businessFlowCenter{
          margin-top: 36px;
          position:relative;
          z-index:3;
        }

        .businessFlowCenterBorder{
          width:90px;
          height:90px;
          border-radius:50%;
          border:2px dotted rgba(255,255,255,0.35);
          display:flex;
          align-items:center;
          justify-content:center;
        }

        .businessFlowCenterLogo{
          width:66px;
          height:66px;
          border-radius:50%;
          background:#fff;
          display:flex;
          align-items:center;
          justify-content:center;
        }

        .businessFlowCenterLogo img{
          width:42px;
          object-fit:contain;
        }

        /* Responsive */

        @media(max-width:768px){

          .businessFlowWrapper{
            padding:120px 20px 60px;
          }

          .businessFlowContent{
            flex-direction:column;
            gap:40px;
          }

          .rightSide::before,
          .businessFlowContent::before,
          .businessFlowConnSvgFull{
            display:none;
          }

          .businessFlowDarkCard{
            white-space:normal;
            text-align:center;
          }

        }
          .businessFlowSide {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 14px;
  z-index: 2;
  width: fit-content;
}

/* Upper pill left */
.businessFlowPill {
  align-self: flex-start;
}

/* Bottom card right */
.businessFlowDarkCard {
  align-self: flex-end;
}

.businessFlowDarkCard--left {
  text-align: left;
  margin-left: 100px;
}

.businessFlowDarkCard--right {
  text-align: right;
  margin-right: 100px;
  padding: 16px 47px;
}
      `}</style>
    </section>
  );
}
