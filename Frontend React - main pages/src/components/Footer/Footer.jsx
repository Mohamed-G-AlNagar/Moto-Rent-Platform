// Footer.jsx

import { Grid, Typography } from "@mui/material";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Grid container spacing={2} className={styles.upper}>
        <Grid item xs={12} sm={5} className={styles.text}>
        <Typography
           
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } ,color:"#3563E9",
            fontSize:"32px",
            fontWeight:700,
            cursor : "pointer",
            font:"Plus Jakarta Sans",
            mr:10,
            ml:2
        }}>MOTORENT</Typography>
          <p>
            Our Vision is to provide convenience<br></br> and help increase your sales
            business
          </p>
        </Grid>
        <Grid item xs={6} sm={2}>
          <ul className={styles.about}>
            <h3>About</h3>
            <li>How it works</li>
            <li>Featured</li>
            <li>Partnership</li>
            <li>Business Relation</li>
          </ul>
        </Grid>
        <Grid item xs={6} sm={2}>
          <ul className={styles.community}>
            <h3>Community</h3>
            <li>Events</li>
            <li>Blog</li>
            <li>Podcast</li>
            <li>Invite a friend</li>
          </ul>
        </Grid>
        <Grid item xs={6} sm={2}>
          <ul className={styles.socials}>
            <h3>Socials</h3>
            <li>Discord</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Facebook</li>
          </ul>
        </Grid>
      </Grid>
      <Grid container className={styles.lower} spacing={2}>
        <Grid item xs={12} sm={6}>
          &copy;2024 MotoRent. All Rights Reserved to <strong>Team 4 💖</strong>
        </Grid>
        <Grid item xs={6} sm={2} className={styles.policy}>
          <h4>Privacy&Policy</h4>
        </Grid>
        <Grid item xs={6} sm={2}>
          <h4>Terms&Conditions</h4>
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;
