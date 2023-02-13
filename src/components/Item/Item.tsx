import Image from "next/image"
import styles from './Item.module.css'

interface ItemProps {
    image: { alt: string, src: string },
    name: string,
    brand: string,
    price: string,
}

const Item = ({ image, name, brand, price }: ItemProps) => {
    return (
        <div className={styles.item}>
            <Image className={styles.image} alt={image.alt} src={image.src} width={30} height={100} />
            <span className={styles.name}>{name}</span>
            <span className={styles.brand}>{brand}</span>
            <span className={styles.price}>{price}</span>
        </div>
    )
}

export default Item