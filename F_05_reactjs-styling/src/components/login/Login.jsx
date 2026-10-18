import styles from "./Login.module.css";
import leftImg from "../../assets/blue-leaves.jpg";
import google from "../../assets/google.svg";
import facebook from "../../assets/facebook.svg";

function Login() {
  return (
    <>
      <section className={styles.container}>
        <img src={leftImg} className={styles.leftImg} />
        <div className={styles.right}>
          <h1>
            Hello, <span className={styles.guys}>Guyss!</span>
          </h1>
          <div className={styles.form}>
            <span className={styles.lsButtons}>
              <span className={styles.login}>Login</span>
              <span className={styles.signup}>SignUp</span>
            </span>
            <input
              className={styles.email}
              type="email"
              placeholder="Enter your email"
            />
            <input
              className={styles.password}
              type="password"
              placeholder="Enter Password"
            />

            <button>Login</button>

            <span className={styles.orText}>Or</span>
            <span className={styles.logos}>
              <img src={google} className={styles.logo} />
              <img src={facebook} className={styles.logo} />
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
