import React from 'react'

import Layout from '../layouts/layout'
import SEO from '../components/seo'

import '../styles/main.scss'

export default function Speaking({ data }) {
  return (
    <Layout>
      <SEO
        title="Speaking events"
        keywords={['chris gibbons', 'public speaking', 'accessibility']}
      />

      <section className="c-content">
        <div className="c-content__title">
          <h1>Events where Chris is/has spoken</h1>
        </div>
        <div className="c-content__body">
          <h2>Upcoming talks</h2>
          <ul>
            <li>No upcoming talks</li>
            <li>
              But if you would like me to speak at your meetup or event please
              get in touch.
            </li>
          </ul>

          <h2>Previous talks</h2>
          <ul>
            <li>
              UX Scotland: "And in the beginning there was HTML"
              <br />- 13th June 2019 - Edinburgh - Sadly I had to cancel due to
              knee surgery.
            </li>
            <li>
              <a
                href="https://uxscotland.net/2018/sessions/index.php?session=93"
                rel="noopener"
              >
                UX Scotland: "How we became accidental accessibility champions,
                and how you could too!"
                <br />- 14th June 2018 - Edinburgh
              </a>
            </li>
            <li>
              <a
                href="https://www.wearesigma.com/campdigital/2018/chris-gibbons/"
                rel="noopener"
              >
                Camp Digital: "Accidentally becoming accessibility champions"
                <br />- 2nd May 2018 - Manchester
              </a>
            </li>
            <li>
              <a
                href="https://www.meetup.com/frontenders-valtech/events/247610703/"
                rel="noopener"
              >
                Front Enders: "Our adventures with pattern libraries"
                <br />- Thursday 15th March - London:
              </a>
            </li>
          </ul>

          <a href="mailto:chris@gbbns.co" rel="noopener">
            Please send me an email if you’d like me to speak at your event.
          </a>
        </div>
      </section>
    </Layout>
  )
}
