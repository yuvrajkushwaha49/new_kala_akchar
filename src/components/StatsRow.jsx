import { Globe2 } from 'lucide-react'

export default function StatsRow() {
  return (
    <>
      <style>
        {`
          *{
            box-sizing:border-box;
          }

          body{
            background:#000;
          }

          .statsSection{
            width:100%;
            padding:70px 20px;
            background:#000;
          }

          .statsWrapper{
            max-width:1450px;
            margin:auto;
            padding:24px;
            border-radius:34px;
            position:relative;
            overflow:hidden;
            background:
  radial-gradient(
    circle at bottom left,
    rgba(201, 255, 61, 0.55),
    transparent 22%
  ),
  radial-gradient(
    circle at bottom right,
    rgba(200, 255, 61, 0.13),
    transparent 24%
  ),
  radial-gradient(
    circle at center,
    rgba(255, 255, 255, 0.08),
    transparent 35%
  ),
  linear-gradient(
    135deg,
    #050505 0%,
    #0f1011 100%
  );
            border:1px solid rgba(255,255,255,0.08);
          }

          .statsWrapper::before{
            content:'';
            position:absolute;
            inset:0;
            border-radius:34px;
            padding:1px;
            background:linear-gradient(
              120deg,
              rgba(255,255,255,0.08),
              rgba(255,255,255,0.02),
              rgba(201,255,61,0.2)
            );

            -webkit-mask:
              linear-gradient(#fff 0 0) content-box,
              linear-gradient(#fff 0 0);

            -webkit-mask-composite:xor;
            mask-composite:exclude;
            pointer-events:none;
          }

          /* TOP TAGS */

          .topTags{
            display:flex;
            justify-content:center;
            align-items:center;
            gap:14px;
            margin-bottom:24px;
            flex-wrap:wrap;
          }

          .tag{
            height:42px;
            padding:0 20px;
            border-radius:999px;
            background:rgba(255,255,255,0.06);
            border:1px solid rgba(255,255,255,0.06);
            display:flex;
            align-items:center;
            gap:10px;
            color:#d6d6d6;
            font-size:14px;
            backdrop-filter:blur(12px);
          }

          .tagDot{
            width:8px;
            height:8px;
            border-radius:50%;
            background:#d6ff3e;
          }

          /* GRID */

          .statsGrid{
            display:grid;
            grid-template-columns:
              1.15fr
              .95fr
              .95fr
              .9fr
              1.15fr;

            gap:18px;
            align-items:self-end;
          }

          .card{
            position:relative;
            overflow:hidden;
            border-radius:26px;
            backdrop-filter:blur(12px);
            border:1px solid rgba(255,255,255,0.08);
          }

          /* IMAGE */

          .imageCard img{
            width:100%;
            height:100%;
            object-fit:cover;
            filter:grayscale(1);
          }
          .imageCard{
            height:320px;
          }

          /* WHITE CARD */

          .whiteCard{
            background:#f4f4f4;
            color:#000;
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
            text-align:center;
            padding:30px;
            height:270px;
          }

          .whiteCard h2{
            margin:0 0 12px;
            font-size:64px;
            line-height:1;
            font-weight:700;
          }

          .whiteCard p{
            margin:0;
            color:#666;
            line-height:1.5;
            font-size:18px;
          }

          /* TRUST CARD */

          .trustCard{
            height:250px;
            padding:28px;
            background:
              radial-gradient(circle at center, rgba(255,255,255,0.08), transparent 60%),
              rgba(255,255,255,0.05);
          }

          .trustTitle{
            color:#fff;
            font-size:42px;
            line-height:1.1;
            font-weight:600;
            max-width:220px;
            margin-top:18px;
          }

          .shieldShape{
            position:absolute;
            bottom:-20px;
            right:-10px;
            width:180px;
            height:220px;
            background:
              linear-gradient(
                180deg,
                rgba(255,255,255,0.18),
                rgba(255,255,255,0.04)
              );

            clip-path: polygon(
              50% 0%,
              90% 18%,
              90% 60%,
              50% 100%,
              10% 60%,
              10% 18%
            );

            opacity:.8;
          }

          .shieldLock{
            position:absolute;
            right:48px;
            bottom:58px;
            font-size:52px;
            color:#000;
            z-index:2;
          }

          /* CHART CARD */

          .chartCard{
            height:270px;
            padding:24px;
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            background:
              linear-gradient(
                180deg,
                rgba(255,255,255,0.07),
                rgba(255,255,255,0.03)
              );
          }

          .chartPercent{
            color:#fff;
            font-size:52px;
            font-weight:700;
            line-height:1;
          }

          .chartText{
            margin-top:10px;
            color:#9e9e9e;
            font-size:14px;
            line-height:1.6;
            max-width:180px;
          }

          .bars{
            height:160px;
            display:flex;
            align-items:flex-end;
            gap:12px;
          }

          .bar{
            flex:1;
            border-radius:14px 14px 0 0;
            background:rgba(255,255,255,0.08);
          }

          .bar:nth-child(1){
            height:42%;
          }

          .bar:nth-child(2){
            height:72%;
          }

          .bar:nth-child(3){
            height:56%;
          }

          .bar:nth-child(4){
            height:94%;
            background:#d6ff3e;
            box-shadow:0 0 22px rgba(214,255,62,.55);
          }

          /* WORLD CARD */

          .worldCard{
            height:320px;
            background:#f5f5f5;
            color:#000;
            padding:26px;
            display:flex;
            flex-direction:column;
            justify-content:space-between;
          }

          .worldCard h3{
            margin:0;
            font-size:58px;
            line-height:1;
            font-weight:700;
          }

          .worldCard p{
            margin:10px 0 18px;
            color:#666;
          }

          .countryWrap{
            display:flex;
            gap:10px;
            flex-wrap:wrap;
          }

          .countryWrap span{
            padding:10px 16px;
            border-radius:999px;
            background:#111;
            color:#d6ff3e;
            font-size:14px;
            font-weight:500;
          }

          .globe{
            width:100%;
            height:190px;
            border-radius:999px 999px 0 0;
            background:
              radial-gradient(circle at top, rgba(255,255,255,.1), transparent 45%),
              linear-gradient(180deg,#1c1c1c,#000);
            position:relative;
            overflow:hidden;
            margin-top:16px;
          }

          .globe::before{
            content:'';
            position:absolute;
            inset:0;
            background:
              repeating-linear-gradient(
                to bottom,
                transparent 0,
                transparent 15px,
                rgba(255,255,255,.04) 16px
              );
          }

          @media(max-width:1200px){

            .statsGrid{
              grid-template-columns:repeat(2,1fr);
            }

          }

          @media(max-width:768px){

            .statsGrid{
              grid-template-columns:1fr;
            }

          }
        `}
      </style>

      <section className="statsSection">

        <div className="statsWrapper">

          {/* TOP TAGS */}

          <div className="topTags">

            <div className="tag">
              <Globe2 size={16} />
              Marketing Team
            </div>

            <div className="tag">
              <span className="tagDot"></span>
              Trusted & Transparent Growth Marketing Campaigns
            </div>

          </div>

          {/* GRID */}

          <div className="statsGrid">

            {/* IMAGE */}

            <div className="card imageCard">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop"
                alt=""
              />
            </div>

            {/* 100+ */}

            <div className="card whiteCard">
              <h2>100+</h2>

              <p>
                Our Esteemed <br />
                Clients and Partners
              </p>
            </div>

            {/* TRUST */}

            <div className="card trustCard">

              <div className="trustTitle">
                Trusted & Transparent Growth
              </div>

              <div className="shieldShape"></div>

              <div className="shieldLock">
                🔒
              </div>

            </div>

            {/* CHART */}

            <div className="card chartCard">

              <div>

                <div className="chartPercent">
                  98.5%
                </div>

                <div className="chartText">
                  Marketing campaigns have achieved 98% success
                </div>

              </div>

              <div className="bars">

                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>

              </div>

            </div>

            {/* WORLD */}

            <div className="card worldCard">

              <div>

                <h3>20+</h3>

                <p>
                  Global Enterprise drives innovation
                </p>

                <div className="countryWrap">
                  <span>Mexico</span>
                  <span>Australia</span>
                </div>

              </div>

              <div className="globe"></div>

            </div>

          </div>

        </div>

      </section>
    </>
  )
}