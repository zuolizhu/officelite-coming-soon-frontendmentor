import React from 'react'
import Link from 'next/link'

export default function HomeCountDown({ isStatic }) {

  return (
    <section className="home-countdown">
      <div className="container container--countdown">
        <div className="countdown__info">
          <p className="t-coming"><span className="t-white">Coming</span> <span className="t-blue">4 Nov 2020</span></p>
          <div className="static-countdown">
            <div className="static-countdown__card">
              <span className="t-counter-number">47</span><br/><span className="t-counter-unit">Days</span>
            </div>
            <div className="static-countdown__card">
              <span className="t-counter-number">07</span><br/><span className="t-counter-unit">Hours</span>
            </div>
            <div className="static-countdown__card">
              <span className="t-counter-number">56</span><br/><span className="t-counter-unit">Min</span>
            </div>
            <div className="static-countdown__card">
              <span className="t-counter-number">14</span><br/><span className="t-counter-unit">Sec</span>
            </div>
          </div>
        </div>
        <Link href="/signup">
          <a className="btn btn--blue">Get Started</a>
        </Link>
      </div>
    </section>
  )
}
