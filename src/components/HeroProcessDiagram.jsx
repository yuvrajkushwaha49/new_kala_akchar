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
        preserveAspectRatio="xMidYMid meet"
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
          min-height: clamp(200px, 32vw, 280px);
          background:transparent;
          overflow-x: auto;
          overflow-y: visible;
          -webkit-overflow-scrolling: touch;
          display:flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          padding-left: max(0px, env(safe-area-inset-left));
          padding-right: max(0px, env(safe-area-inset-right));
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
          max-width: 100%;
          display:flex;
          justify-content:space-between;
          align-items: flex-start;
          gap: 0.75rem;
          padding:0 clamp(4px, 2vw, 12px);
          margin-bottom: clamp(1.25rem, 4vw, 2.75rem);
        }

        .businessFlowTopBox{
          position:relative;
          background:#111827;
          color:#fff;
          padding: clamp(8px, 2vw, 10px) clamp(10px, 3vw, 18px);
          border-radius:12px;
          font-size: clamp(11px, 2.4vw, 13px);
          font-weight:500;
          max-width: min(46%, 200px);
          text-align: center;
          line-height: 1.25;
        }

        /* Main Layout */

        .businessFlowContent{
          width:100%;
          max-width:1000px;
          min-width: 0;
          display:flex;
          align-items:center;
          justify-content:space-around;
          gap: clamp(1rem, 4vw, 3.5rem);
          position:relative;
          margin-bottom: clamp(1rem, 4vw, 2.5rem);
        }

        .businessFlowConnSvgFull {
          position: absolute;
          left: 0;
          right: 0;
          top: 6%;
          bottom: 12%;
          width: 100%;
          height: auto;
          min-height: 120px;
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
          padding: clamp(8px, 2vw, 10px) clamp(16px, 4vw, 26px);
          border-radius:999px;
          font-size: clamp(12px, 2.8vw, 14px);
          font-weight:600;
          position:relative;
          z-index:2;
          bottom: clamp(0px, 4vw, 27px);
        }

        .businessFlowDarkCard{
          background:#111827;
          color:#fff;
          padding: clamp(12px, 2.5vw, 16px) clamp(12px, 3vw, 24px);
          border-radius:14px;
          font-size: clamp(12px, 2.6vw, 14px);
          white-space:nowrap;
          position:relative;
          z-index:2;
        }

        /* Center */

        .businessFlowCenter{
          margin-top: clamp(1rem, 3.5vw, 2.25rem);
          position:relative;
          z-index:3;
        }

        .businessFlowCenterBorder{
          position: relative;
          width: clamp(72px, 18vw, 90px);
          height: clamp(72px, 18vw, 90px);
          border-radius:50%;
          background:#000;
          display:flex;
          align-items:center;
          justify-content:center;
        }

        .businessFlowCenterBorder::before{
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 999px;
          padding: 2px;
          background: repeating-conic-gradient(#979797 0deg 5deg, transparent 5deg 12deg);
          -webkit-mask:
            linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);
          mask:
            linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        .businessFlowCenterLogo{
          width: clamp(54px, 14vw, 66px);
          height: clamp(54px, 14vw, 66px);
          border-radius:50%;
          background:#fff;
          display:flex;
          align-items:center;
          justify-content:center;
        }

        .businessFlowCenterLogo img{
          width: clamp(34px, 9vw, 42px);
          object-fit:contain;
        }

        @media (max-width: 1199px) {
          .businessFlowContent {
            gap: clamp(0.75rem, 3vw, 2rem);
          }
        }

        @media (max-width: 992px) {
          .businessFlowDarkCard--left {
            margin-left: clamp(0px, 6vw, 72px);
          }
          .businessFlowDarkCard--right {
            margin-right: clamp(0px, 6vw, 72px);
            padding: clamp(12px, 2vw, 16px) clamp(16px, 4vw, 36px);
          }
        }

        /* Responsive */

        @media(max-width:768px){

          .businessFlowWrapper{
            min-height: 0;
            padding: 0 12px 12px;
            overflow-x: visible;
          }

          .businessFlowTop {
            margin-bottom: 1.25rem;
          }

          .businessFlowContent{
            flex-direction:column;
            align-items: center;
            gap: clamp(1.25rem, 5vw, 2rem);
            width: 100%;
          }

          .rightSide::before,
          .businessFlowContent::before,
          .businessFlowConnSvgFull{
            display:none;
          }

          .businessFlowSide {
            width: 100%;
            max-width: 22rem;
            align-items: center;
          }

          .businessFlowPill,
          .businessFlowDarkCard {
            align-self: center;
            bottom: 0;
          }

          .businessFlowSide.rightSide .businessFlowPill {
            align-self: center;
          }

          .businessFlowDarkCard{
            white-space:normal;
            text-align:center;
            max-width: 100%;
          }

          .businessFlowDarkCard--left,
          .businessFlowDarkCard--right {
            margin-left: 0;
            margin-right: 0;
          }
        }

        @media (max-width: 480px) {
          .businessFlowTop {
            flex-direction: column;
            align-items: stretch;
            gap: 0.5rem;
          }
          .businessFlowTopBox {
            max-width: 100%;
          }
        }

        @media (min-width: 769px) and (max-height: 720px) {
          .businessFlowWrapper {
            min-height: 200px;
          }
          .businessFlowTop {
            margin-bottom: 1rem;
          }
          .businessFlowContent {
            margin-bottom: 1rem;
          }
          .businessFlowPill {
            bottom: 12px;
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
  margin-left: clamp(0px, 12vw, 100px);
}

.businessFlowDarkCard--right {
  text-align: right;
  margin-right: clamp(0px, 12vw, 100px);
  padding: 16px 47px;
}
      `}</style>
    </section>
  );
}
