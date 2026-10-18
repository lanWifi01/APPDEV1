import styles from "./Signup.module.css";
import logo from "../../assets/logo.svg";

export default function Signup() {
    return (
        <div className={styles.login}>
            {/* ---------- Left panel ---------- */}
            <section className={styles.left}>
                <h1 className={styles.tagline}>
                    Need webdesign
                    <br />
                    for your business?
                    <br />
                    <strong>Design Spacee</strong>
                    <br />
                    will help you.
                </h1>

                <img className={styles.logo} src={logo} alt="Design Spacee logo" />

                <p className={styles.link}>figma.com/@designspacee</p>
            </section>

            {/* ---------- Right panel ---------- */}
            <section className={styles.right}>
                <div className={styles.form}>
                    <h2>Create Account</h2>
                    <section className={styles.signupChoices}>
                        <section className={styles.signupButtons}><button>Sign up with Google</button><button>Sign up with Facebook</button></section>
                        <h2 className={styles.orText}>-OR-</h2>
                    </section>

                    <input type="text" placeholder="Full Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />

                    <button>Login</button>

                    <p className={styles.signup}>
                        Don't have an account? <a href="#">Signup Here</a>
                    </p>
                </div>
            </section>
        </div>
    );
}