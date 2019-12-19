import * as React from 'react'
import App from '../components/App'

export default () => (
  <App>
    <div className="aboutme-desc">
      <div className="paragraph flatten-list">
        <h2 className="sub-title">
          Languages:
        </h2>
        <ul>
          <li>Cantonese</li>
          <li>English</li>
          <li>Mandarin</li>
          <li>JavaScript</li>
          <li>Python</li>
          <li>PHP</li>
          <li>C</li>
        </ul>
      </div>

      <div className="paragraph flatten-list">
        <h2 className="sub-title">
          Hobbies:
        </h2>
        <ul>
          <li>Electronics</li>
          <li>Makings</li>
        </ul>
      </div>

      <div className="paragraph force-a-list">
        <h2 className="sub-title">
          Specialization:
        </h2>
        <ul>
          <li>Electronics</li>
          <li>Web scraping</li>
          <li>Backend systems</li>
          <li>React App Develop</li>
          <li>Obfuscation</li>
        </ul>
      </div>

      <div className="force-a-list paragraph">
        <h2 className="sub-title">
          Other skills
        </h2>
        <ul>
          <li>Linux servers management</li>
          <li>Web frontend (react/nuxt.js/materialize.css)</li>
          <li>Serverless (Cloudflare Worker/Firebase Cloud Functions)</li>
          <li>Realtime DB (Firebase)</li>
          <li>SQL (Postgres, MySQL/MariaDB)</li>
          <li>Desktop applications (wxpython/tkinter/electron)</li>
          <li>Docker with docker-compose</li>
          <li>PaaS (Heroku)</li>
          <li>nginx (Load balancing + Failover)</li>
          <li>OCR/captcha study</li>
        </ul>
      </div>

      <div className="work-experience paragraph">
        <h2 className="sub-title">
          Working Experience
        </h2>
        <ul>
          <li>Linux servers management</li>
        </ul>
      </div>
    </div>
  </App>
)
