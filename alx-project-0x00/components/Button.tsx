interface ButtonProps {
  title: string;
  styles?: string; // optional
}

const Button: React.FC<ButtonProps> = ({title, styles}) =>{
    return(
        <>
        <button title={title} className={styles}> {title} </button>
        </>
    )
}

export default Button;