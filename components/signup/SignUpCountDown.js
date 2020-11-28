import React from 'react'
import StaticCountDown from '../StaticCountDown'

export default function SignUpCountDown() {
  return (
    <section className="signup-countdown">
      <div className="container container--signup-countdown">
        <div className="countdown__info">
          <p className="t-coming"><span className="t-dark-gray">Coming</span> <span className="t-blue">4 Nov 2020</span></p>
          <StaticCountDown isDark={false} />
        </div>
      </div>
    </section>
  )
}
