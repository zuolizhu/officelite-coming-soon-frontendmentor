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
              <p className="t-counter-number static-countdown__card__number">47</p>
              <p className="t-counter-unit">days</p>
            </div>
            <div className="static-countdown__card">
              <p className="t-counter-number static-countdown__card__number">07</p>
              <p className="t-counter-unit">hours</p>
            </div>
            <div className="static-countdown__card">
              <p className="t-counter-number static-countdown__card__number">56</p>
              <p className="t-counter-unit">min</p>
            </div>
            <div className="static-countdown__card">
              <p className="t-counter-number static-countdown__card__number">14</p>
              <p className="t-counter-unit">sec</p>
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
