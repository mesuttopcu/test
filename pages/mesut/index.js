import styles from '../../styles/mesuts.module.css'
export const getStaticProps = async () => {
    
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data =await res.json ();

    return {
        props: {mesuts: data}
    }
}

const Mesut = ({mesuts}) => {
    return ( 
        <div>
            <h1>All Mesuts</h1>
            {mesuts.map(mesut => (
                <div key={mesut.id}>
                <a className={styles.single}>
                    <h3>{ mesut.name }</h3>
                </a>
                </div>
            ))}
        </div>
     );
}
 
export default Mesut;