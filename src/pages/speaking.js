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
          <h1>Talking</h1>
        </div>
        <div className="c-content__body">
          <p>
            Being an introvert{' '}
            <a
              rel="nofollow noopener"
              href="https://en.wikipedia.org/wiki/Myers%E2%80%93Briggs_Type_Indicator"
            >
              ISTP
            </a>
            , the very idea of public speaking scares the crap out of me, but I
            do it, because weirdly I enjoy it - usually afterwards, when
            I&rsquo;m in the pub.
          </p>
          <p>
            <a href="mailto:chris@gbbns.co" rel="nofollow noopener">
              Please send me an email if you’d like me to speak at your event.
            </a>
          </p>
          <h2>Upcoming talks</h2>
          <ul>
            <li>
              Camp Digital: &ldquo;And in the beginning there was HTML&rdquo;
              <br /> - May 2020, Manchester UK.
            </li>
            <li>
              UX Scotland: &ldquo;And in the beginning there was HTML&rdquo;
              <br />- June 2020, Edinburgh UK (Currently on the reserve list)
            </li>
          </ul>

          <h2>Previous talks</h2>
          <ul>
            <li>UX Crunch, Manchester UK: Data accessibility - January 2020</li>
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
        </div>
      </section>
    </Layout>
  )
}
