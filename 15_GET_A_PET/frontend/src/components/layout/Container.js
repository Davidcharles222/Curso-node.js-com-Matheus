import styles from "./Container.module.css"

function Container({children}){// children permite que apareca as informações dentro do container
    return (
       <main className={styles.container}>
        {children}
       </main>
    )
}

export default Container