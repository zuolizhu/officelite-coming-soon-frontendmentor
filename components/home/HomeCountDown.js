import React from 'react'
import Link from 'next/link'
import StaticCountDown from '../StaticCountDown'

export default function HomeCountDown({ isStatic }) {

  return (
    <section className="home-countdown">
      <div className="container container--countdown">
        <div className="countdown__info">
          <p className="t-coming"><span className="t-white">Coming</span> <span className="t-blue">4 Nov 2020</span></p>
          <StaticCountDown isDark={true} />
        </div>
        <Link href="/signup">
          <a className="btn btn--blue">Get Started</a>
        </Link>
      </div>
    </section>
  )
}
