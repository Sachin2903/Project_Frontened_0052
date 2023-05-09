import styles from "./about.module.css"
import { Fragment } from "react"
export function About(){
    return(
<Fragment>
    <div id="ABOUT" className={styles.aboutcomp}>
        <p className={styles.start}>How it works</p>
        <div className={styles.why}>
           <div className={styles.schedule}>
             <h2>Schedule a pickup</h2>
           </div>
           <div className={styles.pick}>
           <h2>Pickup at your address</h2>
           </div>
           <div className={styles.payment}>
           <h2>Receive payment</h2>
           </div>

        </div>

    </div>

    
</Fragment>

    )
}