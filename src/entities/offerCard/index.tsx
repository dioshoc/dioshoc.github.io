import Button from '@shared/ui/Button';
import styles from './styles.module.scss';
import { IOffer } from '@shared/types.ts';

interface Props extends IOffer {
  className?: string;
}

const OfferCard = ({ title, description, link, img, className }: Props) => {
  return (
    <article
      className={`${styles['offer-card']} ${className}`}
      style={{
        background: `
          linear-gradient(180deg, #00000000 0%, #0F1420C9 100%),
          url(${img}) center center / cover no-repeat
        `,
      }}
    >
      <h3 className={styles['offer-card__title']}>{title}</h3>
      <p className={styles['offer-card__description']}>{description}</p>
      <Button
        href={link}
        type="outlined"
        className={styles['offer-card__link']}
      >
        Learn more
      </Button>
    </article>
  );
};

export default OfferCard;
