import { ActiveLink } from '../ActiveLink'
import { SignInButton } from '../SigninButton'
import styles from './styles.module.scss'
import Image from "next/image";

export function Header(){

    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Image width="110" height="31" src="/images/logo.svg" alt="" />
                <nav>
                    <ActiveLink activeClassName={styles.active} href="/">
                        <a>Home</a>
                    </ActiveLink>
                    <ActiveLink activeClassName={styles.active} href="/posts">
                        <a>Posts</a>
                    </ActiveLink>
                </nav>
                <SignInButton />
            </div>
        </header>
    )
}