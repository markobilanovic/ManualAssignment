import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_top}>
        <a href={'/'}>
          <img alt={'Logo'} src={'/icons/logo.svg'} className={styles.logo} />
        </a>
        <div className={styles.menu}>
          <div className={styles.menu_column}>
            <span className={styles.menu_title}>Product</span>
            <a href={'/'} className={styles.menu_item}>
              Popular
            </a>
            <a href={'/'} className={styles.menu_item}>
              Guided
            </a>
            <a href={'/'} className={styles.menu_item}>
              Products
            </a>
            <a href={'/'} className={styles.menu_item}>
              Trending
            </a>
          </div>
          <div className={styles.menu_column}>
            <span className={styles.menu_title}>Company</span>
            <a href={'/'} className={styles.menu_item}>
              Press
            </a>
            <a href={'/'} className={styles.menu_item}>
              Mission
            </a>
            <a href={'/'} className={styles.menu_item}>
              Strategy
            </a>
            <a href={'/'} className={styles.menu_item}>
              About
            </a>
          </div>
          <div className={styles.menu_column}>
            <span className={styles.menu_title}>Info</span>
            <a href={'/'} className={styles.menu_item}>
              Support
            </a>
            <a href={'/'} className={styles.menu_item}>
              Customer Service
            </a>
            <a href={'/'} className={styles.menu_item}>
              Get started
            </a>
          </div>
          <div className={styles.menu_column}>
            <span className={styles.menu_title}>Follow us</span>
            <div className={styles.socials}>
              <a href={'/'} style={{ lineHeight: '16px' }}>
                <img src={'/icons/social/fb.svg'} alt={'Facebook'} width={16} height={16} />
              </a>
              <a href={'/'} style={{ lineHeight: '16px' }}>
                <img src={'/icons/social/google.svg'} alt={'Google'} width={16} height={16} />
              </a>
              <a href={'/'} style={{ lineHeight: '16px' }}>
                <img src={'/icons/social/twitter.svg'} alt={'Twitter'} width={16} height={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer_bottom}>© 2021 Manual. All rights reserverd</div>
    </footer>
  )
}
