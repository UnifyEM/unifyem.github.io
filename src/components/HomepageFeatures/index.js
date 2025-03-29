import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Secure',
    Svg: require('@site/static/img/checkmark.svg').default,
    description: (
      <>
        UnifyEM was designed from the ground up with security in mind (as well as your next SOC 2 audit).
      </>
    ),
  },
  {
    title: 'Open',
    Svg: require('@site/static/img/open.svg').default,
    description: (
      <>
        UnifyEM is fully open source with an API-first design for seamless integration and customization.
      </>
    ),
  },
  {
    title: 'Powered by Go',
    Svg: require('@site/static/img/go.svg').default,
    description: (
      <>
        UnifyEM is written in Go to provide fast execution and streamline cross-platform compilation. 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
