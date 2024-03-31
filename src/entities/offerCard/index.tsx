import Button from '@shared/ui/Button';
import { IOffer } from '@shared/types.ts';
import cn from 'classname';
import styles from './styles.module.scss';

interface Props extends IOffer {
  className?: string;
}

const OfferCard = ({
  title,
  description,
  link,
  img,
  className = '',
}: Props) => (
  <article
    className={cn(styles['offer-card'], className)}
    style={{
      background: `
          linear-gradient(270deg, #00000000 0%, #0F1420C9 100%),
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

export default OfferCard;
