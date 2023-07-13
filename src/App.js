import styles from './App.module.scss';
import { ReactComponent as Lookalogo } from './images/lookalogo.svg';

export default function App() {
  return (
    <>
      <header>
        <nav className={styles.navigationBar}>
          <Lookalogo />

          <ul>
            <li>
              <a href="/#">Logo Maker</a>
            </li>
            <li>
              <a href="/#">Brand Kit</a>
            </li>
            <li>
              <a href="/#">How It Works</a>
            </li>
            <li>
              <a href="/#">Reviews</a>
            </li>
            <li>
              <a href="/#">Logo Ideas</a>
            </li>
            <li>
              <a href="/#">Blog</a>
            </li>
          </ul>
          <div className={styles.headerButtonsContainer}>
            <a href="/#">Log in</a>
            <a href="/#" className={styles.signUpButton}>
              Sign up
            </a>
          </div>
        </nav>

        <h1 className={styles.headerTitle}>Make a logo with Looka</h1>
        <p className={styles.paragraphText}>
          Looka Logo Maker combines your logo design preferences with Artificial
          Intelligence to help you create a custom logo you'll love. All it
          takes is a few clicks and five minutes.
        </p>
        <form className={styles.form}>
          <input
            className={styles.textInputField}
            id="company_name"
            name="company_name"
            placeholder="Enter your company name"
          />
          <button className={styles.textInputButton}>Let's make a logo!</button>
        </form>
      </header>

      <main>
        {/* THREE SECTIONS */}

        <section className={styles.firstSection}>
          <div>
            <img
              src="https://cdn.logojoy.com/wp-content/uploads/20201123121721/Surge-Select-Still.png"
              alt="logos"
              height={504}
              width={640}
            />
          </div>
          <div className={styles.firstTextGrid}>
            <h2 className={styles.h2TextGridFirst}>
              <span>01. </span>Our logo maker is easy
            </h2>
            <p>
              Start by entering your company name and industry, then select the
              perfect logo styles, colors, and symbols that you like the best.
              Looka Logo Maker will use these as inspiration and start to
              generate custom logo designs.
            </p>
          </div>
        </section>
        <section className={styles.secondSection}>
          <div className={styles.secondTextGrid}>
            <h2 className={styles.h2TextGridSecond}>
              <span>02. </span> Our logo maker is fun
            </h2>
            <p className={styles.secondSectionParagraph}>
              Finalize your colors, fonts, and layouts in our easy-to-use logo
              editor to make sure you get exactly what you want. Undo any edits
              you make and then click Save when you've created your perfect logo
              design.
            </p>
          </div>
          <div>
            <img
              src="https://cdn.logojoy.com/wp-content/uploads/20201123121758/Surge-Color-Still.png"
              alt="logos"
              height={482}
              width={640}
            />
          </div>
        </section>
        <section className={styles.thirdSection}>
          <div>
            <img
              src="https://cdn.logojoy.com/wp-content/uploads/20201123121842/Surge-Folder-Still.png"
              alt="logos"
              height={458}
              width={640}
            />
          </div>
          <div className={styles.thirdTextGrid}>
            <h2 className={styles.h2TextGridThird}>
              <span>03. </span>Our logo maker delivers
            </h2>
            <p>
              Looka's online logo maker delivers the goods, including vector
              logo files and color variations. Your Brand Kit includes
              everything that a logo designer would deliver, and more.
            </p>
          </div>
        </section>

        {/* ICON GRID */}

        <section className={styles.iconGridSection}>
          <h2 className={styles.iconGridTitle}>
            A logo creator that gives you everything a logo designer would
          </h2>
          <div className={styles.iconGridLayout}>
            <article>
              <img
                width="120"
                height="120"
                src="https://cdn.logojoy.com/wp-content/uploads/2018/12/14141836/ic_image.svg"
                alt="logo"
              />
              <h2>1. High-res logos</h2>
              <p>
                Crisp, hi-res PNG and JPG logo files for use online or offline.
              </p>
            </article>
            <article>
              <img
                width="120"
                height="120"
                src="https://cdn.logojoy.com/wp-content/uploads/2018/12/14141838/ic_pen_tool.svg"
                alt="logo"
              />
              <h2>2. Vector files</h2>
              <p>
                SVG and EPS logo files that let you scale your logo to any size.
                Perfect for printing!
              </p>
            </article>
            <article>
              <img
                width="120"
                height="120"
                src="https://cdn.logojoy.com/wp-content/uploads/2018/12/14162409/ic_shirt.svg"
                alt="logo"
              />
              <h2>3. Color variations</h2>
              <p>
                Get black and white, colored, and transparent background
                variations of your logo.
              </p>
            </article>
            <article>
              <img
                width="120"
                height="120"
                src="https://cdn.logojoy.com/wp-content/uploads/2018/12/14162408/ic_bc.svg"
                alt="logo"
              />
              <h2>4. Business card designs</h2>
              <p>
                Choose from 20 professional and easy-to-customize{' '}
                <a href="/#">business card designs.</a>
              </p>
            </article>
            <article>
              <img
                width="120"
                height="120"
                src="https://cdn.logojoy.com/wp-content/uploads/2018/12/14162410/ic_social.svg"
                alt="logo"
              />
              <h2>5. Social media templates</h2>
              <p>
                Design perfectly-sized profiles and posts for Facebook, Twitter,
                YouTube, and more.
              </p>
            </article>
            <article>
              <img
                width="120"
                height="120"
                src="https://cdn.logojoy.com/wp-content/uploads/2018/12/14141832/ic_file.svg"
                alt="logo"
              />
              <h2>6. Brand info</h2>
              <p>
                A one-page resource with your logo fonts and colors. Consistency
                for the win!
              </p>
            </article>
            <article>
              <img
                width="120"
                height="120"
                src="https://cdn.logojoy.com/wp-content/uploads/2018/12/14141841/ic_resize.svg"
                alt="logo"
              />
              <h2>7. Post-purchase changes</h2>
              <p>
                Make unlimited changes to your logo when you subscribe to
                Looka's Brand Kit.
              </p>
            </article>
            <article>
              <img
                width="120"
                height="120"
                src="https://cdn.logojoy.com/wp-content/uploads/2018/12/14141839/ic_phone.svg"
                alt="logo"
              />
              <h2>8. Lifetime logo support</h2>
              <p>
                Our team is here if you need help opening files, tweaking your
                designs, or getting started.
              </p>
            </article>
            <article>
              <img
                width="120"
                height="120"
                src="https://cdn.logojoy.com/wp-content/uploads/2018/12/14141829/ic_copy.svg"
                alt="logo"
              />
              <h2>9. Royalty-free logos</h2>
              <p>
                Use your downloaded logo files for any commercial or
                non-commercial purpose.
              </p>
            </article>
          </div>
        </section>

        {/* LAST BLUE SECTION */}

        <section className={styles.lastSectionBlue}>
          <div className={styles.lastSectionBlueArea}>
            <div className={styles.blueSectionLeft}>
              <h2 className={styles.h2TextLast}>Let's make a logo!</h2>
              <p className={styles.blueSectionParagraph}>
                In the time it took you to read this, you could have designed a
                professional logo for your business. See for yourself.
              </p>
            </div>
            <div className={styles.blueSectionRight}>
              <form className={styles.secondForm}>
                <input
                  className={styles.textInputField}
                  id="company_name"
                  name="company_name"
                  placeholder="Enter your company name"
                />
                <button className={styles.getStartedButton}>Get started</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}

      <footer>
        <div className={styles.footerGrid}>
          <div>
            <p>Products</p>
            <div>
              <ul>
                <li>
                  <a href="/#">Logo Maker</a>
                </li>
                <li>
                  <a href="/#">Brand Kit</a>
                </li>
                <li>
                  <a href="/#">Social Media Kit</a>
                </li>
                <li>
                  <a href="/#">Business Cards</a>
                </li>
                <li>
                  <a href="/#">How it works</a>
                </li>
                <li>
                  <a href="/#">Reviews</a>
                </li>
                <li>
                  <a href="/#">Business Name Generator</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <p>Inspiration</p>
            <div>
              <ul>
                <li>
                  <a href="/#">Blog</a>
                </li>
                <li>
                  <a href="/#">Logo Ideas</a>
                </li>
                <li>
                  <a href="/#">Logo Colors</a>
                </li>
                <li>
                  <a href="/#">Logo Styles</a>
                </li>
                <li>
                  <a href="/#">Logo Wiki</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <p>Company</p>
            <div>
              <ul>
                <li>
                  <a href="/#">About</a>
                </li>
                <li>
                  <a href="/#">Press</a>
                </li>
                <li>
                  <a href="/#">Careers</a>
                </li>
                <li>
                  <a href="/#">Affiliates</a>
                </li>
                <li>
                  <a href="/#">Vulnerability Disclosure Program</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <p>Support</p>
            <div>
              <ul>
                <li>
                  <a href="/#">Help Center</a>
                </li>
                <li>
                  <a href="/#">Contact</a>
                </li>
                <li>
                  <a href="/#">support@looka.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
